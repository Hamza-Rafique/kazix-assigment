import Image from "next/image";
import React from "react";

interface SportCardProps {
  teamOne: string;
  teamTwo: string;
  time: string;
  clubName: string;
  location: string;
}

const SportCard: React.FC<SportCardProps> = ({
  teamOne,
  teamTwo,
  time,
  clubName,
  location,
}) => {
  return (
    <div className="bottom-4 p-3 rounded bg-secondary_dark_200 text-white w-96 mr-3">
      <div className="flex justify-between">
        <div className="flex">
          <Image
            src="/assets/icons/Sports.svg"
            alt="sports"
            width={18}
            height={18}
          />
          <div className="ml-4">
            {teamOne} - {teamTwo}
          </div>
        </div>
        <Image
          src="/assets/icons/chart-simple.svg"
          alt="chart"
          width={18}
          height={18}
        />
      </div>
      <div className="flex mt-2">
        <div>{time}</div>
        <Image
          src="/assets/icons/Frame.svg"
          alt="frame"
          width={15}
          height={15}
          className="mx-4"
        />
        <Image
          src="/assets/icons/Frame (1).svg"
          alt="frame"
          width={15}
          height={15}
        />
      </div>
      <div className="flex mt-2">
        <Image
          src="/assets/icons/4954.png"
          alt="frame"
          width={15}
          height={15}
          className="mr-4"
        />
        <div>{clubName}</div>
      </div>
      <div className="flex mt-2">
        <Image
          src="/assets/icons/64147.png"
          alt="frame"
          width={15}
          height={15}
          className="mr-4"
        />
        <div>{location}</div>
      </div>
      <div className="flex mt-2">
        1 X 2
      </div>
    </div>
  );
};

export default SportCard;
