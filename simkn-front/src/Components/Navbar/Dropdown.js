import React, { useMemo, useState } from "react";
import { Link } from 'react-router-dom';
import { MenuItemsProducts } from "./MenuItemsProducts";

const Dropdown = (items) => {

    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);



    return (
        <div>

            <ul onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>



                {MenuItemsProducts.map((item, index) => {

                    return (


                        <li key={index} className={item.cName}>

                            <Link to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>


                    )

                })}

            </ul>

        </div>
    );
}

export default Dropdown;
