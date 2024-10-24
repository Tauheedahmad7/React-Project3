const BottomDiv = () => {
    return (
        <div id="bottomDiv" className="mt-[15vw] px-5 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-start">
            <div id="part1" className="w-full md:w-1/2"></div>
            <div id="part2" className="w-full md:w-[43%] px-5 ">
                <h1 className="text-[5vw] md:text-[3vw] font-extralight leading-[4.5vw] tracking-tighter">
                    Blue Pottery <br />
                    Decorative <br />
                    Vase
                </h1>
                <div id="logo" className="flex justify-between items-center mt-10 w-full">
                    <button id="btn" className="overflow-hidden py-4 relative font-bold px-7 text-xs border-[1px] rounded-full">
                        <span className="inline-block relative z-20">Add to cart</span>
                    </button>
                    <h2 className="text-5xl font-extralight">$57</h2>
                </div>
            </div>
        </div>
    )
}

export default BottomDiv;
