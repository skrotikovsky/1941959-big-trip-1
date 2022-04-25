export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const offerList = (pointData, itemHTML) => {
  let listOfOffers = '';
  const offersNames = Object.keys(pointData.offers);
  for (let i =0; i < offersNames.length ; i++) {
    listOfOffers += itemHTML(pointData.offers[offersNames[i]], i+1);
  }
  return listOfOffers;
};

export const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ];
}
