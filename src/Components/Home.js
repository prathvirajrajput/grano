import React from 'react'
import MainSlider from './MainSlider';
import FreshVeg from './FreshVeg';

import FoodCategory from './FoodCategory';
import Services from './Services';
// import TopHead from './TopHead';
import ProBanner from './ProBanner';
import CategorySection from './CategorySection';
import ProBanner2 from './ProBanner2';




function Home() {
  return (
    <div>
       <MainSlider />
       <FoodCategory />
       <ProBanner />

       <FreshVeg />
       
       <ProBanner2 />
       <CategorySection />
       <Services />
       
       
       {/* <TopHead /> */}
      
    </div>
  )
}

export default Home;
