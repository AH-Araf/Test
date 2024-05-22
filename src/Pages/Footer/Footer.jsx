import './Footer.css'
import ps from '../../assets/ps.png'
import aps from '../../assets/as.png'

const Footer = () => {
    return (
        <section className='bg-black text-white py-20 px-5'>

            <div className='footer-body'>
                <div className='flex gap-14 items-end'>
                    <div className='flex flex-col gap-12'>
                        <p>🍕</p>
                        <div className='h-11 flex text-black items-center hover:bg-slate-300 bg-slate-200 px-2 rounded-lg'>
                            <img className='h-10 w-9' src={aps} alt="" />
                            <div>
                                <small>Download on the</small>
                                <p className='ms-1 font-semibold'>App Store</p>
                            </div>
                        </div>
                    </div>

                    <div className='h-11 flex text-black items-center hover:bg-slate-300 bg-slate-200 px-2 rounded-lg'>
                        <img className='h-10 w-9' src={ps} alt="" />
                        <div>
                            <small>GET IT ON</small>
                            <p className='ms-1 font-semibold'>Google Play</p>
                        </div>
                    </div>
                </div>

                <div className='flex gap-14 abc'>
                    <div className='text-sm'>
                        <p className='font-semibold'>Quick links</p>
                        <div className='text-slate-300'>
                            <p>Features</p>
                            <p>Food Menu</p>
                            <p>Offer</p>
                            <p>Review</p>
                            <p>Rider</p>
                        </div>
                    </div>

                    <div className='text-sm'>
                        <p className='font-semibold'>Get to Know Us</p>
                        <div className='text-slate-300'>
                            <p>Gift Cards</p>
                            <p>DoorDash Stories</p>
                            <p>LinkedIn</p>
                            <p>Glassdoor</p>
                            <p>Accessibility</p>
                        </div>
                    </div>
                </div>

                <div className='flex gap-14 abc'>
                    <div className='text-sm'>
                        <p className='font-semibold'>News</p>
                        <div className='text-slate-300'>
                            <p>Blog</p>
                            <p>FAQ</p>
                            <p>Lift Media </p>
                            <p>Press</p>
                            <p>Presse kit</p>
                        </div>
                    </div>

                    <div className='text-sm'>
                        <p className='font-semibold'>Contact</p>
                        <div className='text-slate-300'>
                            <p>WhatsApp</p>
                            <p>Support 24</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-around xyz'>
                    <div className='text-sm'>
                        <p className='font-semibold'>Quick links</p>
                        <div className='text-slate-300'>
                            <p>Features</p>
                            <p>Food Menu</p>
                            <p>Offer</p>
                            <p>Review</p>
                            <p>Rider</p>
                        </div>
                    </div>

                    <div className='text-sm'>
                        <p className='font-semibold'>Get to Know Us</p>
                        <div className='text-slate-300'>
                            <p>Gift Cards</p>
                            <p>DoorDash Stories</p>
                            <p>LinkedIn</p>
                            <p>Glassdoor</p>
                            <p>Accessibility</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='f-bottom text-sm mt-5 text-gray-300'>
                <div>
                    <p>© 2023 pizza.All right reserved</p>
                </div>

                <div className='flex gap-6'>
                    <p>Privacy</p>
                    <p>Policy</p>
                    <p>Terms</p>
                    <p>Services</p>
                </div>
            </div>

        </section>
    );
};

export default Footer;