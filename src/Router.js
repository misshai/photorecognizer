import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import StartForm from './components/StartForm';
import CameraForm from './components/CameraForm';
import ResultForm from './components/ResultForm';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key='start' component={StartForm} title='Start Camera'/>
            <Scene key='camera' component={CameraForm} title='Make a picture'/>
            <Scene key='result' component={ResultForm} title='Result'/>
        </Router>

    );
};

export default RouterComponent;

