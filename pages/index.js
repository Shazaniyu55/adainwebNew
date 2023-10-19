import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import NightMode from '../components/NightMode'
import ProductCard from '../components/ProductCard'

function Home(){
    return(
        <div>
              <Head>
          <title>Adain Technologies Ltd.</title>
          <meta name="Adain" content="...people, technologies and possibilities." />
          <link rel="Adain Logo" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins&display=swap" rel="stylesheet"/>
        </Head>

           
            {/** container for introduction */}
            <div className=''>
              
            </div>
            <NightMode />
            
            
            <div className='p-4'>
                <div className='flex flex-col'>
                <h1 className='text-xl text-adainyellow font-monteserat'>AdaIn Technologies Limited</h1>
               <p className='sm:font-popins text-2xl'>Excellence and timely delivery of solutions, improvement and possibilities.</p>

                </div>
            
            
            </div>

            {/**Div for get on board button  */}
            <div className='flex justify-start flex-col p-4'>
            <button className=' bg-adainyellow hover: bg-adainyellow w-40 sm:w-40  text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline'> <Link href="/Job">Get on board</Link> </button>
            </div>

        
        
       

    {/**About Adain section */}

        <div className='flex justify-center align-center'>
           <h1 className='text-xl text-center  text-adainyellow font-monteserat'>About AdaIn</h1>
           
           </div>
           <div className='sm:flex justify-center align-center p-10'>
            <p className='sm:text-2xl font-popins  text-left'>We are optimistic about developing  world class solution based products and provide services to meet the ever increasing demand resulting to growth,
                 technological improvement and business expansion in various spheres of human advancement.</p>
           </div>



            {/**Container fro our product */}
            <div className='flex justify-center items-center'>
            <h1 className=' text-xl text-adainyellow font-monteserat'>Our Product</h1>
            </div>

            {/**Our Product */}

            <ProductCard />
            
                  
    



           
        </div>

        
    )

}

export default Home