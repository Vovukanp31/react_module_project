import React from 'react';

import css from './userInfo.module.css'

const UserInfo = () => {
    return (
        <div className={css.user}>
            <img src="https://mintable-user-profile-bucket-test-demo2.s3-us-west-2.amazonaws.com/Profile/PROFILE_65ae87e6-0913-44b9-af24-8e314ebb3fa3.PNG" alt="user logo"/>
            <span>Papeta V.</span>
        </div>
    );
};

export default UserInfo;