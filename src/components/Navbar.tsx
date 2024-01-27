import moment from "moment";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  return (
    <header className="md:ml-[80px] h-[88px] p-5 bg-[#FAFAFA]/10 flex items-center justify-between sticky top-0 z-10 backdrop-blur-xl">
      {/* // <header className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]"> */}
      <p className="font-semibold text-xl text-[#26282C]">Dashboard</p>

      <div className="flex items-center gap-[20px]">
        <div className="hidden xl:flex h-[48px] 2xl:w-[349px] font-normal pl-4 items-center bg-white text-navy-700 dark:bg-navy-900 dark:text-white border border-[#DADDDD] rounded-3xl">
          <p className="text-xl mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.68945 1C12.9293 1 16.3781 4.3727 16.3781 8.51907C16.3781 10.4753 15.6104 12.2595 14.3542 13.5986L16.8261 16.0109C17.0574 16.2371 17.0582 16.6031 16.8269 16.8294C16.7116 16.9436 16.5592 17 16.4076 17C16.2568 17 16.1052 16.9436 15.9892 16.8309L13.4874 14.3912C12.1714 15.4219 10.5028 16.0389 8.68945 16.0389C4.44955 16.0389 1 12.6655 1 8.51907C1 4.3727 4.44955 1 8.68945 1ZM8.68945 2.15821C5.10251 2.15821 2.18433 5.01125 2.18433 8.51907C2.18433 12.0269 5.10251 14.8807 8.68945 14.8807C12.2756 14.8807 15.1938 12.0269 15.1938 8.51907C15.1938 5.01125 12.2756 2.15821 8.68945 2.15821Z"
                fill="#78828A"
              />
            </svg>
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block p-3 h-full w-full rounded-full bg-white text-sm placeholder:text-[#A3A3A3] font-medium text-[#26282C] outline-none font-inter sm:w-[90%]"
          />
        </div>
        <div className="ml-0.5 p-4 hidden lg:flex items-center gap-[10px]">
          <img src="/icons/solar_calendar-linear.svg" alt="calendar" />
          <span className="text-[#26282C] font-inter text-sm font-medium">
            {moment().format("MMMM Do YYYY")}
          </span>
        </div>
        <img
          src="/icons/notifications.svg"
          alt="notifications"
          className="cursor-pointer"
        />
        <UserDropdown />
      </div>
    </header>
  );
};

export default Navbar;
