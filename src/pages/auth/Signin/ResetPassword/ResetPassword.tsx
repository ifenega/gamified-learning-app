import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, TextButton } from '../../../../components/Buttons/Button';
import CustomInput from '../../../../components/InputFields/CustomInput';
import CustomLabel from '../../../../components/InputFields/CustomLabel';
import FormError from '../../../../components/InputFields/FormError';
import { CustomToast } from '../../../../util/util';

type Props = {
    handleSignin: () => void;
    handleNewPassword: () => void;

}
const ResetPassword = (props: Props) => {

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
        CustomToast('success', 'An email with reset instructions have been sent to ajiterudolapo@gmail.com')
        setTimeout(() => {
            props.handleNewPassword()
        }, 2000);
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


                            <div className='flex flex-col gap-6 items-center'>
                                <Button
                                    text={'Proceed'}
                                    type='submit'
                                    disabled={!(isValid)}
                                    status={false}

                                />
                                <TextButton
                                    text={'Return to login'}
                                    type='button'
                                    disabled={false}
                                    action={() => {
                                        props.handleSignin()
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

export default ResetPassword

const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("You need to enter an email"),



})