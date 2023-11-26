import { IonModal } from "@ionic/react";
import React, { useState } from "react";
import close from '../../../assets/components/general/close.svg'
import ToastContainer from "../CustomToast";

type Props = {
    children: any;
    modalIsOpen: boolean;
    closeModal: () => void;
    breakpoint: number;
    header?: string;
    subheader?: string
};

const SheetModal = (props: Props) => {
    const height = props.breakpoint * 100;
    return (
        <IonModal
            className="my-sheet"
            isOpen={props.modalIsOpen}
            initialBreakpoint={props.breakpoint}
            breakpoints={[0, props.breakpoint, 1]}
            onDidDismiss={props.closeModal}
        >
            <div
                className={`h-full max-h-[100vh] overflow-y-scroll bg-white px-4 py-4 `}
            >


                <div className="grid grid-cols-[1fr_auto] pt-8 pb-4 gap-4 mb-4 items-start relative">
                    <div className='absolute top-[70px] w-full  '>
                        <ToastContainer />
                    </div>
                    <div className="w-full text-gray/700">
                        <h5 className="font-semibold text-xl fold:text-2xl ">{props?.header}</h5>
                        <p className="text-sm pt-0.5">{props?.subheader}</p>
                    </div>
                    <button
                        type='button'
                        onClick={props.closeModal}
                    >
                        <img src={close} alt='cancel' />

                    </button>

                </div>
                {props.children}
            </div>
        </IonModal>
    );
};
export default SheetModal;
