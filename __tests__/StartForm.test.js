import 'react-native';
import React from 'react';
import StartForm from '../src/components/StartForm';
import renderer from 'react-test-renderer';

test('Start form renders correctly', () => {
    const component = renderer.create(
        <StartForm />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});