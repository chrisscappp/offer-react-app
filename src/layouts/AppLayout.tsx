import { FC } from 'react'
import { Routes, Route } from "react-router-dom"
import HomeLayout from "./HomeLayout"
import ResumeLayout from './VacancyLayout'
import ProfileLayout from './ProfileLayout'
import ErrorLayout from './ErrorLayout'
import RegisterLayout from './RegisterLayout'
import Header from '../components/Header/Header'

const AppLayout: FC = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path = "/" element = {<HomeLayout/>}/>
                <Route path = "/vacancy" element = {<ResumeLayout/>}/>
                <Route path = "/vacancy/:id" element = {<>asss</>}/>
                <Route path = "/profile" element = {<ProfileLayout/>}/>
                <Route path = "/register" element = {<RegisterLayout/>}/>
                <Route path = "*" element = {<ErrorLayout/>}/>
            </Routes>
        </>
    )
}

export default AppLayout