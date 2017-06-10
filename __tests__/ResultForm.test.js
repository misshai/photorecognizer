import 'react-native';
import React from 'react';
import {ResultForm} from '../src/components/ResultForm';
import renderer from 'react-test-renderer';

test('Result Form', () => {
    const component = renderer.create(
        <ResultForm titles={[]}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});