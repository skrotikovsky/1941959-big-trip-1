import {getDescription} from './travel-point-mocks.js';
import {getRandomInt} from '../toolUnit';


export const AddNewPointMock = () => ({
  travelType: ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'],
  pointTime: 'sometime',
  cost: getRandomInt(100),
  destination: ['London', 'Moscow', 'Toronto', 'Tokyo'],
  offersCheck: Array.from(Array(5), () => Boolean(getRandomInt(2))),
  offers: {
    offer1 : {id: 'offer1', cost: 'cost1'},
    offer2 : {id: 'offer2', cost: 'cost2'},
    offer3 : {id: 'offer3', cost: 'cost3'},
    offer4 : {id: 'offer4', cost: 'cost4'},
    offer5 : {id: 'offer5', cost: 'cost5'},
  },
  description : getDescription(),
  img : () => `https://picsum.photos/248/152?r=${getRandomInt(1000).toString()}`,
});
