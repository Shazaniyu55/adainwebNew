import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logout, selectUser } from '../store/slice/userSlice';
import Link from 'next/link';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutOfApp = () => {
      dispatch(logout());
      auth.signOut();
    };
  
    return (
        <div className="md:text-adainblack hover:text-adainwhite  bg-adainyellow hover:bg-adainblack md:bg:hover-adainblack rounded-xl lg:m-8 p-1  w-42 shadow-md">
        <Link href="/SignIn" className="sm:px-10 text-sm pr-2 mr-4 text-lg  lg:my-20" onClick={() => handleClick('checkout')}>
        {user ? <button onClick={logoutOfApp}>Logout</button> : ''}
        </Link>
      </div>

      
    );
  }

export default Header;