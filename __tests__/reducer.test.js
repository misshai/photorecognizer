import recognizerReducer from '../src/reducers';
import { PICTURE_TITLE, PICTURE_URL, ERROR_RECOGNIZER  } from '../src/actions/types';

describe('recognizerReducer', function () {
    it('should return the initial state', function () {
        expect(recognizerReducer(undefined, {})).toEqual({
            result: {
                titles: [],
                imgUrl: '',
                error: ''
            }
        })
    });
    it('should react to an action with the type PICTURE_URL', function () {
        const imageUrl = 'http://my test url';
        expect(recognizerReducer(undefined, {
            type: PICTURE_URL,
            payload: imageUrl
        })).toEqual({
            result: {
                imgUrl: imageUrl,
                error: '',
                titles: []
            }
        });
    });
    it('should react to an action with the type ERROR_RECOGNIZER', function () {
        const errorText = 'This is my error';
        expect(recognizerReducer(undefined, {
            type: ERROR_RECOGNIZER,
            payload: errorText
        })).toEqual({
            result: {
                imgUrl: '',
                error: errorText,
                titles: []
            }
        });
    });
    it('should react to an action with the type PICTURE_TITLE', function () {
        let titles = {responses: [{labelAnnotations: [{description: '1'}, {description: '2'}, {description: '3'}]}]};

        expect(recognizerReducer(undefined, {
            type: PICTURE_TITLE,
            payload: titles
        })).toEqual({
            result: {
                imgUrl: '',
                error: '',
                titles: ['1', '2', '3']
            }
        });
        const errorText = 'This is my error';
        titles = {responses: [{error: {message: errorText}}]};
        expect(recognizerReducer(undefined, {
            type: PICTURE_TITLE,
            payload: titles
        })).toEqual({
            result: {
                imgUrl: '',
                error: errorText,
                titles: []
            }
        });
    });
});