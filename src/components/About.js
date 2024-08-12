
import React from 'react'
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div className="about">
        <h1>About Us</h1>
        <h2>This is Ashwini Wakchaure</h2>
       
        <UserClass name={"Ashwini Wakchaure (class based)"} location={"Pune"}/>
    </div>
  )
}

export default About