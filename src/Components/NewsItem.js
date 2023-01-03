import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, date, author, newsSource } = props;
    return (
      <>
        <div className="my-3">
          <div className="card" style={{}}>
            <div className="card-header text-center">
              News source: <strong>{newsSource}</strong>
            </div>
            <img src={!imageUrl ? "https://hot-town-images.s3.amazonaws.com/kwtv/production/2022/January/19/breaking-news.1642620193378.jpeg" : imageUrl} className="card-img-top" alt="error" />
            <div className="card-body">
              <h5 className="card-title">{title}  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                New
                <span class="visually-hidden">unread messages</span>
              </span></h5>
              <p className="card-text">{description}</p>
              <h4 className="card-text"><small className="">Author: {author}</small></h4>
              <p className="card-text"><small className="text-muted">Uploaded on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Read More</a>
            </div>
          </div>
        </div>
      </>
    )
}

export default NewsItem;