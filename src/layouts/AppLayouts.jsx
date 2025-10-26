import React from 'react'
import { Outlet } from 'react-router-dom'

import AppHeader from '../Page/AppHeader'



function AppLayouts() {
  return (
    <div className='mx-auto'>
        <div className='max-w-[1572px] mx-auto mt-10'>
            <AppHeader />
        </div>
        
    </div>
  )
}

export default AppLayouts