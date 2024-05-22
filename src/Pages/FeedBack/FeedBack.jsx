import './FeedBack.css'
import cotRed from '../../assets/cotRed.png'
import Comment from './Comment';
const FeedBack = () => {
    return (
        <div>
            <div data-aos="zoom-in-up" data-aos-duration="1000">
                <h1 className='text-center text-3xl font-semibold mt-28'>Our Clients Feedback</h1>
                <p className='text-center mb-7'>The food at your doorstep. Why starve when you have us. You hunger <br /> partner. Straight out of the oven to your doorstep.</p>
                <div className='flex justify-center mb-10'>
                    <img className='h-10 w-12' src={cotRed} alt="" />
                </div>
            </div>

            <div className='mb-10'>
                <Comment />
            </div>
        </div>
    );
};

export default FeedBack;