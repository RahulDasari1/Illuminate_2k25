import { Link } from 'react-router-dom';
import { EVENTS} from '../../data/eventsList';
import { useState } from 'react';
import TechEvents from './TechEvents';
import NonTechEvents from './NonTechEvents';

const Events = () => {

  const [events,setEvents]=useState('tech');

  return (
    <div className='py-20 px-10'>
        <h1 className="text-3xl text-center">Events</h1>
        <div className='py-10 flex-col flex items-center'>
          <div className='flex gap-8 text-xl justify-center items-center py-1'>
            <p onClick={() => {
              setEvents("tech");
            }} className={`border-transparent border-b-[2px] transform-color duration-500 cursor-pointer ${events === "tech" ? 'border-white' : ''}`}>Tech Events</p>
            <p onClick={() => {
              setEvents("non-tech");
            }} className={`border-transparent border-b-[2px] cursor-pointer transform-all duration-500 ${events === "non-tech" ? 'border-white' : ''}`}>Non-Tech Events</p>
          </div>
        </div>
        <div className='flex gap-15 shrink-0 flex-wrap justify-center items-center relative overflow-hidden'>
          <div className={`transition-transform transform duration-500 ${events==='tech'?"translate-x-0":"-translate-x-full"}`} >
            <TechEvents/>
          </div>
          <div className={` transition-transform transform duration-500 absolute top-0 ${events==='non-tech'?"translate-x-0":"translate-x-full"}`} >
            <NonTechEvents/>
          </div>
        </div>
    </div>
  )
}
export default Events;