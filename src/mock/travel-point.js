import dayjs from 'dayjs';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getDestination() {
  const cities = ['London', 'Moscow', 'Toronto', 'Tokyo'];
  return cities[getRandomInt(cities.length)];
}

function getPointType() {
  const types = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
  return types[getRandomInt(types.length)];
}

function getOffer() {
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
}

function getDescription() {
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
}

function getDate() {
  return dayjs().format('D MMM');
}
console.log(getDate());

function getDuration() {
  const dateDuration = getDate();
//  console.log(newDate);
}

const travelPoint =() => ({
  travelPointTime: null,
  duration: null,
  destination: getDestination(),
  travelPointType: getPointType(),
  description: getDescription(),
  offers: getOffer(),
  img: `http://picsum.photos/248/152?r=${toString(getRandomInt(1000))}`,
  isFavorite: Boolean(getRandomInt(2)),
});


