import { useState } from "react";
import BarChart from "../components/charts/BarChart";
import Dropdown from "./Dropdown";

const SalesTrend = () => {
  const [selectedOption, setSelectedOption] = useState("Monthly");

  const handleSelectOption = (option:string) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-full h-[374px] 2xl:max-w-[806px] py-4 px-5 rounded-[14px] bg-white border border-[#EDF2F7]">
      <div className="flex items-center justify-between py-[5.5px]">
        <h3 className="text-lg font-semibold text-[#26282C]">Sales Trends</h3>
        <div className="flex items-center gap-[10px]">
          <span className="font-medium text-sm text-[#3A3F51]">Sort by:</span>
          <Dropdown
            button={
              <div className="flex items-center gap-[10px] border border-[#E1DFDF] rounded-[20px] px-3 py-[6px] cursor-pointer bg-white h-8 ">
                <span className="text-xs text-[#3A3F51]">{selectedOption}</span>
                <img src="/icons/downCaret.svg" alt="open dropdown" />
              </div>
            }
            children={
              <div className="flex flex-col p-4 shadow-xl shadow-shadow-500">
                <a
                  href="#"
                  className="text-sm text-gray-800"
                  onClick={() => handleSelectOption("Weekly")}
                >
                  Weekly
                </a>
                <a
                  href="#"
                  className="mt-3 text-sm text-gray-800"
                  onClick={() => handleSelectOption("Monthly")}
                >
                  Monthly
                </a>
                <a
                  href="#"
                  className="mt-3 text-sm text-gray-800"
                  onClick={() => handleSelectOption("Yearly")}
                >
                  Yearly
                </a>
              </div>
            }
            classNames={"py-2 top-[2rem] left-0 w-max"}
          />
        </div>
      </div>
      <div className="h-[289px] w-full mt-4">
        <BarChart />
      </div>
    </div>
  );
};

export default SalesTrend;
