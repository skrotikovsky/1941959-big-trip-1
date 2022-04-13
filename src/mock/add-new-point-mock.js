import {getDescription} from './travel-point-mocks.js';
import {getRandomInt} from '../toolUnit';


export const addNewPointMock = () => ({
  travelType: ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'],
  pointTime: 'sometime',
  cost: getRandomInt(100),
  destination: ['London', 'Moscow', 'Toronto', 'Tokyo'],
  offers: {
    offer1 : {id: 'offer1', cost: 'cost1', isChecked: Boolean(getRandomInt(2))},
    offer2 : {id: 'offer2', cost: 'cost2', isChecked: Boolean(getRandomInt(2))},
    offer3 : {id: 'offer3', cost: 'cost3', isChecked: Boolean(getRandomInt(2))},
    offer4 : {id: 'offer4', cost: 'cost4', isChecked: Boolean(getRandomInt(2))},
    offer5 : {id: 'offer5', cost: 'cost5', isChecked: Boolean(getRandomInt(2))},
  },
  description : getDescription(),
  img : () => `https://picsum.photos/248/152?r=${getRandomInt(1000).toString()}`,
});

