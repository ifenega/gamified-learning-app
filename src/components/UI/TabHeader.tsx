import { IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import CustomBackButton from './CustomBackButton'
import info from '../../assets/components/general/InfoIcon.svg'

type Props = {
    defaultHref?: string;
    title: string;
    info?: string;
    info_action?: () => void;
};



const TabHeader = (props: Props) => {
    return (
        <IonHeader className="ion-no-border custom-header">
            <IonToolbar>
                <IonTitle>{props.title}</IonTitle>
                {props.info && <IonButtons slot="end" onClick={props.info_action}><img src={info} /></IonButtons>}

            </IonToolbar>
        </IonHeader>
    )
}

export default TabHeader