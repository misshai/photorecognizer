import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware }  from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import  vision  from 'react-cloud-vision-api';


class App extends Component {
    componentWillMount() {
        vision.init({auth: 'YOU_ID'});
    }

    render() {
        return (<Provider store={createStore(reducers,{}, applyMiddleware(ReduxThunk))}>
            <View style={{ flex: 1}}>
                <Router />
            </View>

        </Provider>);
    }
}

export default App;
