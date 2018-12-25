import React, { Component } from 'react';
import {
    Container,
    Form,
    Input,
    Item,
    Card,
    Right,
    Icon,
    Textarea,
    Thumbnail,
    Body,
    Content,
    CardItem,
    View,
} from 'native-base';
import { TouchableOpacity, Text, Alert, ToastAndroid } from 'react-native';
import { ImagePicker } from 'react-native-image-picker'
import { font1, font2 } from '../theme/Fonts'

export default class NotesWrittingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            showToast: false
        };
        this.chooseImageFromGallery = this.chooseImageFromGallery.bind(this);
    };
    static navigationOptions = {
        title: 'Writtings . . .',
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
        headerRight: <TouchableOpacity
            style={{
                backgroundColor: 'transparent',
                alignSelf: 'center',
                marginRight: 18,
                shadowColor: 0,
                elevation: 0,
            }}>
            <Icon name="md-notifications" style={{ color: '#ff4081' }} />
        </TouchableOpacity>
    };
    chooseImageFromGallery() {
        ImagePicker.openSelectDialog({}, imageUri => {
            this.setState({ image: imageUri });
        }, error => console.error(error));
    }
    render() {

        const showAlert = () => {
            Alert.alert(
                'Try again',
                'Camera not working',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            )
        }

        const show_Toast = () => {
            //ToastAndroid.show('Saved !', ToastAndroid.SHORT);
            ToastAndroid.showWithGravity(
                'Saved',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        }
        return (
            <Container>
                <Content padder>
                    <Form>
                        <Item>
                            <Input placeholder=" Title . . . " style={{ fontFamily: font1 }}/*style={{borderColor:'#ff4081', borderBottomWidth : 0.7}}*/ />
                        </Item>
                    </Form>
                    <Card>
                        <CardItem>
                            <Body>
                                <Thumbnail square large source={require('../assets/images/travel4.jpg')} />
                            </Body>
                            <Right>
                                <TouchableOpacity style={{ marginTop: 10, }}
                                    onPress={showAlert}>
                                    <Icon name="md-camera" style={{ color: 'white', backgroundColor: '#ff4081', padding: 20, borderRadius: 30 }} />
                                </TouchableOpacity>
                                <View style={{ flex: 1 }}>
                                    {this.state.image ? <Image style={{ flex: 1 }} source={{ uri: this.state.image }}></Image> : null}
                                </View>
                            </Right>
                        </CardItem>
                    </Card>
                    <Form>
                        <Textarea rowSpan={12} bordered placeholder=" Content . . . " style={{ fontFamily: font1 }} />
                    </Form>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#ff4081',
                            alignSelf: 'center',
                            marginTop: 15,
                            shadowColor: 0,
                            elevation: 0,
                            borderRadius: 25,
                            width: 100,
                        }}
                        onPress={show_Toast}>
                        <Text
                            style={{
                                fontFamily: font1,
                                textAlign: 'center',
                                fontSize: 20,
                                margin: 10,
                                color: 'white'
                            }}>
                            Save
                        </Text>
                    </TouchableOpacity>

                </Content>
            </Container>
        );
    }
}
