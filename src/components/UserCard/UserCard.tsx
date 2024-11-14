import React, { FC } from 'react'
import { User } from '../user.types'
import './UserCard.css'

const UserCard : FC<User>= ({Data})  => {
  return (
    <div id='Usercard'>
        <img src={Data.picture.large} alt='User' />
      <h1>{Data.name.title} {Data.name.first} {Data.name.last}</h1>
    </div>
  )
}

export default UserCard
