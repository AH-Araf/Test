import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar  font-bold bg-emerald-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Restaurants</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li>
                            <a>Page</a>
                            <ul className="p-2">
                                <li><a>Page1</a></li>
                                <li><a>Page2</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
                <a className="nav-pizza">🍕</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Restaurants</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li>
                        <details>
                            <summary>Page</summary>
                            <ul className="p-2">
                                <li><a>Page1</a></li>
                                <li><a>Page2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end flex gap-0">
                <button className='hover:bg-red-500 rounded-3xl hover:text-white p-2 px-4'>Login</button>
                <button className='bg-red-500 hover:bg-orange-400 rounded-3xl text-white p-2 px-4'>Sign Up</button>
            </div>
        </div>
    );
};

export default NavBar;