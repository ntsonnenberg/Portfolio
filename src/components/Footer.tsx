import React from "react";
import { FiLinkedin, FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

export default function Footer(): JSX.Element {
  return (
    <div className="bottom-0 h-32 w-full bg-primary-variant text-on-primary">
      <div className="flex flex-row h-full items-center">
        <div className="basis-1/3 text-2xl ml-40">C. 2023</div>
        <div className="basis-2/3 flex flex-row justify-evenly mr-20">
          <div>
            <FiLinkedin className="w-11 h-11" />
          </div>
          <div>
            <FiInstagram className="w-11 h-11" />
          </div>
          <div>
            <FiTwitter className="w-11 h-11" />
          </div>
          <div>
            <FiFacebook className="w-11 h-11" />
          </div>
        </div>
      </div>
    </div>
  );
}
