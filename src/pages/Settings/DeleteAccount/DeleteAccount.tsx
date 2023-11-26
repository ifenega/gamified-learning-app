import { IonContent, IonPage, useIonRouter, useIonViewDidEnter, useIonViewWillLeave } from '@ionic/react'
import React, { useState } from 'react'
import { Field, Form, Formik } from "formik";
import FormError from '../../../components/InputFields/FormError';
import { Button } from '../../../components/Buttons/Button';
import TabHeader from '../../../components/UI/TabHeader';
import AlertInfo from '../../../components/UI/AlertInfo';
import CustomRadioButton from '../../../components/InputFields/CustomRadioButton';
import * as Yup from "yup";
import FullScreenLoader from '../../../components/UI/FullScreenLoader';


interface FormData {
    reason: string;
    other_reason: string;
}

const DeleteAccount: React.FC = () => {

    // <---- Utility class ------>
    const router = useIonRouter()
    // <---- useSelectors ------>
    // <---- useStates + variables ------>
    const [loading, setLoading] = useState(false)


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


    const onSubmit = (values: FormData) => {
        console.log(values)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 60000)
    }

    return (
        <IonPage className='ion-padding inner-header  '>
            <TabHeader title="Delete my account" defaultHref='/tabs/settings' />
            <IonContent className='mt-[45px]'>
                <div className='pb-4 '>
                    <Formik
                        initialValues={{
                            reason: "",
                            other_reason: "",

                        }}
                        onSubmit={onSubmit}
                        validationSchema={validation}
                    >
                        {({ errors, values, setFieldValue, isValid, dirty, touched }) => (
                            <Form>
                                <div className='h-[calc(100vh-92px)] flex flex-col justify-between gap-4 overflow-scroll px-[1px] hide-scrollbar pt-[45px]'>
                                    <div className='mb-10'>
                                        <div className='mb-4'>
                                            <h5 className='text-gray/800 text-lg font-medium tracking-[-0.27px] mb-[1px]'>What can we do better?</h5>
                                            <p className='text-sm tracking-[-0.21px] text-gray/500'>We want every child to have the best app experience. What is your reason for deleting your account? Select any or all that apply.</p>
                                        </div>


                                        <AlertInfo
                                            type='warning'
                                            text='Proceeding with account deletion will result in the loss of all accrued points and rewards.'
                                        />

                                        <div className='border border-solid border-gray/100 rounded-lg p-4 flex flex-col gap-5 mt-[13px]'>

                                            <div className='w-full'>
                                                <Field
                                                    component={CustomRadioButton}
                                                    name="reason"
                                                    id={"The app is not working well."}
                                                    value={values.reason}
                                                    onChange={(e: any) => {
                                                        setFieldValue("reason", "The app is not working well.")
                                                        setFieldValue("other_reason", "")
                                                    }}

                                                />

                                            </div>
                                            <div className='w-full'>
                                                <Field
                                                    component={CustomRadioButton}
                                                    name="reason"
                                                    id={"Incentives are not good enough"}
                                                    value={values.reason}
                                                    onChange={() => {
                                                        setFieldValue("reason", "Incentives are not good enough")
                                                        setFieldValue("other_reason", "")

                                                    }}
                                                />

                                            </div>
                                            <div className='w-full'>
                                                <Field
                                                    component={CustomRadioButton}
                                                    name="reason"
                                                    id={"I do not have the time for it."}
                                                    value={values.reason}
                                                    onChange={() => {
                                                        setFieldValue("reason", "I do not have the time for it.")
                                                        setFieldValue("other_reason", "")
                                                    }}
                                                />

                                            </div>
                                            <div className='w-full'>
                                                <Field
                                                    component={CustomRadioButton}
                                                    name="reason"
                                                    id={"Other"}
                                                    value={values.reason}
                                                    onChange={() => {
                                                        setFieldValue("reason", "Other")

                                                    }}

                                                />

                                                {values.reason === "Other" && <div className='mt-2 w-full'>
                                                    <Field
                                                        name="other_reason"
                                                        as="textarea"
                                                        row="2"
                                                        placeholder="Enter reason"
                                                        id="other_reason"
                                                        className={`border ${errors.other_reason &&
                                                            touched.other_reason ?
                                                            "border-[#EE615F]" : "border-gray/200"
                                                            } outline-none focus:border-teal/400 rounded-xl p-3 bg-transparent disabled:bg-gray/100 w-full placeholder:text-gray/400 text-gray/700`}

                                                        onChange={(e: any) => {

                                                            setFieldValue('other_reason', e.target.value)

                                                        }}
                                                    />

                                                    <FormError
                                                        value_name='other_reason'
                                                    />
                                                </div>}

                                            </div>

                                        </div>



                                    </div>




                                    {dirty && <div className=''>
                                        <Button
                                            text={'Permanently delete my account'}
                                            type='submit'
                                            disabled={!(isValid)}
                                            status={false}
                                            delete={true}

                                        />



                                    </div>}
                                </div>

                            </Form>
                        )}
                    </Formik>

                    {
                        <FullScreenLoader loading={loading} text='Deleting your account...'
                        />
                    }

                </div >
            </IonContent>
        </IonPage>
    )
}

export default DeleteAccount


const validation = Yup.object({
    // full_name: Yup.string().required("Required"),
    // age: Yup.string().required("Required"),
    reason: Yup.string(),
    other_reason: Yup.string()
        .when('reason', ([reason], sch) => {
            return reason === "Other" ?
                sch.required("Required")
                :
                sch.notRequired()
        }),


})
