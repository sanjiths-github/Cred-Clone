import React from 'react'
import HeroSection from '../compnents/HeroSection'
import Header from '../compnents/common/Header'
import ProductShowcase from '../compnents/ProductShowcase'
import FeelSpecial from '../compnents/FeelSpecial'
import CredExperience from '../compnents/credExperience'
import CredSecurity from '../compnents/CredSecurity'
import BrandLove from '../compnents/BrandsLove'
import WindowPeak from '../compnents/WindowPeak'
import MobileScroll from '../compnents/MobileScroll'
import CredStory from '../compnents/CredStory'
import AppRating from '../compnents/AppRating'
import Footer from '../compnents/Footer'

const HomePage = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <ProductShowcase/>
    <FeelSpecial/>
    <BrandLove/>
    <CredExperience/>
    <MobileScroll/>
    <div className='non-mobile'>
    <WindowPeak/>
    </div>
    <CredSecurity/>
    <CredStory/>
    <AppRating/>
    <Footer/>
    </>
 
  )
}

export default HomePage
