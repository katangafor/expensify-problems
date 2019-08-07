import moment from 'moment';

export default [{
  id: '1a',
  description: 'rocket league',
  note: 'just some RL',
  amount: 100,
  createdAt: 0
}, {
  id: '2a',
  description: 'god of war',
  note: 'just some GOW',
  amount: 200,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3a',
  description: 'apex legends',
  note: 'just some apex',
  amount: 300,
  createdAt: moment(0).add(4, 'days').valueOf()
}]