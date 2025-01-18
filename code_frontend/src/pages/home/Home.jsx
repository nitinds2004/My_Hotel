import React, { useState } from 'react';
import './Home.css'
import Header from '../../commponent/Header/Header';
import Exploermenu from '../../commponent/exploermenu/Exploermenu';
import Fooddisplay from '../../commponent/food-display/Fooddisplay';
const Home = () => {
  const [category, setcategory] = useState("All")
  return (
    <div>
      <Header />
      <Exploermenu category={category} setcategory={setcategory} />
      <Fooddisplay category={category} />
    </div>
  );
}

export default Home;
