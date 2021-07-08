import React from "react";
import "./../styles/Store.css";
import AliceCarousel from "react-alice-carousel";

export default function Store() {
  const imgSources = [
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpaperheart.com%2Fwp-content%2Fuploads%2F2018%2F03%2FDesktop-Wallpapers-landscape-clear_water.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F02%2F183171-mountain-lake.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F51768-trees-nature-1.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2015%2F12%2F156478-reflection-river-arch-trees-nature-landscape-water.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F11%2FCalm-Desktop-Wallpaper.jpg&f=1&nofb=1",
  ];

  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };

  const images = imgSources.map((url, idx) => {
    return <img src={url} alt="" key={idx} className="carImg"></img>;
  });

  return (
    <main>
      <h1 className="store-main-heading">You Need It, We Have It!</h1>
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
      <section className='feature'>
        <div className='feature-info'>
            <h2>Our Selection</h2>
            <ul>
                <li>NJ Lottery Services</li>
                <li>Deli, Homemade Food, and Krispy Krunchy Chicken</li>
                <li>Tobacco, Incense, Bowls, etc.</li>
                <li>ATM, Firewood, Propane, and Automotive Supplies</li>
            </ul>
        </div>
        <div className='feature-image'>
            <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpaperheart.com%2Fwp-content%2Fuploads%2F2018%2F03%2FDesktop-Wallpapers-landscape-clear_water.jpg&f=1&nofb=1' alt='krispy chicken logo' className='store-picture-feature'></img>
            <p>Featured Item Caption</p>
        </div>
      </section>
      <section className='store-sections'>
        <div className='store-section-category'>
            <h2>Feeling Lucky?</h2>
            <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpaperheart.com%2Fwp-content%2Fuploads%2F2018%2F03%2FDesktop-Wallpapers-landscape-clear_water.jpg&f=1&nofb=1' alt='krispy chicken logo' className='store-picture-category'></img>
            <div>
                <ul>
                    <li>feature 1</li>
                    <li>feature 2</li>
                    <li>feature 3</li>
                </ul>
            </div>
        </div>
        <div className='store-section-category'>
            <h2>Tobacco Paraphernalia</h2>
            <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpaperheart.com%2Fwp-content%2Fuploads%2F2018%2F03%2FDesktop-Wallpapers-landscape-clear_water.jpg&f=1&nofb=1' alt='krispy chicken logo' className='store-picture-category'></img>
            <div>
                <ul>
                    <li>feature 1</li>
                    <li>feature 2</li>
                    <li>feature 3</li>
                </ul>
            </div>
        </div>
        <div className='store-section-category'>
            <h2>Food and Refreshment</h2>
            <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpaperheart.com%2Fwp-content%2Fuploads%2F2018%2F03%2FDesktop-Wallpapers-landscape-clear_water.jpg&f=1&nofb=1' alt='krispy chicken logo' className='store-picture-category'></img>
            <div>
                <ul>
                    <li>feature 1</li>
                    <li>feature 2</li>
                    <li>feature 3</li>
                </ul>
            </div>
        </div>
        <div className='store-section-category'>
            <h2>Assorted Services</h2>
            <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpaperheart.com%2Fwp-content%2Fuploads%2F2018%2F03%2FDesktop-Wallpapers-landscape-clear_water.jpg&f=1&nofb=1' alt='krispy chicken logo' className='store-picture-category'></img>
            <div>
                <ul>
                    <li>feature 1</li>
                    <li>feature 2</li>
                    <li>feature 3</li>
                </ul>
            </div>
        </div>
      </section>
    </main>
  );
}
