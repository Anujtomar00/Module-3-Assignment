import { useState } from "react";
import CommentLists from "./CommentLists";
import classes from './Post.module.css';


const Post = (props) => {
    const [comments, setComments] = useState([]);
    const [hide, setHide] = useState(false);
    const CommentHandler = (async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.id}`);
        const data = await response.json();
        setComments(data);

        setHide(!hide);
    });


    let content = <p>Empty</p>;

    if (comments.length > 0) {
        content = <CommentLists comment={comments} />


    }

    return (
        <li className={classes.post}>
            <div className="title">
                <h2>{props.title}</h2>
            </div>
            <h3>{props.body}</h3>
            <button onClick={() => CommentHandler()}>{hide ? "Hide Comments" : "Show Comments"}</button>
            {hide ? <section>{content}</section> : null}

        </li>
    )
};

export default Post;