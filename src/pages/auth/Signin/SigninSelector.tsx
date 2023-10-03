import { useIonRouter } from '@ionic/react'
import React, { useState } from 'react'
import SheetModal from '../../../components/UI/SheetModal'
import Signin from './Signin'
import ResetPassword from './ResetPassword/ResetPassword'
import CreateNewPassword from './ResetPassword/CreateNewPassword'
import ResetSuccessful from './ResetPassword/ResetSuccessful'

type Props = {
    modalIsOpen: boolean
    closeModal: () => void
}

const SigninSelector = (props: Props) => {


    // <---- Utility class ------>
    const router = useIonRouter()

    // <------ useState + variables --------->

    const initialData = {
        header: 'Welcome back',
        subheader: 'Provide your details to get right back into your account.',
        sigin: true,
        resetPassword: false,
        newPassword: false,
        successfulReset: false,
    }
    const [values, setValues] = useState({ ...initialData })

    // <------ functions --------->
    const handleInitial = () => {
        setValues({ ...initialData })
    }
    const handleResetPassword = () => {
        setValues({
            header: 'Reset password',
            subheader: 'Provide your email address below to reset your account password',
            sigin: false,
            resetPassword: true,
            newPassword: false,
            successfulReset: false,
        })
    }
    const handleNewPassword = () => {
        setValues({
            header: 'New password',
            subheader: 'Secure you account by creating a new password',
            sigin: false,
            resetPassword: false,
            newPassword: true,
            successfulReset: false,
        })
    }
    const handleSuccessfulReset = () => {
        setValues({
            header: ' ',
            subheader: '',
            sigin: false,
            resetPassword: false,
            newPassword: false,
            successfulReset: true,
        })
    }

    const showDefaultConnectors = () => (
        <>
            {
                values.sigin && <Signin
                    handleClose={props.closeModal}
                    handleResetPassword={handleResetPassword}
                />
            }
            {
                values.resetPassword && <ResetPassword
                    handleSignin={handleInitial}
                    handleNewPassword={handleNewPassword}
                />
            }

            {
                values.newPassword && <CreateNewPassword
                    handleSuccessfulReset={handleSuccessfulReset}
                />
            }

            {values.successfulReset && <ResetSuccessful
                handleSignin={handleInitial}
            />}
        </>
    )

    return (
        <SheetModal
            breakpoint={0.9}
            modalIsOpen={props.modalIsOpen}
            closeModal={() => {
                props.closeModal()
            }}
            header={values.header}
            subheader={values.subheader}
        >
            {showDefaultConnectors()}

        </SheetModal>
    )
}

export default SigninSelector