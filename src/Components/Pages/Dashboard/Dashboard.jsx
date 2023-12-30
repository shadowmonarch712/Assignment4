import React from 'react'
import './dashboardStyles.css'
import data from '../../../assets/values.json'
import BargraphOne from '../../../assets/Bargraph1'
import BargraphTwo from '../../../assets/Bargraph2'
const Dashboard = () => {
  return (
    <>
    <div className='main'>

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
    <div className='bar-handler'>
    <BargraphOne/>
    <BargraphTwo/>
    </div>
    </div>
  </>

  )
}

export default Dashboard