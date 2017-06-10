import vision  from 'react-cloud-vision-api';
import {  ImageStore  } from 'react-native';

import { PICTURE_TITLE, PICTURE_URL, ERROR_RECOGNIZER } from './types';

export const getPictureTitle = ({path})=> {
    return (dispatch)=> {
        dispatch({
            type: PICTURE_URL,
            payload: path
        });
        ImageStore.getBase64ForTag(path, (convertedData)=> {
            const req = new vision.Request({
                image: new vision.Image({
                    base64: convertedData,
                }),
                features: [
                    new vision.Feature('TEXT_DETECTION', 4),
                    new vision.Feature('LABEL_DETECTION', 8),
                ]
            });
            vision.annotate([req])
                .then(
                    result => {
                        dispatch({
                            type: PICTURE_TITLE,
                            payload: result
                        })
                    })
                .catch(error => {

                    dispatch({
                        type: ERROR_RECOGNIZER,
                        payload: error
                    });

                });
        }, (error)=> {
            dispatch({
                type: ERROR_RECOGNIZER,
                payload: error
            });
        });
    }
};