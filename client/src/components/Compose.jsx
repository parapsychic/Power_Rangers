import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormField from "../components/FormField"
import { useStateContext } from '../context';

const Compose = () => {
    const navigate = useNavigate();
    const { uploadPost } = useStateContext();
    const [form, setForm] = useState({
        postTxt: '',
        postImg: '',
      });

    const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await uploadPost({ ...form})
        navigate('/Feed');
    }

  return (
    <div className="p-[20px] mb-[40px] text-center justify-center items-center bg-[#4D4D4D] rounded-[20px]">
        <form onSubmit={handleSubmit} className="mt-[20px] flex flex-col gap-[20px]">
            <FormField 
                placeholder="Write your Story"
                isTextArea
                value={form.postTxt}
                handleChange={(e) => handleFormFieldChange('postTxt', e)}
            />

            <FormField 
                placeholder="Enter Image Url"
                inputType="text"
                value={form.postImg}
                handleChange={(e) => handleFormFieldChange('postImg', e)}
            />

            <div>
                <button
                    type='submit'
                    className="text-[18px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] bg-[#1dc071] px-[30px]"
                >
                    Post
                </button>
            </div>
        </form>
    </div>
  )
}

export default Compose