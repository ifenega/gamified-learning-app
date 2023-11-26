import { IonContent, IonPage, useIonRouter, useIonViewDidEnter, useIonViewWillLeave } from '@ionic/react'
import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import CustomLabel from '../../../components/InputFields/CustomLabel';
import CustomInput from '../../../components/InputFields/CustomInput';
import FormError from '../../../components/InputFields/FormError';
import { Button } from '../../../components/Buttons/Button';
import CustomSelect from '../../../components/InputFields/CustomSelect';
import TabHeader from '../../../components/UI/TabHeader';


const ChildrensProfile = () => {

    // <---- Utility class ------>
    const router = useIonRouter()
    // <---- useSelectors ------>
    // <---- useStates + variables ------>
    const genderOptions = [
        { label: "Male", value: "Male", },
        { label: "Female", value: "Female", },
        { label: "Prefer not to say", value: "Prefer not to say", },
        { label: "Other", value: "Other", },
    ]

    // <------- HOOKS ------>
    useIonViewWillLeave(() => {
        showTabBar();
    });

    // When page enters
    useIonViewDidEnter(() => {
        hideTabBar();
    });


    // <---- Functions ------>

    // Unhide tab bar
    const showTabBar = (): void => {
        const tabBar = document.getElementById('app-tab-bar');
        if (tabBar !== null) {
            tabBar.style.display = 'flex';
        }
    };

    // Hide tab bar
    const hideTabBar = (): void => {
        const tabBar = document.getElementById('app-tab-bar');
        if (tabBar !== null) {
            tabBar.style.display = 'none';
        }
    };


    const onSubmit = (values: any) => {
        // console.log()
    }

    return (
        <IonPage className='ion-padding inner-header'>
            <TabHeader title="Children's profile" defaultHref='/tabs/settings' />
            <IonContent className='mt-[45px]'>
                <div className='pb-4 '>
                    <Formik
                        initialValues={{
                            full_name: "",
                            age: "",
                            gender: "",
                        }}
                        onSubmit={onSubmit}
                        validationSchema={validation}
                    >
                        {({ errors, values, setFieldValue, isValid, dirty }) => (
                            <Form>
                                <div className='h-[calc(100vh-92px)] flex flex-col justify-between gap-4 overflow-scroll px-[1px] hide-scrollbar pt-[45px]'>
                                    <div className='mb-10'>

                                        <div className='mb-3'>
                                            <CustomLabel
                                                name='Full name'
                                                value_name='full_name'
                                            />
                                            <Field
                                                type="text"
                                                name="full_name"
                                                component={CustomInput}
                                                placeholder={"Ajiteru Dolapo"}
                                                onChange={(e: any) => {
                                                    setFieldValue("full_name", e.target.value)
                                                }}

                                            />
                                            <FormError value_name='full_name' />
                                        </div>

                                        <div className='mb-3'>

                                            <CustomLabel
                                                name='Age'
                                                value_name='age'
                                            />


                                            <Field
                                                name="age"
                                                component={CustomInput}
                                                placeholder={"What’s your child’s age?"}
                                                onChange={(e: any) => {
                                                    setFieldValue("age", e.target.value)
                                                }}

                                            />
                                            <FormError value_name='age' />
                                        </div>

                                        <div className='mb-3'>

                                            <CustomLabel
                                                name='Gender'
                                                value_name='gender'
                                            />


                                            <Field
                                                name="gender"
                                                component={CustomSelect}
                                                options={genderOptions}
                                                placeholder={"What’s your child’s gender?"}
                                                onChange={(option: any) => {
                                                    setFieldValue("gender", option.value)
                                                }}

                                            />
                                            <FormError value_name='gender' />
                                        </div>

                                    </div>


                                    <div className=''>
                                        <Button
                                            text={'Save changes'}
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
            </IonContent>
        </IonPage>
    )
}

export default ChildrensProfile

const validation = Yup.object({
    full_name: Yup.string().required("Required"),
    age: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),


})