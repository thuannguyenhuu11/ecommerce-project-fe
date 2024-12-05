import { useEffect, useState } from 'react';
import productsData from '@/data/products.json';
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';

const filters = {
    categories: ['all', 'accessories', 'dress', 'jewellery', 'cosmetics'],
    colors: ['all', 'black', 'red', 'gold', 'blue', 'silver', 'beige', 'green'],
    priceRanges: [
        { label: 'Under $50', min: 0, max: 50 },
        { label: '$50 - $100', min: 50, max: 100 },
        { label: '$100 - $200', min: 100, max: 200 },
        { label: '$200 and above', min: 200, max: Infinity }
    ]
};

const ShopPage = () => {
    const [products, setProducts] = useState(productsData);
    const [filtersState, setFiltersState] = useState({
        category: 'all',
        color: 'all',
        priceRange: ''
    });

    // Filter functions
    const applyFilters = () => {
        let filteredProducts = productsData;

        //Filter by category
        if (filtersState.category && filtersState.category !== 'all') {
            filteredProducts = filteredProducts.filter(
                (product) => product.category === filtersState.category
            );
        }

        // filter by color
        if (filtersState.color && filtersState.color !== 'all') {
            filteredProducts = filteredProducts.filter(
                (product) => product.color === filtersState.color
            );
        }

        // filter by price range
        if (filtersState.priceRange) {
            const [minPrice, maxPrice] = filtersState.priceRange
                .split('-')
                .map(Number);
            filteredProducts = filteredProducts.filter(
                (product) =>
                    product.price >= minPrice && product.price <= maxPrice
            );
        }

        setProducts(filteredProducts);
    };

    useEffect(() => {
        applyFilters();
    }, [filtersState]);

    //Clear the filters
    const clearFilters = () => {
        setFiltersState({
            category: 'all',
            color: 'all',
            priceRange: ''
        });
    };

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='capitalize section__header'>Shop Page</h2>
                <p className='section__subheader'>
                    Discover the Hottest Picks: Elevate Your Style With Our
                    Curated Collection of Trending Women&apos;s Fashion Products
                </p>
            </section>

            <section className='section__container'>
                <div className='flex flex-col gap-8 md:flex-row md:gap-12'>
                    {/* Left side */}
                    <ShopFiltering
                        filters={filters}
                        filtersState={filtersState}
                        setFiltersState={setFiltersState}
                        clearFilters={clearFilters}
                    />

                    {/* Right side */}
                    <div>
                        <h3 className='mb-4 text-xl font-medium'>
                            Products Available: {products.length}
                        </h3>
                        <ProductCards products={products} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopPage;
