import React from 'react';
import Productslist from '../Productslist';
// import Footer from '../Footer';
import Footeralter from '../Footeralter';
import './Productlist.css';


function Productlist() {
    
    return (
        <>
            <Productslist />
            
            <h3>*名稱為廠內代號，購買可直接以寄信或電話詢問。</h3>
            <h3>**尺寸種類眾多，可寄信或電話詢問尋找相近尺寸。</h3>
            <h3>***零售需親自領貨，數量達標可送貨。</h3>
            <h3>****歡迎詢問訂製紙箱，數量達標可送貨。</h3>
            <Footeralter />
            {/* <Footer /> */}
        </>

    )
}

export default Productlist
