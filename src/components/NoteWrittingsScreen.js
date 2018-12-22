import React, {Component} from 'react';
import{
    Container,
    Form,
    Input,
    Item,
    Card,
    Title,
    Right,
    Left,
    Icon,
    Header,
    Textarea,
    Body,
    Thumbnail,
    Button,
    Content,
    CardItem
} from 'native-base';

export default class NotesWrittingsScreen extends Component{
    static navigationOptions = {
        title: 'Writtings...',
        headerTitleStyle: {
            textAlign: 'center',flex:1
        },
      }
    render(){
        return(
            <Container>
                <Content padder>
                    <Form>
                        <Item>
                        <Input placeholder="Title" />
                        </Item>
                    </Form>
                    <Card>
                        <CardItem>
                            <Thumbnail square large source={require('../assets/images/BlackPanther.jpg')} />
                            <Right>
                                <Button transparent>
                                <Icon active name="add" />
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                    <Form>
                        <Textarea rowSpan={5} bordered placeholder="Content . . . " />
                    </Form>


                </Content>
            </Container>
        );
    }
}
