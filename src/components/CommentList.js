import React from "react";
import classnames from 'classnames';
import {connect} from 'react-redux';
import {getComments,upVotePoll,downVotePoll} from '../actions/commentActions';
import axios from 'axios';
import TimeAgo from 'timeago-react';


class CommentList extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     localVote: 0
   }
   this.handleUpvoteClicked = this.handleUpvoteClicked.bind(this);
 }

handleUpvoteClicked(id,voteStatus,like,product) {
  if(voteStatus === false){
    this.setState({localVote:like+1});
    this.props.upVotePoll(id,voteStatus,like,product);
  }else{
    this.setState({localVote:like-1});
    this.props.downVotePoll(id,voteStatus,like,product);
  }
}

componentDidMount(){
this.props.getComments()
}

  render(){
    return(
      <div>
        <div className="commentHeader bg-white border-0 text-center">
          <h4 className="px-2">{this.props.comments && this.props.comments.length} Comments</h4>
        </div>
        <div className="commentSection scrollBar bg-white">
          <ul>
            {this.props.comments && this.props.comments.slice(0).reverse().map( (comment, key) =>
              <li key={comment.id}>
                <div className="row mx-0 border py-2 px-2">
                  <div className="userComments col-sm-3 col-md-3 col-lg-3 noPadding">
                    <img src={`http://127.0.0.1:8000/${comment.avatar}`} className="img-circle rounded-circle border" alt="" width="100%" height="64px" />
                  </div>
                  <div className="userInfo col-sm-9 col-md-9 col-lg-9 noPadding">
                    <h6>{comment.name}</h6>
                    <p className="userComment">{comment.message}</p>
                  </div>
                  <div className="col-sm-8 col-md-8 col-lg-8 pl-1">
                    <span className="text-grey commentedTime">
                      <TimeAgo datetime={comment.created_at} locale='en' />
                    </span>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4 pr-0">
                    <span className={classnames('float-right text-grey like',
                    comment.voteStatus === true && 'text-info' )}
                    onClick={()=>{this.handleUpvoteClicked(comment.id,comment.voteStatus,comment.likes,comment.product)}}
                    > <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> {comment.likes}
                    </span>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  console.log(state);
  return{
    // comments:state.commentsWrapper.comments,
    comments:state.productComments.comments,
    upVotes:state.upVotes
  };
}

export default connect(mapStateToProps,{getComments,upVotePoll,downVotePoll})(CommentList);
