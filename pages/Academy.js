import { useState, useEffect } from 'react';
import Image from 'next/image';
import AcademyCard from '../components/AcademyCard'
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../firebase'


function Academy(){

  const[isFormVisible, setIsFormVisible]= useState(false)
  const toggleFormVisibility = ()=>{
    setIsFormVisible(!isFormVisible)
  }


  const [formData, setFormData] = useState({
    ParentName: "",
    contact: "",
    Email:"",
    telephone: " ",
    studentFullName: "",
    studentPhone: "",
    academyLevel: "",
    ageRange: "",
    country: "",
    state:"",
    courseLeve: "",
    course:""
  })
  const [fetchedData, setFetchedData] = useState([]); // State to hold fetched data
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [errorMessage, setErrormessage] = useState({
    ParentName: "",
    contact: "",
    Email:"",
    telephone: " ",
    studentFullName: "",
    studentPhone: "",
    academyLevel: "",
    ageRange: "",
    country: "",
    state:"",
    courseLeve: "",
    course:""
  })
  
  
    const Submit = async(e)=>{
     
  
      e.preventDefault()
      if(ValidateForm()){
        // console.log('form submited', formData)

      }
      try {

         await addDoc(collection(db, "academy"), {
          ParentName: formData.ParentName,
        contact: formData.contact,
        Email: formData.Email,
        telephone: formData.telephone,
        studentFullName: formData.studentFullName,
        studentPhone: formData.studentPhone,
        academyLevel: formData.academyLevel,
        ageRange: formData.ageRange,
        country: formData.country,
        state: formData.state,
        courseLeve: formData.courseLeve,
        course: formData.course
        });
        // console.log("Document written with ID: ", docRef.id);
        // Clear the form after submission
      setFormData({
        ParentName: '',
      contact: '',
      Email: '',
      telephone: '',
      studentFullName: '',
      studentPhone: '',
      academyLevel: '',
      ageRange: '',
      country: '',
      state: '',
      courseLeve: '',
      course: ''
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
        ParentName: '',
        contact: '',
        Email: '',
        telephone: '',
        studentFullName: '',
        studentPhone: '',
        academyLevel: '',
        ageRange: '',
        country: '',
        state: '',
        courseLeve: '',
        course: ''
      };

      if(formData.ParentName.trim() === ""){
        newErrors.ParentName = 'Parent name required'
        valid = false

      }
      if(formData.contact.trim() === ""){
        newErrors.contact = 'contact required'
        valid = false

      }
      if(formData.telephone.trim() === ""){
        newErrors.telephone = 'telephone required'
        valid = false
  
      }

      if(formData.studentFullName.trim() === ""){
        newErrors.studentFullName = 'student full name required'
        valid = false
  
      }

      if(formData.studentPhone.trim() === ""){
        newErrors.studentPhone = 'student phone required'
        valid = false
  
      }

      if(formData.academyLevel.trim() === ""){
        newErrors.academyLevel = 'academy required'
        valid = false
  
      }

      if(formData.ageRange.trim() === ""){
        newErrors.ageRange = 'age  required'
        valid = false
  
      }

      if(formData.country.trim() === ""){
        newErrors.country = 'country required'
        valid = false
  
      }
      if(formData.state.trim() === ""){
        newErrors.state = 'state required'
        valid = false
  
      }

      if(formData.courseLeve.trim() === ""){
        newErrors.courseLeve = 'course Level required'
        valid = false
  
      }
      if(formData.course.trim() === ""){
        newErrors.course = 'course required'
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
      <div>
        <AcademyCard />

        <div className='flex justify-center items-center m-10'>
        <button onClick={toggleFormVisibility} className="mx-8 bg-adainyellow text-white px-4 py-2 rounded font-popins">
        {isFormVisible ? 'Hide form': 'Show form'}

         </button>
         </div>

        {isFormVisible && (
            <div>
                 <form onSubmit={Submit} method='post'className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
       <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Parent Name
      </label>
      <input 
              className="mt-4 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="grid-first-name" 
              type="text" 
              defaultValue={formData.ParentName}
              onChange={handleInputChange}
              name='ParentName'
              placeholder="parent fullname"/>
              <p>{errorMessage.ParentName}</p>
    </div>
    <div className='mb-6'>
      <label className='block text-gray-700 text-sm font-bold mb-2'>Contact</label>
      <input 
              className="mt-4 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="grid-last-name" 
              defaultValue={formData.contact}
              onChange={handleInputChange}
              type="text" 
              name='contact'
              placeholder="Contact address"/>
              <p>{errorMessage.contact}</p>

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
        Telephone
      </label>

      <input 
              className="mt-4 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              defaultValue={formData.telephone}
              onChange={handleInputChange}
              type="text" 
              name='telephone'
              placeholder="telephone"/>
              <p>{errorMessage.telephone}</p>

    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
      Student's Fullname
      </label>

      <input 
              className="mt-4 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              defaultValue={formData.studentFullName}
              onChange={handleInputChange}
              type="text" 
              name='telephone'
              placeholder="telephone"/>
              <p>{errorMessage.studentFullName}</p>

    </div>


    


  


    <div className="flex items-center justify-center">
      <button className="mx-8 bg-adainyellow text-white px-4 py-2 rounded font-popins" type="submit">
        Submit
      </button>

      

      
    </div>
  </form>
            </div>
              
        )}
       
        {/**div for whatsapp contact */}
        <div className="elfsight-app-597fb779-735d-41ae-a417-35c199b9ebc6"></div>
        
      </div>
    )
}

export default Academy