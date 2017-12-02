import React from 'react';

export class FeaturesList extends React.Component{
render(){
    return (
            <div className="bg-white  rounded-bottom">
              <ul id="productFeaturePane" className="nav nav-pills py-2 text-center rounded-top" role="tablist">
                <li className="nav-item col-sm-2 col-md-2 col-lg-2 ml-auto px-0">
                  <a className="nav-link active" href="#description" id="description-tab" role="pill" data-toggle="pill" aria-controls="description" aria-expanded="true">Description</a>
                </li>
                <li className="nav-item  col-sm-2 col-md-2 col-lg-2 px-0">
                  <a className="nav-link" href="#images" role="pill" id="images-tab" data-toggle="pill" aria-controls="images">Images</a>
                </li>
                <li className="nav-item  col-sm-2 col-md-2 col-lg-2 px-0">
                  <a className="nav-link" href="#videos" role="pill" id="videos-tab" data-toggle="pill" aria-controls="videos">Videos</a>
                </li>
                <li className="nav-item col-sm-2 col-md-2 col-lg-2 px-0">
                  <a className="nav-link " href="#location" id="location-tab" role="pill" data-toggle="pill" aria-controls="location" aria-expanded="true">Location</a>
                </li>
                <li className="nav-item  col-sm-2 col-md-2 col-lg-2 mr-auto px-0">
                  <a className="nav-link" href="#news" role="pill" id="news-tab" data-toggle="pill" aria-controls="news">News</a>
                </li>
              </ul>

              <div className="tab-content px-3 mt-3">
                <div role="tabpanel" className="tab-pane fade show active" id="description" aria-labelledby="description-tab">
                  <p>Welcome home! Click on the tabs to see the content change.</p>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="images" aria-labelledby="images-tab">
                  <p>A hat is a head covering. It can be worn for protection against the elements, ceremonial reasons, religious reasons, safety, or as a fashion accessory.</p>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="videos" aria-labelledby="videos-tab">
                  <p>Videos.</p>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="location" aria-labelledby="location-tab">
                  <p>Welcome home! Click on the tabs to see the content change.</p>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="news" aria-labelledby="news-tab">
                  <p>A hat is a head covering. It can be worn for protection against the elements, ceremonial reasons, religious reasons, safety, or as a fashion accessory.</p>
                </div>
              </div>
            </div>
          );
        }
      }
