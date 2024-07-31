import React from 'react'
import './subTitle.css'
import { Link } from 'react-router-dom'
function SubTitle({title, btnTitle, path}) {
  return (
    <div className='d-flex justify-content-between pt-4'>
        <div className='sub-title'>{title}</div>
        { btnTitle ? (<Link to={`${path}`} style={{textDecoration: "none"}}>
          <div className='shopping-now'>{btnTitle}</div>
        </Link>) : null}
    </div>
  )
}

export default SubTitle
