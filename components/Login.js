import React from "react";
import
{auth, createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword}from '../firebase'
import { useDispatch } from "react-redux";
import {login} from '../store/slice/userSlice'

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Login(){
  const router = useRouter()
  // use state constants for the the form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [showSignIn,  setShowSignIn] = useState(false)


  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    // Sign in an existing user with Firebase
    signInWithEmailAndPassword(auth, email, password)
    // returns  an auth object after a successful authentication
    // userAuth.user contains all our user details
      .then((userAuth) => {
      // store the user's information in the redux state
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
// display the error if any
      .catch((err) => {
        alert(err);
      });
  };

// A quick check on the name field to make it mandatory
  const register = () => {
    setShowSignIn(true)
    if (!name) {
      return alert('Please enter a full name');
    }


    // Create a new user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
      // Update the newly created user with a display name and a picture
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profilePic,
        })
          .then(
            // Dispatch the user information for persistence in the redux state
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            )
          )
          .catch((error) => {
            console.log('user not updated');
          });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <div className='flex justify-center items-center'>

        {!showSignIn ? (<div>
          <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4  w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Full name (required for registering)'
            type='text'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder='Profile picture URL (optional)'
            type='text'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 

          />
            </div>

           
            
            <div className="flex flex-wrap -mx-3 mb-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            type='email'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 

          />
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            type='password'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 

          />
          </div>

          <button className="mx-8 bg-adainyellow text-white px-4 py-2 rounded font-popins" onClick={register}>
            Register Now
          </button>
            <p>already register click to login</p>
          <button onClick={()=> setShowSignIn(true)}>clik</button>
          
        </form>

        </div>): (<div>
          
          <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4  w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            type='email'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 

          />
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            type='password'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 

          />
          </div>

            <div className="flex justify-center items-center">
          <button type='submit' onClick={loginToApp} className="mx-8 bg-adainyellow text-white px-4 py-2 rounded font-popins">
            LogIn
          </button>

          </div>

          </form>
        </div>)}
        

          
        
      </div>
    </div>
  );
}



export default Login