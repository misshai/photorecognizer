import React, { Component } from 'react';
import { Text  } from 'react-native';
import { connect } from 'react-redux';
import Camera from 'react-native-camera';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';
import { getPictureTitle } from '../actions';

export class CameraForm extends Component {
    styles = {
        container: {
            flex: 1,
            flexDirection: 'row'
        },
        preview: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: "100%"
        },
        capture: {
            flex: 0,
            backgroundColor: '#fff',
            borderRadius: 5,
            color: '#000',
            padding: 10,
            margin: 40
        }
    };

    render() {
        return (<Card>
            <CardSection >
                <Camera
                    ref={(cam) => {
            this.camera = cam;
          }}
                    style={this.styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <CardSection >
                        <Button onPress={this.takePicture.bind(this)}>CAPTURE</Button>
                    </CardSection>
                </Camera>
            </CardSection>
        </Card>);
    }

    takePicture() {
        const options = {};
        this.camera.capture({metadata: options})
            .then((data) => {
                const {path} = data;
                Actions.result();
                this.props.getPictureTitle({path});

            })
            .catch(err => console.error(err));

    }
}
export default connect(null, {getPictureTitle})(CameraForm);