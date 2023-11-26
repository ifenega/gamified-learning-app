import { IonButton } from '@ionic/react'
import React from 'react'
import LoadingSpinner from '../UI/LoadingSpinner';


type Props = {
    text: string | JSX.Element;
    action?: () => any | void;
    type: "submit" | "reset" | "button";
    disabled?: boolean;
    status?: boolean
    delete?: boolean
}
const Button = (props: Props) => {
    return (

        <button
            onClick={props.action}
            type={props.type}
            disabled={props.disabled}
            className={` rounded-xl py-3 px-2 flex items-center justify-center gap-2 shadow-[0_-3px_0_0_rgba(0,0,0,0.2)_inset] ${props.status ? props.delete ? " bg-[#F63D68]/40 text-teal/25 " : " bg-teal/300 text-teal/25 " : props.delete ? " bg-[#F63D68]  disabled:bg-gray/300 disabled:text-gray/500 text-teal/25 " : " bg-teal/500 active:bg-teal/600 disabled:bg-gray/300 disabled:text-gray/500 text-teal/25 "} text-sm font-medium leading-5 w-full`}

        >
            {props.text}
            {props.status && <LoadingSpinner />}
        </button>
    )
}

const BorderButton = (props: Props) => {
    return (

        <button
            onClick={props.action}
            type={props.type}
            disabled={props.disabled}
            className={` rounded-xl py-3 px-2 flex items-center justify-center gap-2 shadow-[0_-3px_0_0_rgba(0,0,0,0.2)_inset] border border-solid ${props.status ? " border-teal/300 text-teal/400 " : " border-teal/400 active:border-teal/600 active:text-teal/600 disabled:border-teal/300 disabled:text-teal/300 text-teal/500 "} bg-transparent text-sm font-medium leading-5 w-full`}

        >
            {props.text}
            {props.status && <LoadingSpinner />}
        </button>
    )
}

const TextButton = (props: Props) => {
    return (

        <button
            onClick={props.action}
            type={props.type}
            disabled={props.disabled}
            className={`   active:text-teal/600  disabled:text-teal/300 text-teal/500   text-sm font-medium leading-5 w-fit`}

        >
            {props.text}
        </button>
    )
}

export { Button, BorderButton, TextButton }