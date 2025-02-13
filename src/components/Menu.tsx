import Button from "../components/Button";
function Menu() {
    return (
        <>
            <div className="bg-[url('/Users/victorcavalcanti/Desktop/restaurantTailwindTypescript/public/images/spices.jpg')] bg-cover h-[130vh] flex flex-col sm:h-screen "  >
                <div className='grid justify-center gap-2 sm:flex sm:flex-row sm:gap-30 p-6'>
                    <Button path="/" name='Home' />
                    <Button path="/menu" name='Menu' />
                    <Button path="/about" name='About' />
                </div>
                <div>


                    <div className="grid h-[90vh] p-2 sm:flex sm:justify-center sm:items-center sm:w-[1400px] sm:mx-auto sm:gap-4">
                        <div className="w-full mx-auto ">
                            <p className="mx-auto text-2xl bg-black/70 w-24 text-center text-white h-8 mt-4 rounded-full my-2 sm:gap-2">Brunch</p>
                            <div className="w-90 mx-auto h-60 shadow-lg bg-[url('/images/brunch.jpg')] rounded-4xl  bg-contain bg-center bg-no-repeat sm:h-[300px] sm:w-[450px]"></div>
                        </div>
                        <div className="w-full">
                            <p className="mx-auto text-2xl bg-black/70 w-24 text-center text-white h-8 mt-4 rounded-full my-2 ">steak</p>
                            <div className="w-90 mx-auto h-60 shadow-lg bg-[url('/images/steak.jpg')] rounded-4xl bg-contain bg-center bg-no-repeat sm:h-[300px] sm:w-[450px] ">
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="mx-auto text-2xl bg-black/70 w-24 text-center text-white h-8 mt-4 rounded-full  my-2">Veggie</p>
                            <div className="w-90 mx-auto h-60  shadow-lg bg-[url('/images/veggie.jpg')] rounded-4xl bg-contain bg-center bg-no-repeat sm:h-[300px] sm:w-[450px]"></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Menu 