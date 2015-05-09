/** @jsx React.DOM */
(function(R){

  app();

  function app() {
    var CommentList = R.createClass({
      render: function() {
        return (
          <div className="commentList">
            <Comment author="Pete Hunt">This is one comment</Comment>
            <Comment author="Jordan Walke">This is *another* comment</Comment>
          </div>
        );
      }
    });

    var CommentForm = R.createClass({
      render: function() {
        return (
          <div className="commentForm">
          <p>Hello, world! I am a CommentForm.</p>
          </div>
        );
      }
    });

    var Comment = R.createClass({
      render: function() {
        return (
          <div className="comment">
            <h2 className="commentAuthor">
              {this.props.author}
            </h2>
            <p>{this.props.children}</p>
          </div>
        );
      }
    });

    var CommentBox = R.createClass({
      render: function() {
        return (
          <div className="commentBox">
          <h1>Comments</h1>
          <CommentList />
          <CommentForm />
          </div>
        );
      }
    });

    R.render(
      <CommentBox />,
      document.getElementById('app')
    );
    
    return false;
  }

  return false;

})(React);