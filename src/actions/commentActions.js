import {reset} from 'redux-form';
// import { SubmissionError } from 'redux-form'
import axios from 'axios';
 // const uuidv4 = require('uuid/v4');
 import uuidv4 from 'uuid/v4';

export const commentLike = (id,payload,enabled) => {
  return {
    type: 'SET_LIKE',
    id,
    payload,
    enabled
  };
}

export const commentPush = (values) => {
    return dispatch=>{
     return axios.post('http://127.0.0.1:8000/postComment',values)
     .then(res=>{
          dispatch(reset('AddComment'))
          // dispatch({type:'COMMENT_SUCCESS',msg:"Successfully Posted"})
          dispatch(getComments())
        })
      .catch(err=>dispatch({type: 'CREATE_COMMENT_FAIL',err}));
     }
}

export const getComments = () => {
  return dispatch=>{
   return axios.get('http://127.0.0.1:8000/getComment')
      .then(res=>dispatch({type:'FETCH_ALL_COMMENTS',payload:res.data}))
     // .then(res=>dispatch(checkVotePoll(res.data)))
  }
}

export const downVotePoll = (id,voteStatus,like,product) => {
  const values={id,voteStatus,like,product}
  return dispatch=>{
   return axios.post('http://127.0.0.1:8000/unlikeComment',values)
   .then(res=>{return axios.get('http://127.0.0.1:8000/postHits/' + id)})
    .then(res=>dispatch(vote(id,res.data.likes)))
  }
}

export const upVotePoll = (id,voteStatus,like,product) =>{
  const values={id,voteStatus,like,product}
  return dispatch=>{
   return axios.post('http://127.0.0.1:8000/likeComment',values)
    // .then(res=>{return axios.get('http://127.0.0.1:8000/postHits/`id`',{params:{id:id}})})
    .then(res=>{return axios.get('http://127.0.0.1:8000/postHits/' + id)})
    .then(res=>dispatch(vote(id,res.data.likes)))
 }
}

export const vote = (id,data) => {
  return{
    type:"TOGGLE_VOTE",
    id,
    data
  };
}
