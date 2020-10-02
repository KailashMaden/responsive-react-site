import React from 'react';
import CardItem from './CardItem';

import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Explore the the real hiking with the view of sun shine"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Travel and enjoy the match to play football with your idols"
              label="Sports"
              path="/services"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Delicious food to taste in various forms of world in one plate"
              label="Seven start restuarant"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
