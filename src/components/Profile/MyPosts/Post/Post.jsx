import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src="https://w7.pngwing.com/pngs/795/321/png-transparent-wunderlist-task-management-microsoft-action-item-microsoft-orange-microsoft-action-item.png"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}

            </div>
        </div>
    )
}

export default Post;

