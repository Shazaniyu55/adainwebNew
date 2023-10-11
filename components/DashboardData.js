import { useDispatch,  useSelector } from "react-redux";
import { postData } from "../redux/dashboardSlice";
import {getDocs} from 'firebase/firestore'
import { useState } from "react";
import { db } from "../firebase";


const DashBoardData = ()=>{
    // const [product, setProduct] = useState([])

    // const fetchData = async()=>{
    //     const querySnapShots = await getDocs(collection(db, "Jobs"))
    //     const contactList = []
    //     querySnapShots.forEach((doc) => {
    //         contactList.push(doc.data())
    //         console.log(doc.data())
            
    //     });
    //     setProduct(contactList)

    // }

    // useEffect(()=>{
    //     fetchData()

    // }, [])

    

}

export default DashBoardData