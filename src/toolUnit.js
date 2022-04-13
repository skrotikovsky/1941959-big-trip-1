export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const offerList = (pointData, itemHTML) => {
  let listOfOffers = '';
  const offersNames = Object.keys(pointData.offers);
  for (let i =0; i < offersNames.length ; i++) {
    listOfOffers += itemHTML(pointData.offers[offersNames[i]], i+1);
  }
  return listOfOffers;
};

