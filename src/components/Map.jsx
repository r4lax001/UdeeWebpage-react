import React from 'react';

function Map({ embedUrl }) {

  if (!embedUrl) {
    return <div>กรุณาระบุ URL ของแผนที่</div>;
  }

  return (
    
    <div className="container max-w-[1572px] mx-auto px-4 pt-10 border-b border-t mt-10">
      <h2 className="text-2xl font-medium mb-4">แผนที่</h2>
      
      <div className="max-w-[1052px] aspect-[2/1] overflow-hidden mt-10 rounded-lg ">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

  );
}

export default Map;