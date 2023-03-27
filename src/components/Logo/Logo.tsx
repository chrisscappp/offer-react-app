import './style.css'

const Logo = () => {

    const ball: number = 25;

    return (
        <>
            <div className = "header-container__logo-wrapper">
                <div className = "header-container__logo-wrapper-container">
                    <div 
                        className = "header-container__logo-wrapper-container__item"
                        style = {{width: ball, height: ball}}
                    >
                    </div>
                    <div 
                        className = "header-container__logo-wrapper-container__item"
                        style = {{width: ball + 10, height: ball + 10}}
                    >
                    </div>
                    <div 
                        className = "header-container__logo-wrapper-container__item3"                  
                    >
                        <div 
                            className = "header-container__logo-wrapper-container__item4"
                        >

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logo