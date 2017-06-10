import mockCamera from './Camera';

const rn = require('react-native');

jest.mock('Linking', () => {
    return {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        openURL: jest.fn(),
        canOpenURL: jest.fn(),
        getInitialURL: jest.fn(),
    }
});


jest.mock('ImageStore', () => {
    const ImageStore = jest.fn();
    ImageStore.getBase64ForTag = jest.fn();
    ImageStore.mockSuccess = jest.fn((result)=> {
        ImageStore.getBase64ForTag = jest.fn().mockImplementationOnce((path, success, error)=>success(result));
    });
    ImageStore.mockFailure = jest.fn((errorMessage)=> {
        ImageStore.getBase64ForTag = jest.fn().mockImplementationOnce((path, success, error)=>error(errorMessage));
    });


    return ImageStore;
});


jest.mock('react-native-camera', () => mockCamera);
jest.unmock('redux-mock-store');
jest.unmock('redux-thunk');
module.exports = rn;