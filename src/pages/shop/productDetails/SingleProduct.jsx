import { Link, useParams } from 'react-router';
import RatingStars from '@/components/RatingStars/RatingStars';

const SingleProduct = () => {
    const { id } = useParams();

    console.log(id);

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='capitalize section__header'>
                    Single Product Page
                </h2>

                <div className='space-x-2 section__subheader'>
                    <span className='hover:text-primary'>
                        <Link to='/'>home</Link>
                    </span>
                    <i className='ri-arrow-right-s-line'></i>
                    <span className='hover:text-primary'>
                        <Link to='/shop'>shop</Link>
                    </span>
                    <i className='ri-arrow-right-s-line'></i>
                    <span className='hover:text-primary'>Product name</span>
                </div>
            </section>

            <section className='mt-8 section__container'>
                <div className='flex flex-col items-center gap-8 md:flex-row'>
                    {/* Product Image */}
                    <div className='w-full md:w-1/2'>
                        <img
                            src='https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt=''
                            className='w-full h-auto rounded-md'
                        />
                    </div>

                    <div className='w-full md:w-1/2'>
                        <h3 className='mb-4 text-2xl font-semibold'>
                            Product name
                        </h3>
                        <p className='mb-4 text-xl text-primary'>
                            $100 <s>$130</s>
                        </p>
                        <p className='mb-4 text-gray-400'>
                            This is an product description
                        </p>

                        {/* Additional product information */}
                        <div>
                            <p>
                                <strong>Category:</strong> accessories
                            </p>

                            <p>
                                <strong>Color:</strong> beige
                            </p>

                            <div className='flex items-center gap-1'>
                                <strong>Rating: </strong>
                                <RatingStars rating={'4'} />
                            </div>
                        </div>

                        <button className='px-6 py-3 mt-6 text-white rounded-md bg-primary'>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </section>

            {/* Display Reviews */}
            <section className='mt-8 section__container'>Reviews here</section>
        </>
    );
};

export default SingleProduct;
