import React from 'react';

const Input = ({placeHolder,type,name}) => {
    return (
        <div className='py-2 flex justify-center'>
            <input type={type} placeholder={placeHolder} name={name} className="input input-bordered input-success w-full max-w-xs" />
        </div>
    );
}

export default Input;
