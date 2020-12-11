import React from "react";

class ImportantPoints extends React.Component {
  render() {
    return (
      <section className="important-points-section section-gap">
        <div className="container">
          <div className="row justify-content-center section-title-wrap">
            <div className="col-lg-12">
              <div className="title-img">
                <img src="/img/title-icon.png" alt="" />
              </div>
              <h1>Brief History About Steam</h1>
              <p>
              Steam is a digital games distribution platform created by Valve Corporation. 
              In its current shape, the platform offers multiplayer gaming, digital rights management, 
              social networking services, and video streaming to subscribers.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 single-points aquablue-bg">
              <img src="/img/points/i1.png" alt="" />
              <h4>
                Origin
                
              </h4>
              <p>
              Steam was first announced in 2003 at the Game Developers Conference purely as a distribution network. 
              It was initially created to solve Valve’s problems with updating their online games, such as Counter-Strike. 
              
              </p>
            </div>
            <div className="col-lg-3 col-md-6 single-points aquablue-bg">
              <img src="/img/points/i2.png" alt="" />
              <h4>
               Further
               <br /> Development
                
              </h4>
              <p>
              By late 2005, the platform was hosting third-party games which were made available for purchase and download. 
              The first of such games were Rag Doll Kung Fu and Darwinia. 
              </p>
            </div>
            <div className="col-lg-3 col-md-6 single-points aquablue-bg">
              <img src="/img/points/i3.png" alt="" />
              <h4>
                Now
                
              </h4>
              <p>
                Soon after 2005, large developers such as Capcom 
                started distributing their games on Steam as well. In 2006, seven games were made available on the platform and, 
                by 2019, there were almost 8,300 games released on Steam.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 single-points aquablue-bg">
              <img src="/img/points/i4.png" alt="" />
              <h4>
                Most
                <br /> Online
              </h4>
              <p>
              The biggest game on Steam in 2019 was PlayerUnknown's Battlegrounds.  
              Considering the size, 100 players, of each battle, it is unsurprising that the game topped the 2019 list for 
              peak number of concurrent players on the online gaming platform, which up to almost 1.09 million players in a single hour. 
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ImportantPoints;
