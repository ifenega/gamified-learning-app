import React, { useState } from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from '../../../../../components/Buttons/Button';
import LoadingSpinner from '../../../../../components/UI/LoadingSpinner';
import wrongIcon from '../../../../../assets/dashboard/Lessons/wrongIcon.svg'
import correctIcon from '../../../../../assets/dashboard/Lessons/correctIcon.svg'
import { useDispatch } from 'react-redux';
import { lessonActions } from '../../../../../store/slices/lessonSlice';


type Props = {
    data: ContentItemType
    disbaleNext: boolean
    handleNext: () => void
}

const MCQ = (props: Props) => {
    console.log(props)
    // <---------- Utility class --------->
    const dispatch = useDispatch()
    // <---------- useSelectors --------->
    // <---------- HOOKS ------------>
    // <---------- useStates + variables ---------->
    const [isSubmitted, setSubmit] = useState(false)
    const [isCorrect, setCorrect] = useState(false)
    const initialValues = {
        answer: '', // Initially no option selected
    };

    // <---------- Functions ---------->
    const onSubmit = (values: any) => {
        console.log(values)

        const taskId = props.data.task?.id

        if (values.answer === props.data.task?.answer) {
            dispatch(lessonActions.updateAnswerCorrect({ taskId, isCorrect:true }));
            setCorrect(true)
        } else {
            dispatch(lessonActions.updateAnswerCorrect({ taskId, isCorrect:false }));
            setCorrect(false)
        }
        setSubmit(true)
    }


    return (
        <div>

            <div className='mb-6 px-4'>
                <h5 className='font-semibold text-gray/800 text-lg mb-1'>Quick quiz 🔥</h5>
                <p className='text-gray/500 text-sm tracking-[-0.21px]'>Based on your previous lesson, choose a correct answer</p>
            </div>


            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validation}
            >
                {({ errors, values, setFieldValue, isValid, dirty }) => (
                    <Form>
                        <div className='h-[calc(100vh-200px)] flex  flex-col justify-between w-full  pt-0' >
                            <div className='px-4'>
                                <label
                                    htmlFor='answer'
                                    className='text-gray/800 tracking-[-0.24px] mb-4 block'
                                >{props.data?.task?.question}</label>


                                <div className='grid grid-cols-2 gap-[17px]'>
                                    {props.data.task?.options.map((option) => (
                                        <div key={option}>
                                            <label
                                                className={`  border-[2px] border-b-[3px]${values.answer === option ? " border-[#0BA5EC] bg-[#0BA5EC29]  " : " border-gray/200 bg-white  "} text-sm font-medium text-gray/800 tracking-[-0.21px] flex items-center justify-center h-[130px] w-full rounded-2xl px-4 py-[43px] shadow-[0_1px_4px_0_rgba(19,33,36,0.06),0_0_1px_0_rgba(19,33,36,0.20)] text-center `}
                                            >
                                                <Field type="radio" name="answer" value={option} hidden />
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>



                            {!isSubmitted ?
                                <div className='pb-10 px-4'>
                                    <Button
                                        text={<p className='flex'>Check <span className='pl-2'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.33333 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="#F5FBFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        </span></p>}
                                        type='submit'
                                        disabled={!(dirty)}
                                        action={() => { }}
                                    />
                                </div>
                                :
                                <div className={`p-4 pb-6 ${isCorrect ? " bg-[#D3F8DF] text-[#16B364] " : " bg-[#FFE4E8] text-[#F63D68] "} `}>
                                    <div className='mb-3 flex items-center gap-2 '>
                                        <img src={isCorrect ? correctIcon : wrongIcon} alt="" />
                                        <p className='tracking-[-0.24px] font-semibold'>{isCorrect ? "Hurray! 🎉  you got this correct." : "You got this wrong!"}</p>
                                    </div>

                                    {!isCorrect &&
                                        <div className='mb-4'>
                                            <p className='text-sm tracking-[-0.21px] font-medium mb-2'>Correct answer:</p>

                                            <h5 className='tracking-[-0.21px] text-sm font-bold'>{props.data.task?.answer}</h5>
                                        </div>
                                    }

                                    <CustomButton
                                        text={isCorrect ? "Continue" : "Got it"}
                                        isCorrect={isCorrect}
                                        type='button'
                                        action={() => {
                                            console.log("check")
                                            props.handleNext()
                                        }}

                                    />


                                </div>
                            }
                        </div>

                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default MCQ


const validation = Yup.object({
    answer: Yup.string().required(""),
})


type Custom_Button_Props = {
    text: string | JSX.Element;
    action?: () => any | void;
    type: "submit" | "reset" | "button";
    disabled?: boolean;
    status?: boolean
    isCorrect: boolean

}
const CustomButton = (props: Custom_Button_Props) => {
    return (

        <button
            onClick={props.action}
            type={props.type}
            disabled={props.disabled}
            className={` rounded-xl py-3 px-2 flex items-center justify-center gap-2 shadow-[0_-3px_0_0_rgba(0,0,0,0.2)_inset] text-[#F5FBFF] ${props.isCorrect ? " bg-[#16B364] " : " bg-[#F63D68] "}  text-sm font-medium leading-5 w-full`}

        >
            <p className='flex'>{props.text} <span className='pl-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M3.83337 10H17.1667M17.1667 10L12.1667 5M17.1667 10L12.1667 15" stroke="#F5FBFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
            </p>
            {props.status && <LoadingSpinner />}
        </button>
    )
}
