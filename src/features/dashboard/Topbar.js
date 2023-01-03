
import React from 'react'
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useStateContext } from '../../contexts/ContextProvider';



const Topbar = () => {
    const { setActiveMenu } = useStateContext();

    const handleToggle = () => {

        const menuToggle = document.querySelector('.toggle');
        const nav = document.querySelector('.navigation');
        const main = document.querySelector('.main');
        nav.classList.toggle('active');
        main.classList.toggle('active');
        menuToggle.classList.toggle('active')
        setActiveMenu()
    }

    return (
        <>
            <div className="topbar">
                <div className="toggle" onClick={handleToggle}>
                    <FontAwesomeIcon icon={faBarsStaggered} className="fai open" />
                    <FontAwesomeIcon icon={faXmark} className="fai close" />
                </div>
            </div>

        </>
    )
}

export default Topbar