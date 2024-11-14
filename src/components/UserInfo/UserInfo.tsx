import React, { useEffect } from 'react'
import { useState } from 'react'
import {User} from '../user.types'
import UserCard from '../UserCard/UserCard';
import './UserInfo.css'

const UserInfo = () => {
    const [userData, setUserData] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    function clickHandler(){
        setLoading(true);
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {setUserData([...userData, ...data.results]) ; setLoading(false)})
    }
    useEffect(()=>{
        clickHandler();
    },[]);
    return (
    <div id='mainScreen'>
     <button onClick={clickHandler} id='AddButton'>Add User</button>
    {
        loading? <h1>Loading ...</h1> : (userData?.map((Data, index)=>{
            return (<UserCard key={index} Data={Data} />)
        }))
    }  
    </div>
  )
}

export default UserInfo
