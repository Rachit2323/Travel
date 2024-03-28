import React from "react";
import electric from "../../assets/electric.jpeg";
import { GoHome } from "react-icons/go";
import { PiVanLight } from "react-icons/pi";
import { BsLightningCharge } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { AiOutlineSchedule } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiAdminLine } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="h-full w-full sm:w-1/6">
      <div
        style={{ background: "rgb(28,28,38)" }}
        className="h-full p-6 flex flex-col gap-6 sm:gap-15"
      >
        <div className="flex gap-2 justify-start items-center">
          <img className="w-8 h-8" src={electric} alt="Electric" />
          <h1 className="text-lg font-sans text-white"> {/* Increased font size here */}
            Electricfy
            <strong style={{ color: "skyblue" }}>it</strong>
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-start pt-8 sm:pt-16 justify-center px-1">
          <SidebarItem icon={<GoHome />} text="Overview" />
          <SidebarItem icon={<PiVanLight />} text="Vehicles" />
          <SidebarItem icon={<BsLightningCharge />} text="Charger" />
          <SidebarItem icon={<GrUserManager />} text="Driver" />
          <SidebarItem icon={<AiOutlineSchedule />} text="Schedules" />
          <SidebarItemReports />
          <SidebarItem icon={<RiAdminLine />} text="Admin Panel" />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => {
  return (
    <span className="flex gap-3 items-center text-white pl-2 cursor-pointer text-lg"> {/* Increased font size here */}
      {icon}
      {text}
    </span>
  );
};

const SidebarItemReports = () => {
  return (
    <span className="flex gap-3 items-center cursor-pointer text-lg py-1 pl-2 pr-8 rounded-[1.2rem]  bg-white text-blue-500">
      <HiOutlineDocumentReport />
      Reports
    </span>
  );
};

export default SideBar;
