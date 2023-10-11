import {useDispatch, useSelector} from 'react-redux'
import {login, logout, selectUser} from '../store/slice/userSlice'
import {auth, onAuthStateChanged} from '../firebase'
import { useEffect } from 'react'
import Header from '../components/Header'
function Admin(){

    const user = useSelector(selectUser)
  const dispatch = useDispatch()

 //check at page load if a user is authenticated

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

    return(
      <div className='app'>
          <Header/>
       <h1 className='text-adainblack'>Hello Admin</h1>
      </div>
    )
    

}


export default Admin