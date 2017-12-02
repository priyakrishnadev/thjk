import React from 'react';
 import FileInput from './FileInput';
import { Field, FieldArray, reduxForm } from 'redux-form';
import validate from './validate'
import {connect} from 'react-redux';
import {handleProductValues,categoryLoad} from '../actions/productActions'
import Dropzone from 'react-dropzone';
// import { getProductInfo } from './actions/productActions';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className="form-group">
      <input {...input} type={type} placeholder={label}  className="form-control" />
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  </div>
)

const renderDropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone
        name={field.name}
        multiple={field.input.name=="imagefeatures1" ? true : false}
        className="productInfoDropZone"
        onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}

      {files && Array.isArray(files) && (
        <ul className=" row imagesList">
          { files.map((file, i) => <li key={i}
          className= "col-sm-2 col-md-2 col-lg-2 ">{file.name}
          <div>
          Image Preview
          <img src={file.preview} width="100%" height="200px" /></div>
          </li>) }
        </ul>
      )}
    </div>
  );
}

const renderTextarea = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div className="form-group">
      <textarea {...input} type={type} placeholder={label} rows="10" className="form-control shareThought"></textarea>
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  </div>
)

const renderImageFeatures = ({ fields, meta: { error, submitFailed } }) => (
  <div>
      <button type="button" className="btn btn-success" onClick={() => fields.push({})}>
        <i className="fa fa-plus-circle" aria-hidden="true"></i> Add Images
      </button>
      {submitFailed && error && <div className="text-danger">{error}</div>}
      <ul className="featuresList">
        {fields.map((imagefeatures, index) => (
          <li key={index} className="col-md-2  my-2">
          <button
              type="button"
              title="Remove Image"
              className="btn btn-danger pull-right"
              onClick={() => fields.remove(index)}
            ><i className="fa fa-trash" aria-hidden="true"></i>
            </button>
            <h5>Image #{index + 1}</h5>
            <div className="form-group">
            <Field name={`${imagefeatures}.image`}
               component={FileInput}
               type="file"
            />
            </div>
          </li>
        ))}
      </ul>
</div>
)
const renderVideoFeatures = ({ fields, meta: { error, submitFailed } }) => (
  <div>
      <button type="button" className="btn btn-success" onClick={() => fields.push({})}>
        <i className="fa fa-plus-circle" aria-hidden="true"></i> Add Videos
      </button>
      <span className="text-danger pull-right">{/*Please do not add images and videos features here!!*/}</span>
      {submitFailed && error && <div className="text-danger">{error}</div>}
      <ul className="featuresList">
        {fields.map((featurevideo, index) => (
          <li key={index} className="col-md-4  my-2">
          <button
              type="button"
              title="Remove Video"
              className="btn btn-danger pull-right"
              onClick={() => fields.remove(index)}
            ><i className="fa fa-trash" aria-hidden="true"></i>
            </button>
            <h5>Video #{index + 1}</h5>
            <div className="form-group">
              <Field name={`${featurevideo}.video`}
                 component="input"
                 type="text"
                 className="form-control"
              />
            </div>
          </li>
        ))}
      </ul>
</div>
)
// to upload the file in redux-form
// const FileInput = ({ input:{value: omitValue,...inputProps}, label, type,
//   meta: { touched, error, warning } }) => (
//         <div>
//         <input
//           type={type} {...input} className='form-control'
//         />
//         {touched && error && <span className="text-danger">{error}</span>}
//         </div>)
function handleProductInfo(values, dispatch) {
return dispatch(handleProductValues(values));
}



class ProductInformation extends React.Component{
  constructor(props){
    super(props);

  }

componentDidMount(){
  this.props.categoryLoad();
}

  render(){
    const { handleSubmit, getProductInfo, pristine, reset, submitting} = this.props

    return(
      <div className="row mx-0  ">
         <div className="container-fluid productInfoForm bg-darkGrey">
         <form onSubmit={handleSubmit(handleProductInfo)} encType='multipart/form-data'>
              <div className="row mx-0 mb-3 pt-3 rounded text-white bgSmartView">
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <h3>Product Information</h3>
                  </div>

                  <div className="col-sm-3 col-md-3 col-lg-3 ">
                    <div className="form-group">
                      <Field name="selectCategory" component="select" className="form-control">
                        <option value="0" disabled>Select Category</option>
                        { this.props.category && this.props.category.map((category) =>
                               <option key={category.id} value={category.name} className="textTransform">{category.name}</option>
                            )
                        }
                      </Field>
                    </div>
                  </div>

                  <div className="col-sm-3 col-md-3 col-lg-3 ">
                    <div className="form-group">
                      <Field name="selectProduct" component="select" className="form-control">
                        <option value="0" disabled>Select Product</option>
                        <option value="Furniture">Furniture</option>
                      </Field>
                    </div>
                  </div>

                  <div className="col-sm-2 col-md-2 col-lg-2 ">
                    <button type="button" className=" btn btn-primary btn-block"
                    >
                    {/*onClick={() => getProductInfo(category,product)}*/}
                      <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Product Info
                    </button>
                  </div>
              </div>
              <div className="card border border-secondary border-top-0">
                <h4 className="card-header bg-secondary text-white">
                  Model Info
                </h4>

                <div className="card-body">
                    <div className="row">

                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="form-group">
                          <Field
                            name="modelName"
                            type="text"
                            component={renderField}
                            label="Model Name"
                          />
                        </div>
                      </div>

                      <div className="col-sm-2 col-md-2 col-lg-2">
                        <div className="form-group">
                          <Field
                            name="modelLikes"
                            type="number"
                            component={renderField}
                            label="Model Likes"
                          />
                        </div>
                      </div>

                      <div className="col-sm-2 col-md-2 col-lg-2">
                        <div className="form-group">
                            <Field
                              name="modelViews"
                              type="number"
                              component={renderField}
                              label="Model Views"
                            />
                        </div>
                      </div>

                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="form-group">
                            <Field
                              name="modelAverageRating"
                              type="number"
                              component={renderField}
                              label="Average Rating Out of 5"
                            />
                        </div>
                      </div>


                    </div>
                    <div className="row">
                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="form-group ">
                        <label>Model Genre/Category</label>
                        <Field name="modelGenre" component="select" className="form-control">
                            <option value="0" disabled>Select Category</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Products">Products</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Interior Designs">Interior Designs</option>
                            <option value="Resto Cafes">Resto Cafes</option>
                            <option value="Resto Pubs">Resto Pubs</option>
                            <option value="Auto mobiles">Auto Mobiles</option>
                            <option value="Health Care">Health Care</option>
                            <option value="Fitness Sports">Fitness Sports</option>
                            <option value="People">People</option>
                            <option value="Resorts">Resorts</option>
                            <option value="Pets">Pets</option>
                            <option value="Wedding">Wedding</option>
                          </Field>
                        </div>

                        <div className="form-group ">
                          <Field
                            name="modelShortTitle"
                            type="text"
                            component={renderField}
                            label="Model Mini Title"
                          />
                        </div>
                          <div className="form-group">
                              <label>Suggestion Slot</label>
                                <Field name="suggestionSlot" component="select" className="form-control">
                                  <option value="0" disabled>None</option>
                                  <option value="1">Rank 1</option>
                                  <option value="2">Rank 2</option>
                                  <option value="3">Rank 3</option>
                                  <option value="4">Rank 4</option>
                                  <option value="5">Rank 5</option>
                                </Field>
                          </div>

                      </div>
                      <div className="col-sm-8 col-md-8 col-lg-8">
                        <div className="form-group ">
                          <label htmlFor="modelDescription">Model Description</label>
                          <Field
                            name="modelDescription"
                            component={renderTextarea}
                            rows="12"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                      <div className="form-group ">
                        <label>Thumbnail Image</label>
                      {/*  <Field name="thumbnailImage"
                           component={FileInput}
                           type="file"
                        />*/}
                        <Field
                          name="thumbnailImage1"
                          component={renderDropzoneInput}
                        />

                      </div>
                      </div>
                    </div>
                </div>
              </div>

              <div className="card my-3 border-secondary">
                <h4 className="card-header bg-secondary text-white">
                  Features List
                </h4>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                      <div className="form-group">
                        <Field
                          name="featureOne"
                          type="text"
                          component={renderField}
                          label="Feature Tab Title"
                        />
                        <label>Feature Tab Description</label>
                        <Field
                          name="featureDescriptionOne"
                          component={renderTextarea}
                        />
                      </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                      <div className="form-group">
                        <Field
                          name="featureTwo"
                          type="text"
                          component={renderField}
                          label="Feature Tab Title"
                        />
                        <label>Feature Tab Description</label>
                        <Field
                          name="featureDescriptionTwo"
                          component={renderTextarea}
                        />
                      </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                      <div className="form-group">
                        <Field
                          name="featureThree"
                          type="text"
                          component={renderField}
                          label="Feature Tab Title"
                        />
                        <label>Feature Tab Description</label>
                        <Field
                          name="featureDescriptionThree"
                          component={renderTextarea}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="card-header bg-secondary text-white">
                  Add Images
                </h4>
                <div className="card-body">
                {/*  <FieldArray name="imagefeatures" component={renderImageFeatures} />*/}
                  <Field
                    name="imagefeatures1"
                    component={renderDropzoneInput}
                  />
                </div>
                <h4 className="card-header bg-secondary text-white">
                  Add Videos
                </h4>
                <div className="card-body">
                  <FieldArray name="featurevideo" component={renderVideoFeatures} />
                </div>
                <h4 className="card-header bg-secondary  text-white">
                  Blog
                </h4>
                <div className="card-body">
                  <div className="form-group">
                    <label>Blog Image</label>
                    {/*<Field
                      name="blogImage"
                      component={FileInput}
                      type="file"
                    />*/}
                    <Field
                      name="blogImage1"
                      component={renderDropzoneInput}
                    />
                    <br />
                    <label>Blog Details</label>
                    <Field
                      name="blogDetails"
                      component={renderTextarea}
                    />
                  </div>
                </div>
              </div>

              <div className="card my-3 border-secondary">
                <div className="card-body">
                    <div className="row mx-0">
                      <div className="container-fluid px-0 mb-2">
                        <div className="alert alert-warning pull-right" role="alert">
                          <span className="alert-link"><i className="fa fa-exclamation-triangle font-weight-bold" aria-hidden="true"></i> Before publishing the product information,make sure all the information entered above are correct & verified !!</span>
                        </div>
                      </div>
                      <div className="container-fluid px-0">
                        <div className="form-group pull-right">
                          <button type="submit" className="btn btn-success" disabled={submitting}>
                            <i className="fa fa-paper-plane" aria-hidden="true"></i> Publish Product Info
                          </button>
                        </div>
                        <div className="form-group pull-right mx-3">
                          <button type="button" className="btn btn-primary text-white"
                           disabled={pristine || submitting} onClick={reset}
                           >
                            <i className="fa fa-eraser" aria-hidden="true"></i> Clear All Values
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

            </form>
         </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    category:state.category.category
  }
}

export default connect( mapStateToProps, {onSubmit: handleProductInfo,categoryLoad})
(reduxForm({form: "ProductInformation",validate})( ProductInformation ));
