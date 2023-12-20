import React from 'react'
import Slider from '../../components/slider/Slider'
import FeaturedProducts from '../../components/featured/FeaturedProducts'
import Category from '../../components/category/Category'
import Contact from '../../components/contact/Contact'
function Home() {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type="Featured"/>
      <Category/>
      <FeaturedProducts type="Trending"/>
      <Contact/>
    </div>
  )
}

export default Home
