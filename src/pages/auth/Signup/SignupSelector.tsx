import { useIonRouter } from '@ionic/react'
import React, { useState } from 'react'
import SheetModal from '../../../components/UI/SheetModal'
import Signup from './Signup'
import AccountSetupWarning from './AccountSetupWarning'


type Props = {
    modalIsOpen: boolean
    closeModal: () => void
}

interface initialDataProps {
    header: string | undefined;
    subheader: string | undefined;
    signup: boolean;
    accountSWarning: boolean;
}
const SignupSelector = (props: Props) => {


    // <---- Utility class ------>
    const router = useIonRouter()

    // <------ useState + variables --------->

    const initialData: initialDataProps = {
        header: 'Create account',
        subheader: 'We want safety for all children, only an adult should create an account',
        signup: true,
        accountSWarning: false,

    }
    const [values, setValues] = useState({ ...initialData })

    // <------ functions --------->
    const handleInitial = () => {
        setValues({ ...initialData })
    }
    const handleAccountSWarning = () => {
        setValues({
            header: undefined,
            subheader: undefined,
            signup: false,
            accountSWarning: true,

        })
    }


    const showDefaultConnectors = () => (
        <>
            {values.signup &&
                <Signup
                handleAccountSWarning={handleAccountSWarning}
                />
            }

            {values.accountSWarning &&
                <AccountSetupWarning
                    handleSignup={handleInitial}
                />
            }
        </>
    )

    return (
        <SheetModal
            breakpoint={0.9}
            modalIsOpen={props.modalIsOpen}
            closeModal={() => {
                props.closeModal()
                router.goBack()
            }}
            header={values.header}
            subheader={values.subheader}
        >
            {showDefaultConnectors()}

        </SheetModal>
    )
}

export default SignupSelector