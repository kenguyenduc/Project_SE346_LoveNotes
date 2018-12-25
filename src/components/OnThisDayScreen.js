import React, { Component } from 'react';
import {
    Container,
    Content,
    Card,
    CardItem,
    Left,
    Thumbnail,
    Body,
    Text,
    Right,
    List,
    ListItem

} from 'native-base';
import { Image, TouchableOpacity } from 'react-native'
import { font1, font2 } from '../theme/Fonts'
import { Col, Row, Grid } from "react-native-easy-grid";

export default class OnthisdayScreen extends Component {
    static navigationOptions = {
        title: 'On this day !',
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
                <Content padder>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ShowNotes')}>
                    <Card pointerEvents='none' >
                        <CardItem style={{ backgroundColor: '#ff4081' }}>
                            <Grid>
                                <Row>
                                    <Col size={1}>
                                        <Thumbnail source={require('../assets/imgApp/boy_couple2.png')}/>
                                    </Col>
                                    <Col size={4}>
                                        <Text style={{ fontFamily: font1, fontSize: 18, color: 'white' }}>My love - The Song we singed</Text>
                                        <Text note style={{ fontFamily: font1, color: 'white' }}> An empty street  . . . </Text>
                                    </Col>
                                    <Col size={1}>
                                        <Text style={{ fontFamily: font1, color: 'white' }}>Jan 1 2018</Text>
                                    </Col>
                                </Row>
                            </Grid>
                        </CardItem>

                        <CardItem cardBody style={{ backgroundColor: '#ff4081' }} >
                            <Image source={require('../assets/images/couple.jpg')} style={{ height: 200, width: null, flex: 1, margin: 5 }} />
                        </CardItem>

                        <CardItem style={{ backgroundColor: '#ff4081' }}>
                            <Body>
                                <Text style={{ alignSelf: 'center', fontFamily: font2, fontSize: 20, color: 'white' }}> A year ago today </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    </TouchableOpacity>

                    <List style={{ marginTop: 20 }}>

                        <ListItem itemDivider>
                            <Text style={{ fontFamily: font1, fontSize: 18 }}> Events </Text>
                        </ListItem>

                        <ListItem avatar onPress={() => this.props.navigation.navigate('ShowNotes')}>
                            <Left>
                                <Thumbnail large square source={require('../assets/images/travel3.jpg')} />
                            </Left>
                            <Body>
                                <Text style={{ fontFamily: font1, fontSize: 18 }}>Title</Text>
                                <Text note style={{ fontFamily: font1 }}>Tell me what you thinking  . . . </Text>
                            </Body>
                            <Right>
                                <Text note style={{ fontFamily: font1, fontSize: 15 }}>Tomorow</Text>
                            </Right>
                        </ListItem>

                        <ListItem avatar onPress={() => this.props.navigation.navigate('ShowNotes')}>
                            <Left>
                                <Thumbnail large square source={require('../assets/images/travel1.jpg')} />
                            </Left>
                            <Body>
                                <Text style={{ fontFamily: font1, fontSize: 18 }}>Title</Text>
                                <Text note style={{ fontFamily: font1 }}>Tell me what you thinking  . . . </Text>
                            </Body>
                            <Right>
                                <Text note style={{ fontFamily: font1, fontSize: 15 }}>Sat, Jan 5</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
