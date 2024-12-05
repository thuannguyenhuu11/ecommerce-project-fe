const ShopFiltering = ({
    filters,
    filtersState,
    setFiltersState,
    clearFilters
}) => {
    return (
        <div className='flex-shrink-0 space-y-5'>
            <h3>Filters</h3>

            {/* Category */}
            <div className='flex flex-col space-y-2'>
                <h4 className='text-lg font-medium'>Category</h4>
                <hr />
                {filters.categories.map((category) => (
                    <label
                        key={category}
                        className='capitalize cursor-pointer '
                    >
                        <input
                            type='radio'
                            name='category'
                            id='category'
                            value={category}
                            checked={filtersState.category === category}
                            onChange={(e) =>
                                setFiltersState({
                                    ...filtersState,
                                    category: e.target.value
                                })
                            }
                        />

                        <span className='ml-1'>{category}</span>
                    </label>
                ))}
            </div>

            {/* Color */}
            <div className='flex flex-col space-y-2'>
                <h4 className='text-lg font-medium'>Color</h4>
                <hr />
                {filters.colors.map((color) => (
                    <label key={color} className='capitalize cursor-pointer '>
                        <input
                            type='radio'
                            name='color'
                            id='color'
                            value={color}
                            checked={filtersState.color === color}
                            onChange={(e) =>
                                setFiltersState({
                                    ...filtersState,
                                    color: e.target.value
                                })
                            }
                        />

                        <span className='ml-1'>{color}</span>
                    </label>
                ))}
            </div>

            {/* Pricing */}
            <div className='flex flex-col space-y-2'>
                <h4 className='text-lg font-medium'>Price Range</h4>
                <hr />
                {filters.priceRanges.map((range) => (
                    <label
                        key={range.label}
                        className='capitalize cursor-pointer '
                    >
                        <input
                            type='radio'
                            name='priceRange'
                            id='priceRange'
                            value={`${range.min}-${range.max}`}
                            checked={
                                filtersState.priceRange ===
                                `${range.min}-${range.max}`
                            }
                            onChange={(e) =>
                                setFiltersState({
                                    ...filtersState,
                                    priceRange: e.target.value
                                })
                            }
                        />

                        <span className='ml-1'>{range.label}</span>
                    </label>
                ))}
            </div>

            {/* Clear Filters */}
            <button
                onClick={clearFilters}
                className='px-4 py-1 text-white rounded bg-primary'
            >
                Clear All Filters
            </button>
        </div>
    );
};

export default ShopFiltering;
