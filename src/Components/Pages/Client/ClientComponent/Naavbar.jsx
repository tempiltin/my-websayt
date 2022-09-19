import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Naavbar = () => {
    const [isFixed, setIsFixed] = useState(false);
    // const [prev, setPrev] = useState(false)
    const categoriesRef = useRef(null);
    console.log(categoriesRef);
    const categoriesFixed = () => {
        if (window.pageYOffset > categoriesRef.current.offsetTop) {
            setIsFixed(true);
        }
        else {
            setIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', categoriesFixed);
        return () => {
            window.removeEventListener('scroll', categoriesFixed);
        };
    }, []);
    return <nav ref={categoriesRef} className={ isFixed ? ` fixed-categories ` : "categories-nav"}>
        <div className="container">
            <ul className="row">
                <li><Link to={'/'} >Bosh Sahifa</Link></li>
            </ul>
        </div>
    </nav>
}

export default Naavbar