import React from 'react'
import './allCategory.css'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Utility/Pagination'

export default function AllCategory() {
  return (
    <div style={{ minHeight: '670px'}}>
      <CategoryContainer />
      <Pagination />
    </div>
  )
}
