import { Link } from 'react-router-dom';
import { events } from '../assets/data/eventsList';

const Events = () => {
  return (
    <div className='py-20 px-10 ' >
        <h1 className="text-3xl text-center">Events</h1>
        <div className='flex gap-15 py-10 shrink-0 flex-wrap justify-center items-center' >
          {events.map((card,i)=>(
            <Link to={`/event/${card.id}`} key={i} className="w-75 px-5 pt-5 shadow-xl shadow-blue-400/30 rounded-xl">
              <img className="bg-amber-50  rounded-xl"  src={card.imgUrl} alt="" />
              <h1 className='text-center py-4 text-lg' >{card.eventTitle}</h1>
            </Link>
          ))}

        
        </div>
    </div>
  )
}
export default Events;