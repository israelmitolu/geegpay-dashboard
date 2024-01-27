import LastOrders from "./components/LastOrders";
import Navbar from "./components/Navbar";
import SalesTrend from "./components/SalesTrend";
import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import TopPlatforms from "./components/TopPlatforms";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="md:ml-[80px] p-5 bg-[#FAFAFA] overflow-x-hidden">
        <div className="flex flex-col 2xl:flex-row items-center  gap-5 mb-5">
          <SalesTrend />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 2xl:w-[488px] w-full">
            <StatsCard
              heading="Total Order"
              value="350"
              iconSrc="/icons/Orders.svg"
              percentage={23.5}
              isUptrend={true}
            />
            <StatsCard
              heading="Total Refund"
              value="270"
              iconSrc="/icons/Refund.svg"
              percentage={23.5}
              isUptrend={false}
            />
            <StatsCard
              heading="Average Sales"
              value="1567"
              iconSrc="/icons/Sales.svg"
              percentage={23.5}
              isUptrend={false}
            />
            <StatsCard
              heading="Total Income"
              value="$350.000"
              iconSrc="/icons/Income.svg"
              percentage={23.5}
              isUptrend={true}
            />
          </div>
        </div>
        <div className="flex flex-col 2xl:flex-row gap-5 mb-5">
          <LastOrders />
          <TopPlatforms />
        </div>
      </main>
    </>
  );
}

export default App;
