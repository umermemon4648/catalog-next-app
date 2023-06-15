import React from 'react'
interface ViewerProps{
    catalogImage: string
}
const Viewer:React.FC<ViewerProps> = ({ catalogImage }) => {
  return (
    <>
       <div className='layout-row justify-content-center'>
      <img 
        alt='catalog-view' 
        className='w-75' 
        src={catalogImage}
        data-testid='catalog-view' 
      />
    </div>
    </>
  )
}

export default Viewer
