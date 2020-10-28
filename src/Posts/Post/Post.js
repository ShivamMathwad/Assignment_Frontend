import React from 'react';

import classes from './Post.module.css';

const post = (props) => {
    return (
        <div className={classes.Post}>
            <label>Name:  </label><b>{props.name}</b>  <br /><br />
            <label>Date of Birth:  </label><b>{props.date}</b>  <br /><br />
            <label>Email:  </label><b>{props.email}</b>  <br /><br />
            <label>Phone no:  </label><b>{props.phone}</b>
        </div>
    );
}

export default post;