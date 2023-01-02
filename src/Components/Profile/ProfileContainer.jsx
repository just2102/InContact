import axios from 'axios'
import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { setProfile } from '../../Redux/profileReducer';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'

const ProfileAPIComponent = (props) => {
    const params = useParams()
    if (!params.userId) {
        params.userId = 27265
    }
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`)
        .then(response => {
          props.setProfile(response.data)
        });
    })
    return ( 
        <Profile profile = {props.profile}></Profile>
     );
}

function mapStateToProps (state) {
    return {
        profile: state.profilePage.profile
    }
}


const ProfileContainer = connect(mapStateToProps, {
    setProfile
}) (ProfileAPIComponent)

export default ProfileContainer
