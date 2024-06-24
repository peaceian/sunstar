import React from 'react';
import Productslist from '../Productslist';
// import Footer from '../Footer';
import Footeralter from '../Footeralter';


function Productlist() {
    const myStyle={
        marginLeft:'50px'
    };
    return (
        <>
            <Productslist />
            
            <h3 style={myStyle}>*名稱為廠內代號，購買可直接以寄信或電話詢問。</h3>
            <h3 style={myStyle}>**尺寸種類眾多，可寄信或電話詢問尋找相近尺寸。</h3>
            <h3 style={myStyle}>***零售需親自領貨，數量達標可送貨。</h3>
            <h3 style={myStyle}>****歡迎詢問訂製紙箱，數量達標可送貨。</h3>
            <Footeralter />
            {/* <Footer /> */}
        </>

    )
}

export default Productlist
