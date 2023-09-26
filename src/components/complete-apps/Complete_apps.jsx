import React from 'react'
// imgs
import first from "../about_page_about_section/imgs/1.jpeg";
import second from "../about_page_about_section/imgs/2.jpeg";
import third from "../about_page_about_section/imgs/3.jpeg";
import forth from "../about_page_about_section/imgs/4.jpeg";
import fifth from "./imgs/Rectangle 22.png";
import Project_card from '../project_card/Project_card';

const Complete_apps = () => {
    const projects = [
        // 6 projects date
        {
            // get img from img folder
            img: first,
            langs: ["html", "css", "javascript", "react"],
            title: "Theme-Web",
            disc: "Theme Website Responsive ",
        },
        {
            img: second,
            langs: ["html", "css", "javascript", "react"],
            title: "Game-Shop",
            disc: "Shopping of any type of game in this website",
        },
        {
            img: third,
            langs: ["html", "css", "javascript", "react"],
            title: "Landing Page",
            disc: "Frontend Responsive landing page ",
        },
        {
            img: forth,
            langs: ["html", "css", "javascript", "react"],
            title: "My-shop",
            disc: "my-shop using api to get items and it is responsive ",
        },
        {
            img: fifth,
            langs: ["html", "TS", "Vue", "Node.js"],
            title: "Portfolio",
            disc: "You’re using it rn ",
        },
        {
            img: forth,
            langs: ["html", "css", "javascript"],
            title: "My-shop",
            disc: "my-shop using api to get items and it is responsive ",
        },
    ];
    return (
        <div>
            <div className=" pt-[114px] px-5 max-w-[1560px] mx-auto">
                {/* top / title */}
                <div className="">
                    {/* projects */}
                    <div className=" text-white font-bold text-[32px]">
                        <span className=" text-[#C778DD]">/</span>
                        <span>projects</span>
                    </div>
                    {/* list */}
                    <div className=" text-white mt-[14px]">List of my projects</div>
                </div>
                {/* completed tasks */}
                <div className="">
                    {/* title */}
                    <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
                        <span className=" text-[#C778DD]">#</span>
                        <span>complete-apps</span>
                    </div>
                    {/* projects */}
                    <div className="flex flex-wrap justify-start  gap-4 my-12">
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
            </div>
        </div>
    )
}

export default Complete_apps