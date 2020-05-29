import React from "react";
import "./Blog.css";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singlePost: {
        img: "",
        title: "",
		content: "",
	  },
	  
      allPost: [
		  	{title: 'Shail', content: 'she is cute'},
			{title: 'Ravi', content: 'He is ?'},
	  ],
	};
	// this.getAllPost()
  }

  getAllPost = ()=> {
	let url = 'https://randomuser.me/api/?nat=au&results=10&gender=female';
	fetch(url)
	.then(response=>response.json())
	.then(jsonResponse=> {
		this.setState({allPost: jsonResponse.results});
	}).catch(er=>{
		alert(er);
	})

  }

  handleOnChange = (event) => {
	let value = event.target.value;
	let singlePost = this.state.singlePost;
	singlePost.title = value;
    this.setState({singlePost});
  };

  handleOnContentChange = (event)=>{
	let value = event.target.value;
	let singlePost = this.state.singlePost;
	singlePost.content = value;
    this.setState({singlePost});
  }

  handleOnClick = () => {
	  let {allPost, singlePost} = this.state;
	  allPost.unshift(singlePost);
	  this.setState({allPost});
  } ;

  render() {
    return (
      <div className="display">
        <div className="create-post">
          <label>Title</label>
			<input className="input" value={this.state.singlePost.title} 
			onChange={this.handleOnChange}></input>
			<textarea
			className=""
			rows="10"
			cols="80"
			onChange={this.handleOnContentChange}
			value={this.state.singlePost.content}
			></textarea>
			<button className="action-blog" onClick={this.handleOnClick}>
			Post
			</button>
        </div>
        <div className="all-post">
			{this.state.allPost.map((singlePost, index)=><div className='single-post'>
					<p>{singlePost.title}</p>
					<p>{singlePost.content}</p>
				</div>
			)}
		</div>
      </div>
    );
  }
}

export default Blog;