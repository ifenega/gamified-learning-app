import React, { useEffect, useState } from 'react'
import SheetModal from '../../../components/UI/Modals/SheetModal'
import fearfulred from '../../../assets/dashboard/Settings/avatars/fearfulred.svg'
import fiveeyedsunny from '../../../assets/dashboard/Settings/avatars/fiveeyedsunny.svg'

type Props = {
    modalIsOpen: boolean;
    closeModal: () => void;
    header: string;
    subheader: string;
}

interface AvatarListProps {
    name: AvatarType;
    icon: string;
    disabled: boolean
}

const NewAvatar: React.FC<Props> = (props) => {

   

    const avatars: AvatarListProps[] = [
        {
            name: "Fearful red",
            icon: fearfulred,
            disabled: false,
        },
        {
            name: "5 eyed sunny",
            icon: fiveeyedsunny,
            disabled: false,
        },
        {
            name: "Fearful reed",
            icon: fearfulred,
            disabled: false,
        },
    ]

    const [currentAvatar, setCurrentAvatar] = useState<AvatarType>("Fearful red")



    return (
        <SheetModal
            breakpoint={0.35}
            modalIsOpen={props.modalIsOpen}
            closeModal={() => {
                props.closeModal()
            }}
            header={props.header}
            subheader={props.subheader}
        >
            <div className='mt-4 flex flex-row flex-wrap justify-between gap-4'>
                {
                    avatars.map((item, index) => (
                        <button
                            key={index}
                            type='button'
                            disabled={item.disabled}
                            onClick={() => {
                                setCurrentAvatar(item.name)
                                localStorage.setItem("current_avatar",item.name)
                            }}
                            className='flex flex-col gap-1 items-center'
                        >

                            <div className={` border border-solid rounded-full p-[17px] ${currentAvatar === item.name ? " border-[#0BA5EC] " : " border-gray/100 "}`}>
                                <img src={item.icon} alt="" className='w-[50px] fold:w-full' />
                            </div>


                            <p className='text-gray/800 font-medium text-sm tracking-[-0.21px]'>{item.name}</p>

                        </button>
                    ))
                }

            </div>
        </SheetModal>
    )
}

export default NewAvatar