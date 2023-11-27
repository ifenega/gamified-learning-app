import { IonModal } from "@ionic/react";
import React, { useState } from "react";
import coin from '../../../assets/dashboard/Points/coin.svg'
import pattern from '../../../assets/components/general/pattern2.svg'
import { Button } from "../../../components/Buttons/Button";

type Props = {
    modalIsOpen: boolean;
    closeModal: () => void;
    breakpoint: number;


};

const PointsInfo = (props: Props) => {
    const height = props.breakpoint * 100;
    return (
        <IonModal
            className="my-sheet"
            isOpen={props.modalIsOpen}
            initialBreakpoint={props.breakpoint}
            breakpoints={[0, props.breakpoint, 0.95]}
            onDidDismiss={props.closeModal}
        >
            <div
                className={`h-full max-h-[100vh] overflow-y-scroll bg-white `}
            >
                <div className="overflow-hidden bg-[#FEFAF5] pt-10 pb-6 px-4 relative">

                    <img src={pattern} alt='' className='absolute object-cover w-full h-full top-0 left-0' />

                    <div className="flex gap-4 items-center flex-col">
                        <img src={coin} alt="" className="w-[132px] h-[132px]" />

                        <p className="w-full text-left text-gray/800 font-semibold text-2xl tracking-[-0.36px]">What are points?</p>

                    </div>

                </div>

                <div className="pb-10 p-4">

                    <p className="text-gray/800 tracking-[-0.24px] mb-16">Imagine that you have a special sticker book, and every time you do something good or learn something new in your app, you get a shiny star sticker to put in your book. These shiny star stickers are like "points." The more star stickers you collect, the more progress you make in the app. So, a "point" is like a shiny star sticker that you earn for doing cool stuff in then app, and you can use them to get even more fun stuff! 🌟📚🎮</p>

                    <Button
                        text={"Close"}
                        type="button"
                        action={props.closeModal}
                    />


                </div>


            </div>
        </IonModal>
    );
};
export default PointsInfo;
