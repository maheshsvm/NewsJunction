import React from 'react'

const NewsItem = (props) =>{
    let { title, desc, imageUrl, newsUrl, author, date, source, sourceColor } = props;
    return (
      <div>
        <div className="card my-4 mx-4">
          <div className='d-flex position-absolute top-0 right-0 end-0'>
            <span className={`badge rounded-pill bg-${sourceColor}`}>{source}</span>
          </div>
          <img src={imageUrl ? imageUrl : "https://i.ytimg.com/vi/JRPSSBSguJ0/maxresdefault.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} Updated on {new Date(date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>

          </div>
        </div>
      </div>
    )
}

export default NewsItem
