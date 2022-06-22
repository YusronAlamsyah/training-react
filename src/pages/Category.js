import React from 'react'
import {Link} from "react-router-dom";


function Category() {
  return (
    <div className='container'>
      <h1>Category</h1>
      <ul className='listCat'>
        <li><span><Link to="/detail-category/Beef">Beef</Link></span><span>42 Items</span></li>
        <li><span><Link to="/detail-category/Seafood">Seafood</Link></span><span>27 Items</span></li>
        <li><span><Link to="/detail-category/Chicken">Chicken</Link></span><span>35 Items</span></li>
      </ul>
    </div>
  )
}

export default Category