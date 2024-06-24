import React from 'react';
import './CartonIntro.css';

const CartonIntro = () => {
  return (
    <div className='cartonintro_container'>
      <div className='intro_table'>
        <br/>
        <table>
          <caption>紙板種類</caption>
          <tr>
            <th className='type'>類型</th>
            <th>厚度</th>
            <th>說明</th>
            <th>相片</th>
          </tr>
          <tr>
            <td>三層A浪</td>
            <td>5mm</td>
            <td>玻璃瓶等防撞需求產品使用。</td>
            <td><img src='images/3A.png' width={400} height={100} alt='3A' /></td>
          </tr>
          <tr>
            <td>三層B浪</td>
            <td>3mm</td>
            <td>多為內盒及零件包裝所使用的紙板。</td>
            <td><img src='images/3B.png' width={400} height={100} alt='3B' /></td>
          </tr>
          <tr>
            <td>五層AB浪</td>
            <td>8mm</td>
            <td>最泛用紙箱材質，適合大部分產品的包裝運送用途。</td>
            <td><img src='images/5AB.png' width={400} height={100} alt='5AB' /></td>
          </tr>
        </table>
        <h3>*圖片以紙箱垂直面拍攝</h3>
      </div>
    </div>

  );
}

export default CartonIntro;
