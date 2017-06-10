import { PICTURE_TITLE, PICTURE_URL, ERROR_RECOGNIZER  } from '../actions/types';
const INITIAL_STATE = {
    titles: [],
    imgUrl: '',
    error: ''
}
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case PICTURE_URL:
            return {...state, imgUrl: action.payload, titles: [], error: ''};
        case ERROR_RECOGNIZER:
            return {...state, imgUrl: '', titles: [], error: action.payload};
        case PICTURE_TITLE:
            if (action.payload.responses[0].labelAnnotations) {
                let descriptions = action.payload.responses[0].labelAnnotations.map((item)=>item.description);
                return {...state, titles: descriptions, error: ''};
            } else {
                return {...state, error: action.payload.responses[0].error.message};
            }
        default:
            return state;
    }
}