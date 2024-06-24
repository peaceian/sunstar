// import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from './Buttonaddtocart.js';
import products from '../Data.json';
// import products from '../Data.json';

const GPTProductDetail = () => {
    const { productId } = useParams();
    //   const [product, setProduct] = useState(null);
    // const [products, setProducts] = useState(Data.products);
    // const [index, setIndex] = useState();
    // const myRef = useRef(null);


    const thisProduct = products.map(p => p.id === productId);

    // const handleTab = index => {
    //     setIndex(index);
    //     const images = myRef.current.children;
    //     for (let i = 0; i < images.length; i++) {
    //         images[i].className = images[i].className.replace('active', '');
    //     }
    //     images[index].className = 'active';
    // };

    // if (!thisProduct) {
    //     return <div>Product not found</div>;
    // }

    return (
        <div className="products__container">
            <div className="details" key={thisProduct.id}>
                {/* <div className="big-img">
                    <img src={thisProduct.images[index]} alt="" />
                </div> */}
                <div className="box">
                    <div className="row">
                        <h2>{thisProduct.title}</h2>
                        <span>${thisProduct.price}</span>
                    </div>
                    {/* <div className="colors">
            {product.colors.map((color, colorIndex) => (
              <button
                style={{ background: color }}
                key={colorIndex}
              ></button>
            ))}
          </div> */}
                    <p>{thisProduct.description}</p>
                    <p>{thisProduct.type}</p>
                    {/* <div className="thumb" ref={myRef}>
                        {thisProduct.images.map((img, imgIndex) => (
                            <img
                                src={img}
                                alt=""
                                key={imgIndex}
                                onClick={() => handleTab(imgIndex)}
                                className={imgIndex === index ? 'active' : ''}
                            />
                        ))}
                    </div> */}
                    <Button to="/">Add to cart</Button>
                </div>
            </div>
        </div>
    );
};

export default GPTProductDetail;
