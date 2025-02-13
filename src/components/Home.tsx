import Button from "../components/Button";

function Home() {
    return (
        <>
            <div className="bg-[url('/Users/victorcavalcanti/Desktop/restaurantTailwindTypescript/src/assets/spices.jpg')] bg-cover h-screen flex flex-col "  >
                <div className='grid justify-center gap-2 sm:flex sm:flex-row sm:gap-30 p-6'>
                    <Button path="/" name='Home' />
                    <Button path="/menu" name='Menu' />
                    <Button path="/about" name='About' />
                </div>
                <div>


                    <div className="sm:mt-12">
                        <h1 className="mx-auto text-4xl sm:text-4xl mt-24 sm:w-[380px] w-80 text-center font-bold text-white bg-black/70 rounded-full p-2">Aroma Restaurant</h1>
                        <p className="mx-auto mt-60 w-96 text-2xl text-center font-bold text-white bg-black/70 rounded-full p-2 ">An esquisite culinary experience</p>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Home