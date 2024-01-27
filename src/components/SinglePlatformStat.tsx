type SinglePlatformStatProps = {
  title: string;
  amount: number;
  percentage: number;
  progressColor: string;
};

const SinglePlatformStat = ({
  title,
  amount,
  percentage,
  progressColor,
}: SinglePlatformStatProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="font-semibold text-lg text-[#22242C] pb-[1px]">{title}</p>
      <div className="relative h-3 bg-[#F5F5F5] rounded-[40px]">
        <div
          className={`absolute top-0 left-0 h-full rounded-[40px] ${progressColor}`}
          style={{ width: `${percentage * 3.75}%` }}
        ></div>
      </div>
      <div className="text-[#525252] text-lg leading-[26px] flex items-center justify-between">
        <span>${amount.toLocaleString()}</span>
        <span>+{percentage}%</span>
      </div>
    </div>
  );
};

export default SinglePlatformStat;
