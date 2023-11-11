import { IonBackButton, IonButtons } from '@ionic/react';
import React from 'react';
import backButton from '../../assets/components/general/backButton.svg';

type Props = {
    defaultHref?: string;
};

const CustomBackButton = (props: Props) => {
    return (
        <IonButtons slot="start">
            <img src={backButton} alt="Back" onClick={() => props.defaultHref && window.location.assign(props.defaultHref)} />
        </IonButtons>
    );
};

export default CustomBackButton;
