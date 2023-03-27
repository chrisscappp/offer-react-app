import { memo, FC } from 'react'
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { modalStyles } from './style'

interface RegisterModalProps {
    handleCloseModal: () => void;
}

const RegisterModal: FC<RegisterModalProps> = ({handleCloseModal}) => {
    return (
        <>
            <div className = "loginModal-container">
                <div className = "loginModal-container__header" style = {modalStyles.loginModal_container__header}>
                    <h3 
                        className = "loginModal-container__header-title" 
                        style = {modalStyles.loginModal_container__header_title}
                    >
                        Регистрация
                    </h3>
                    <div 
                        className = "loginModal-container__header-close" 
                        style = {modalStyles.loginModal_container__header_close}
                        onClick = {handleCloseModal}
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

export default memo(RegisterModal)