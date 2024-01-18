import React, { useState } from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import CustomLabel from '../../../components/InputFields/CustomLabel';
import CustomInput from '../../../components/InputFields/CustomInput';
import FormError from '../../../components/InputFields/FormError';
import CustomPasswordInput from '../../../components/InputFields/CustomPasswordInput';
import { Button, TextButton } from '../../../components/Buttons/Button';
import { CustomToast, utf8_to_b64 } from '../../../util/util';
import { useIonRouter } from '@ionic/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useAppDispatch } from '../../../store/store';
import { authActions, authSlice } from '../../../store/slices/authSlice';


type Props = {
    handleResetPassword: () => void
    handleClose: () => void
}
const Signin = (props: Props) => {

    // <---------- Utility class --------->
    const router = useIonRouter()
    const dispatch = useAppDispatch()
    // <---------- useSelectors --------->

    // <---------- HOOKS ------------>

    // <---------- useStates + variables ---------->
    const [loading, setLoading] = useState(false)
    const initialData = {
        email: '',
        password: '',
    }
    // <---------- Functions ---------->


    const onSubmit = async (values: any) => {
        setLoading(true)
        await signInWithEmailAndPassword(auth, values.email, values.password)
            .then(async (userCredential) => {
                // Signed in 
                const user = userCredential.user;
                sessionStorage.setItem("_u", utf8_to_b64(user?.uid));


                const docRef = doc(db, "users", `${user?.uid}`);

                try {
                    const docSnap = await getDoc(docRef);
                    console.log(docSnap)
                    if (docSnap.exists()) {

                        router.push('/tabs/lessons')
                        dispatch(authActions.setUserDetails({ ...docSnap.data(), id: docSnap.id }))

                        const dataAvatar = docSnap.data()
                        localStorage.setItem("current_avatar", dataAvatar?.avatar)
                        setLoading(false)
                    } else {
                        console.log("check2")
                        setLoading(false)
                        CustomToast('error', "Network Error")
                    }
                } catch (error: any) {
                    if (error.code === "unavailable") {
                        // Firebase error code for network issues
                        setLoading(false)
                        CustomToast('error', "Network Error")
                    } else {
                        setLoading(false)
                        CustomToast('error', error.message)

                    }
                }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                CustomToast('error', errorCode)
                setLoading(false)
            });


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
                                        type="email"
                                        component={CustomInput}
                                        inputMode={"email"}
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
                                    disabled={!(isValid) || loading}
                                    status={loading}

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