type BadgeProps = {
  isUptrend: boolean;
  value: number;
};

const Badge = ({ isUptrend, value }: BadgeProps) => {
  return (
    <div
      className={`py-1 px-2 rounded-full h-6 w-auto ${
        isUptrend ? "bg-[#34CAA51F]" : "bg-[#ED544E1F]"
      } text-[#34CAA5] text-xs font-medium flex items-center justify-center`}
    >
      {isUptrend ? (
        <img src="/icons/uptrend.svg" alt="uptrend" className="mr-1" />
      ) : (
        <img src="/icons/downtrend.svg" alt="downtrend" className="mr-1" />
      )}
      <span
        className={`font-medium text-xs ${
          isUptrend ? "text-[#34CAA5]" : "text-[#ED544E]"
        }`}
      >
        {value}%
      </span>
    </div>
  );
};

export default Badge;
