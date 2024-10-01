import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routing } from './routing'

const RouteMap:React.FC = () => {
  return (
    <>
        <Routes>
            {
                routing.map((item)=>(
                    <Route key={item.id} path={item.path} element={<item.element/>}/>
                    
                ))
            }
        </Routes>
    </>
  )
}

export default RouteMap