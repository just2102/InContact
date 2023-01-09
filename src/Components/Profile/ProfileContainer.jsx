import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus} from '../../Redux/profileReducer';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

const ProfileAPIComponent = (props) => {
    const params = useParams()
    useEffect(() => {
        if (params.userId==='me' && props.currentUser!==undefined) {
            params.userId = props.currentUser.id
        }
        props.getProfile(params.userId)
        props.getStatus(params.userId)
    }, [params.userId, props.currentUser, props.isAuthorized])
    return ( 
        <Profile 
        profile = {props.profile}
        status = {props.status}
        updateStatus = {props.updateStatus}
        isGettingProfile = {props.isGettingProfile} 
        isAuthorized = {props.isAuthorized}></Profile>
     );
}


function mapStateToProps (state) {
    return {
        profile:            state.profilePage.profile,
        status:             state.profilePage.status,
        isGettingProfile:   state.profilePage.isGettingProfile,

        currentUser:    state.auth.currentUser,
    }
}

const ProfileContainer = compose(
    connect(mapStateToProps,{getProfile, getStatus, updateStatus}),
    withAuthRedirect
)(ProfileAPIComponent)

export default ProfileContainer
