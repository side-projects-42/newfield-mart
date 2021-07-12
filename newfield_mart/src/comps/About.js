import React from "react";
import "./../styles/About.css";


const imgSources = [
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpaperheart.com%2Fwp-content%2Fuploads%2F2018%2F03%2FDesktop-Wallpapers-landscape-clear_water.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F02%2F183171-mountain-lake.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F51768-trees-nature-1.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2015%2F12%2F156478-reflection-river-arch-trees-nature-landscape-water.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F11%2FCalm-Desktop-Wallpaper.jpg&f=1&nofb=1",
  ];

export default function About() {
  return (
    <main>
      <section className="about-content">
        <h1 className="about-main-heading">The Newfield Food Mart Story</h1>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpaperheart.com%2Fwp-content%2Fuploads%2F2018%2F03%2FDesktop-Wallpapers-landscape-clear_water.jpg&f=1&nofb=1"
          alt=""
          className='about-intro-img'
        ></img>
        <h2>Our Journey</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel
          placerat turpis. Mauris id erat sit amet velit feugiat accumsan.
          Vestibulum ac justo posuere, consectetur metus pharetra, dapibus
          magna. Sed at felis volutpat, ultrices felis ut, vestibulum ligula.
          Duis nec arcu sed sapien interdum aliquet quis vel libero. Nam laoreet
          suscipit suscipit. Suspendisse at diam mauris. Proin id sapien massa.
          Maecenas congue feugiat neque quis accumsan.<br/> <br/> Pellentesque nec pretium
          magna, a pulvinar ex. Phasellus venenatis justo massa, id rhoncus mi
          mollis quis. Aenean non purus at ante elementum consequat vitae non
          arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Sed vulputate efficitur nisi, at vehicula augue
          feugiat sed. Nunc ornare venenatis eros at condimentum. Donec at
          fringilla sapien, sit amet volutpat sem. Vivamus dui nulla, vestibulum
          ac facilisis a, efficitur non metus. Donec lacinia enim nec ligula
          elementum interdum. Sed eu leo quam. Donec ut odio convallis, iaculis
          nulla id, porttitor nunc. Morbi dapibus finibus libero, in auctor
          libero posuere non.
        </p>
        <h2>Gallery</h2>
        <div className='gallery-container'>
            {
                imgSources.map((imgSrc, idx) => {
                    return(
                        <img src={imgSrc} key={idx} alt='' className='gallery-image'></img>
                    )
                })
            }
        </div>
      </section>
      <h2 className='hiring'>Now Hiring! Newfield Foodmart is seeking an employee to fill a cook position.</h2>
    </main>
  );
}
