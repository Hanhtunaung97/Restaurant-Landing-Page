import React from 'react'
import { images } from '../constants'

const SubHeading = ({ title , className}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
        <h5 className={`text-golden font-heading font-semibold  `}>{title}</h5>
        <div>
            <img src={images.spoon} alt="spoon" />
        </div>
    </div>
  )
}

export default SubHeading