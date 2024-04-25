import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ShoppingCards = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sprite",
      price: 100,
      discount: 5,
      image: "https://www.bigbasket.com/media/uploads/p/xxl/251040_10-sprite-soft-drink-lime-flavoured.jpg",
      quantity: 0
    },
    {
      id: 2,
      name: "Coca-cola",
      price: 200,
      discount: 0,
      image: "https://m.media-amazon.com/images/I/71LQ5+gjMfL.jpg",
      quantity: 0
    },
    {
      id: 3,
      name: "Mirinda",
      price: 300,
      discount: 10,
      image: "https://www.bigbasket.com/media/uploads/p/l/40094180_11-mirinda-soft-drink.jpg",
      quantity: 0
    },
    {
      id: 4,
      name: "Thumbs-up",
      price: 300,
      discount: 10,
      image: " https://tiimg.tistatic.com/fp/1/007/758/600-ml-thums-up-cold-drink-with-instant-refreshment-rich-taste-374.jpg",
      quantity: 0
    },
    {
      id: 5,
      name: "Thumbs-up",
      price: 300,
      discount: 10,
      image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/3/28/fc6d6766-0c5e-4475-8e3f-0a0ecdb9adce_softdrinks-juiceandsoda_0K2HM016WU_MN.png",
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
    <div className="flex justify-center mt-7 mb-7"> {/* Center the component horizontally */}
      <div className="w-[72%]">
        <div className="text-[32px] text-center mb-3">
          <h1 className="text-teal-600 font-bold">Top deals</h1>
        </div>
        <div className="text-[22px] text-left mb-3">
          <h2 className="text-teal-600 font-bold">Beverages</h2>
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
                        onClick={() => handleQuantityChange(product.id, Math.max(1, product.quantity - 1))}
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

export default ShoppingCards;
