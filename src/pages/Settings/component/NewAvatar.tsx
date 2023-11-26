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

    const points_data = [
        {
            text: "Completed the Math Adventure Quest",
            time: "12/03/2023",
            points: 6
        },
        {
            text: "Discovered the Science Galaxy Explorer",
            time: "15/03/2023",
            points: 4
        },
        {
            text: "Unlocked the Vocabulary Kingdom",
            time: "18/03/2023",
            points: 8
        },
        {
            text: "Helped a virtual friend in Coding Town",
            time: "20/03/2023",
            points: 2
        },
        {
            text: "Participated in the Spellathon Challenge",
            time: "22/03/2023",
            points: 6
        },
        {
            text: "Built a Digital Robot in RoboCrafters",
            time: "25/03/2023",
            points: 8
        },
        {
            text: "Published a story in the Creative Writing Cove",
            time: "28/03/2023",
            points: 10
        },
        {
            text: "Explored the wonders of Geography World",
            time: "30/03/2023",
            points: 4
        },
        {
            text: "Collaborated on an Animal Safari Adventure",
            time: "02/04/2023",
            points: 6
        },
        {
            text: "Achieved the Super Explorer Badge",
            time: "05/04/2023",
            points: 8
        },
    ];

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
            name: "Fearful red",
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
            <div className='mt-4 flex flex-row flex-wrap justify-between '>
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
                                <img src={item.icon} alt="" />
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