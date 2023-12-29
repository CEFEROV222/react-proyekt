import React from 'react'

const Card = () => {
  return (
    <div className="card col-12 col-md-6 col-lg-4">
    <img src="/images/articles/article1.svg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">The truth about ReactJS</h5>
      <p className="card-text">
      Sigh, it’s like we can’t catch a break. So much has happened over the past happened happened over the past happened.....
      </p>

      <span> <img src="/favicon.svg" alt="" className="me-2" />Pecode Team    19.03.2023</span>
   
    </div>
  </div>
  )
}

export default Card