import { memo } from 'react'
import Footer from '../Footer/Footer'
import './style.css'
import Review from '../Review/Review'

const HomeBody = () => {

    const reviews = [
        {
            img: "",
            title: "Спасибо, быстро нашёл работу! Наконец-то работаю в IT!"
        },
        {
            img: "",
            title: "Крутое приложение! Интересная задумка! Ищем сотрудников :)))"
        },
        {
            img: "",
            title: "А давайте купим хлебопечку..."
        }
    ]

    return (
        <>
            <div className = "home-body__wrapper">
                <div className = "home-body__wrapper-container">
                    <div className = "home-body__wrapper-container__header-wrapper">

                    </div>
                    <div className = "home-body__wrapper-container__body-wrapper">
                        <div className = "home-body__wrapper-container__body-wrapper-container">
                            <div className = "home-body__wrapper-container__body-wrapper-container__reviews-container">
                                {reviews?.map((item, index) => {
                                    return (
                                        <>
                                            <Review
                                                review = {item}
                                            />
                                        </>
                                    )
                                })}
                            </div>
                            <div className = "home-body__wrapper-container__body-wrapper-container__getstarted-container">

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default memo(HomeBody)