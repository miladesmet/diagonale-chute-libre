import React, { FC } from 'react'
import { FieldError } from 'react-hook-form'

interface Props {
  labelText: string
  labelFor: string
  registerData: any
  error: FieldError | undefined
  errorMessgae: string
  inputType?: string
}

const CartFormInput: FC<Props> = ({ labelText, labelFor, registerData, error, errorMessgae, inputType='text' }) => {
  return (
    <div className="flex flex-col gap-2 items-start w-full md:w-[60%]">
      <label htmlFor={labelFor}>{labelText} *</label>
      <input
        {...registerData}
        type={inputType}
        id={labelFor}
        className="p-2 border-2 border-solid border-[#314A7D] w-4/5"
        required
      />
      {error && <p className="text-red-500">{errorMessgae}</p>}
    </div>
  )
}

export default CartFormInput