import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import Image from 'next/image';
import MyModal from '../components/myModal';

import JobCard from '../components/JobCard';

 function Job(){

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
    
       
    const [showModal, setShowModal] = useState(false)
    return(
        <Fragment>
        
            <JobCard />
            <div className='flex justify-center'>
                        <button className='sm:relative top-10 text-adainwhite mx-8 bg-adainblack text-white px-4 py-2 rounded m-10' onClick={()=>{
                            setShowModal(true)
                        }}>Submit Resume</button>

                    </div>

            <MyModal isVisible={showModal} onClose={()=>{setShowModal(false)}} />
            <div class="elfsight-app-597fb779-735d-41ae-a417-35c199b9ebc6"></div>
          
      
         
      </Fragment>
    )

}

export default Job