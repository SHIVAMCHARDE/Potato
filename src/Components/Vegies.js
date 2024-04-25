import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Components/Responsive.css';

const Vegies = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Carrot",
      price: 30,
      discount: 0,
      image: "https://static.toiimg.com/photo/105672842.cms",
      quantity: 0
    },
    {
      id: 2,
      name: "Potato",
      price: 20,
      discount: 0,
      image: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN440-Potatoes-732x549-thumb-732x549.jpg",
      quantity: 0
    },
    {
      id: 3,
      name: "Spinach",
      price: 25,
      discount: 0,
      image: "https://images.moneycontrol.com/static-mcnews/2023/05/Spinach-Best-food-for-hair-growth-770x433.jpg",
      quantity: 0
    },
    {
        id: 4,
        name: "Tomato",
        price: 35,
        discount: 0,
        image: "https://m.media-amazon.com/images/I/61ZJhcdG7LL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
        quantity: 0
      },
      {
        id: 5,
        name: "Capsicum",
        price: 40,
        discount: 0,
        image: "https://www.india.com/wp-content/uploads/2017/08/Bell-pepper.jpg",
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
          <h1 className='text-teal-600 font-bold'>Top Veggies</h1>
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

export default Vegies;
