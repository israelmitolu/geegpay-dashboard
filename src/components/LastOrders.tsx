import SingleOrder from "./SingleOrder";

const LastOrders = () => {
  return (
    <div className="w-full 2xl:w-[806px] h-[422px] rounded-[14px] bg-white border border-[#EDF2F7] px-5 pt-[18px] pb-[31px]">
      <div className="flex items-center justify-between mt-[14px] mb-5">
        <h3 className="text-lg text-[#26282C] font-semibold">Last Orders</h3>
        <span className="text-base lg:text-lg text-[#34CAA5] font-medium cursor-pointer">
          See All
        </span>
      </div>
      <div className="h-6 w-full flex items-center justify-between text-[#9CA4AB] font-medium text-base">
        <span className="w-[216px] font-medium ">Name</span>
        <div className="flex items-center gap-[34.75px]">
          <span className="w-[116px]">Date</span>
          <span className="w-[120px]">Amount</span>
          <span className="w-[95px]">Status</span>
          <span className="w-[80px]">Invoice</span>
        </div>
      </div>
      <div className="mb-3 mt-5 flex flex-col gap-4">
        <SingleOrder
          imgSrc="/images/orders1.png"
          date="Nov 15, 2023"
          amount="80,000"
          name="Marcus Bergson"
          status="Paid"
        />
        <SingleOrder
          imgSrc="/images/orders2.png"
          date="Nov 15, 2023"
          amount="150,000"
          name="Jaydon Vaccaro"
          status="Refund"
        />
        <SingleOrder
          imgSrc="/images/orders3.png"
          date="Nov 14, 2023"
          amount="87,000"
          name="Corey Schleifer"
          status="Paid"
        />
        <SingleOrder
          imgSrc="/images/orders4.png"
          date="Nov 14, 2023"
          amount="100,000"
          name="Cooper Press"
          status="Refund"
        />
        <SingleOrder
          imgSrc="/images/orders5.png"
          date="Nov 13, 2023"
          amount="78,000"
          name="Phillip Lubin"
          status="Paid"
        />
      </div>
    </div>
  );
};

export default LastOrders;
