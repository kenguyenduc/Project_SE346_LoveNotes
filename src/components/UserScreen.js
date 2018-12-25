import React, { Component } from 'react';
import {
  Container,
  Content,
  ListItem,
  DatePicker,
  Body,
  Right,
  Switch,
  Text,
  Card,
  CardItem,
  Thumbnail,
} from 'native-base';
import {ToastAndroid} from 'react-native';
import { font1, font2 } from '../theme/Fonts';

export default class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  static navigationOptions = {
    title: 'Me',
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
      fontSize: 30,
    },
    headerRight: <Right />
  };
  render() {
    const show_Toast = () => {
      //ToastAndroid.show('Saved !', ToastAndroid.SHORT);
      ToastAndroid.showWithGravity(
        'Sucssed',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
    return (
      <Container>
        <Content>
          <Card pointerEvents='none' >
            <CardItem style={{ alignSelf: 'center', justifyContent: 'center' }}>
              <Thumbnail large square source={require('../assets/imgApp/boy_couple2.png')} />
            </CardItem>

            <CardItem>
              <Body>
                <Text style={{ alignSelf: 'center', fontFamily: font1, fontSize: 20, color: '#ff4081' }}> Lê Dương Khang </Text>
              </Body>
            </CardItem>
          </Card>

          <ListItem onPress={show_Toast}>
            <Body>
              <Text style={{ fontFamily: font1, fontSize: 16 }}>
                Change Avatar
              </Text>
            </Body>
          </ListItem>

          <ListItem onPress={show_Toast}>
            <Body>
              <Text style={{ fontFamily: font1, fontSize: 16 }}>
                Change Name
              </Text>
            </Body>
          </ListItem>

          <ListItem onPress={show_Toast}>
            <Body>
              <Text style={{ fontFamily: font1, fontSize: 16 }}>
                Change The Day Begin
              </Text>
            </Body>
            <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              textStyle={{ color: "#ff4081" }}
              placeHolderTextStyle={{ color: "#ff4081" }}
              onDateChange={this.setDate}
            />

          </ListItem>

          <ListItem>
            <Body>
              <Text style={{ fontFamily: font1, fontSize: 16 }}>
                Turn On Notifications
              </Text>
            </Body>
            <Right>
              <Switch thumbColor='#ff4081' trackColor={('#ff4081', 'grey')} />
            </Right>
          </ListItem>

          <ListItem onPress={show_Toast}>
            <Body>
              <Text style={{ fontFamily: font1, fontSize: 16 }}>
                Sync Code
              </Text>
            </Body>
          </ListItem>

          <ListItem onPress={show_Toast}>
            <Body>
              <Text style={{ fontFamily: font1, fontSize: 16 }}>
                Password
              </Text>
            </Body>
          </ListItem>

        </Content>
      </Container >
    );
  }
}
