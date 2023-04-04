import React from 'react'

const PostCard = ({postTxt, postImg}) => {
  return (
    <div className="w-[600px] rounded-[15px] bg-[#818183] cursor-pointer gap-[30px]">

        <p className='mt-[5px] font-epilogue text-[#79797e] font-[12px] text-center leading-[18px]'>
            {postTxt}
        </p>

        <img src={postImg} alt='fund' className='w-full h-[158px] object-cover rounded-b-[15px]'/>
    </div>
  )
}

export default PostCard