import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import CustomLabel from '../../../components/InputFields/CustomLabel';
import CustomInput from '../../../components/InputFields/CustomInput';
import FormError from '../../../components/InputFields/FormError';
import CustomPasswordInput from '../../../components/InputFields/CustomPasswordInput';
import { Button, TextButton } from '../../../components/Buttons/Button';
import { CustomToast } from '../../../util/util';


type Props = {
    handleResetPassword: () => void
    handleClose: () => void
}
const Signin = (props: Props) => {

    // <---------- Utility class --------->
    // <---------- useSelectors --------->
    // <---------- HOOKS ------------>
    // <---------- useStates + variables ---------->
    const initialData = {
        email: '',
        password: '',
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

                                <div className=''>

                                    <CustomLabel
                                        name='Password'
                                        value_name='password'
                                    />


                                    <Field
                                        name="password"
                                        component={CustomPasswordInput}
                                        placeholder={"Enter your password"}
                                        onChange={(option: any) => {

                                        }}

                                    />
                                    <FormError value_name='password' />
                                </div>

                            </div>


                            <div className='flex flex-col gap-6 items-center'>
                                <Button
                                    text={'Login'}
                                    type='submit'
                                    disabled={!(isValid)}
                                    status={false}

                                />
                                <TextButton
                                    text={'Forgot password?'}
                                    type='button'
                                    disabled={false}
                                    action={() => {
                                        props.handleResetPassword()
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

export default Signin

const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("You need to enter an email"),

    password: Yup.string()
        .min(6, "Password must be minimum of 6 characters")
        .required("Required"),

})