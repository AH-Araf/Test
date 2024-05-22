import './Home.css'
import homeImg from '../../assets/homeImg.png'
import ps from '../../assets/ps.png'
import as from '../../assets/as.png'

const Home = () => {
    return (
        <section className='home-section mt-20'>
            <div data-aos="fade-right" data-aos-duration="2000" className='text-home w-96'>
                <h1>Your Favorite Food Delivery Partner</h1>
                <p className='mt-2'>The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep.</p>
                <div className='ps-2 mt-6 rounded-3xl py-1 w-96 bg-gray-200'>
                    <input placeholder='Enter your delivery location' className='ps-2 w-64 rounded-3xl bg-gray-200' type="text" />
                    <button className=' bg-red-500 hover:bg-orange-400 rounded-3xl text-white p-2 px-4'>Order Now</button>
                </div>

                <div className='mt-4 flex gap-8 items-center'>
                    <div className='flex items-center hover:bg-slate-300 bg-slate-200 px-2 rounded-lg'>
                        <img className='h-10 w-9' src={as} alt="" />
                        <div>
                            <small>Download on the</small>
                            <p className='ms-1 font-semibold'>App Store</p>
                        </div>
                    </div>

                    <div className='flex items-center hover:bg-slate-300 bg-slate-200 px-2 rounded-lg'>
                        <img className='h-10 w-9' src={ps} alt="" />
                        <div>
                            <small>GET IT ON</small>
                            <p className='ms-1 font-semibold'>Google Play</p>
                        </div>
                    </div>
                </div>
            </div>


            <div data-aos="fade-left" data-aos-duration="2000" className='img-home'>
                <img src={homeImg} alt="" />
            </div>
        </section>
    );
};

export default Home;