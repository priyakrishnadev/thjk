import React from 'react';
import {CommentBox} from './CommentBox';
import {SuggestionBox} from './SuggestionBox';
import {ProductBlog} from './ProductBlog';
import {FeaturesList} from './FeaturesList';
import {ContactForm} from './ContactForm';
import {WebVRSuggestion} from './WebVRSuggestion';
import WebVR from './WebVR';

export class SmartProduct extends React.Component{
render(){
  // var containerStyle={
  //   width:"100%",
  //   height:"450px"
  // }
    return (
      <div className="container-fluid bg-darkGrey">
        <div className="row mx-0 mb-3">
          {/* <h3>{this.props.page}</h3>
          <h3>{this.props.pageId}</h3>*/}
          <div className="col-sm-3 col-md-3 col-lg-3  mb-2">
            <CommentBox page={this.props.page} pageId={this.props.pageId} />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 productWrapper">
            <div className="productVR rounded border" >
            <WebVR width={625} height={405} />
             {/* <WebVR /> <div id="container123"></div>
              <div id="container123" style={containerStyle}></div>
             */}
            </div>
            <div className="productFooter bg-white border p-2 mb-2">
              <h4>Sophia
                <span className="float-right productIcons text-info">
                  <span className="mx-2">
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"> 27</i>
                  </span>
                  <span className="mx-2">
                    <i className="fa fa-barcode" aria-hidden="true"> 300</i>
                  </span>
                  <span className="mx-2">
                    <i className="fa fa-eye" aria-hidden="true"> 27</i>
                  </span>
                </span>
              </h4>
              <div className="col-sm-12 col-md-12 col-lg-12 noPadding">
                <p className="text-secondary mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, aspernatur, magni! Iste nihil, eum rem labore modi, incidunt laboriosam eveniet illum cum possimus repudiandae necessitatibus ipsa, quis illo sapiente, nobis.</p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 noPadding">
                <div className="row mx-0">
                  <div className="col-sm-6 col-md-6 col-lg-6 noPadding">
                    <p className="productLaunchedDate mt-2 text-grey">Uploaded On 5/12/2017</p>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6  noPadding">
                    <span className="float-right text-secondary shareBtn rounded-circle">
                      <span className="productRating mr-3">
                        <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                        <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                        <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                        <i className="fa fa-star-o text-info" aria-hidden="true"></i>
                        <i className="fa fa-star-o " aria-hidden="true"></i>
                      </span>
                      <i className="fa fa-share-alt-square" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 ">
            <SuggestionBox />
          </div>
        </div>
        <div className="row mx-0">
          <div className="col-sm-3 col-md-3 col-lg-3  ">
             <ProductBlog />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 productFeatures rounded">
            <FeaturesList />
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 rounded text-center">
            <ContactForm />
          </div>
        </div>
        <div className="row mx-0 mt-4 mb-2">
          <div className="col-sm-12 col-md-12 col-lg-12 bg-info py-2 rounded text-center">
            <h5 className="text-white mb-0">You Might Also Like These</h5>
          </div>
        </div>
        <WebVRSuggestion />
      </div>
    );
  }
}
