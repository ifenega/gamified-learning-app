import React from 'react'
import { Button } from '../../../../components/Buttons/Button';
import { currentAvatar, currentAvatarName } from '../../../../util/util';

type Props = {

    nextPage: () => void;
    data: ContentItemType | null

}

const LessonInfo = (props: Props) => {

    const userName = "Dolapo"

    return (
        <div className='h-[calc(100vh-127px)] flex  flex-col justify-between w-full p-4 pt-0' >
            <div className='w-full'>

                <h3>{props.data?.title}</h3>
                <div className='w-full flex flex-col items-center gap-5 mt-[80px]'>

                    <img src={currentAvatar()} alt={currentAvatarName()} />


                    <div className='text-gray/800 font-medium text-sm tracking-[-0.21px] p-4 rounded-lg bg-white shadow-[0_4px_20px_0_rgba(19,33,36,0.16),_0_0_2px_0_rgba(19,33,36,0.08)] relative'>
                        {/* Arrow */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-3   ">
                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.76795 1C8.53775 -0.333333 10.4623 -0.333333 11.2321 1L18.1603 13C18.9301 14.3333 17.9678 16 16.4282 16H2.5718C1.0322 16 0.0699461 14.3333 0.839746 13L7.76795 1Z" fill="white" />
                            </svg>

                        </div>

                        <p>{props.data?.description}</p>
                    </div>
                </div>
            </div>


            <Button
                text={<p className='flex'>Next! <span className='pl-2'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33333 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="#F5FBFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </span></p>}
                type='button'
                action={props.nextPage}

            />
        </div>
    )
}

export default LessonInfo