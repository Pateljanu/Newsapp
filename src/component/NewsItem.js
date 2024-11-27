import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title,description,imgeurl,newsurl}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imgeurl?"https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg?w=300":imgeurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} className="btn btn-dark">Read More</a>
          </div>
        </div>

      </div>
    )
  }
}
