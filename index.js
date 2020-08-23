

const TrendyCards = [
    {
      name: 'Black Genuine Leather bags',
      link: './images/bag.png',
      price: '$ 23.20'
    },
    {
      name: 'Fashion Red Leather Bags',
      link: './images/bag2.png',
      price: '$ 20.16'
    },
    {
        name: 'Fashion Genuine Leather Bags',
        link: './images/bag3.png',
        price: '$ 30.14'
      },
      {
        name: 'Simple Leather Bags',
        link: './images/bag4.png',
        price: '$ 15.20'
      },
      {
        name: 'New Fashion Leather Bags',
        link: './images/bag5.png',
        price: '$ 25.20'
      },
      {
          name: 'Single Hand Modes Bags',
          link: './images/bag6.png',
          price: '$ 17.6'
        }
  ];


const cardsContainer = document.querySelectorAll('.cards__list');

function createCard(nameValue, linkValue,priceValue) { 
    const cardContainer = document.createElement('div');  
    const cardInfo = document.createElement('div'); 
    const cardImg = document.createElement('div'); 
    const cardTxt = document.createElement('p');
    const cardPrice = document.createElement('p'); 
    const cardAdd = document.createElement('button'); 

    cardContainer.classList.add('card'); 
    cardImg.classList.add('card_img');
    cardImg.setAttribute('style', 'background-image: url(' + linkValue + ')');
    cardInfo.classList.add('card_info'); 
    cardTxt.classList.add('card_txt');
    cardTxt.textContent = nameValue;
    cardPrice.classList.add('card_price');
    cardPrice.textContent = priceValue;
    cardAdd.classList.add('card_add');
    cardAdd.textContent= 'Add to card'


    cardContainer.appendChild(cardInfo);
    cardInfo.appendChild(cardImg);
    cardInfo.appendChild(cardTxt);
    cardInfo.appendChild(cardPrice);
    cardContainer.appendChild(cardAdd);

    return cardContainer;
 }

 TrendyCards.forEach(function(data) {
    const cardElem = createCard(data.name, data.link,data.price);
    const parentElem = document.querySelector('.cards__list');

    parentElem.appendChild(cardElem); 

});




