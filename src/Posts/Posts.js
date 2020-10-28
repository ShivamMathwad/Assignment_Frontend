import Axios from 'axios';
import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';

class Posts extends React.Component {

    state = {
        posts: []
    }

    getAllPosts = async () => {
        let posts = (await Axios.get('http://localhost:8080/')).data;
        this.setState({ posts })
    }

    componentDidMount() {
        this.getAllPosts();
    }

    render() {
        let Posts = null;

        if (this.state.posts.length > 0) {
            Posts = (
                <React.Fragment>
                    {this.state.posts.map(post => {
                        return (
                            <Post
                                key={post._id}
                                name={post.name}
                                email={post.email}
                                date={post.dob}
                                phone={post.phone} />
                        )
                    })}
                </React.Fragment>
            )
        }

        return (
            <div className={classes.Posts}>
                {Posts}
            </div>
        );
    }
}

export default Posts;
