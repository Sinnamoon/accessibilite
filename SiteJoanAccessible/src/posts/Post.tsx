import "./post.css";
import React from "react";
import {Link} from "react-router-dom";

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
        <article className="post-container" aria-label="an article">
            <div className="title-and-image">
                <Link to={`/article/${index}`}><h2 className="heading"> {title} </h2></Link> <img className="image"
                                                                                                  src={imgUrl}
                                                                                                  alt={`Post titled ${title} by ${author}`}/>
            </div>
            <div className="paragraph-and-comments">
                <p className="paragraph">{body} Index: {index}</p>
                <a href={`/article/${index}#comments`} className="comments">Comments (6)</a>
            </div>
            <div className="info">
                <p>Author: {author}</p>
            </div>
        </article>
    );
};

export default Post;