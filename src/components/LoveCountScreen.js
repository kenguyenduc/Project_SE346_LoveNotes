import React, { Component } from 'react';
import {
    Container,
    Thumbnail,
    Icon
} from 'native-base';
import {
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { font1, font2 } from '../theme/Fonts'


export default class LoveCountScreen extends Component {
    static navigationOptions = {
        title: 'How long ?',
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
            fontFamily: font2,
            fontWeight: '300',
            color: '#ff4081',
            fontWeight: undefined,
            fontSize: 30,
        },
        headerStyle: {
            backgroundColor: 'white',
            shadowOpacity: 0,
            elevation: 0,
            borderBottomWidth: 0.7,
            borderColor: '#ff4081',
        },
    }
    render() {
        return (
            <Container>
                <Grid>
                    <Col>
                        <Row size={17} >

                            <Col>
                                <Row size={6}>
                                    <Col>
                                        <Row >
                                        </Row>
                                        <Row>
                                            <Col size={1}>
                                            </Col>
                                            <Col size={2}>
                                                <Text style={{ color: '#ff1b00', fontSize: 40, fontFamily: font2, alignSelf: 'center', flex: 1 }}>Loving... </Text>
                                            </Col>
                                            <Col size={1}>
                                            </Col>
                                        </Row>
                                    </Col>

                                </Row>

                                <Row size={3} >
                                    <Col>
                                        <Row >
                                        </Row>
                                        <Row>
                                            <Col>
                                            </Col>
                                            <Col>
                                                <Text style={{ color: '#333ffd', fontSize: 45, fontFamily: font2, alignSelf: 'center', marginTop: -30 }}>365</Text>
                                            </Col>
                                            <Col>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row size={8} >
                                    <Col>
                                        <Row >
                                        </Row>
                                        <Row>
                                            <Col>
                                            </Col>
                                            <Col>
                                                <Text style={{ color: '#ff1b00', fontSize: 30, fontFamily: font2, alignSelf: 'center', flex: 1, marginTop: -60 }}>Days</Text>
                                            </Col>
                                            <Col>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>

                            <Image source={require('../assets/imgApp/bg_heart3.png')} style={{ alignSelf: 'center', marginTop: -25, marginLeft: 6, position: 'absolute' }} />
                        </Row>

                        <Row size={1} >
                            <Col>
                                <Row >
                                </Row>
                                <Row>
                                    <Col>
                                        <Text style={{ color: '#ff1b00', fontSize: 20, fontFamily: font2, alignSelf: 'center', marginTop: -22 }}>Jan 1, 2018 - Jan 1, 2019</Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row size={11}>
                            <Col size={11}>
                                <Row size={3}>
                                    <Col>
                                        <Thumbnail large source={require('../assets/imgApp/boy_couple2.png')} style={{ alignSelf: 'center', marginTop: 30, width: 100, height: 100 }} />
                                    </Col>
                                </Row>
                                <Row size={1}>
                                    <Col>
                                        <Text style={{ color: 'grey', fontSize: 20, fontFamily: font2, alignSelf: 'center', flex: 1 }}>Lê Dương Khang</Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col size={5}>
                                <Image source={require('../assets/imgApp/beatingheart.gif')} style={{ alignSelf: 'center', height: 60, width: 60, marginTop: 80 }} />
                            </Col>
                            <Col size={11}>
                                <Row size={3}>
                                    <Col>
                                        <Thumbnail large source={require('../assets/imgApp/girl_couple2.png')} style={{ alignSelf: 'center', marginTop: 30, width: 100, height: 100 }} />
                                    </Col>
                                </Row>
                                <Row size={1}>
                                    <Col>
                                        <Text style={{ color: 'grey', fontSize: 20, fontFamily: font2, alignSelf: 'center', flex: 1 }}>Camila Cabello</Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Grid>

                <Grid style={{ position: 'absolute' }}>
                    <Col>
                        <Row>
                            <TouchableOpacity style={{ height: 100, width: 100, backgroundColor: '#25a6f2', alignSelf: 'center', marginTop: 220, borderBottomRightRadius: 100, borderTopRightRadius: 100, marginLeft: -50 }}>
                                <Icon name="share" style={{ marginLeft: 41, marginTop: 34, alignSelf: 'center', color: 'white' }} />
                            </TouchableOpacity>
                        </Row>
                    </Col >
                    <Col></Col>
                </Grid>
            </Container>
        );
    }
}
