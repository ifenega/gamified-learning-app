import { TextFieldTypes } from '@ionic/core';
import { IonInput } from '@ionic/react';
import React, { ChangeEventHandler, FocusEventHandler, useState } from 'react';

type CustomInputProps = {
    field: {
        name: string;
        value: any;
        type: TextFieldTypes;
        onChange: ChangeEventHandler<HTMLInputElement>;
        onBlur: FocusEventHandler<HTMLInputElement>;
    };
    form: {
        errors: Record<string, string>;
        touched: Record<string, boolean>;
    };
    // Add any other props that your component accepts here
};

const CustomInput: React.FC<CustomInputProps> = ({ field, form, ...props }) => {
    const { name, value, type } = field;
    const { errors, touched } = form;

    const [show, setShow] = useState(false)

    return (
        <div className='w-full'>
            <input
                {...props}
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                className={`border ${touched[name] && errors[name] ?
                    "border-[#EE615F]" : "border-gray/200"
                    } outline-none focus:border-teal/400 rounded-xl p-3 bg-transparent disabled:bg-gray/100 w-full placeholder:text-gray/400 text-gray/700`}
            />

        </div>
    );
};

export default CustomInput;
