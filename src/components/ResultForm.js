import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Image, ScrollView, ListView,View } from 'react-native';
import { Card, CardSection, Button, Spinner } from './common';

export class ResultForm extends Component {
    componentWillMount() {
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ titles }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(titles);
    }

    render() {
        const {
            containerResultStyle
            } = styles;

        return (<ScrollView>
            <Card>
                <CardSection>
                    {this.displayImage()}
                </CardSection>
                <CardSection style={containerResultStyle}>
                    {this.displayResult()}
                </CardSection>
            </Card>
        </ScrollView>);
    }

    displayResult() {
        if (this.props.error || this.props.titles.length > 0) {
            return (
                <View>
                    <Text style={styles.textErrorStyle}>{this.props.error}</Text>
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.displayLabel}
                    />
                </View>
            );
        } else {
            return <Spinner size='large'/>
        }
    }

    displayImage() {
        if (this.props.imgUrl)
            return (<Image style={styles.imageStyle} source={{ uri: this.props.imgUrl }}/>);
    }

    displayLabel(item) {
        return <Text style={styles.textResultStyle}>{item}</Text>;
    }
}
const styles = {

    containerResultStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textErrorStyle: {
        fontSize: 18,
        color: 'red'
    },
    textResultStyle: {
        fontSize: 20,
        color: 'black'
    },

    imageStyle: {
        flex: 1,
        width: null,
        height: 200,
        resizeMode: 'contain'
    }
}

const mapStateToProps = ({ result}) => {
    return {titles: result.titles, imgUrl: result.imgUrl, error: result.error}
}

export default connect(mapStateToProps)(ResultForm);