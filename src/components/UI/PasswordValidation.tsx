import React from 'react';
import tickGrey from '../../assets/auth/tickGrey.svg'
import tickGreen from '../../assets/auth/tickGreen.svg'

type PasswordValidationProps = {
    password: string;
};

const PasswordValidation: React.FC<PasswordValidationProps> = ({ password }) => {
    return (
        <div className='flex flex-col gap-1'>
            <ValidationItem
                condition={/[A-Z]/.test(password)}
                text="Must contain an uppercase letter"
            />
            <ValidationItem
                condition={password.length >= 8}
                text="Must be at least 8 characters"
            />
            <ValidationItem
                condition={/[^a-zA-Z0-9\s]/.test(password)}
                text="Must contain special characters like (@$%&)"
            />
        </div>
    );
};

type ValidationItemProps = {
    condition: boolean;
    text: string;
};

const ValidationItem: React.FC<ValidationItemProps> = ({ condition, text }) => {
    return (
        <div className={`flex items-center gap-1 ${condition ? 'text-[#06A453]' : 'text-gray/500'}`}>
            <img src={condition ? tickGreen : tickGrey} alt='' />
            <p className={`text-xs fold:text-[13px] fold:leading-[18px]`}>
                {text}
            </p>
        </div>
    );
};

export default PasswordValidation;
