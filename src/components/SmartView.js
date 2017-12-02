import React from 'react';
import {SmartProduct} from './SmartProduct';
import {SmartCategory} from './SmartCategory';

export class SmartView extends React.Component{
render(){
    const {page,pageId}=this.props.match.params

    var props = {};
    props.page = page;
    props.pageId = pageId;
    {/*Furniture Products RealEstate InteriorDesigns
    RestoCafes RestoPubs Automobiles HealthCare
    FitnessSports People Resorts Wedding Pets*/}

        if(page && pageId){
          return <SmartProduct {...props}/>
        }else{
          return <SmartCategory {...props}/>
        }
  }
}
