import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://pbs.twimg.com/media/CqcB1EDW8AAkns7.jpg" alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                Ava + description
            </div>
        </div>
    );

}

export default ProfileInfo;

