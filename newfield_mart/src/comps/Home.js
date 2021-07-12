import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Home.css";
import AliceCarousel from "react-alice-carousel";
import krispy from './../assets/krispy.png'
import liscios from './../assets/liscios.png'
import njlot from './../assets/njlot.jpg'
import dietz from './../assets/dietz.png'

const imgSources = [
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpaperheart.com%2Fwp-content%2Fuploads%2F2018%2F03%2FDesktop-Wallpapers-landscape-clear_water.jpg&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F02%2F183171-mountain-lake.jpg&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F51768-trees-nature-1.jpg&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2015%2F12%2F156478-reflection-river-arch-trees-nature-landscape-water.jpg&f=1&nofb=1",
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F11%2FCalm-Desktop-Wallpaper.jpg&f=1&nofb=1",
];

export default function Home() {
  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };

  const images = imgSources.map((url, idx) => {
    return <img src={url} alt="" key={idx} className="carImg"></img>;
  });

  return (
    <main>
      <h1 className='home-main-heading'>Welcome To Newfield Food Mart</h1>
      <h2 className='hiring'>Now Hiring! Newfield Foodmart is seeking an employee to fill a cook position.</h2>
      <AliceCarousel
        items={images}
        responsive={responsive}
        autoPlayInterval={6000}
        autoPlayDirection="ltr"
        autoPlay={true}
        infinite={true}
        animationType="slide"
        disableButtonsControls={true}
        autoPlayStrategy="none"
      />
      <section className="store">
        <div className="store-flex">
          <div className="store-info">
            <h2 className='serving'>Serving Our Community with Premium Products</h2>
            <p>Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet tristique nibh. Proin id eros mi. Mauris gravida odio a dolor suscipit, et semper quam condimentum. Aliquam placerat lacus eget nisl imperdiet, in malesuada ex dignissim. Suspendisse potenti. Vivamus quis nunc in risus imperdiet suscipit vel quis nunc. Integer ac libero tincidunt, vehicula tellus ac, placerat quam. Ut </p>
            <Link className='store-button' to='/store'>Explore Our Store</Link>
          </div>
          <div className="store-logos">
            <img src={krispy} alt='krispy chicken logo' className='store-logo'></img>
            <img src={dietz} alt='krispy chicken logo' className='store-logo'></img>
            <img src={liscios} alt='krispy chicken logo' className='store-logo'></img>
            <img src={njlot} alt='krispy chicken logo' className='store-logo'></img>
          </div>
        </div>
      </section>
      <section className="menu-about">
        <div className="menu-about-section">
            <h2>Fresh Food</h2>
            <img src={krispy}></img>
            <Link className='store-button' to='/menu'>See Menu</Link>
        </div>
        <div className="menu-about-section">
            <h2>About Us</h2>
            <img src={krispy}></img>
            <Link className='store-button' to='/about'>Learn More</Link>
        </div>
      </section>
    </main>
  );
}
