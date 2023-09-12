import React from "react";
import { FiLinkedin, FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

export default function Footer(): JSX.Element {
  return (
    <div className="bottom-0 h-32 w-full bg-primary-variant text-on-primary">
      <div className="flex flex-row h-full items-center">
        <div className="tablet:basis-1/3 tablet:text-2xl tablet:ml-40 phone:text-lg phone:ml-4">
          &copy; 2023
        </div>
        <div className="basis-2/3 grow flex flex-row justify-evenly tablet:mr-20 phone:mr-4">
          <div>
            <FiLinkedin className="tablet:w-11 tablet:h-11 phone:w-6 phone:h-6" />
          </div>
          <div>
            <FiInstagram className="tablet:w-11 tablet:h-11 phone:w-6 phone:h-6" />
          </div>
          <div>
            <FiTwitter className="tablet:w-11 tablet:h-11 phone:w-6 phone:h-6" />
          </div>
          <div>
            <FiFacebook className="tablet:w-11 tablet:h-11 phone:w-6 phone:h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
