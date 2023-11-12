import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search } from "./";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <header className="w-[183%] lg:w-full md:w-full">
      <div className="flex bg-amazonclone text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img
              className="h-[35px] w-[100px] m-2"
              src={"../images/amazon.png"}
              alt="Amazon logo"
            />
          </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Delivering to</div>
            <div className="text-sm xl:text-base font-bold cursor-pointer">India</div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* Right */}
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold cursor-pointer">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm cursor-pointer">Returns</div>
            <div className="text-sm xl:text-base font-bold cursor-pointer">& Orders</div>
          </div>
          <Link className="no-underline" to={"/checkout"}>
            <div className="flex pr-3 pl-3 ">
              <ShoppingCartIcon className="h-[48px] text-white" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold text-white  ">Cart</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6 h-12">
        <div className="cursor-pointer hover:border-2 p-1 h-9">Today's Deals</div>
        <div className="cursor-pointer hover:border-2 p-1 h-9">Customer Service</div>
        <div className="cursor-pointer hover:border-2 p-1 h-9">Registry</div>
        <div className="cursor-pointer hover:border-2 p-1 h-9">Gift Cards</div>
        <div className="cursor-pointer hover:border-2 p-1 h-9">Sell</div>
      </div>
    </header>
  );
};

export default NavBar;