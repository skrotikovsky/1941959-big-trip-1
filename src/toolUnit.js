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
  const index = items.findIndex((item) => item.pointId === update.pointId);
  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ];
};

export const SortType = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price',
};

export const sortById = (setOfPoints, typeOfSort) => {
  const sortedList = [];
  for (const item of setOfPoints) {
    if (typeOfSort === 'day') {
      sortedList.push([item[0], item[1].pointData.travelPointDay]);
    } else if (typeOfSort === 'price') {
      sortedList.push([item[0], item[1].pointData.price]);
    } else {
      sortedList.push([item[0], item[1].pointData.timeGap]);
    }
  }
  sortedList.sort((first, second) => {
    if (parseInt(first[1]) > parseInt(second[1])) {
      return 1;
    }
    if (parseInt(first[1]) < parseInt(second[1])) {
      return -1;
    }
    return 0;
  });
  return sortedList.map((x) => x[0]);
};

export const sortInfo = (id, mocks) => {
  for (const mock of mocks) {
    if (id === mock.pointId) {
      return mock;
    }
  }
  return null;
};
