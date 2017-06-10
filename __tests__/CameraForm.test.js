import 'react-native';
import React from 'react';
import {CameraForm} from '../src/components/CameraForm';
import renderer from 'react-test-renderer';


test('Camera form', () => {
    const component = renderer.create(
        <CameraForm />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();


});