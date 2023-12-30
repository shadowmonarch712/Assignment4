import React from 'react'
import './dashboardStyles.css'
import data from '../assets/values.json'
const Dashboard = () => {
  return (
    <>
    <p>Company metrics</p>
    <div className="card-holder">
      {data.map((item, index) => (
        <div key={index} className="card-element">
          <h3 className={item.text === 'Total Revenue' ? 'green-text' : item.text === 'Outstanding amount' ? 'red-text' : ''}>
            {item.text}
          </h3>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
    <p>Revenue by job type</p>
  </>

  )
}

export default Dashboard