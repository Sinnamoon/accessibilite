import "./post.css";
import React from "react";

interface PostProps {
    post: {
        title: string;
        body: string;
        imgUrl: string;
        author: string;
    };
    index: number;
}

const Post: React.FC<PostProps> = ({post, index}) => {
    const {title, body, imgUrl, author} = post;
    return (
        <article className="post-container">
            <h1 className="heading">{title}</h1>
            <img className="image" src={imgUrl} alt="post"/>
            <p className="paragraph">{body}</p>
            <div className="info">
                <p>Written by: {author}</p>
            </div>
            <p>Index: {index}</p>
        </article>
    );
};

export default Post;
