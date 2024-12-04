import { Link } from 'react-router';
import bannerImg from '@/assets/header.png';

const Banner = () => {
    return (
        <div className='section__container header__container'>
            <div className='z-30 header__content'>
                <h4 className='uppercase'>UP TO 20% Discount on</h4>
                <h1>Girl&apos;s Fashion</h1>
                <p>
                    Discover the latest trends and express your unique style
                    with our Women&apos;s Fashion website. Explore a curated
                    collection of clothing, accessories, and footwear that
                    caters to every taste and occasion.
                </p>
                <button className='btn'>
                    <Link to='/shop'>EXPLORE NOW</Link>
                </button>
            </div>

            <div className='header__image'>
                <img src={bannerImg} alt='banner' />
            </div>
        </div>
    );
};

export default Banner;
