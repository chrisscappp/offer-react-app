import { memo, FC, MouseEvent } from 'react'
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { modalStyles } from './style'

interface LoginModalProps {
    handleOpenAndCloseModal: (event: MouseEvent) => void;
}

const LoginModal: FC<LoginModalProps> = ({handleOpenAndCloseModal}) => {
    return (
        <>
            <div className = "loginModal-container">
                <div className = "loginModal-container__header" style = {modalStyles.loginModal_container__header}>
                    <h3 
                        className = "loginModal-container__header-title" 
                        style = {modalStyles.loginModal_container__header_title}
                    >
                        Вход
                    </h3>
                    <div 
                        className = "loginModal-container__header-close" 
                        style = {modalStyles.loginModal_container__header_close}
                        onClick = {handleOpenAndCloseModal}
                    >
                        <Icon
                            path={mdiClose} 
                            size={1.2}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(LoginModal)