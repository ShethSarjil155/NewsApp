import React from 'react';



const NewsItem=(props)=> {
  
    let {title,description,imageUrl,url,author,date, source} = props;
    return (
    <div>
       <div className="card" style={{marginTop:'1rem'}}>
       
       <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
       <span className="badge rounded-pill bg-danger" style={{zIndex:"1",left:"80%"}} >{source} </span>
       </div>
       
       <img  src={!imageUrl?"https://static.toiimg.com/thumb/msid-107939961,width-1070,height-580,imgsize-327204,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
           <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
    )
  }


export default NewsItem
