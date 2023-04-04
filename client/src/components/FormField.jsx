import React from 'react'

const FormField = ({ placeholder, inputType, isTextArea, value, handleChange}) => {
  return (
    <label className="flex-1 w-full flex flex-col">

        {/* TextArea */}
        {isTextArea ? (
            <textarea
            required
            value={value}
            onChange={handleChange}
            type={inputType}
            rows={10}
            placeholder={placeholder}
            className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#79797e] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#79797e] rounded-[10px] sm:min-w-[300px]"
            />
        ) :(
            <input
                required
                value={value}
                onChange={handleChange}
                type={inputType}
                step="0.1"
                placeholder={placeholder}
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#79797e] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#79797e] rounded-[10px] sm:min-w-[300px]"
            />
        ) }
    </label>
  )
}

export default FormField