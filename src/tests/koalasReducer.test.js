import setKoalas from '../redux/reducers/koalasReducer';

// setKoalas should initally be an empty array
test('setKoalas should initally be an empty array', () => {
  const action = {};
  const returnedState = setKoalas(undefined, action);
  expect(returnedState).toEqual([]);
});