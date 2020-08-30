import React from 'react'
import Profile from './Profile'
import { useSelector } from 'react-redux'
import { getUser } from '../reducers/user-reducer'

const MyProfile = () =>{
    const currentUser = useSelector(getUser)
    return <>Hello {currentUser && <Profile user={currentUser}/>}</>


}

export default MyProfile    