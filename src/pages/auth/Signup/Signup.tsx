import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import CustomLabel from '../../../components/InputFields/CustomLabel';
import CustomInput from '../../../components/InputFields/CustomInput';
import FormError from '../../../components/InputFields/FormError';
import CustomPasswordInput from '../../../components/InputFields/CustomPasswordInput';
import { Button, TextButton } from '../../../components/Buttons/Button';
import { CustomToast } from '../../../util/util';
import PasswordValidation from '../../../components/UI/PasswordValidation';
import checkbox from '../../../assets/auth/checkbox.svg'
import checkboxTicked from '../../../assets/auth/checkboxTicked.svg'


type Props = {
    handleAccountSWarning: () => void

}
const Signup = (props: Props) => {

    // <---------- Utility class --------->
    // <---------- useSelectors --------->
    // <---------- HOOKS ------------>
    // <---------- useStates + variables ---------->
    const initialData = {
        email: '',
        password: '',
        confiirm_password: '',
        terms: false,
    }
    // <---------- Functions ---------->
    const onSubmit = (values: any) => {
        CustomToast('success', 'Account successfully created')
        // props.handleClose()
    }

    return (
        <div>
            <Formik
                initialValues={initialData}
                onSubmit={onSubmit}
                validationSchema={validation}
            >
                {({ errors, values, setFieldValue, isValid, dirty }) => (
                    <Form>
                        <div className=''>
                            <div className='mb-10'>

                                <div className='mb-3'>
                                    <CustomLabel
                                        name='Email'
                                        value_name='email'
                                    />
                                    <Field
                                        name="email"
                                        component={CustomInput}
                                        placeholder={"Email address"}
                                        onChange={(option: any) => {

                                        }}

                                    />
                                    <FormError value_name='email' />
                                </div>

                                <div className='mb-3'>
                                    <div className='mb-2'>

                                        <CustomLabel
                                            name='Password'
                                            value_name='password'
                                        />


                                        <Field
                                            name="password"
                                            component={CustomPasswordInput}
                                            placeholder={"Enter a password"}
                                            onChange={(option: any) => {

                                            }}

                                        />
                                        <FormError value_name='password' />
                                    </div>

                                    <PasswordValidation password={values.password} />
                                </div>


                                <div className='mb-2'>

                                    <CustomLabel
                                        name='Password'
                                        value_name='confirm_password'
                                    />


                                    <Field
                                        name="confirm_password"
                                        component={CustomPasswordInput}
                                        placeholder={"Confirm your password"}
                                        onChange={(option: any) => {

                                        }}

                                    />
                                    <FormError value_name='confirm_password' />
                                </div>

                                <div className="w-full">
                                    <label
                                        className="flex gap-1"
                                        htmlFor="terms"
                                    // onClick={() => setFieldValue("confirm", !values.confirm)}
                                    >
                                        <img src={values.terms ? checkboxTicked : checkbox} />

                                        <p className="text-sm text-gray/700  ">I accept the <span className='text-teal/500' onClick={() => { }}>privacy</span> & <span className='text-teal/500' onClick={() => { }}>terms of service</span></p>



                                        <Field
                                            type={"checkbox"}
                                            className="hidden"
                                            value={values.terms}
                                            id={"terms"}
                                            name={"terms"}
                                            onChange={() => {
                                                setFieldValue("terms", !values.terms)
                                            }}
                                        />
                                    </label>





                                </div>
                            </div>


                            <div className='flex flex-col gap-6 items-center'>
                                <Button
                                    text={'Create account'}
                                    type='submit'
                                    disabled={!(isValid)}
                                    status={false}

                                />
                                <TextButton
                                    text={'Setup an account later?'}
                                    type='button'
                                    disabled={false}
                                    action={() => {
                                        props.handleAccountSWarning()
                                    }}
                                />


                            </div>
                        </div>

                    </Form>
                )}
            </Formik>

        </div >
    )
}

export default Signup

const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("You need to enter an email"),

    password: Yup.string()
        .min(8, "Password must be minimum of 8 characters")
        .required("Required")
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.+-])[A-Za-z\d@$!%*?&.+-]{8,}$/, {
            message:
                "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 numeric character, and 1 special character",
        }),

    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Password do not match') // Check if it matches the 'password' field
        .required('You need to confirm your password'),

    terms: Yup.bool().oneOf(
        [true],
        " You have to agree to the terms and condition to create an account"
    ),

})