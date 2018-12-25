import React, { Component } from 'react';
import {
    Container,
    Card,
    Icon,
    Thumbnail,
    Body,
    Content,
    CardItem,
} from 'native-base';
import { TouchableOpacity, Text, Image, ToastAndroid } from 'react-native';
import { font1, font2 } from '../theme/Fonts'
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ShowNotesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
    };
    static navigationOptions = {
        title: 'My love - The Song we singed',
        headerTintColor: '#ff4081',
        headerStyle: {
            backgroundColor: 'white',
            shadowOpacity: 0,
            elevation: 0,
            borderBottomWidth: 0.7,
            borderColor: '#ff4081',
        },
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
            fontFamily: font2,
            fontWeight: '300',
            color: '#ff4081',
            fontWeight: undefined,
            fontSize: 25,
        },
        headerRight: <TouchableOpacity
            style={{
                backgroundColor: 'transparent',
                alignSelf: 'center',
                marginRight: 18,
                shadowColor: 0,
                elevation: 0,
            }}>
            <Icon name="md-more" style={{ color: '#ff4081' }} />
        </TouchableOpacity>
    };
    render() {
        const show_Toast = () => {
            //ToastAndroid.show('Saved !', ToastAndroid.SHORT);
            ToastAndroid.showWithGravity(
                'Notification has been set',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        }
        return (
            <Container>
                <Content padder>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Grid>
                                <Row>
                                    <Col size={1}>
                                        <Thumbnail source={require('../assets/imgApp/boy_couple2.png')} />
                                    </Col>
                                    <Col size={4} style={{ paddingLeft: 10 }}>
                                        <Text style={{ fontFamily: font1, fontSize: 18 }}>My love - The Song we singed</Text>
                                        <Text note style={{ fontFamily: font1 }}>Jan 1, 2018</Text>
                                    </Col>
                                    <Col size={1}>
                                        <Row style={{ alignSelf: 'center' }}>
                                            <TouchableOpacity style={{ textAlign: 'center', marginTop: 10, marginLeft: 15 }}
                                                onPress={show_Toast}>
                                                <Icon name="md-notifications" style={{ color: '#ff4081' }} />
                                            </TouchableOpacity>
                                        </Row>
                                    </Col>
                                </Row>
                            </Grid>
                            {/* <Left>
                            <Thumbnail source={require('../assets/imgApp/boy_couple2.png')}/>

                        </Left>
                        <Body>
                            <Text style={{ fontFamily: font1, fontSize:18,}}>My love - The Song we singed</Text>
                            <Text note style={{ fontFamily: font1, }}>Jan 1, 2018</Text>
                            </Body>
                        <Right style={{backgroundColor:'black',width:50}}>
                            <Icon name="md-notifications" style={{ color: 'white', backgroundColor: '#ff4081', padding: 10, borderRadius: 60 }} />
                        </Right> */}
                        </CardItem>
                        <CardItem cardBody>
                            <Body >
                                <Image source={require('../assets/images/couple.jpg')} style={{ height: 200, width: '100%', flex: 1 }} />
                                <Text style={{ fontFamily: font1, marginTop: 5, textAlign: 'center', alignSelf: 'center' }}>
                                    An empty street {'\n'}
                                    An empty house {'\n'}
                                    A hole inside my heart {'\n'}
                                    I'm all alone
                                    The rooms are getting smaller {'\n'}
                                    I wonder how {'\n'}
                                    I wonder why {'\n'}
                                    I wonder where they are {'\n'}
                                    .{'\n'}
                                    The days we had {'\n'}
                                    The songs we sang together {'\n'}
                                    Oh yeah {'\n'}
                                    And all my love {'\n'}
                                    I'm holding on forever {'\n'}
                                    Reaching for the love that seems so far . . .  {'\n'}
                                    .{'\n'}
                                    So I say a little prayer {'\n'}
                                    And hope my dreams will take me there {'\n'}
                                    Where the skies are blue {'\n'}
                                    To see you once again, my love {'\n'}
                                    Over seas from coast to coast {'\n'}
                                    To find the place I love the most {'\n'}
                                    Where the fields are green {'\n'}
                                    To see you once again, my love {'\n'}
                                    .{'\n'}
                                    .{'\n'}
                                    I tried to read {'\n'}
                                    I go to work {'\n'}
                                    I'm laughing with my friends {'\n'}
                                    But I can't stop {'\n'}
                                    To keep myself from hinking {'\n'}
                                    Oh no {'\n'}
                                    I wonder how {'\n'}
                                    I wonder why {'\n'}
                                    I wonder where they are {'\n'}
                                    The days we had {'\n'}
                                    The songs we sang together {'\n'}
                                    Oh yeah {'\n'}
                                    .{'\n'}
                                    And all my love {'\n'}
                                    I'm holding on forever {'\n'}
                                    Reaching forthe love that seems so far {'\n'}
                                    So I say a little prayer {'\n'}
                                    And hope my dreams will take me there {'\n'}
                                    Where the skies are blue {'\n'}
                                    To see you once again, my love {'\n'}
                                    Over seas from coast to coast {'\n'}
                                    To find the place I love the most {'\n'}
                                    Where the fields are green {'\n'}
                                    To see you once again {'\n'}
                                    To hold you in my arms {'\n'}
                                    To promise you my love {'\n'}
                                    To tell you from my heart {'\n'}
                                    You're all I'm thinking of {'\n'}
                                    And reaching for the love that seems so far {'\n'}
                                    .{'\n'}
                                    so I say a little prayer {'\n'}
                                    And hope my dreams will take me there {'\n'}
                                    Where the skies are blue {'\n'}
                                    To see you once again, my love {'\n'}
                                    Over seas from coast to coast {'\n'}
                                    To find the place I love the most {'\n'}
                                    Where the fields are green {'\n'}
                                    To see you once again, my love {'\n'}
                                    See you in a prayer {'\n'}
                                    My sweet dreams will take me there {'\n'}
                                    Where the skies are blue {'\n'}
                                    To see you once again {'\n'}
                                    Over seas from coast to coast {'\n'}
                                    To find the place I love the most {'\n'}
                                    Where the fields are green {'\n'}
                                    To see you once again, my love {'\n'}
                                    {'\n'}
                                    - Loveing You -

                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
