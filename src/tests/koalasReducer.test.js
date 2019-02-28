import setKoalas from '../redux/reducers/koalasReducer';

// setKoalas should initally be an empty array
test('setKoalas should initally be an empty array', () => {
  const action = {};
  const returnedState = setKoalas(undefined, action);
  expect(returnedState).toEqual([]);
});

// setKoalas should SET_KOALAS to be payload
test('setKoalas should SET_KOALAS to be payload', () => {
  let koalaArray = ['koala1', 'koala2'];
  const action = { type: 'SET_KOALAS', payload: koalaArray };
  const returnedState = setKoalas(undefined, action);
  expect(returnedState).toEqual(koalaArray);
});

// setKoalas should initally be an empty array
test('setKoalas should IGNORE unknown action types', () => {
  let koalaArray = ['koala1', 'koala2'];
  const action = { type: 'IGNORE' };
  const returnedState = setKoalas(koalaArray, action);
  expect(returnedState).toEqual(koalaArray);
});