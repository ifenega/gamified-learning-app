import React from 'react'
import check from '../../../../assets/dashboard/Lessons/check.svg'
import { Button } from '../../../../components/Buttons/Button';

type Props = {
    img: any;
    topics: string[]// i might comeback to revise this to accept more dynamic topic types, for example ones with sub topics
    title: string
    nextPage: () => void

}

const LessonOutline = (props: Props) => {
    return (
        <div className='h-[calc(100vh-127px)] flex  flex-col justify-between w-full p-4 pt-0' >
            <div className='w-full'>
                <div className='items-center justify-center flex flex-col gap-2 mb-8 w-full'>
                    <img src={props.img} alt="" />
                    <h4 className='text-center text-gray/800 text-2xl font-semibold tracking-[-0.36px;]'>{props.title}</h4>
                </div>

                <div className='tracking-[-0.24px] text-gray/800'>
                    <h5 className='mb-4 '>What you’ll learn in this lesson</h5>

                    <div className='flex flex-col gap-3'>
                    {props.topics.map((topic: string, index: number) => (
                        <div className='flex items-center gap-2' key={index}>
                            <img src={check} alt="" />
                            <p>{topic}</p>
                        </div>
                    ))}
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

export default LessonOutline