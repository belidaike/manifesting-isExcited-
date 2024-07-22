import React from 'react'
import Aside from './Aside'
import Main from './Main'
import Search from './Search'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const Home = () => {

    return (
        <div className='home'>
            <Header />
            <Search />
            <div className="home-content">
                <Aside />
                <Main />
            </div>
            <Footer />
        </div >
    )
}

export default Home
