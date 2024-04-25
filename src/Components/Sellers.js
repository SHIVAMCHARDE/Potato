import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SellerCard = ({ name, image, number, message }) => {
  return (
    <div className="max-w-xs">
      <div className="ss bg-white rounded-lg overflow-hidden shadow-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-contain rounded-t-lg"
        />
        <div className=" p-4">
          <h2 className="text-gray-800 font-bold">{name}</h2>
          <div className="seller flex justify-between items-center mt-2">
            <div>
              <span className="text-gray-600">Number: {number}</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-1" />
              <span className="text-gray-600">{message}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sellers = () => {
  const [sellers] = useState([
    {
      id: 1,
      name: "Vegetable Seller",
      image: "https://bsmedia.business-standard.com/_media/bs/img/article/2020-12/15/full/1607974027-0288.jpg",
      number: "123-456-7890",
      message: "Message"
    },
    {
      id: 2,
      name: "Beverages Seller",
      image: "https://images.livemint.com/rf/Image-920x613/LiveMint/Period2/2018/05/12/Photos/Processed/parle-kh1H--621x414@LiveMint.jpg",
      number: "987-654-3210",
      message: "Message"
    },
    {
      id: 3,
      name: "Dairy Products Seller",
      image: "https://cdn.britannica.com/86/124786-004-1F7D6700/Supermarket-Jamnagar-Gujarat-India.jpg",
      number: "555-555-5555",
      message: "Message"
    }
  ]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="flex justify-center"> {/* Center the component horizontally */}
      <div className='mt-7 mb-7 w-[72%]'>
        <div className='text-[22px] text-left mb-3'>
          <h1 className='text-teal-600 font-bold text-9X1'>Top Sellers</h1>
        </div>
        <Slider {...sliderSettings}>
          {sellers.map((seller) => (
            <SellerCard key={seller.id} {...seller} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default Sellers;
