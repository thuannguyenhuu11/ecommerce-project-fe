import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const Navbar = () => {
    const products = useSelector((state) => state.cart.products);

    return (
        <header className='fixed-nav-bar w-nav'>
            <nav className='flex items-center justify-between px-4 mx-auto max-w-screen-2xl'>
                <ul className='nav__links'>
                    <li className='link'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='link'>
                        <Link to='/shop'>Shop</Link>
                    </li>
                    <li className='link'>
                        <Link to='/'>Pages</Link>
                    </li>
                    <li className='link'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>

                {/* Logo */}
                <div className='nav__logo'>
                    <Link to='/'>
                        Lebala<span>.</span>
                    </Link>
                </div>

                {/* Nav icons */}
                <div className='relative nav__icons'>
                    <span>
                        <Link to='/search'>
                            <i className='ri-search-line'></i>
                        </Link>
                    </span>

                    <span>
                        <button className='hover:text-primary'>
                            <i className='ri-shopping-bag-line'></i>
                            <sup className='text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center'>
                                {products.length}
                            </sup>
                        </button>
                    </span>

                    <span>
                        <Link to='login'>
                            <i className='ri-user-line'></i>
                        </Link>
                    </span>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
