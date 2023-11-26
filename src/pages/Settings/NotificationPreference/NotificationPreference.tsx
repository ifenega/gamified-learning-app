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
import CustomCheckbox from '../../../components/InputFields/CustomCheckbox';


const NotificationPreference = () => {

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
        console.log()
    }

    return (
        <IonPage className='ion-padding inner-header'>
            <TabHeader title="Notifications preference" defaultHref='/tabs/settings' />
            <IonContent className='mt-[45px]'>
                <div className='pb-4 '>
                    <Formik
                        initialValues={{
                            new_login: false,
                            weekly_progress: false,

                        }}
                        onSubmit={onSubmit}
                    // validationSchema={validation}
                    >
                        {({ errors, values, setFieldValue, isValid, dirty }) => (
                            <Form>
                                <div className='h-[calc(100vh-92px)] flex flex-col justify-between gap-4 overflow-scroll px-[1px] hide-scrollbar pt-[45px]'>
                                    <div className='mb-10'>
                                        <p className='text-gray/800 text-sm tracking-[-0.21px] mb-1 '>Notifications (for parents)</p>

                                        <div className='rounded-lg border border-gray/100 border-solid py-3.5 px-4 gap-4 flex flex-col '>
                                            <div className='w-full'>
                                                <label
                                                    htmlFor='new_login'
                                                    className='flex gap-4 justify-between '
                                                >
                                                    <div className='text-left'>
                                                        <p className='text-gray/800 text-sm tracking-[-0.21px] mb-0.5 font-medium '>New login</p>
                                                        <p className='text-gray/500 text-xs tracking-[-0.18px]  '>Notify us by email when there’s a new login on the app.</p>
                                                    </div>

                                                    <Field

                                                        name="new_login"
                                                        component={CustomCheckbox}
                                                        value={values.new_login}
                                                        onChange={(e: any) => {
                                                            setFieldValue("new_login", !values.new_login)
                                                        }}

                                                    />

                                                </label>
                                            </div>
                                            <div className='w-full border-t border-solid border-gray/100'></div>
                                            <div className='w-full'>
                                                <label
                                                    htmlFor='weekly_progress'
                                                    className='flex gap-4 justify-between '
                                                >
                                                    <div className='text-left'>
                                                        <p className='text-gray/800 text-sm tracking-[-0.21px] mb-0.5 font-medium '>Weekly progress</p>
                                                        <p className='text-gray/500 text-xs tracking-[-0.18px]  '>Send weekly progress report </p>
                                                    </div>

                                                    <Field

                                                        name="weekly_progress"
                                                        component={CustomCheckbox}
                                                        value={values.weekly_progress}
                                                        onChange={(e: any) => {
                                                            setFieldValue("weekly_progress", !values.weekly_progress)
                                                        }}

                                                    />

                                                </label>
                                            </div>

                                        </div>
                                    </div>




                                    {dirty && <div className=''>
                                        <Button
                                            text={'Save changes'}
                                            type='submit'
                                            disabled={!(isValid)}
                                            status={false}


                                        />



                                    </div>}
                                </div>

                            </Form>
                        )}
                    </Formik>

                </div >
            </IonContent>
        </IonPage>
    )
}

export default NotificationPreference

