import { useState, useEffect, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useDispatch, useSelector} from 'react-redux'
import {login, logout, selectUser} from '../store/slice/userSlice'
import {auth, onAuthStateChanged} from '../firebase'
import Login from '../components/Login';
import { Transition } from "@headlessui/react";
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import Header from '../components/Header';


function SignIn({children}){

  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);






  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  // check at page load if a user is authenticated

  useEffect(()=>{
    onAuthStateChanged(auth, (userAuth)=>{
      if(userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login(
            {
              email:userAuth.email,
              uid:userAuth.uid,
              displayName: userAuth.displayName,
              photoUrl: userAuth.photoURL,
            
            }
          )
        )
      }else{
        dispatch(logout())
      }

    })
    console.log('page loaded');

  }, [])

 
  return (
    <div className='app'>
     

      {!user ? (
        <Login />
      ) : (
        // <div className='flex justify-center items-center'>
        //   <div>
        //     <h1>Hello {user.displayName}!</h1>
        //     <p>{user.email}</p>
        //     <img src={user.photoUrl} alt='niyu'/>
           
        //   </div>
        // </div>

        <>
        <Header/>
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar showNav={showNav} />
      </Transition>
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? "pl-56" : ""
        }`}
      >
        <div className="px-4 md:px-16">{children}</div>
      </main>
    </>
        
        
    
      )}
    </div>
  ); 
    

}

export default SignIn