import dayjs from 'dayjs';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getDestination = () => {
  const cities = ['London', 'Moscow', 'Toronto', 'Tokyo'];
  return cities[getRandomInt(cities.length)];
};

let getPointType = () => {
  const types = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
  return types[getRandomInt(types.length)];
};

const getOffer = () => {
  const offers = {
    'offer1': 10,
    'offer2': 20,
    'offer3': 30,
    'offer4': 40,
    'offer5': 50
  };
  return Object.entries(offers).filter((x) => getRandomInt(2)?x:null)
    .reduce((obj,cur) => {
      obj[cur[0]] = cur[1];
      return obj;
    }, {});
};

const getDescription = () => {
  const types = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.'];
  return types.filter((x) => getRandomInt(2)?x:null)
    .reduce((obj, cur)=>
      `${obj + cur  }\n`,'');
};

const getDate = () => dayjs().format('D MMM');

const getChange = () => [getRandomInt(2),getRandomInt(24),getRandomInt(60)];

const getDuration = () => {
  const gapArr = getChange();
  const newDate = dayjs().add(gapArr[0], 'day').add(gapArr[1], 'hour').add(gapArr[2], 'minute');
  return dayjs().subtract(dayjs()).format('dd hh mm ss')//newDate.subtract(dayjs()).format(`hh${'Н '}mm${'М'}`);
};
/*
* СПРОСИТЬ КАК ДЕЛАТЬ ЭТИ ****** ВРЕМЕННЫЕ ПРОМЕЖУТКИ (КАК ВЫЧЕСТЬ ДАТУ ИЗ ДАТУ И ПОЛУЧИТЬ НАПРИМЕР 1Д 2Ч 45М
*
*
*
* */
console.log(getDuration());

export const travelPoint = () => ({
  travelPointTime: getDate(),
  timeGap : null,
  duration: null,
  destination: getDestination(),
  travelPointType: getPointType(),
  description: getDescription(),
  offers: getOffer(),
  img: `http://picsum.photos/248/152?r=${getRandomInt(1000).toString()}`,
  isFavorite: Boolean(getRandomInt(2)),
});


