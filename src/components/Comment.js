import classes from './Comment.module.css';

const Comment=(props)=>{
    return(
        <li className={classes.comment}>
            <h4>{props.email}</h4>
            <h5>{props.body}</h5>
        </li>
    )
};

export default Comment;