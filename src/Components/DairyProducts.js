import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Components/Responsive.css';

const DairyProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Milk",
      price: 50,
      discount: 0,
      image: "https://amul.com/files/products/amul-gold.png",
      quantity: 0
    },
    {
      id: 2,
      name: "Cheese",
      price: 100,
      discount: 0,
      image: "https://amul.com/files/products/Diced_Blend_2.png",
      quantity: 0
    },
    {
      id: 3,
      name: "Butter",
      price: 80,
      discount: 0,
      image: "https://static.wixstatic.com/media/2f3275_cb3e358ba7094f87a0e63cec4c520b57~mv2.jpg/v1/fill/w_560,h_377,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2f3275_cb3e358ba7094f87a0e63cec4c520b57~mv2.jpg",
      quantity: 0
    },
    {
        id: 4,
        name: "Panner",
        price: 80,
        discount: 0,
        image: "https://5.imimg.com/data5/ANDROID/Default/2023/3/EH/YT/EO/108385388/product-jpeg-500x500.jpg",
        quantity: 0
      },
      {
        id: 5,
        name: "Curd",
        price: 80,
        discount: 0,
        image: "https://www.starhealth.in/blog/wp-content/uploads/2023/09/Side-effects-of-eating-curd-everyday.png",
        quantity: 0
      },
  ]);

  const handleQuantityChange = (productId, newQuantity) => {
    setProducts(products.map(product => 
      product.id === productId ? { ...product, quantity: newQuantity } : product
    ));
  };

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
          <h1 className='text-teal-600 font-bold text-9X1 '>Top Dairy Products</h1>
        </div>
        <div className='MainBer'>
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <div key={product.id} className="mains max-w-xs">
                <div className="singlecard bg-white rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-t-lg"
                  />
                  <div className="div4 p-4">
                    <h2 className="text-gray-800 font-bold">{product.name}</h2>
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <span className="text-gray-600">Rs {product.price}</span>
                        {product.discount > 0 && (
                          <span className="text-sm text-red-500 ml-2">
                            {product.discount}% off
                          </span>
                        )}
                      </div>
                      <div className="flex">
                        <button 
                          className="text-sm bg-gray-200 px-2 py-1 rounded-l"
                          onClick={() => handleQuantityChange(product.id, Math.max(0, product.quantity - 1))}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={product.quantity}
                          className="qun w-12 text-center bg-gray-100 border-t border-b border-gray-200"
                          readOnly
                        />
                        <button 
                          className="text-sm bg-gray-200 px-2 py-1 rounded-r"
                          onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="btns bg-blue-500 text-white px-4 py-2 rounded mr-2">
                        Add to Cart
                      </button>
                      <button className="btns bg-green-500 text-white px-4 py-2 rounded">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
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

export default DairyProducts;
