import dayjs from 'dayjs';
import {getRandomInt} from '../toolUnit';

export const getDestination = () => {
  const cities = ['London', 'Moscow', 'Toronto', 'Tokyo'];
  return cities[getRandomInt(cities.length)];
};

const getPointType = () => {
  const types = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
  return types[getRandomInt(types.length)];
};

const getOffer = () => {
  const offers = {
    'Add luggage': 30,
    'Switch to comfort class': 100,
    'Add meal': 15,
    'Choose seats': 5,
    'Travel bu train': 40
  };
  return Object.entries(offers).filter((x) => getRandomInt(2)?x:null)
    .reduce((obj,cur) => {
      obj[cur[0]] = cur[1];
      return obj;
    }, {});
};

export const getDescription = () => {
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
/*
const getChange = () => [getRandomInt(2),getRandomInt(24),getRandomInt(60)];

const getDuration = () => {
  const gapArr = getChange();
  const alfa = dayjs();
  const beta = alfa.clone();
  const delta =  alfa.subtract(beta);
  return delta.format('hh mm ss');
};
*/
export const travelPointMocks = () => ({
  travelPointTime: getDate(),
  timeGap : 'Время1-Время2',
  duration : 'n ремени',
  destination : getDestination(),
  travelPointType : getPointType(),
  description : getDescription(),
  offers : getOffer(),
  price : getRandomInt(200) + 5,
  img : () => `https://picsum.photos/248/152?r=${getRandomInt(1000).toString()}`,
  isFavorite : Boolean(getRandomInt(2)),
});


