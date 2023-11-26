import React, { ChangeEventHandler, FocusEventHandler, useState } from 'react';
import radioChecked from '../../assets/components/CustomInputs/radioButtonChecked.svg'
import radioUnchecked from '../../assets/components/CustomInputs/radioButtonUnChecked.svg'

type CustomRadioButtonProps = {
    id: string;
    field: {
        name: string;

        value: any;
        onChange: ChangeEventHandler<HTMLInputElement>;
        onBlur?: FocusEventHandler<HTMLInputElement>;

    };
    form: {
        errors: Record<string, string>;
        touched: Record<string, boolean>;
    };
    // Add any other props that your component accepts here
};

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({ id, field, form, ...props }) => {
    const { name, value } = field;
    // const { errors, touched } = form;

    return (
        <div className=' cursor-pointer'>

            <label className='flex gap-2 items-center' htmlFor={id} >
                <input
                    {...props}
                    type="radio"
                    className="hidden"
                    id={id}
                    name={name}
                    value={value}

                    onBlur={field?.onBlur}



                />
                <img src={id === value ? radioChecked : radioUnchecked} alt="" className='w-5 h-5' />
                <p className='text-gray/800 text-sm tracking-[-0.21px]'>{id}</p>
            </label>

        </div>
    );
};

export default CustomRadioButton;
