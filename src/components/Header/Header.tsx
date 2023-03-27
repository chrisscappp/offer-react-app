import { memo, FC, useState, MouseEvent } from 'react'
import { NavLink } from "react-router-dom";
import Modal from '../Modal/Modal'
import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../LoginModal/RegisterModal'
import Logo from '../Logo/Logo'
import './style.css'

const Header: FC = () => {

    const [viewModal, setViewModal] = useState<boolean>(false)

    const handleOpenAndCloseModal = (event: MouseEvent) => {
        setViewModal(!viewModal)
        console.log(event.target);
        
    }

    /*const handleOpenAndCloseRegModal = () => {
        setViewModal(!viewModal)
    }*/

    return (
        <>
            <div className = "header-wrapper">
                <div className = "header-container">
                    <Logo/>
                    <div className = "header-container__links-wrapper">
                        <div className = "header-container__links">
                            <NavLink to = {"/"} style={{ textDecoration: 'none' }}>
                                <p className = "header-container__links-item">главная</p>
                            </NavLink>
                            <NavLink to = {"/vacancy"} style={{ textDecoration: 'none' }}>
                                <p className = "header-container__links-item">вакансии</p>
                            </NavLink>
                            <p 
                                className = "header-container__links-item"
                                onClick = {(event: MouseEvent) => handleOpenAndCloseModal(event)}
                            >
                                войти
                            </p>
                            <NavLink to = {"/register"} style={{ textDecoration: 'none' }}>
                                <button 
                                    className = "header-container__links-item__button"
                                >
                                    регистрация
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {
                viewModal
            ?
                <Modal 
                    children = {<LoginModal handleOpenAndCloseModal = {(event: MouseEvent) => handleOpenAndCloseModal(event)}/>}
                />
            :
                null
            }
        </>
    )
}

export default memo(Header)