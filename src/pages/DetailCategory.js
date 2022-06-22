import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Card from '../reusable/Card';

const DetailCategory = ({img,title}) => {
  const params = useParams();
  const [list,setList] = useState(null);
  const fetchData = async (cat) => {
    const data = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+cat);
    const result = await data.json();
    setList(result.meals);
  }

  useEffect(() => {
    fetchData(params.id);
    },[] );

  return (
    <div className='container'>
      {
        list && list.length > 0 ? (
          <div>
            <div>List {params.id} : {list.length} Items</div>
              <div style={{display:'flex',flexWrap:'wrap'}}>
                {
                  list.map((val,index) => (
                    <Card key={index} title={val.strMeal} img={val.strMealThumb} />
                  ))
                }
                </div>
          </div>
        ) : (
          <p style={{marginTop:'3rem',textAlign:'center'}}>Loading...</p>
        )
      }
    </div>
  )
}


export default DetailCategory