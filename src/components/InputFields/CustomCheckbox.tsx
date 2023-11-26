import React, { ChangeEventHandler, FocusEventHandler, useState } from 'react';

type CustomCheckboxProps = {
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

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ field, form, ...props }) => {
    const { name, value } = field;
    // const { errors, touched } = form;


    return (
        <div className='relative cursor-pointer'>
            <input
                {...props}
                type="checkbox"
                className="sr-only peer"
                checked={value}
                id={name}
                name={name}
                value={value}
                onChange={field.onChange}
                onBlur={field?.onBlur}



            />
            <div className="w-11 h-6 bg-gray/200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#0BA5EC]/20  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white  peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#0BA5EC] "></div>

        </div>
    );
};

export default CustomCheckbox;
