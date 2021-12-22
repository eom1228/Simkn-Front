import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Nav, NavMenu, NavLink, DropdownLink, Link } from './NavbarElements';
import { MenuItemsProducts } from "./MenuItemsProducts";


function Navbar() {
    const state = { clicked: false }

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
    const toggleClassName = subnav ? 'menu-position is-open' : 'menu-position';



    const onMouseEnter = () => {
        if (window.innerWidth <= 768) {
            showSubnav(false)
        } else {
            showSubnav(true)
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth <= 768) {
            showSubnav(false)
        } else {
            showSubnav(false)
        }
    };

    // const [selectedCategory, setSelectedCategory] = useState(null);
    // const onChange = event => setSelectedCategory(event.value);



    return (

        < Nav >

            <NavLink to='/'>
                <h1>Logo</h1>
            </NavLink>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>




            <NavMenu className={click ? 'nav-menu active' : 'nav-menu'}>
                {MenuItemsProducts.map((item, index) => {

                    return (

                        <NavLink to={item.path} onClick={() => item.subNav && showSubnav(subnav => !subnav)} key={index}>

                            <div >
                                {item.title}

                                <div className="menu-position" onClick={closeMobileMenu} >


                                    <div className="dropdown-menu" >
                                        {
                                            item.subNav && subnav && item.subNav.map((item, index) => {
                                                return (

                                                    <NavLink to={item.path} key={index} class="Dropdown" onClick={closeMobileMenu}>
                                                        {item.title}
                                                    </NavLink>


                                                )

                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                        </NavLink>



                    )



                })};






            </NavMenu>








        </Nav >

    )
};

export default Navbar;


{/* <NavSmallMenu className={click ? 'nav-menu active' : 'nav-menu'} >

                <NavLink to='/products' className="App-link" onClick={closeMobileMenu}>
                    Brand
                </NavLink>
                <NavLink to='/products' className="App-link" onClick={closeMobileMenu} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    Product List
                    {dropdown && <Dropdown


                    />}
                </NavLink>
                <NavLink to='/showrooms' className="App-link" onClick={closeMobileMenu}>
                    Showroom
                </NavLink>
                <NavLink to='/portfolio' className="App-link" onClick={closeMobileMenu}>
                    Portfolio
                </NavLink>
                <NavLink to='/notice' className="App-link" onClick={closeMobileMenu}>
                    Notice
                </NavLink>
            </NavSmallMenu> */}