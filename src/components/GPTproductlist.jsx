// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GPTproductList = ({product}) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('../Data.json')
//       .then(response => response.json())
//       .then(data => setProducts(data));
//   }, []);

  return (
    <>
      {/* <ul>*/}
        {/* {products.map(product => ( */}
          <div key={product.id}> 
            <Link to={`/GPTproductdetail/${product.id}`}>更多資訊...</Link>
          </div>
        {/* ))} */}
      {/* </ul> */}
    </>
  );
};

export default GPTproductList;