import React from 'react';
import { Link } from 'react-router-dom';

export class ProductBlog extends React.Component{
render(){
    return (
            <div>
              <div className="col-sm-12 col-md-12 col-lg-12 bg-white pt-3 pb-5 rounded">
                 <img src="../../img/productavatar.jpg" alt="" width="100%" height="250px" />
                 <h4 className="py-2 mb-0">Sophia</h4>
                 <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit  amet expedita iste natus voluptate</p>
                 <Link to="/blog" type="button" className="btn btn-info btn-sm float-right">Read More</Link>
              </div>
            </div>
          );
        }
      }
