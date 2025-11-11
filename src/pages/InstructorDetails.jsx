import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Instructors } from "../assets/assets/dummyData";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const InstructorDetails = () => {
    const [Instructor, setInstrctor] = useState([])
    const {name} = useParams() 

    useEffect(()=> {
        const found = Instructors.filter(item=> item.name == name)
        setInstrctor(found)
    }, [])

    return ( 
        <div className="my-60 lg:px-30 px-5 transition-all duration-300">
            {Instructor.map(item=> (
                <div className="lg:flex lg:items-center gap-10 relative">
                    <div className="bg-indigo-500 w-[80%] lg:w-[40%] max-lg:left-[50%] max-lg:-translate-x-[50%] max-lg:top-22 aspect-square rounded-full absolute -z-10"></div>
                    <img src={item.removedBg} className="rounded-2xl lg:rounded-full lg:aspect-square lg:w-[40%] object-cover overflow-y-visible w-[80%] max-lg:mx-auto max-lg:mb-10 z-30" />
                    <div>
                        <p className="text-4xl font-bold">{item.name}</p>
                        <p className="text-orange-500 font-semibold mb-5">Our professional {item.language} Instructor</p>
                        <p>{item.resume}</p>
                        <p>{item.degree}</p>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Labore vero ut corrupti 
                            eaque dolor saepe maxime culpa similique, 
                            deserunt ad, ab incidunt sunt, sapiente veniam 
                            accusantium error tempora consequatur in.
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Officiis corporis esse 
                            magnam? Tempore eos accusamus tenetur placeat 
                            quas, minus enim minima praesentium quos odio 
                            odit porro unde id vitae quasi?</p>

                            <div className="text-4xl flex items-center gap-5 mt-5 *:cursor-pointer">
                                <IoLogoInstagram className="text-purple-600" />
                                <FaTelegramPlane className="text-blue-600"/>
                                <FaTwitter className="text-blue-600"/>
                                <FaYoutube className="text-red-500"/>
                            </div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default InstructorDetails;

{/* <img src={item.img} className="lg:rounded-full rounded-2xl lg:aspect-square object-cover lg:w-[40%] w-[80%] max-lg:mx-auto max-lg:mb-10" /> */}