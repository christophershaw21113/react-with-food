import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai"
import axios from 'axios'

const Button = () => {


    return (
        <label className='button' htmlFor='file_picker'>
            <AiFillPlusCircle />
            <input hidden type='file' name='file_picker' id='file' onChange={(e) => handleChange(e)} />
        </label>


    )
}

export default Button