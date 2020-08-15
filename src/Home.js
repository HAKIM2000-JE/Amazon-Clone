import React from "react";
import Product from "./Product";
import "./prime.jpg";
import "./Home.css";
import "./Products.css";
import Footer from "./footer";
import Social from "./Social";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="products">
        {/* Products id , title , price , rating , image  */}
        <div className="product_row">
          <Product
            id="12"
            title="Wireless Speaker enabled for: Bluetooth Rechargeable battery that lasts up to 12 hours Water-resistant"
            price={115}
            rating={5}
            image="https://audioengineusa.com/wp-content/uploads/2019/01/Untitled-design-6-400x400.png"
          />
          <Product
            id="13"
            title="
                        Argos
                        Buy Samsung Galaxy FIT E Smart Watch - Black | Fitness and activity trackers | Argos some text to verifyyy 
                        Vendo.ma G26 Fitness bracelet heart rate blood pressure watches smart wristband Fitness, tracker smart band LBQ"
            price={35}
            rating={4}
            image="https://media.4rgos.it/i/Argos/1169177_R_Z001A?w=750&h=440&qlt=70"
          />
        </div>
        <div className="product_row">
          <Product
            id="14"
            title="Soft touch silicone case for AirPods is the ideal solution to protect your Apple Bluetooth earphones at best. It is realised in ultra-thin silicone"
            price={14.99}
            rating={4}
            image="https://www.puro.it/media/catalog/product/cache/5/thumbnail/960x/17f82f742ffe127f42dca9de82fb58b1/c/u/custodia-airpods-rosa-bianco-puro_01.jpg"
          />
          <Product
            id="15"
            title=" Batterie externe de xiaomi 2 10000mAh mi Powerbank Charge rapide batterie externe mi cro USB batterie Portable chargeur externe Portable"
            price={115}
            rating={5}
            image="https://img.gkbcdn.com/p/2017-12-27/new-xiaomi-power-bank-2-10000mah-silver-1571980400361._w500_.jpg"
          />
          <Product
            id="16"
            title="Carefully and precisely designed makes the boAt Rockerz 518 appear to be stylish and sturdy and The softness of the faux leather on the ear pads makes boAt Rockerz 518 pleasurable to wear."
            price={17.99}
            rating={4}
            image="https://sathya.in/Media/Default/Thumbs/0038/0038371-boat-boom-bluetooth-headphone-rockerz-518.jpg"
          />
        </div>
        <div className="product_row">
          <Product
            id="17"
            title="Carefully and precisely designed makes the boAt Rockerz 518 appear to be stylish and sturdy and The softness of the faux leather on the ear pads makes                                                                                "
            price={2335}
            rating={4}
            image="https://image.made-in-china.com/202f0j10MUORupilqakg/Flat-Screen-39-Inches-Smart-HD-Color-LCD-LED-Plasma-TV.jpg"
          />
          <Product
            id="18"
            title=" Southern Enterprises - Offering Seagate HDD external - hard disk 1 tb at Rs 4150/piece in Chennai, Tamil Nadu"
            price={115}
            rating={5}
            image="https://4.imimg.com/data4/VW/VG/MY-3306292/external-hard-disk-500gb-4-tb-500x500.jpg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
