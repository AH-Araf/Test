import './Subscribe.css'

const Subscribe = () => {
    return (
        <div data-aos="zoom-in"  className='subscribe-main py-10 pb-12'>
            <div>
                <h1  className=' text-3xl font-semibold'>Subscribe our newsletter</h1>
                <p className='text-sm font-semibold'>Browse local restaurants and businesses for delivery by entering your address blow.</p>
            </div>

            <div className='ps-2 mt-6 rounded-3xl py-1 w-[335px] bg-white'>
                <input placeholder='Enter your email address...' className='ps-2 w-64 rounded-3xl ' type="text" />
                <button className=' bg-red-500 hover:bg-orange-400 rounded-3xl text-white p-2 px-4'>Send</button>
            </div>
        </div>
    );
};

export default Subscribe;