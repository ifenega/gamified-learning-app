import React, { useEffect, useState } from 'react'
import SheetModal from '../../../components/UI/Modals/SheetModal'
import fearfulred from '../../../assets/dashboard/Settings/avatars/fearfulred.svg'
import fiveeyedsunny from '../../../assets/dashboard/Settings/avatars/fiveeyedsunny.svg'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../../lib/firebase'
import { CustomToast, getId } from '../../../util/util'
import { useAppDispatch } from '../../../store/store'
import { authActions } from '../../../store/slices/authSlice'
import FullScreenLoader from '../../../components/UI/FullScreenLoader'

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

    // <---- Utility class ------>
    const dispatch = useAppDispatch()


    // <---- useStates + variables ------>
    const [loading, setLoading] = useState(false)
    const [currentAvatar, setCurrentAvatar] = useState<AvatarType>("Fearful red")

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




    const updateAvatar = async (avatar: AvatarType) => {

        const id = getId()
        console.log(id)
        setLoading(true)
        const currentTime = new Date()
        try {
            const docRef = doc(db, "users", id);
            await updateDoc(docRef, {
                avatar: avatar,
                updatedAt: currentTime.toLocaleTimeString(),
            })
                .then(async () => {

                    console.log("cjecl")
                    try {
                        const docSnap = await getDoc(docRef);
                        console.log(docSnap)
                        if (docSnap.exists()) {
                            CustomToast('success', "Updated...")
                            dispatch(authActions.setUserDetails({ ...docSnap.data(), id: docSnap.id }))
                            console.log({ ...docSnap.data(), id: docSnap.id })
                            setLoading(false)
                            setCurrentAvatar(avatar)
                            localStorage.setItem("current_avatar", avatar)
                        } else {
                            console.log("check2")
                            setLoading(false)
                            CustomToast('error', "Network Error")
                        }
                    } catch (error: any) {
                        if (error.code === "unavailable") {
                            // Firebase error code for network issues
                            setLoading(false)
                            CustomToast('error', "Network Error")
                        } else {
                            setLoading(false)
                            CustomToast('error', error.message)

                        }
                    }
                })
                .catch((error: any) => {
                    console.log(error)
                    setLoading(false)
                    const errorCode = error.code;
                    CustomToast('error', errorCode)
                })


        } catch (error: any) {
            console.log(error)
            setLoading(false)
            const errorCode = error.code;
            CustomToast('error', errorCode)
        }
    }


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

                                updateAvatar(item.name)
                               
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

            <FullScreenLoader loading={loading} text=''
            />
        </SheetModal>
    )
}

export default NewAvatar