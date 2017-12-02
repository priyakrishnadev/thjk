import axios from 'axios';
 // import FormData from 'form-data';
export const handleProductValues=(values)=>{
   // let formData = new FormData();
   // console.log(values.imagefeatures[0].image);
   // formData.append('file', values.imagefeatures[0]);
   // console.log(formData);
   // let data = new FormData();
   //
   //         for (var i = 0; i < values.imagefeatures.length; i++) {
   //             let file = values.imagefeatures[i].image;
   //             data.append('images' + i , file);
   //         }
   //         values.imagesforTab.push(data);

    // for (var i = 0; i < values.imagefeatures.length; i++) {
    //    let file = values.imagefeatures[i];
    //    let imageFile=new Blob(file);
    //    console.log(imageFile);
    //  }

   //   // console.log(file);
       // values.imagefeatures.push('image', imageFile));
   //     console.log(values.imagefeatures);
   // }
    // formData.append("images", values.imagefeatures[0].image);
    // console.log(formData);
            // let file = values.imagefeatures[i].image;
            // console.log(file);
            // values.imagefeatures.push('image', new Blob(file),'file'+i);
            // console.log(values.imagefeatures);
            // values.append('images[' + i + ']', file, 'file'.i);
            // console.log(data);
           // values.append('file', new Blob(values.imagefeatures[i].image[i]));
           // data.append('images[' + i + ']', file, file.name);
       // }

       // let data = new FormData();

       // for (var i = 0; i < values.imagefeatures.length; i++) {
       //   data.append('file',values.imagefeatures[i].image);
       //   console.log(data);
       // }
       var body = new FormData();
           Object.keys(values).forEach(( key ) => {
             body.append(key, values[ key ]);
           });
           for (var key of body.entries()) {
              console.log(key[0] + ', ' + key[1]);
          }

       // console.log(values.imagefeatures[0].image);
       // console.log(values.imagefeatures[1].image);
       // data.append('files',values.imagefeatures);
       // values.imagefeatures.forEach((imagefeatures, imagefeaturesIndex) => {
       //   data.append('file['+ imagefeaturesIndex +']',values.imagefeatures[imagefeaturesIndex].image);
       //   console.log(data);
       // })

      //  for (var key of data.entries()) {
      //   console.log(key[0] + ', ' + key[1]);
      // }
      //
      //  data.append('formdata',JSON.stringify(values));
      //
       const config = {headers: { 'Content-Type':undefined}}

  // const config = {headers: { 'Content-Type':'multipart/form-data;'}}
  // const config = {headers: { 'Content-Type': 'application/x-www-form-urlencoded'}}
  return dispatch=>{
    return axios.post('http://127.0.0.1:8000/addProduct',values,config).then(res=>{
      console.log("posted");
    })
    .catch()
  }
}

export const categoryLoad = () => {
  return dispatch=>{
    return axios.get('http://127.0.0.1:8000/getCategory')
    .then(res=>dispatch({
      type:'LOAD_CATEGORY',
      data:res.data
      }))
  }
}

export const productLoad = (category) => {
  // return dispatch=>{
  //   return axios.get()
  // }
}

export const getProductInfo = (category,product) => {
  // return dispatch=>{
  //   return axios.get()
  // }
}
