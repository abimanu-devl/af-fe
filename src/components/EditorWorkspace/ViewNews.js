import React from "react";
import { Link } from "react-router-dom";

const ViewNews = () =>{
    return(
<div className="card-header">
<h4>View Conference News</h4>
<div className="container">
<div className="position-absolute top-50 start-50" style={{  marginLeft: "20%", marginTop:"10%" }}>
<div  className="shadow p-3 mb-5 bg-body rounded" >
<table class="table caption-top">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Flyer Image</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
      <Link to="/editor/editNews" className="btn btn-outline-success">
              Edit 
      </Link>
      <Link to="/editor/deleteNews" className="btn btn-outline-danger">
              Delete
      </Link>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>
      <Link to="/editor/editNews" className="btn btn-outline-success">
              Edit 
      </Link>
      <Link to="/editor/deleteNews" className="btn btn-outline-danger">
              Delete
      </Link>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>
      <Link to="/editor/editNewsr" className="btn btn-outline-success">
              Edit 
      </Link>
      <Link to="/editor/deleteNews" className="btn btn-outline-danger">
              Delete
      </Link>
      </td>
    </tr>
  </tbody>
</table>

 </div>
 </div>
 </div>
 </div>
  
    );
};


export default ViewNews;