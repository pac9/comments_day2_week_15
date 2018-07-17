import React from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

class CommentBox extends React.Component {
   constructor(props){
    super(props);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
    this.state = {
      data: [{
         author: "Beth",
         text: "I hate cats!"
      },
      {
         author: "Sam",
         text: "I want out!"
      }]
    }
   }

   handleCommentSubmit(comment) {
    comment.id = Date.now()
    var newComments = this.state.data.concat([comment])
    this.setState({data: newComments})
  }

   render(){
      return (
         <div>
           <h2>Comments</h2>
           <CommentForm onCommentSubmit={this.handleCommentSubmit} />
           <CommentList data={this.state.data} />
         </div>
      )
   }

}

export default CommentBox;
