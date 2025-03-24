import React from 'react'

const HeaderBox = ({ type = "greeting", title, user, subtext }: HeaderBoxProps) => {
    return (
        <div className='flex flex-col gap-1'>
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">{title}

                {type === 'greeting' && (
                    <span className='text-blue-500'> {user}</span>
                )}
            </h1>

            <p className='text-gray-500 font-light'>{subtext}</p>
        </div>
    )
}

export default HeaderBox