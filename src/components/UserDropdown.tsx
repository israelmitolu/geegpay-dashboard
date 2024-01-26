import Dropdown from "./Dropdown";

const UserDropdown = () => {
  return (
    <div>
      <Dropdown
        button={
          <div className="flex items-center gap-[12px] px-2 py-[6px] border border-[#DADDDD] rounded-[28px] h-[52px] cursor-pointer">
            <div className="flex items-center gap-2">
              <img
                className="h-10 w-10 rounded-full"
                src="/images/profile.png"
                alt="Elon Musk"
              />
              <div className="font-inter text-right">
                <p className="text-base text-[#26282C] mb-1">Justin Bergson</p>
                <p className="text-sm text-[#787486]">Justin@gmail.com</p>
              </div>
            </div>
            <img src="/icons/downCaret.svg" alt="open dropdown" />
          </div>
        }
        children={
          <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500">
            <div className="p-4">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-navy-700">
                  👋 Hey, Justin
                </p>
              </div>
            </div>
            <div className="h-px w-full bg-gray-200 " />

            <div className="flex flex-col p-4">
              <a href=" " className="text-sm text-gray-800 ">
                My Profile
              </a>
              <a href=" " className="mt-3 text-sm text-gray-800">
                Account Settings
              </a>
              <a
                href=" "
                className="mt-3 text-sm font-medium text-red-500 hover:text-red-500 transition duration-150 ease-out hover:ease-in"
              >
                Log Out
              </a>
            </div>
          </div>
        }
        classNames={"py-2 top-[3rem] -left-[4px] w-max"}
      />
    </div>
  );
};

export default UserDropdown;
