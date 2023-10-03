import React, { ChangeEventHandler, FocusEventHandler, useState } from 'react';
import { FormikHelpers, FormikValues } from 'formik';
import eye from '../../assets/components/CustomInputs/eye.svg'
import eyeOff from '../../assets/components/CustomInputs/eye-off.svg'
import { InputChangeEventDetail, IonInputCustomEvent, TextFieldTypes } from '@ionic/core';
import { IonInput } from '@ionic/react';

type CustomPasswordInputProps = {
    field: {
        name: string;
        value: any;
        onChange: ChangeEventHandler<HTMLInputElement>;
        onBlur: FocusEventHandler<HTMLInputElement>;
    };
    form: {
        errors: Record<string, string>;
        touched: Record<string, boolean>;
    };
    // Add any other props that your component accepts here
};

const CustomPasswordInput: React.FC<CustomPasswordInputProps> = ({ field, form, ...props }) => {
    const { name, value } = field;
    const { errors, touched } = form;

    const [show, setShow] = useState(false)

    return (
        <div className='w-full relative'>
            <input
                {...props}
                type={show ? "text" : "password"}
                id={name}
                name={name}
                value={value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                className={`border ${touched[name] && errors[name] ?
                    "border-[#EE615F]" : "border-gray/200"
                    } outline-none focus:border-teal/400 rounded-xl p-3 bg-transparent disabled:bg-gray/100 w-full placeholder:text-gray/400 text-gray/700 pr-[40px]`}

            />

            <button
            type='button'
                className='absolute top-[15px] right-[16px] z-10'
                onClick={() => setShow(prev => !prev)}
            >
                <img src={show ? eye : eyeOff} alt='toggle-show' />
            </button>
        </div>
    );
};

export default CustomPasswordInput;
