import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import NewsletterSection from '../components/NewsletterSection';

function Home () {
    return (
    <>
        <HeroSection />
        <Cards />
        <NewsletterSection />
        <Footer />
    </>
    )
}

export default Home;