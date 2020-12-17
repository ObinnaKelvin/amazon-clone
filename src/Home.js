import React from 'react'
import './css/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            {/* <p>Home Component</p> */}
            <div className="home__container">
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="Amazon Hero banner"
                    className="home__image"
                />
            </div>
            <div className="home__row">
                {/* Product */}
                {/* Product */}
                <Product
                    id='54345' 
                    title='Shelby Chair' 
                    image='https://www.therange.co.uk/_m4/6/6/1550494565_1397.jpg'
                    price={149.99}
                    rating={5}
                />
                <Product
                    id='54346'  
                    title='Natural Curved Back Moris Chair' 
                    image='https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/87344_XXX_v1.tif&qlt=50&wid=650&cvt=jpeg'
                    price={299.99}
                    rating={5}
                />
            </div>
            <div className="home__row">
                {/* Product */}
                {/* Product */}
                {/* Product */}
                <Product
                    id='54347'  
                    title='Beetle Chair With Fabric Black Base' 
                    image='https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/0/47/Gubi_Beetle-Chair-mit-Stoff-und-Gestell-schwarz_1515x1515-ID572442-a40195c7e75264b6a6309e1e0ffa09f7.jpg'
                    price={899.99}
                    rating={5}
                />
                <Product
                    id='54348'  
                    title='Pomeroy Barrel Chair Gray' 
                    image='https://target.scene7.com/is/image/Target/GUEST_2d9d5b08-5c61-4083-bdd1-addc05cda677?wid=488&hei=488&fmt=pjpeg'
                    price={184.00}
                    rating={5}
                />
                <Product
                    id='54349'  
                    title='Aranae Spider Leg Chair' 
                    image='https://www.therange.co.uk/_m3/2/8/1550494585_4861.jpg'
                    price={129.99}
                    rating={5}
                />
            </div>
            <div className="home__row">
                {/* Product */}
                <Product
                    id='54350'  
                    title='Daniel - Swivel Dining Chair In Mustard Velvet' 
                    image='https://www.fishpools.co.uk/images/products/standard/66097.jpg'
                    price={159.00}
                    rating={5}
                />
            </div>
        </div>
    )
}

export default Home
