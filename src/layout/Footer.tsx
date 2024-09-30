import React from "react";
import { COMPANY_NAME, COPYRIGHT_TEXT, EMAIL, ONLINE_DOT_ICON, PHONE } from "../utils/constants";
import { footerData } from "../data/footerData";

const Footer: React.FC = () => {
  return (
    <div className="border border-t-slate-500">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 mt-10  p-2 lg:px-10 ">
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-1 flex-col">
              <div className="flex gap-1 items-baseline ">
                <h1 className="text-3xl md:text-4xl lg:text-5xl ">{COMPANY_NAME} </h1>
                <ONLINE_DOT_ICON className="text-lg text-green-500 "/>
              </div>
              <h3 className="text-sm text-black"><span className="text-gray-500">Email:</span> {EMAIL}</h3>
              <h3 className="text-sm text-black"><span className="text-gray-500">Phone:</span> {PHONE}</h3>
            </div>
            <div>
              <p className="text-sm">Sign up for sale</p>
              <div className="border border-black flex w-full md:w-1/2 justify-between">
                <div className="p-2 flex-grow" style={{ flexBasis: "70%" }}>
                  <input placeholder="email address" className="w-full focus:outline-none" />
                </div>
                <div style={{ flexBasis: "30%" }}>
                  <button className="bg-black text-white w-full p-2">SignUp</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-10 lg:mb-10  ">
            <div className="flex flex-col items-center lg:items-start mb-5 lg:mb-0">
              <h1 className="text-sm xl:text-lg font-bold">About us</h1>
              <ul className="flex gap-3 flex-col mt-4 items-center lg:items-start">
               {footerData.aboutUs.map((item,index)=>(
                <li key={index} className="hover:text-red-500 text-sm xl:text-lg" >{item}</li>
               )) }
                
              </ul>
            </div>
            <div className="flex flex-col items-center mb-5 lg:items-start">
              <h1 className="text-sm xl:text-lg font-bold">Resource</h1>
              <ul className="flex gap-3 flex-col mt-4 items-center lg:items-start">
               {footerData.resource.map((item,index)=>(
                <li key={index} className="hover:text-red-500 text-sm xl:text-lg" >{item}</li>
               )) }
                
              </ul>
            </div>{" "}
            <div className="flex flex-col items-center mb-5 lg:items-start">
              <h1 className="text-sm xl:text-lg font-bold">Information</h1>
              <ul className="flex gap-3 flex-col mt-4 items-center lg:items-start">
               {footerData.information.map((item,index)=>(
                <li key={index} className="hover:text-red-500 text-sm xl:text-lg" >{item}</li>
               )) }
                
              </ul>
            </div>{" "}
            <div className="flex flex-col  mb-5 items-center lg:items-start">
              <h1 className="text-sm xl:text-lg font-bold">Help</h1>
              <ul className="flex gap-3 flex-col mt-4 items-center lg:items-start">
               {footerData.help.map((item,index)=>(
                <li key={index} className="hover:text-red-500 text-sm xl:text-lg" >{item}</li>
               )) }
                
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-black w-full" />
      <div className="grid grid-cols-1 lg:grid-cols-2 py-4 px-10">
        <div className="text-sm">{COPYRIGHT_TEXT}</div>
        <div></div>
      </div>
      </div>
  );
};

export default Footer;
