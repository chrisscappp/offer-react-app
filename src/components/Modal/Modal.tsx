import { FC, ReactNode, memo } from 'react'
import './style.css'

interface ModalProps {
    children: ReactNode
}

const Modal: FC<ModalProps> = ({children}) => {
    return (
        <>
            <div className = "modal-form__wrapper">
                <form className = "modal-form__container">
                    {children}
                </form>
            </div>
        </>
    )
}

export default memo(Modal)