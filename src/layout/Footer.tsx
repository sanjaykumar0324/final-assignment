import React from "react";
import { COPYRIGHT_TEXT } from "../utils/constants";

const Footer: React.FC = () => {
  return (
    <div className="border border-t-slate-500">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2  p-2 lg:px-20 ">
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-1 flex-col">
              <h1 className="text-3xl md:text-4xl lg:text-5xl">Vince</h1>
              <h3 className="text-sm text-gray-500">email : sanju@gmailcom</h3>
              <h3 className="text-sm text-gray-500">phone : 9e8eyyeyy</h3>
            </div>
            <div>
              <p className="text-sm">Sign up for sale</p>
              <div className="border border-black flex w-full md:w-1/2 justify-between">
                <div className="p-2 flex-grow" style={{ flexBasis: "70%" }}>
                  <input placeholder="email address" className="w-full" />
                </div>
                <div style={{ flexBasis: "30%" }}>
                  <button className="bg-black text-white w-full p-2">SignUp</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-10 ">
            <div className="flex flex-col items-center">
              <h1 className="text-sm xl:text-lg font-bold">About us</h1>
              <ul className="flex gap-3 flex-col">
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-sm xl:text-lg font-bold">Resource</h1>
              <ul className="flex gap-3 flex-col">
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
              </ul>
            </div>{" "}
            <div className="flex flex-col items-center">
              <h1 className="text-sm xl:text-lg font-bold">Information</h1>
              <ul className="flex gap-3 flex-col">
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
              </ul>
            </div>{" "}
            <div className="flex flex-col items-center">
              <h1 className="text-sm xl:text-lg font-bold">Help</h1>
              <ul className="flex gap-3 flex-col">
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
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
