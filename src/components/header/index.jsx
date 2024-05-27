import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <header className="w-full flex flex-row items-center justify-between   px-4 py-4 md:py-10 lg:px-32 absolute" >
      <div className=" w-full flex flex-row items-center justify-between"  >
        <h1 className="font-bold text-2xl md:text-4xl text-gray-100" >Blogr</h1>
        <IoMenu className="block md:hidden text-3xl text-gray-100" />
        <div className="hidden w-full md:flex flex-row justify-between items-center" >
          <nav className="flex  flex-row items-center justify-center gap-5 ml-20"  >
            <a className="text-md font-light text-gray-50" href="#">Product</a>
            <a className="text-md font-light text-gray-50" href="#">Company</a>
            <a className="text-md font-light text-gray-50" href="#">Connect</a>
          </nav>
          <div className="flex  flex-row items-center justify-center gap-3 " >
            <button className="bg-transparent py-2 px-8 text-gray-50" >Login</button>
            <button className="bg-gray-50 py-2 font-bold px-8 rounded-full text-red-400" >Sign Up</button>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;