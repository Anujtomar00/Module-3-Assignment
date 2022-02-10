import Post from './Post';
import classes from './PostLists.module.css';

const PostsList=(props)=>{
    return(
    <ul className={classes['posts-list']}>
        {props.posts.map((post)=>(
            <Post
            key={Math.random()}
            id={post.id}
            title={post.title}
            body={post.body}
            />
        ))}
    </ul>
    );
};

export default PostsList;