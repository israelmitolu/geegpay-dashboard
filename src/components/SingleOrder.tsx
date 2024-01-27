type SingleOrderProps = {
  imgSrc: string;
  name: string;
  status: string;
  date: string;
  amount: string;
};

const SingleOrder = ({
  imgSrc,
  name,
  status,
  amount,
  date,
}: SingleOrderProps) => {
  return (
    <div>
      <span className="border-t border-[#EDF2F6] w-full h-[1px] block"></span>
      <div className="h-6 w-full flex items-center justify-between text-[#9CA4AB] font-medium text-base mt-3">
        <span className="w-[216px] flex items-center gap-[6px]">
          <img
            src={imgSrc}
            alt={`${name} avatar`}
            className="w-8 h-8 rounded-[33.333px]"
          />
          <span className="text-[#3A3F51]">{name}</span>
        </span>
        <div className="flex items-center gap-[34.75px]">
          <span className="w-[116px] text-[#737373]">{date}</span>
          <span className="w-[120px] text-[#0D062D] font-medium">
            ${amount}
          </span>
          <span
            className={`w-[95px] text-base ${
              status === "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]"
            }`}
          >
            {status}
          </span>
          <div className="w-[80px] flex items-center gap-[6px] cursor-pointer">
            <img src="/icons/download.svg" alt="download" />
            <span className="text-[#0D062D] text-sm">View</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
