import React, {Component} from 'react';
import{
    Container,
    Card,
    Right,
    Left,
    Icon,
    CardItem,
    Text,
    List,
    ListItem,
    Body,
    Thumbnail,
    Button,
    Fab
} from 'native-base';

export default class Notes extends Component{
    render(){
        return(
            <Container>

                {/* Swipeable List */
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail large source={require('../assets/images/BlackPanther.jpg')} />
                        </Left>
                        <Body>
                            <Text>Tittle</Text>
                            <Text note>Tell me what you thinking  . . . </Text>
                        </Body>
                        <Right>
                            <Text note>1/1/2019</Text>
                        </Right>
                    </ListItem>

                    <ListItem avatar>
                        <Left>
                            <Thumbnail large source={require('../assets/images/BlackPanther.jpg')} />
                        </Left>
                        <Body>
                            <Text>Tittle</Text>
                            <Text note>Tell me what you thinking  . . . </Text>
                        </Body>
                        <Right>
                            <Text note>1/1/2019</Text>
                        </Right>
                    </ListItem>
                </List>
                }
            </Container>
        );
    }
}
