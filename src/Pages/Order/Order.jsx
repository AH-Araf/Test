import './Order.css'

const Order = () => {
    return (
        <div className='mt-28'>
            <h1 data-aos="zoom-in" className='text-center text-3xl font-semibold'>How To Order?</h1>

            <div data-aos="zoom-in" data-aos-duration="2000" className='mt-10'>
                <div className='order-items gap-20'>
                    <div className='flex gap-20'>
                        <div>
                            <p className='text-3xl font-semibold text-red-500 ms-1'>01</p>
                            <div className='ok h-36 w-28 rounded-2xl flex flex-col justify-center items-center bg-gray-100 hover:bg-slate-300'>
                                <p className='bg-white p-4 rounded-xl h-12 w-12 text-xl flex justify-center items-center'>📍</p>
                                <p className='font-semibold mt-3 text-center'>Choose your location</p>
                            </div>
                        </div>

                        <div>
                            <p className='text-3xl font-semibold text-red-500 ms-1'>02</p>
                            <div className='ok h-36 w-28 rounded-2xl flex flex-col justify-center items-center bg-gray-100 hover:bg-slate-300'>
                                <p className='bg-white p-4 rounded-xl h-12 w-12 text-xl flex justify-center items-center'>🙇🏻‍♂️</p>
                                <p className='font-semibold mt-3 text-center'>Choose what to eat</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-20'>
                        <div>
                            <p className='text-3xl font-semibold text-red-500 ms-1'>03</p>
                            <div className='ok h-36 w-28 rounded-2xl flex flex-col justify-center items-center bg-gray-100 hover:bg-slate-300'>
                                <p className='bg-white p-4 rounded-xl h-12 w-12 text-xl flex justify-center items-center'>🍔</p>
                                <p className='font-semibold mt-3 text-center'>May your first order</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-3xl font-semibold text-red-500 ms-1'>04</p>
                            <div className='ok h-36 w-28 rounded-2xl flex flex-col justify-center items-center bg-gray-100 hover:bg-slate-300'>
                                <p className='bg-white p-4 rounded-xl h-12 w-12 text-xl flex justify-center items-center'>🏠</p>
                                <p className='font-semibold mt-3 text-center'>Now! Your food in way</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Order;