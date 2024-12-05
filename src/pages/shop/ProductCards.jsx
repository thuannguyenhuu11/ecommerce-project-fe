import { Link } from 'react-router';
import RatingStars from '@/components/RatingStars/RatingStars';

const ProductCards = ({ products }) => {
    return (
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {products.map((product, index) => (
                <div key={index} className='product__card'>
                    <div className='relative'>
                        <Link to={`/shop/${product._id}`}>
                            <img
                                src={product.image}
                                alt='product image'
                                className='object-cover w-full transition-all duration-300 max-h-96 md:h-64 hover:scale-105'
                            />
                        </Link>

                        <div className='absolute hover:block top-3 right-3'>
                            <button>
                                <i className='ri-shopping-cart-2-line bg-primary p-1.5 text-white hover:bg-primary-dark'></i>
                            </button>
                        </div>
                    </div>

                    {/* product description */}
                    <div className='product__card__content'>
                        <h4>{product.name}</h4>
                        <p>
                            ${product.price}{' '}
                            {product.oldPrice ? (
                                <s>${product?.oldPrice}</s>
                            ) : null}
                        </p>

                        <RatingStars rating={product.rating} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCards;
