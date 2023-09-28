import { useState, useEffect } from 'react';
import Image from 'next/image';
import TeamCard from '../components/TeamCard';
import ProductCard from '../components/ProductCard';



function About(){
    return(
        <div>
            <div className='p-4'>
            <h1 className='text-2xl text-center  text-adainyellow font-monteserat'>About Adain</h1>
            </div>
            {/**Image grid on about adain */}
            <div className='flex justify-center items-center'>
                <div className='flex flex-col sm:flex-row justify-center '>
                    <div className='flex justify-center items-center flex-col mt-4'>

                    <Image src='/images/Rectangle 23.png' width={300} height={100}/>
                    </div>

                    <div className='flex justify-center items-center flex-col mt-4'>

                    <Image src='/images/Rectangle 26.png' width={300} height={100}/>
                    </div>
                   
                    
                    

                </div>
                  

            </div>

            {/**Our mission */}

            <div className='sm:grid grid-cols-3 gap-10 mt-10'>
                {/**Our mission */}
                <div>
                <h1  className='text-xl mx-8 bg-adainyellow w-40 text-white px-4 py-2 rounded'>Our mission</h1>

                <p className='p-4 font-monteserat sm:text-2xl text-left'>
                To link consumers with service providers via developed
                 content based products that service the global ICT sphere.

                </p>
                

                </div>


                {/** Our vision*/}

                <div>
                <h1  className='text-xl mx-8 bg-adainyellow w-40 text-white px-4 py-2 rounded'>Our vision</h1>

                <p className='p-4 font-monteserat sm:text-2xl text-left'>
                To be the most preferred technological based company in Nigeria and 
                beyond that provide the right kind of products, provide the right kind of services 
                with boundless possibilities of adding value positively to humanity.



                </p>
                

                </div>

                {/**Our values */}

                <div>
                <h1  className='text-2xl mx-8 bg-adainyellow w-40 text-white px-4 py-2 rounded'>Our values</h1>

                <p className='p-4 font-monteserat sm:text-2xl'>
                Excellence and timely delivery of solutions, improvement and possibilities




                </p>
                

                </div>
             

            </div>
                {/**People technology solutions */}
            <div className='flex justify-center items-center mt-10'>
                <h1 className='text-xl text-adainyellow font-monteserat'>People Technology Posibilities</h1>
            </div>
            {/**Adain write up */}
            <div className='flex justify-center items-center p-4'>
                <p className='text-center font-monteserat sm:text-2xl text-left'>
                Technology has emerged and its speeding up. No doubt, it has influenced the way we live, interact and function generally. As it evolves, we can’t afford to be left behind. It is on this premise that ADAIN TECHNOLOGIES LIMITED was conceived and birthed.

ADAIN TECHNOLOGIES LIMITED is a privately owned company charged with the need to add value to humanity positively by answering the challenges in the ICT world and other technological advancement in general.

With a team of experienced professionals working round the clock, we are optimistic of developing world class solution based products and provide services to meet the ever increasing demand resulting to growth, technological improvement and business expansion in various spheres of human advancement.


                </p>

            </div>

        {/**Meet our team */}
        <div className='flex justify-center items-center m-10'>
            <h1 className='text-xl text-adainyellow font-monteserat translate-y-10'>Meet Our Team</h1>
        </div>

            <TeamCard />
        
            

            {/**Our Product */}
            <div className='flex justify-center items-center'>
            <h1 className=' text-2xl text-adainyellow font-monteserat'>Our Product</h1>
            </div>

            {/**Our Product */}
            <ProductCard />

           
            <div class="elfsight-app-597fb779-735d-41ae-a417-35c199b9ebc6"></div>

           
            
            
        </div>
    )

}

export default About