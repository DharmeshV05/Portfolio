import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Project_card from "../project_card/Project_card";
import first from "./imgs/me.jpeg";
import second from "./imgs/frontend.png";
import third from "./imgs/travel.png";

const Projects = () => {
  // date
  const projects = [
    {
      img: first,
      langs: ["html", "css", "javascript", "react", "tailwind css"],
      title: "Portfolio",
      disc: "This is a portfolio which is hosted in Vercel",
    },
    {
      img: second,
      langs: ["html", "css", "javascript", "react"],
      title: "Frontend page",
      disc: "This is Frontend landing page with responsive ",
    },
    {
      img: third,
      langs: ["html", "css", "javascript", "react"],
      title: "Travel-spot",
      disc: "this is just a detail of travel areas ",
    },
  ];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div data-aos="fade-down" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          {/* right */}
         
          <Link to="/projects"> {/* Link to the updated route */}
  <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
    View All
  </button>
</Link>

          
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc }) => {
            return (
              <>
                <Project_card
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
