import './Dish.css'
import bikeImg from "../../assets/bike.png"
import cot from "../../assets/cot.png"

const Dish = () => {
    return (
        <section className='mt-32 mb-6'>
            <div data-aos="fade-down" data-aos-duration="2000" className='text-center'>
                <h1 className='text-center text-3xl font-semibold'>More Than <span className='text-red-600'>10,000</span> Dishes <br /> To Order!</h1>
                <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
            </div>

            <div className='dish-sec-1 mt-10 marg-right' data-aos="fade-up" data-aos-duration="1000">
                <div className='dish-icon flex justify-end gap-10'>
                    <div className='h-32 w-24 rounded-2xl flex flex-col justify-center items-center bg-gray-200 hover:bg-slate-300'>
                        <p className='bg-white p-4 rounded-full h-12 w-12 text-xl flex justify-center items-center'>🍕</p>
                        <p className='font-bold mt-3'>Pizza</p>
                    </div>

                    <div className='h-32 w-24 rounded-2xl flex flex-col justify-center items-center bg-gray-200 hover:bg-slate-300'>
                        <p className='bg-white p-4 rounded-full h-12 w-12 text-xl flex justify-center items-center'>🍔</p>
                        <p className='font-bold mt-3'>Burger</p>
                    </div>

                    <div className='h-32 w-24 rounded-2xl flex flex-col justify-center items-center bg-gray-200 hover:bg-slate-300'>
                        <p className='bg-white p-4 rounded-full h-12 w-12 text-xl flex justify-center items-center'>🍣</p>
                        <p className='font-bold mt-3'>Sushi</p>
                    </div>
                </div>

                <div className='h-32 p-2 px-5 w-96 rounded-2xl bg-gray-200 hover:bg-slate-300'>
                    <p className='font-bold'>Find <span className='text-red-500'>deals</span>, <span className='text-green-600'>free delivery,</span> and more <br /> from our restaurant partners.</p>
                    <div className='flex justify-end'>
                        <img className='h-16 w-28' src={bikeImg} alt="" />
                    </div>
                </div>
            </div>

            <div className='dish-sec-2 mt-10 marg-left' data-aos="fade-up" data-aos-duration="1000">
                <div className='h-32 w-96 '>
                    <img className='h-5 w-6' src={cot} alt="" />
                    <p className='text-lg mt-3'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                </div>

                <div className='dish-icon flex justify-start gap-10'>
                    <div className='h-32 w-24 rounded-2xl flex flex-col justify-center items-center bg-gray-200 hover:bg-slate-300'>
                        <p className='bg-white p-4 rounded-full h-12 w-12 text-xl flex justify-center items-center'>🍝</p>
                        <p className='font-bold mt-3'>Pasta</p>
                    </div>

                    <div className='h-32 w-24 rounded-2xl flex flex-col justify-center items-center bg-gray-200 hover:bg-slate-300'>
                        <p className='bg-white p-4 rounded-full h-12 w-12 text-xl flex justify-center items-center'>🥗</p>
                        <p className='font-bold mt-3'>Salad </p>
                    </div>

                    <div className='h-32 w-24 rounded-2xl flex flex-col justify-center items-center bg-gray-200 hover:bg-slate-300'>
                        <p className='bg-white p-4 rounded-full h-12 w-12 text-xl flex justify-center items-center'>🍰</p>
                        <p className='font-bold mt-3'>Desserts</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Dish;