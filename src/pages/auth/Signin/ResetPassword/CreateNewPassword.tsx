import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import checkbox from '../../../../assets/auth/checkbox.svg'
import checkboxTicked from '../../../../assets/auth/checkboxTicked.svg'
import { Button, TextButton } from '../../../../components/Buttons/Button';
import CustomLabel from '../../../../components/InputFields/CustomLabel';
import CustomPasswordInput from '../../../../components/InputFields/CustomPasswordInput';
import FormError from '../../../../components/InputFields/FormError';
import PasswordValidation from '../../../../components/UI/PasswordValidation';
import { CustomToast } from '../../../../util/util';


type Props = {

    handleSuccessfulReset:()=>void
}
const CreateNewPassword = (props: Props) => {

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

        props.handleSuccessfulReset()
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


                                <div className=''>

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


                            </div>


                            <div className=''>
                                <Button
                                    text={'Reset'}
                                    type='submit'
                                    disabled={!(isValid)}
                                    status={false}

                                />
                               


                            </div>
                        </div>

                    </Form>
                )}
            </Formik>

        </div >
    )
}

export default CreateNewPassword

const validation = Yup.object({

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


})