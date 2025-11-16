import React from 'react'

import Map from '../Map'
import PropertyDescription from './PropertyDescription'

function AppMixmap({ mapEmbedUrl }) {
  return (
    <>
      <div className="container max-w-[1500px] mx-auto">

        {/* เส้นบน */}
        <hr className="mb-4 border-gray-200" />
        
        {/* แบ่ง 2 คอลัมน์ */}
        <div className="grid grid-cols-2 gap-20">
          <div className="max-w-[750px]">
            <PropertyDescription />
          </div>
          <div>
            <Map embedUrl={mapEmbedUrl} />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default AppMixmap