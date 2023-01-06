import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { getProfile } from '../../Redux/profileReducer';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

const ProfileAPIComponent = (props) => {
    const params = useParams()
    useEffect(() => {
        //fix this later by letting the Navbar recognize the currentUser (this displays user's own profile by /profile/me link)
        if (params.userId==='me' && props.currentUser!==undefined) {
            params.userId = props.currentUser.id
        }
        props.getProfile(params.userId)
    }, [params.userId, props.currentUser, props.isAuthorized])
    return ( 
        <Profile profile = {props.profile} isGettingProfile = {props.isGettingProfile} isAuthorized = {props.isAuthorized}></Profile>
     );
}


function mapStateToProps (state) {
    return {
        profile:            state.profilePage.profile,
        isGettingProfile:   state.profilePage.isGettingProfile,

        currentUser:    state.auth.currentUser,
    }
}

const ProfileContainer = compose(
    connect(mapStateToProps,{getProfile}),
    withAuthRedirect
)(ProfileAPIComponent)

export default ProfileContainer
