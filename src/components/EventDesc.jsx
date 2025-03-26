import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { EVENTS} from '../../data/eventsList';



const EventDesc = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams();
    const card = EVENTS.find((c) => c.id === id);
    console.log(card.imgUrl)
  
    if (!card) return <h2>Card not found</h2>;
  
    return (
      <div className="pt-25" >
        <div className="py-10 pb-20 " >
            <h1 className="py-5 text-3xl text-center" >{card.eventTitle}</h1>
           <div className="flex flex-wrap justify-center xl:gap-20 gap-10 pt-5" >
            <img className="w-90 rounded-lg"  src={card.imgUrl} alt="" />
            <div className="xl:w-1/2 px-10 xl:px-0" >
            <p className="xl:text-lg" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nemo iusto possimus distinctio? Mollitia quaerat, necessitatibus aliquam eos deleniti non. Porro illo eveniet temporibus atque, velit doloribus in voluptate? Voluptates!</p>
            <Link to={'/'} ><button className="mt-3 px-4 py-2 bg-[#013239] text-xl rounded-lg hover:bg-[#13D1F5] hover:text-black transition-colors duration-400" >Register</button></Link>
            </div>
           </div>
        </div>
      </div>
    );
}
export default EventDesc;