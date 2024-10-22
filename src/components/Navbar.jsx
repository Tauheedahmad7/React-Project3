const Navbar = () => {
    return (
        <div className="fixed w-full bg-can-300 top-0 flex items-center justify-between px-4 md:px-12 py-4 md:py-6">
            <h2 className="text-xl md:text-lg font-medium">F</h2>

            <div className="flex items-center justify-between gap-4 md:gap-44">
                <div className="font-[britishgreen] flex items-center gap-4 md:gap-8">
                    <a className="navtext font-medium text-sm md:text-lg relative px-1" href="#">Shop</a>
                    <a className="navtext font-medium text-sm md:text-lg relative px-1" href="#">New</a>
                    <a className="navtext font-medium text-sm md:text-lg relative px-1" href="#">About</a>
                    <a className="navtext font-medium text-sm md:text-lg relative px-1" href="#">Stores</a>
                    <a className="navtext font-medium text-sm md:text-lg relative px-1" href="#">Search</a>
                </div>

                <div id="icon" className="flex gap-4 md:gap-10 text-lg md:text-xl">
                    <i className="ri-shopping-bag-4-fill"></i>
                    <i className="ri-menu-line"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
