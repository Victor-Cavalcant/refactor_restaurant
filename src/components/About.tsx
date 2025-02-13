import Button from "../components/Button";
function About() {
    return (
        <>
            <div className="bg-[url('/Users/victorcavalcanti/Desktop/restaurantTailwindTypescript/public/images/spices.jpg')] bg-cover h-screen flex flex-col "  >
            <div className='grid justify-center gap-2 sm:flex sm:flex-row sm:gap-30 p-6'>
                        <Button path="/"  name='Home' />
                        <Button path="/menu" name='Menu' />
                        <Button path="/about"  name='About' />
                    </div>
                <div className="mt-auto mb-auto">


                    <div className="">
                        <div className="w-[95vw] h-[29vh] mx-auto rounded-4xl shadow-lg bg-[url('/images/cheff.jpg')] bg-contain bg-center bg-no-repeat rounded-4x sm:mx-auto mb-4 sm:h-[400px] sm:w-[600px]" ></div>

                    </div>
                    <div className="flex justify-center items-center  w-full">
                        <p className="w-96 text-1xl text-center font-bold text-white bg-black/70 rounded-full p-2">A fictional Restaurant stabilished in 2022</p>

                    </div>
                </div>
            </div>
        </>
    );
}
export default About