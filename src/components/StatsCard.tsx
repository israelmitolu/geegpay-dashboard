import Badge from "./Badge";

type StatsCardProps = {
  heading: string;
  value: string;
  iconSrc: string;
  percentage: number;
  isUptrend: boolean;
};

const StatsCard = ({
  heading,
  value,
  iconSrc,
  percentage,
  isUptrend,
}: StatsCardProps) => {
  return (
    <div className="w-[239px] h-[179px] rounded-[14px] border border-[#EDF2F7] p-4 flex flex-col gap-[10px]">
      <div className="flex items-center justify-between">
        <img src={iconSrc} alt="chart" />
        <img src="/icons/chart.svg" alt="more" />
      </div>
      <div>
        <span className="text-[#898989] font-medium text-base lg:text-lg mb-[5px]">
          {heading}
        </span>
        <h4 className="font-semibold text-lg xl:text-2xl">{value}</h4>
      </div>
      <div className="flex items-center gap-[10px]">
        <Badge isUptrend={isUptrend} value={percentage} />
        <span className="text-[#606060] font-inter text-sm">
          vs. previous month
        </span>
      </div>
    </div>
  );
};

export default StatsCard;
