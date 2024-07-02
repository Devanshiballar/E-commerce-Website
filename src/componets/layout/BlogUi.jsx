import React, { useState  , useNavigate} from 'react';
import { Link } from 'react-router-dom';
import "../layout/Style.css"


function BlogUi({name,dec,src,id}) {
    return (
        <>
        <div className="card mt-5 mb-3" >
  <img src={src??"no data"} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
  
    <h3 className="card-title card-name">{name??"no data"}</h3>
    <p className="card-text">{dec??"no data"}</p>
   <Link to={`/singlecat/${id}`} className='btn read-btn'>Read More...</Link>
  </div>
</div>
        </>
    );
}

export default BlogUi;