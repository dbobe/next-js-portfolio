import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Hind } from 'next/font/google';
import Image from 'next/image';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css;';

const hind = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function HomeComponent() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <div
        id='home'
        style={{
          backgroundImage:
            'linear-gradient(62deg, #eef7fb 0 50%, #48afde 0% 100%)',
          minHeight: '500px',
          maxHeight: '1200px',
          height: '100%',
          width: '100%',
        }}
      >
        <div className='container m-auto'>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 flex flex-col justify-center bg-white md:col-span-5 md:bg-transparent'>
              <div className='container m-auto'>
                <div className='py-20 pl-0 text-center sm:pl-10 md:py-0 md:text-start lg:pl-24'>
                  <p
                    className={`text-3xl text-[#47aede] md:text-base lg:text-2xl ${hind.className}`}
                  >
                    Hi There!
                  </p>
                  <h1 className='font-recoletaBlack mt-5 text-5xl text-[#223740] md:mt-3 md:text-5xl lg:text-7xl xl:text-7xl'>
                    I&apos;m Ehizeex
                  </h1>
                  <h2
                    className={`py-2 font-bold uppercase text-[#223740] md:text-xl ${hind.className}`}
                  >
                    CEO edubaba digital &amp; An Instructor
                  </h2>
                  <a
                    href='/#portfolio'
                    className={`mt-8 inline-block transform cursor-pointer rounded-lg bg-[#47aede] px-5 py-3 font-bold uppercase text-white transition-all duration-300 ease-in-out hover:translate-y-1 hover:bg-[#223740] hover:shadow-lg md:mt-5 md:py-2 md:text-xs lg:px-8 lg:py-3 lg:text-base xl:mt-10 ${hind.className}`}
                  >
                    Projects
                  </a>
                  {/* TODO: This can be used on my portfolio to download the resume */}
                  <a
                    href='ehizcv.pdf'
                    download='edubaba Ehizcv.pdf'
                    className={`ml-10 mt-8 inline-block transform cursor-pointer rounded-lg bg-[#223740] px-5 py-3 font-bold uppercase text-white transition-all duration-300 ease-in-out hover:translate-y-1 hover:bg-[#47aede] hover:shadow-lg md:mt-5 md:py-2 md:text-xs lg:px-8 lg:py-3 lg:text-base xl:mt-10 ${hind.className}`}
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </div>
            <div className='col-span-12 bg-[#d9eef7] pt-[50px] md:col-span-7 md:bg-transparent md:pt-[130px]'>
              <div className='container m-auto'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src='/ehizeex.png' alt='Ehizeex' decoding='async' />
              </div>
            </div>
          </div>
          <div className='container absolute m-auto'>
            <div className='px-3'>
              <div
                className='relative bottom-[70px] z-20 mx-auto max-w-sm overflow-auto rounded-2xl bg-white px-5 md:max-w-5xl lg:px-14 xl:max-w-6xl'
                style={{ boxShadow: '#48afde -10px 25px 50px 10px' }}
              >
                <div className='cursor-all-scroll sm:py-6 md:py-6 lg:py-10'>
                  <Slider {...settings}>
                    <Image
                      src='/mongodb.png'
                      alt='mongodb'
                      width={188}
                      height={58}
                      className='aspect-auto h-12 w-auto'
                    />
                    <Image
                      src='/reactjs.png'
                      alt='reactjs'
                      width={154}
                      height={58}
                      className='aspect-auto h-12 w-auto'
                    />
                    <Image
                      src='/nextjs.png'
                      alt='nextjs'
                      width={108}
                      height={58}
                      className='aspect-auto h-12 w-auto'
                    />
                    <Image
                      src='/docker.png'
                      alt='docker'
                      width={160}
                      height={58}
                      className='aspect-auto h-12 w-auto'
                    />
                    <Image
                      src='/expressjs.png'
                      alt='expressjs'
                      width={148}
                      height={58}
                      className='aspect-auto h-12 w-auto'
                    />
                    <Image
                      src='/nodejs.png'
                      alt='nodejs'
                      width={144}
                      height={58}
                      className='aspect-auto h-12 w-auto'
                    />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
