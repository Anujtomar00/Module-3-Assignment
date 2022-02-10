import Comment from "./Comment";
import classes from "./commentL.module.css";
const CommentLists=(props)=>{
    return(
        <ul className={classes.list}>
            {props.comment.map((comments)=>(
                <Comment key={Math.random()}
                id={comments.id}
                email={comments.email}
                body={comments.body}

                />
            )
            )}
        </ul>
    );
};

export default CommentLists;