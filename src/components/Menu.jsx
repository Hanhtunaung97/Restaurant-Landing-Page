import React from 'react'
import Container from './Container'
import { MenuItem,SubHeading } from '../utils'

const Menu = () => {
  return (
    <Container className={`flex__center`}>
        <div>
          <div className='flex flex-col gap-5'>
            <SubHeading title="Menu that fits your palatte" className={"text-2xl items-center gap-3"}/>
            <h2 className="text-6xl font-heading font-bold text-golden">Today's Special</h2>
          </div>
          <div>
            <MenuItem/>
          </div>
          <div></div>
          <div></div>
        </div>
    </Container>
  )
}

export default Menu