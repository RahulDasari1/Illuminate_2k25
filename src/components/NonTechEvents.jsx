import { Link } from "react-router-dom";
import { EVENTS } from "../../data/eventsList";

const NonTechEvents = () => {
    const NON_TECH_EVENTS=EVENTS.filter((e)=>e.eventType==='non-tech');
  return (
    <div className='flex w-full flex-wrap gap-15 justify-center'>
        {NON_TECH_EVENTS.map((card,i)=>(
            <Link to={`/event/${card.id}`} key={i} className="w-75 px-5 pt-5 shadow-xl shadow-blue-400/30 rounded-xl">
                <img className="bg-amber-50  rounded-xl"  src={card.imgUrl} alt="" />
                <h1 className='text-center py-4 text-lg' >{card.eventTitle}</h1>
            </Link>
        ))}
    </div>
  )
}
export default NonTechEvents;