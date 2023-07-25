import React, { Component } from 'react'

export   class NewsItem extends Component {
    render() {
      
            let  { title, description, imageUrl, newsUrl, author, date, source } = this.props;
            return (
           <div className="my-3">
               <div   className="card">
<div style={{
display: 'flex',
justifyContent: 'flex-end',
position: 'absolute' ,
right: '0'
}




} >






               <span className=" badge rounded-pill bg-danger" > {source}  </span>
    </div>
  <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107211093-1679095608088-gettyimages-1316264191-miniseries20210318__n8a0168_r14.jpeg?v=1679143036&w=1920&h=1080":imageUrl}
     className="card-img-top" alt="..."/>
     
  <div  className="card-body">
    <h5   className="card-title">{title} 
    </h5>
    
    <p   className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank"  className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
               
</div>
        )
    }

}

export default NewsItem
