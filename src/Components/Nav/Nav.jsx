import React from "react";
import { IoIosNotifications, IoIosArrowDown } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import electric from "../../assets/electric.jpeg";

const Nav = () => {
  return (
    <div className="bg-black w-full">
      <div className="w-full flex justify-between items-center p-4 flex-wrap">
        <span className="text-white font-sans text-lg mb-4 sm:mb-0">Reports</span>
        <section className="flex items-center gap-2 relative">
          <span className="relative flex">
            <IoIosNotifications
              style={{ color: "white", width: "28px", height: "28px" }}
            />
            <BsDot
              style={{
                color: "red",
                bottom: "20%",
                width: "30px",
                height: "30px",
                left: "10%",
              }}
              className="absolute"
            />
          </span>

          <img
            src={electric}
            style={{ borderRadius: "50%", width: "20px", height: "20px" }}
            alt="User Avatar"
          />
          <h1 className="text-white font-sans text-lg hidden sm:block">UserName</h1>
          <span
            style={{ left: "100%", color: "white" }}
            className="flex  items-center justify-center"
          >
            <IoIosArrowDown />
          </span>
        </section>
      </div>
    </div>
  );
};

export default Nav;
