import React from 'react';
import CardItem from './CardItem';
import './Card.css';

function Card() {
    return (
        <div className='cards'>
            <h1>日星為大眾服務</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/book.jpg"
                            text="我們的故事"
                            label="公司歷史"
                            path="/story"
                        />
                        <CardItem
                            src="images/cartonbox.jpg"
                            text="紙板的種類"
                            label="材料介紹"
                            path="/cartonintro"
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/privacypolicy.jpg"
                            text="隱私權政策"
                            label="服務條款"
                            path="/services"
                        />
                        <CardItem
                            src="images/socialicon.jpg"
                            text="加入社群"
                            label="連線社群"
                            path="/linesocial"
                        />
                        <CardItem
                            src="images/highway.jpg"
                            text="交通資訊"
                            label="廠房地點"
                            path="/locate"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
