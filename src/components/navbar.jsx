const Navbar = () => {
    return (
        <div className="navbar2">
              <nav className="bg-slate-100 text-blue" >
                <div className="nav-wrapper flex  justify-between items-center ">
                    <div className="logo mx-10">
                        <h1  className=" font-bold m-2 p-2 text-2xl ">Logo</h1>
                    </div>
                    <div className="nav-links mx-10 ">
                        <ul className="flex justify-center items-center">
                            <li><a href="/" className=" font-bold m-2 p-2 text-2xl hover:text-blue-200 hover:underline">Home</a></li>
                            <li><a href="/register"  className=" font-bold m-2 p-2 text-2xl hover:text-blue-200 hover:underline">Login/Register</a></li>
                            {/* <li><a href="/"  className=" font-bold m-2 p-2 text-2xl hover:text-blue-200 hover:underline">Services</a></li>
                            <li><a href="/"  className=" font-bold m-2 p-2 text-2xl hover:text-blue-200 hover:underline">Contact</a></li> */}
                        </ul>
                    </div>

                </div>
              </nav>

            </div>

    );
}
 
export default Navbar;