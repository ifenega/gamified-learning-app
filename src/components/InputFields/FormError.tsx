import React from 'react'
import { ErrorMessage } from "formik"

type Props = {
    value_name: string
}

const FormError = (props: Props) => {
    return (
        <p className="text-[#D92D20] text-xs bold:text-[13px] leading-5 mt-1 ">
            <ErrorMessage name={props.value_name} />
        </p>
    )
}

export default FormError