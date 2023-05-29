import React from 'react'
import pencil from "../asset/pencil.svg";
import heartbeat from "../asset/heartbeat.svg";
import { motion } from 'framer-motion';

const GetBlood = () => {
  const infoCard=(props)=>{
    return (
    <div className="h-[45vh] w-[25vw] my-0 p-0 relative flex items-center justify-center">
      <div className="absolute flex items-center justify-center lg:h-[13vmin] lg:w-[13vmin] md:h-[11vmin] md:w-[11vmin] h-[12vmin] w-[12vmin] md:-left-12 lg:-left-7 md:top-1/3 lg:top-28 top-1/3 -left-7 sm:text-xl md:text-2xl lg:text-4xl text-black transform translate-x-1/4 rounded-full" 
        style={{ border:'5px solid black', textShadow:'0 0 2px black'}}>
          {props.infonumber}
      </div>
      <div className="md:h-[23vmax] md:w-[23vmax] h-[21vmax] w-[21vmax] absolute flex flex-col top-1/4 items-center justify-center rounded-full overflow-hidden shadow-lg bg-white" style={{top:'40%', zIndex:100}}>
        <div className="md:h-[11vmin] md:w-[11vmin] h-[6vmin] w-[6vmin] overflow-hidden rounded-full">
          <img src={pencil} alt="" className="md:scale-95 scale-20"/>
        </div>
        <div className='w-[85%] break-normal inline-block p-2 text-center text-xs md:text-sm lg:text-base'>
          {props.infotext}
        </div>
      </div>
    </div>
    );
  };
  return (
  <div>
    <h1 className="text-4xl font-bold pl-16 pt-10 font-mono hover:text-red-300 transition-colors duration-300 ease-in-out">
      How to get Blood?
    </h1>
    <motion.div
      className="flex justify-center items-center px-10"
      initial={{ opacity: 0, position: "relative", top: "-50px" }}
      whileInView={{ opacity: 1, position: "relative", top: "0px" }}
      transition={{ duration: 1 }}
    >
      <div className="h-fit w-full md:mb-18 lg:mb-24 mb-6 flex flex-col items-center justify-center">          
        <table>
          <tr>
            <td className='flex items-center justify-center'>
              {infoCard({infotext:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',infonumber:1})}
            </td>
          </tr>
        </table>
        <table className="w-full -mt-36 md:-mt-44 lg:-mt-52 lg:ml-18 md:ml-6 ml-2">
          <tr>
            <td>
              {infoCard({infotext:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',infonumber:2})}
            </td>
            <td className="pt-20 md:pt-36 lg:pt-64" >
              <img src={heartbeat} alt="" className=" scale-x-.1 md:scale-x-110 lg:scale-x-130" style={{marginLeft:'-3%'}}/>
            </td>
            <td>
              {infoCard({infotext:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',infonumber:3})}
            </td>
          </tr>
        </table>
      </div>
    </motion.div>
  </div>
  );
};

export default GetBlood