import React from 'react'
import { useRive } from 'rive-react';

function RivePage() {

    const { rive, RiveComponent } = useRive({
        src: 'https://cdn.rive.app/animations/vehicles.riv',
        autoplay: false,
      });

  return (
    <RiveComponent
    className='h-[500px]'
    onMouseEnter={() => rive && rive.play()}
    onMouseLeave={() => rive && rive.pause()}
  />
  )
}

export default RivePage