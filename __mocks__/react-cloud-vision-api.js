import React from 'react';
const vision = {};
vision.Request = jest.fn();
vision.Image = jest.fn();
vision.Feature = jest.fn();

vision.init = jest.fn();
vision.mockSuccess = jest.fn((result)=>
    vision.annotate = jest.fn().mockImplementationOnce(()=> {
        return Promise.resolve(result);
    }));


vision.mockFailure = jest.fn((errorMessage)=>
    vision.annotate = jest.fn().mockImplementationOnce(()=> {

        return Promise.reject(errorMessage);
    }));


export default vision;