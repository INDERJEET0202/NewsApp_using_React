import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class NewsItem extends Component {
  static propTypes = {}

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
        <>
        <div className="my-3">
            <div className = "card" style = {{}}>
                <img src = {!imageUrl?"https://hot-town-images.s3.amazonaws.com/kwtv/production/2022/January/19/breaking-news.1642620193378.jpeg":imageUrl} className="card-img-top" alt = "error"/>
                <div className = "card-body">
                    <h5 className = "card-title">{title}</h5>
                    <p className = "card-text">{description}</p>
                    <a href = {newsUrl} rel="noreferrer" target = "_blank" className="btn btn-dark btn-sm">Read More</a>
                </div>
            </div>
        </div>
        </>
    )
  }
}

export default NewsItem;