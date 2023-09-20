import { useState, useEffect } from 'react';
import Image from 'next/image';


function Blog(){
    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    useEffect(()=>{
        const target = new Date('12/31/2023 23:59:59')
        const interval = setInterval(()=>{
            const now = new Date()
            const difference = target.getTime() - now.getTime()
            const d = Math.floor(difference / (1000 * 60 * 60 * 24))
            setDays(d)

            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            setHours(h)

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            setMinutes(m)

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

            if ( d <= 0 && h <= 0 && m <= 0 && s <= 0){
                setPartyTime(true);
            }

            
        }, 1000)
        return () => clearInterval(interval);
        

    }, [])
    return(
        <div>
            <div className='flex justify-center items-center'>
              <h1 className='text-4xl font-monteserat'>LATEST NEWS AND UPCOMING EVENT</h1>


              
            </div>
            {/** timer */}


            <div className='flex justify-center items-center'>

      {partyTime ? (
        <>
          <h1>Happy new year!</h1>
        </>
      ) : (
        <>
          <div className="mt-10">
            <div className="flex flex-col  sm:flex-row justify-between">
              <div className="timer-segment">
                <span className="sm:text-4xl font-popins">{days}</span>
                <span className="label"></span>
              </div>
              <span className="sm:text-4xl font-popins">:</span>
              <div className="timer-segment">
                <span className="sm:text-4xl font-popins">{hours}</span>
                <span className="label"></span>
              </div>
              <span className="sm:text-4xl font-popins">:</span>
              <div className="timer-segment">
                <span className="sm:text-4xl font-popins">{minutes}</span>
                <span className="label"></span>
              </div>
              <span className="sm:text-4xl font-popins">:</span>
              <div className="timer-segment">
                <span className="sm:text-4xl font-popins">{seconds}</span>
                <span className="label"></span>
              </div>
            </div>
          </div>
         
        </>
      )}
    </div>





        </div>
    )

}

export default Blog