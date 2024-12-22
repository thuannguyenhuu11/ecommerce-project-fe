import OrderSummary from './OrderSummary';

const CartModal = ({ products, isOpen, onClose }) => {
    return (
        <div
            className={`fixed z-[1000] inset-0 bg-black bg-opacity-50 transition-opacity ${
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{ transition: 'opacity 300ms' }}
        >
            <div
                className={`fixed right-0 top-0 md:w-1/3 w-full bg-white h-full overflow-y-auto transition-transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            >
                <div className="p-4 mt-4">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-semibold">Your Cart</h4>
                        <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                            <i className="p-1 text-white bg-black ri-xrp-fill"></i>
                        </button>
                    </div>

                    {/* Cart details */}
                    <div className="cart-items">
                        {products.length === 0 ? (
                            <div>Your cart is empty</div>
                        ) : (
                            products.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col p-2 mb-4 shadow-md md:flex-row md:items-center md:justify-between md:p-5"
                                >
                                    <div className="flex items-center">
                                        <span className="px-1 mr-4 text-white rounded-full bg-primary ">
                                            0{index + 1}
                                        </span>
                                        <img src={item.image} alt="" className="object-cover mr-4 size-12" />
                                        <div>
                                            <h5 className="text-lg font-medium">{item.name}</h5>
                                            <p className="text-sm text-gray-600">${Number(item.price).toFixed(2)}</p>
                                        </div>

                                        <div className="flex flex-row items-center justify-end mt-2 md:justify-start">
                                            <button className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white ml-8">
                                                -
                                            </button>
                                            <span className="px-2 mx-1 text-center">{item.quantity}</span>
                                            <button className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white">
                                                +
                                            </button>
                                            <div className="ml-5">
                                                <button className="mr-4 text-red-500 hover:text-red-800">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Calculator */}
                    {products.length > 0 && <OrderSummary />}
                </div>
            </div>
        </div>
    );
};

export default CartModal;
