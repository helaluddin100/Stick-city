import React from "react";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

function Home() {
  const [pagelocation, setPageLocation] = useState(useLocation().pathname);
  //totalMinted is the total amount of tokens minted
  const [totalMinted, setTotalMinted] = useState(0);
  //mint value is the amount of tokens to mint
  const [value, setValue] = useState(1);

  return (
    <>
      {/*----------- welcome Section  -----------*/}
      <section className="home-page">
        <div className="main">
          <div className="marqu">
            <Marquee>
              <p>Sold Out</p>
              <img src="./images/pointer.png" alt="" />
              <p>Sold Out </p>
              <img src="./images/pointer.png" alt="" />
              <p>Sold Out</p>
              <img src="./images/pointer.png" alt="" />
              <p>Sold Out </p>
              <img src="./images/pointer.png" alt="" />
              <p>Sold Out</p>
              <img src="./images/pointer.png" alt="" />
              <p>Sold Out </p>
              <img src="./images/pointer.png" alt="" />
              <p>Sold Out</p>
              <img src="./images/pointer.png" alt="" />
              <p>Sold Out </p>
              <img src="./images/pointer.png" alt="" />
            </Marquee>
          </div>
          <div className="socials">
            <a href="https://twitter.com/stick_city" target="_blank">
              <img src="./images/Twitter.png" alt=" Twitter" />
            </a>
            <a href="https://discord.com/invite/stickcity" target="_blank">
              <img src="./images/Discord.png" alt="Discord" />
            </a>
            <a
              href="https://opensea.io/collection/stickcitywtf"
              target="_blank"
            >
              <img src="./images/OpenSea.png" alt="OpenSea" />
            </a>
          </div>
          <div className="container">
            <h1></h1>
            <h1>
              STICK <br /> CITY
            </h1>

            <div className="image">
              <img src="./images/main.png" alt="" />
            </div>
          </div>
        </div>
        <div className="side-img-1">
          <img src="./images/side-img-1.png" alt="" />
        </div>
        <div className="side-img-2">
          <img src="./images/side-img-2.png" alt="" />
        </div>
      </section>

      <section className="minted">
        <div className="container">
          <div className="minted-qty">
            <h2 className="qty"> {totalMinted} /9999</h2>
            <h2>SOLD OUT</h2>
          </div>
          <div className="btn">
            

            <a href="https://opensea.io/collection/stickcitywtf" target="_blank"
                className="connect-btn"
                
              >
                Buy Stick City
              </a>
          </div>
          
          <div className="roted-img">
            <img src="./images/sticky-3d-animation.gif" alt="" />
          </div>
        </div>
      </section>

      <section className="roadmap">
        <div className="container">
          <h1>ROADMAP</h1>
          <p>There's no fucking roadmap.</p>
        </div>

        <div className="group-nft">
          <img src="./images/group-nfts.png" alt="Group Images" />
        </div>
      </section>
      <section className="founder-section">
        <div className="container">
          <div className="row-2">
            <div className="founder">
              <div className="founder-img">
                <img src="./images/LOGO_1.png" alt="" />
              </div>
              <h2>Twerky</h2>
              <p>STICK CITY is thought up and drawn by this dude.</p>
              <div className="f-social">
                <a href="https://twitter.com/twerkylabs" target="_blank">
                  <img src="./images/TwitterNegative.png" alt="" />
                </a>
                <a
                  href="https://www.instagram.com/twerky/?hl=en"
                  target="_blank"
                >
                  <img src="./images/InstagramNegative.png" alt="" />
                </a>
              </div>
            </div>
            <div className="association">
              <div className="founder-img">
                <img src="./images/LOGO_2.png" alt="" />
              </div>
              <h2>
                Stick International
                <br />
                Association (SIA)
              </h2>
              <p>
                STICK CITY is a proud member of the official Stick International
                Association (SIA). Protecting and guaranteeing peace, freedom
                and security for all Sticks in the Metaverse
              </p>
              {/* <div className="f-social">
                    <a href="" target='_blank'>
                        <img src="./images/TwitterNegative.png" alt="" />
                    </a>
                    <a href="" target='_blank'>
                        <img src="./images/InstagramNegative.png" alt="" />
                    </a>
                </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="marque-footer">
        <div className="marqu">
          <Marquee>
            <p>STICK WITH US</p>
            <img src="./images/pointer.png" alt="" />
            <p>STICK WITH US</p>
            <img src="./images/pointer.png" alt="" />
            <p>STICK WITH US</p>
            <img src="./images/pointer.png" alt="" />
            <p>STICK WITH US</p>
            <img src="./images/pointer.png" alt="" />
            <p>STICK WITH US</p>
            <img src="./images/pointer.png" alt="" />
            <p>STICK WITH US</p>
            <img src="./images/pointer.png" alt="" />
            <p>STICK WITH US</p>
            <img src="./images/pointer.png" alt="" />
            <p>STICK WITH US</p>
            <img src="./images/pointer.png" alt="" />
            <p>STICK WITH US</p>
            <img src="./images/pointer.png" alt="" />
            <p>STICK WITH US</p>
            <img src="./images/pointer.png" alt="" />
          </Marquee>
        </div>

        <div className="socials">
          <a href="https://twitter.com/stick_city" target="_blank">
            <img src="./images/Twitter.png" alt=" Twitter" />
          </a>
          <a href="https://discord.com/invite/stickcity" target="_blank">
            <img src="./images/Discord.png" alt="Discord" />
          </a>
          <a href="https://opensea.io/collection/stickcitywtf" target="_blank">
            <img src="./images/OpenSea.png" alt="OpenSea" />
          </a>
        </div>
        <div className="socials">
          <a href="https://raritysniper.com/nft-drops-calendar">NFT Drops</a>
        </div>
      </section>
    </>
  );
}

export default Home;
