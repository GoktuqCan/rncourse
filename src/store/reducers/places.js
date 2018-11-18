import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes'

const initialState = {
    places: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    name: action.placeName, key: Math.random(),
                    image: { uri: 'http://www.hotelthailand.com/hotel-photos/koh-chang-(trad)/sea-view-resort-and-spa/pic1-sea-view-resort-and-spa.jpg' }
                })
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => place.key != action.placeKey)
            }
        default:
            return state;
    }
};

export default reducer;