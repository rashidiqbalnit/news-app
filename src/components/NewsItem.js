import React from 'react'

  const NewsItem =(props)=>{

    let {title, description, imageUrl, newsUrl, author, date,source} = props;  // here we are using destructuring to extract title and description from API using props.
   
    return (

      <div className="my-3">
        <div className="card">
         <div style={{
           display: 'flex',
           justifyContent: 'flex-end',
           position: 'absolute',
           right: '0'
         }}>
           <span className="badge rounded-pill bg-danger">{source}
           </span>
         </div>
          <img src={!imageUrl?"https://th.bing.com/th/id/OIP.grJzADvPN0_qjZ2sRFm0FgAAAA?w=450&h=330&rs=1&pid=ImgDetMain":imageUrl} className="card-img-top" alt="..."/>
         <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
         </div>
        </div>
      </div>
      
    )
}


export default NewsItem
