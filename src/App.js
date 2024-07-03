import './App.css';
import AnglerWhite from './images/angler_white.png';
import YC from './images/yc.png';
import Microsoft from './images/microsoft.svg';
import Meta from './images/meta-logo.png';
import Stanford from './images/stanford.png';
import Uber from './images/uber-eats.png';
import ImportSrc from './images/ImportSources.png';
import Enrich from './images/EnrichBackground.png';
import Publish from './images/publish_pdp_blue.png';
import Sources from './images/Retailer_Sources_Simplified.png'
import Brands from './images/Brand_Products.png';
import { useEffect, useMemo, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function App() {
 const text=useMemo(()=>["Retailers","Brands","Marketplaces","Distributors"],[]);
  const [idx,setidx]=useState(0);
  useEffect(()=>{
    if(text && text.length){
    const interval=setInterval(()=>{
      setidx((prev)=>((prev+1)%text.length));
    },2000);
    return ()=>{
      clearInterval(interval);
    }
   }
  },[text])
  return (
    <div className='bg-gradient-to-r from-white to-blue-200'>
      <div className='flex justify-center  items-center  p-4 sm:justify-between'>
        <div className='w-[150px] flex items-center'>
          <img src={AnglerWhite} className='w-100 h-100' alt="logo"/>
        </div>
        <div className='gap-4 hover:cursor-pointer hidden sm:flex'>
          <div className='bg-white text-gray-900 px-2 py-1 rounded-xl font-semibold'><a href="https://auth.anglercloud.com/en/login">Login</a></div>
          <div className='bg-blue-600 text-white px-2 py-1 rounded-xl font-semibold'><a href="https://calendly.com/amay-angler/chat-with-angler">Book A Demo</a></div>
        </div>
      </div>


      <div className='my-6'>
        <div className='w-full flex justify-center'>
          <div className='w-max flex gap-2 justify-center items-center border-2 border-gray-600 p-1 rounded-full'>
            <div className='w-[20px] rounded-full py-1 flex items-center'><img className='w-full h-full rounded-full' src={YC} alt="yc"/></div>
            <div className='font-semibold text-gray-600'>Backed by Y Combinator</div>
          </div>
        </div>
        <div className='my-6'>
          <div className='text-2xl font-bold text-center mt-10 sm:text-3xl md:text-4xl lg:text-6xl z-10'>Catalog Management For <span className='inline-block underline underline-offset-8 textflowin text-blue-600 '>{text[idx]}</span></div>
          <div className='flex justify-center'>
          <div className='w-3/4 text-xl text-center font-semibold mt-6 text-wrap sm:text-2xl md:text-3xl lg:w-3/4'>Create a rich, standardized, and accurate
          product catalog to <div className='inline-block bg-green-300 px-1 rounded-full'>drive more sales.</div></div>
          </div>
          <div className='text-center mt-6 transition ease-in-out'>
            <a href="https://calendly.com/amay-angler/chat-with-angler" className='bg-blue-600 text-white rounded-full p-3 font-semibold border-2 border-black' style={{boxShadow:"4px 5px 0px 0px black"}}>Book A Demo</a>
          </div>
        </div>
      </div>

      <div className='my-20'>
        <div className='text-center font-bold text-lg'>Built by catalog experts from</div>
        <div>
          <div className='flex justify-center items-center gap-4 flex-wrap'>
            <div className='w-[120px]  md:w-[160px]'><LazyLoadImage effect='blur' src={Microsoft} className='w-full h-full' alt="org-logo" loading="lazy" /></div>
            <div className='w-[120px]  md:w-[160px]'><LazyLoadImage effect='blur' src={Stanford} className='w-full h-full' alt="org-logo" loading="lazy" /></div>
            <div className='w-[120px]  md:w-[160px]'><LazyLoadImage effect='blur' src={Uber} className='w-full h-full' alt="org-logo" loading="lazy" /></div>
            <div className='w-[120px]  md:w-[160px]'><LazyLoadImage effect='blur' src={Meta} className='w-full h-full' alt="org-logo" loading="lazy" /></div>
          </div>
        </div>
      </div>

      <div className='my-6 p-3'>
        <div className='text-3xl font-bold sm:text-5xl'><div className='underline underline-offset-8 decoration-4 decoration-blue-300 text-wrap'><span className='italic'>1.</span> How It Works</div></div>
        <div className='flex flex-col gap-4 flex-wrap justify-center my-6 items-center md:flex-row'>
          <div className='w-full md:w-[30%]'>
            <div className='text-2xl font-bold my-2 sm:text-4xl'>Import</div>
            <div className='w-100 rounded-lg'><LazyLoadImage effect='blur' src={ImportSrc} className='w-100 rounded-lg' alt="import" loading="lazy" /></div>
            <div className='text-xl my-4'>Seamlessly import data from anywhere and maintain a single source of truth for product information.</div>
          </div>
          <div className='w-full md:w-[30%]'>
            <div className='text-2xl font-bold my-2 sm:text-4xl'>Enrich</div>
            <div className='w-100 rounded-lg'><LazyLoadImage effect='blur' src={Enrich} className='w-100 rounded-lg' alt="import" loading="lazy" /></div>
            <div className='text-xl my-4'>Automatically enrich product images, descriptions, and attributes to improve discoverability and conversion.</div>
          </div>
          <div className='w-full md:w-[30%]'>
            <div className='text-2xl font-bold my-2 sm:text-4xl'>Publish</div>
            <div className='w-100 rounded-lg'><LazyLoadImage effect='blur' src={Publish} className='w-100 rounded-lg' alt="import" loading="lazy" /></div>
            <div className='text-xl my-4'>Generate a clean data feed to publish detailed product listings to your storefront and distribution channels.
            </div>
          </div>
        </div>
      </div>

      <div className='my-6 p-3'>
        <div className='text-3xl font-bold sm:text-5xl '><div className=' underline underline-offset-8 decoration-4 decoration-red-300 text-wrap'><span className='italic'>2.</span> Retailers & Marketplaces</div></div>
        <div className='flex flex-col-reverse gap-4 justify-center my-6 items-center md:flex-row md:gap-0 flex-wrap'>
            <div className='w-full flex justify-center md:w-1/2'>
              <div className='w-full md:w-[80%]'>
                  <div className='text-2xl text-wrap font-bold sm:text-4xl'>Bring new suppliers online in minutes. Slash your time to market.</div>
                  <div className='my-4'>
                    <ul className='ml-5 list-disc text-lg'>
                      <li>Effortlessly collect product information from suppliers or brands.</li>
                      <li>Automatically standardize data to your content specifications.</li>
                      <li>Improve the quality of your product listings to drive conversion.</li>
                      <li>Integrate with your existing systems via a product feed.</li>
                    </ul>
                  </div>
              </div>
            </div>
            <div className='full md:w-1/2'>
              <div className='w-full flex justify-center items-center rounded-lg'><div className='w-full'><LazyLoadImage effect='blur' src={Brands} className='w-100 h-100 rounded-lg shadow shadow-black' alt="Sources" loading="lazy" /></div></div>
            </div>
        </div>
      </div>

      <div className='mt-6 p-3'>
        <div className='text-3xl font-bold sm:text-5xl'><div className='underline underline-offset-8 decoration-4 decoration-yellow-300 text-wrap'><span className='italic'>3.</span> Brands</div></div>
        <div className='flex flex-col-reverse gap-4 justify-center my-6 items-center md:flex-row md:gap-0 flex-wrap'>
            <div className='w-full flex justify-center md:w-1/2'>
              <div className='w-full md:w-[80%]'>
                  <div className='text-2xl text-wrap font-bold sm:text-4xl'>Enrich and update your products on any channel. Sell more.</div>
                  <div className='my-4'>
                    <ul className='ml-5 list-disc text-lg'>
                      <li>Import your products from Shopify, spreadsheets, or your website.</li>
                      <li>Generate descriptions, images, and assets consistent with your brand.
                      </li>
                      <li>Publish accurate product information to all of your sales channels.
                      </li>
                      <li>Optimize your messaging and listing quality to maximize sales.
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
            <div className='full md:w-1/2'>
              <div className='w-full flex justify-center items-center rounded-lg'><div className='w-full'><LazyLoadImage effect='blur' src={Sources} className='w-100 h-100 rounded-lg shadow shadow-black' alt="Sources" loading="lazy" /></div></div>
            </div>
        </div>
      </div>

      <div className='mt-6 p-6 text-center border-2 border-black border-l-0 border-r-0'>
          <div className='text-2xl font-bold sm:text-4xl'>Ready to learn more ?</div>
          <div className='text-lg my-4'>Discover how Angler can transform how you manage product data and accelerate your growth.</div>
          <div><a href="https://calendly.com/amay-angler/chat-with-angler" className='bg-blue-600 p-2 text-white rounded-full font-bold'>Book A Demo</a></div>
      </div>

      <div className='mt-6 p-3'>
        <div>
          <div className='flex justify-between items-center'>
            <div className='w-[150px]'><img src={AnglerWhite} className="w-100" alt="logo"/></div>
            <div><a href='#' className='font-semibold text-lg'>Contact Us</a></div>
          </div>
          <div className='text-center text-lg mt-6'>
          © 2024 Angler, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
