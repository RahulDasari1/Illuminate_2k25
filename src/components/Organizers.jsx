import { useState } from "react";
import { ORGANIZERS } from "../../data/organizers";

const Organizers = () => {
  const [anime, setAnime] = useState(null);

  return (
    <div className="py-10 flex flex-col items-center">
      <h1 className="text-3xl pb-15">Organizers</h1>
      <div className="flex flex-wrap xl:px-50 gap-15 justify-center">
        {ORGANIZERS.map((oranizer, id) => (
          <span
            key={id}
            onMouseEnter={() => setAnime(id)}
            onMouseLeave={() => setAnime(null)}
            className={`flex flex-col items-center transition-all duration-400 cursor-pointer ${
              anime===id ? "-translate-y-2 shadow-[#00d9ff]" : "shadow-amber-50"
            } p-5 rounded-2xl shadow `}
          >
            <img
              className={`w-45 transition-colors duration-300 rounded-full ${
                anime===id ? "bg-[#00d9ff]" : "bg-white"
              } `}
              src={oranizer.imgUrl}
              alt={oranizer.altText}
            />
            <p className="pt-3 font-[500] text-lg">{oranizer.name}</p>
            <p className="">{oranizer.title}</p>
          </span>
        ))}
      </div>
    </div>
  );
};
export default Organizers;
