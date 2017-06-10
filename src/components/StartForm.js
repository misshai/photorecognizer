import React  from 'react';
import { Card, CardSection, Button } from './common';
import { Actions } from 'react-native-router-flux';

const StartForm = ()=> {
    return (<Card>
        <CardSection>
            <Button onPress={()=>Actions.camera()}>START CAMERA</Button>
        </CardSection>
    </Card>);
}

export default StartForm;