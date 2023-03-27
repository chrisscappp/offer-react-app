import { FC } from 'react'
import './style.css'

interface ReviewProps {
    review: {
        img: string,
        title: string,
    }
}

const Review: FC<ReviewProps> = ({review}) => {
    return (
        <>
            <div className = "review-container__item-container">
                <div className = "review-container__item-container-ball">
                    {review.img}
                </div>
                <div className = "review-container__item-container-review">
                    
                    <div className = "test">
                        <p className = "review-container__item-container-review__title">
                            {review.title}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review