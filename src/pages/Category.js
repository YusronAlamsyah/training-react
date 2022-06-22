import React from 'react'
import {Link} from "react-router-dom";


function Category() {
  return (
    <div className='container'>
      <h3>Category</h3>
      <ul>
        <li><Link to="/detail-category/Beef">Beef</Link></li>
        <li><Link to="/detail-category/Seafood">Seafood</Link></li>
        <li><Link to="/detail-category/Chicken">Chicken</Link></li>
      </ul>

    </div>
  )
}

export default Category