import React from 'react';
import Select, { OptionProps } from 'react-select';
import { useField } from 'formik';
import { customDropDownStyles } from '../../util/util';

// Define the type for your custom option with an image icon
interface CustomOptionType {
    label: string;
    value: string;
    icon: string;
}


// Custom Select component
const CustomSelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props: any) => {


    const [field, meta, helpers] = useField(props.field.name || '');


    // Convert the options to the required format
    const customOptions: CustomOptionType[] = props.options.map((option: any) => ({
        label: option.label,
        value: option.value,
        icon: option.icon,
        ...option
    }));

    // Handle select change and set the value
    const handleChange = (selectedOption: CustomOptionType | null) => {
        if (props.onChange && selectedOption) {
            props.onChange(selectedOption);
        }
        helpers.setValue((selectedOption as CustomOptionType).value);
    };


    const selectedOption =
        (props.value && customOptions.find((option) => option.value === props.value)) ||
        (props.defaultValue &&
            customOptions.find(
                (option) => {

                    const defaultValue = `${props.defaultValue}`
                    const optionValue = `${option.value}`
                    return optionValue.toLocaleLowerCase() === defaultValue.toLocaleLowerCase()
                }
            ));



    // Define a placeholder option if selectedOption is undefined
    const getOptionProps = (option: any, { isFocused, isDisabled }: { isFocused: boolean; isDisabled: boolean }) => {
        return {
          style: {
            backgroundColor: isFocused ? 'blue' : null,
            cursor: isDisabled ? 'not-allowed' : 'default',
          },
        };
      };


      //Ife:fix issue with hover and selected options

    return (
        <Select
            {...props}
            getOptionProps={getOptionProps}
            className='text-sm text-[#13201C]'
            options={customOptions}
            defaultValue={selectedOption}
            value={selectedOption}
            placeholder={props.placeholder ? props.placeholder : ""}
            onChange={handleChange}
            isSearchable
            styles={customDropDownStyles}
            components={{
                Option: ({ innerProps, label, data }: OptionProps<CustomOptionType>) => (
                    <div className='flex gap-4 items-center py-2 px-2.5 text-sm cursor-pointer text-[#13201C]' {...innerProps}>
                        {/* //only when the option field has an icon */}
                        {data.icon && <img src={data.icon} alt={label} className='w-6 h-6' />}
                        {label}
                    </div>
                ),
            }}
        />
    );
};

export default CustomSelect;
