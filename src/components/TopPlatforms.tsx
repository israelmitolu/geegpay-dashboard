import React from "react";
import SinglePlatformStat from "./SinglePlatformStat";

const TopPlatforms = () => {
  return (
    <div className="w-full 2xl:w-[488px] h-auto pt-4 pr-4 pl-5 pb-5 rounded-lg bg-white">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg text-[#26282C] font-semibold">Top Platform</h3>
        <span className="text-lg text-[#34CAA5] font-medium cursor-pointer">
          See All
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <SinglePlatformStat
          title="Book Bazaar"
          amount={2500000}
          percentage={15}
          progressColor="bg-[#6160DC]"
        />
        <SinglePlatformStat
          title="Artisan Aisle"
          amount={1800000}
          percentage={10}
          progressColor="bg-[#54C5EB]"
        />
        <SinglePlatformStat
          title="Toy Troop"
          amount={1200000}
          percentage={8}
          progressColor="bg-[#FFB74A]"
        />
        <SinglePlatformStat
          title="X Store"
          amount={600000}
          percentage={5}
          progressColor="bg-[#FF4A55]"
        />
      </div>
    </div>
  );
};

export default TopPlatforms;
