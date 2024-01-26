import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="ml-[80px] p-5 overflow-x-hidden">
        <div className="flex items-center justify-between gap-4">
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
      </main>
    </>
  );
}

export default App;
