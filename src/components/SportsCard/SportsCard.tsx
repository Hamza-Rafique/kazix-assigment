"use client";
import React from "react";
import Image from "next/image";

interface GameData {
  id: number;
  rate: number;
  teamOne: string;
  teamTwo: string;
  time: string;
  clubName: string;
  location: string;
}
interface SportCardProps {
  data: GameData[];
  loading: boolean;
  handleGameSelection: (rate: number) => void;
  selectedRates: number[];
}

const SportCard: React.FC<SportCardProps> = ({
  data,
  loading,
  handleGameSelection,
  selectedRates,
}) => {
  return (
    <>
      {loading && !data ? (
        <div className="flex items-center justify-center h-48">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {data.map((item) => (
            <div
              key={item.id}
              className="bottom-4 p-3 rounded bg-secondary_dark_200 text-white w-96 mr-3 mb-6"
            >
              <div className="flex justify-between">
                <div className="flex">
                  <Image
                    src="/assets/icons/Sports.svg"
                    alt="sports"
                    width={18}
                    height={18}
                  />
                  <div className="ml-4 text-md">
                    {item.teamOne} - {item.teamTwo}
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
                <div className="text-secondary_light_950 text-sm">
                  {item.time}
                </div>
                <Image
                  src="/assets/icons/Frame.svg"
                  alt="frame"
                  width={18}
                  height={18}
                  className="ml-4 mr-2"
                />
                <Image
                  src="/assets/icons/Frame (1).svg"
                  alt="frame"
                  width={18}
                  height={18}
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
                <div className="text-md">{item.clubName}</div>
              </div>
              <div className="flex mt-2">
                <Image
                  src="/assets/icons/64147.png"
                  alt="frame"
                  width={15}
                  height={15}
                  className="mr-4"
                />
                <div>{item.location}</div>
              </div>
              <div className="flex mt-2">1 X 2</div>
              <div className="flex mt-2">
                <div className="p-3 bg-secondary_dark_500 flex justify-between rounded w-28">
                  <div>1</div>
                  <div>2.3</div>
                </div>
                <div
                  onClick={() => handleGameSelection(item.rate)}
                  className={`p-3 flex justify-between rounded w-28 mx-2 ${
                    selectedRates.includes(item.rate)
                      ? "bg-primary text-secondary_dark_800"
                      : "bg-secondary_dark_500"
                  }`}
                >
                  <div>Draw</div>
                  <div>{item.rate}</div>
                </div>
                <div className="p-3 bg-secondary_dark_500 flex justify-between rounded w-28">
                  <div>2</div>
                  <div>2.3</div>
                </div>
                <div className="bg-secondary_dark_500 flex justify-center align-middle rounded-sm p-4 ml-2">
                  <Image
                    src="/assets/icons/Chevron.svg"
                    alt="below"
                    width={14}
                    height={14}
                  />
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default SportCard;
