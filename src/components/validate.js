const validate = values => {
  const errors = {}
  if (!values.modelName) {
    errors.modelName = 'Required'
  }
  if (values.modelGenre==0 || values.modelGenre==undefined) {
    errors.modelGenre = 'Required'
  }
  if (!values.modelShortTitle) {
    errors.modelShortTitle = 'Required'
  }
  if (!values.thumbnailImage) {
    errors.thumbnailImage = 'Please select thumbnail for 3D model !!'
  }
  if (!values.modelDescription) {
    errors.modelDescription = 'Required'
  }
  if (!values.featureOne) {
    errors.featureOne = 'Required';
  }
  if (!values.featureTwo) {
    errors.featureTwo = 'Required';
  }
  if (!values.featureThree) {
    errors.featureThree = 'Required';
  }
  if (!values.featureDescriptionOne) {
    errors.featureDescriptionOne = 'Required';
  }
  if (!values.featureDescriptionTwo) {
    errors.featureDescriptionTwo = 'Required';
  }
  if (!values.featureDescriptionThree) {
    errors.featureDescriptionThree = 'Required';
  }
  if(!values.blogImage){
    errors.blogImage="Please select background image for blog !!"
  }
  if (!values.blogDetails) {
    errors.blogDetails = 'Required';
  }
  if (!values.imagefeatures || !values.imagefeatures.length) {
   errors.imagefeatures = { _error: 'At least one image must be selected' }
 }
 else {
    const imagefeaturesArrayErrors = []
    values.imagefeatures.forEach((imagefeatures, imagefeaturesIndex) => {
      const imagefeaturesErrors = {}
      if (!imagefeatures || !imagefeatures.image) {
        imagefeaturesErrors.image = 'Required'
        imagefeaturesArrayErrors[imagefeaturesIndex] = imagefeaturesErrors
      }
    })
    if (imagefeaturesArrayErrors.length) {
      errors.imagefeatures = imagefeaturesArrayErrors
    }
  }
  if (!values.featurevideo || !values.featurevideo.length) {
   errors.featurevideo = { _error: 'At least one video must be selected' }
 }else {
    const featurevideoArrayErrors = []
    values.featurevideo.forEach((featurevideo, featurevideoIndex) => {
      const featurevideoErrors = {}
      if (!featurevideo || !featurevideo.video) {
        featurevideoErrors.video = 'Required'
        featurevideoArrayErrors[featurevideoIndex] = featurevideoErrors
      }
    })
    if (featurevideoArrayErrors.length) {
      errors.featurevideo = featurevideoArrayErrors
    }
  }
  return errors
}

export default validate
