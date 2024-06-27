import React from 'react';
import './Locate.css';

function Locate() {
  return (
    <>
      <div className='locate_container'>
        <div className='info'>
          <h1>廠房地點</h1>
          <br />
          <h2>地址：新北市蘆洲區民族路323巷320-8號</h2>
          <h2>信箱：sunstarcarton@gmail.com</h2>
          <h2>電話：02-8286-0028</h2>
          <h2>傳真：02-8286-0082</h2>
          <br />
          <br />
          <h1>大眾交通運輸</h1>
          <br />
          <h2>公車至首都客運總站 三重一站下車（隔壁巷）</h2>
          <h2>62（三重 － 東園）</h2>
          <h2>226（三重 － 吳興街）</h2>
          <h2>669（三重 － 市政府）</h2>
          <h2>662（三重 － 一女中）</h2>
          <h2>橘13（三重 － 五股）</h2>
          <br />
          <h2>以下公車至首都客運總站 三重二站下車，轉乘三重一站公車</h2>
          <h2>39（三重 － 臺北車站）</h2>
          <h2>539（三重 － 馬偕醫院）</h2>
          <h2>927（三重 － 八里）</h2>
          <br/>
        </div>
        <div className='map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2027.8326990169767!2d121.47531860819956!3d25.095531167955606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442afb874f2b425%3A0xf5347db36062043a!2z5pel5pif57SZ5Zmo5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1718116560883!5m2!1szh-TW!2stw" width={300} height={300} style={{ border: '0', borderRadius: '15px', boxShadow: '0 0 5px #ccc' }} title='locate' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </>

  );
}

export default Locate;
