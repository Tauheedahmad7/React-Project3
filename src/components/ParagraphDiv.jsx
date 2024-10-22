const ParagraphDiv = () => {
    return (
        <div id="paragraphDiv" className="mt-[10vw] px-[5vw] w-full flex flex-col md:flex-row justify-between items-start">
            <div id="part1" className="w-full md:w-1/2"></div>
            <div id="part2" className="w-full md:w-[40%]">
                <h5 className="text-[1.5vw] md:text-[1.8vw] leading-tight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repudiandae laboriosam tenetur, excepturi nihil totam ullam sit labore voluptatum quis?
                </h5>
                <p className="text-xs md:text-sm mt-5 leading-snug">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium in pariatur velit, aliquid a nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, itaque vero? Corrupti earum sequi adipisci laborum non facilis reprehenderit, suscipit, doloribus cupiditate nulla quia consequatur molestias! Mollitia dicta veniam optio eveniet, voluptates dolorum inventore nobis modi aspernatur alias atque adipisci perferendis quibusdam, nihil blanditiis voluptas ea quam laboriosam totam! Consequuntur quod repudiandae tempora at molestiae cupiditate expedita quaerat numquam ea.
                </p>
            </div>
        </div>
    );
};

export default ParagraphDiv;
