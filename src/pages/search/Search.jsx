import { useState } from 'react';
import productData from '@/data/products.json';
import ProductCards from '../shop/ProductCards';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(productData);

    const handleSearch = () => {
        const query = searchQuery.toLowerCase();

        const filtered = productData.filter(
            (product) =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query)
        );

        setFilteredProducts(filtered);
    };

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='capitalize section__header'>Search Product</h2>
                <p className='section__subheader'>
                    Browse a diverse range of categories, from chic dresses to
                    versatile accessories. Elevate your style today!
                </p>
            </section>

            <section className='section__container'>
                <div className='flex flex-col items-center justify-center w-full gap-4 mb-12 md:flex-row'>
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='w-full max-w-4xl p-2 border rounded search-bar '
                        type='text'
                        placeholder='Search for products...'
                    />

                    <button
                        onClick={handleSearch}
                        className='w-full px-8 py-2 text-white rounded search-button md:w-auto bg-primary'
                    >
                        Search
                    </button>
                </div>

                <ProductCards products={filteredProducts} />
            </section>
        </>
    );
};

export default Search;
