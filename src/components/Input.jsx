import React,{useId} from 'react'

const Input=React.forwardRef( function Input({
    label,
    type='text',
    className='',
    ...props
    
},ref){
    const id=useId()
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block-mb-1 pl-1'
                htmlFor={id}>
            </label>}

            <input type={type} 
                className={`px-3 py-2 rounded-lg  text-black outline-none focus:bg-gray-300 duration-200 border-2 border-gray-500 w-full ${className}`}
                ref={ref}
                id={id}
                {...props}
            />    
        </div>
    )
})

export default Input