
//Koal that exist Reducer
const setKoalas = (state = [], action) => {
    switch(action.type) {
        case 'SET_KOALAS':
            return action.payload;
        default: 
            return state;
    }
}
// End Reducer

export default setKoalas;