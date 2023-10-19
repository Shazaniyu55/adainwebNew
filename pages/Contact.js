import { useState, useEffect } from 'react';
import React, { Fragment } from 'react'
import Image from 'next/image';
import {collection, addDoc} from 'firebase/firestore'
import { db } from '../firebase';


function Contact(){
  const [formData, setFormData] = useState({
    Fullname: "",
    Email: "",
    Message: " "
  })
  const [fetchedData, setFetchedData] = useState([]); // State to hold fetched data
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [errorMessage, setErrormessage] = useState({
    Fullname: "",
    Email: "",
    Message: " "
  })
  
  
    const Submit = async(e)=>{
     
  
      e.preventDefault()
      if(ValidateForm()){
        // console.log('form submited', formData)

      }
      try {

         await addDoc(collection(db, "contact"), {
          Fullname: formData.Fullname,
         Email: formData.Email,
        Message: formData.Message,
        });
        // console.log("Document written with ID: ", docRef.id);
        // Clear the form after submission
      setFormData({
        Fullname: '',
        Email: '',
        Message: '',
      });
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      setIsSubmitted(true);

      // You can optionally reset the success message after a delay if needed
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); // Reset the message after 3 seconds


    }

    const handleInputChange = (e)=>{
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      

    }

    const ValidateForm = ()=>{
      let valid = true
      const newErrors = {
        Fullname: '',
        Email: '',
        Message: '',
      };

      if(formData.Fullname.trim() === ""){
        newErrors.Fullname = 'full name required'
        valid = false

      }
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.Email)) {
        newErrors.Email = 'Invalid email format';
        valid = false;
      }
      setErrormessage(newErrors)
      return valid

    }

   
    
  
    return(
      
        
          <Fragment>
            <div className='flex justify-center items-center mt-10'>
            <h1 className='text-4xl text-adainyellow font-monteserat '>Stay In Touch With Us</h1>

            </div>

            {/**Grid for the phone office and email svg icons */}
            <div className='flex flex-col sm:flex-row  justify-between p-10 gap-10'>
                <div className='flex justify-center items-center flex-col'>
                
                <Image className='' src='/images/phone.svg' width={50} height={50} alt='phone'/>
                <h1 className='text-sm font-monteserat'>Phone Number</h1>
                <p className='text-sm font-popins'>(+234) 908-260-3201</p>

                </div>

                <div className='flex justify-center items-center flex-col'>
                
                <Image className=''  src='/images/office.svg' width={50} height={50} alt='office'/>
                <h1 className=' text-sm font-monteserat'>Head office</h1>
                <p className='text-sm font-popins'>First floor, Sky Blue Building beside Beam clinic,
                         Along Aso B Mararaba Road, Nasarawa State</p>


                </div>


                <div className='flex justify-center items-center flex-col'>
                
                <Image className='' src='/images/email.svg' width={50} height={50} alt='email'/>

                <h1 className='text-sm font-monteserat'>Email address</h1>
                <p className='text-sm font-popins'>Info@adain.ng</p>


                </div>
            </div>



            {/**Send us a message section */}
            
            <div className='flex justify-center items-center mt-10'>

            <div className="w-full max-w-xl">
            <h1 className='text-center text-sm text-adainyellow font-monteserat'>Send us a message</h1>

      {/**Form */}
        <form onSubmit={Submit} method='post'className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
       <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Full Name
      </label>
      <input 
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      name="Fullname"
      required
      onChange={handleInputChange}
      defaultValue={formData.Fullname}
      type="text"
      placeholder="FullName"/>
      <p className='text-adainyellow'>{errorMessage.Fullname}</p>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Email
      </label>
      <input
      name='Email'
      required
      onChange={handleInputChange}
      defaultValue={formData.Email}
      className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="email" placeholder="Email"/>
      <p className='text-adainyellow'>{errorMessage.Email}</p>
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Message
      </label>
      <textarea
      name='Message'
      placeholder="Leave a comment..."
      defaultValue={formData.Message}
      required
      onChange={handleInputChange}
       id="message"
        rows="4"
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>

    </div>

    <div className="flex items-center justify-center">
      <button className="mx-8 bg-adainyellow text-white px-4 py-2 rounded font-popins" type="submit">
        Submit
      </button>

      {isSubmitted && <p>Form submitted</p>}

      
    </div>
  </form>
 
</div>
                
                

            </div>
            
            </Fragment>

        
        
    )

}

export default Contact