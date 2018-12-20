import React, {Component} from 'react';
import {
} from 'react-native';
import { 
  Container,
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon, 
  Text,
  Badge,
  Fab,
  View
} from 'native-base';

import Notes from './src/components/Notes'

export default class App extends Component {  

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='settings' />
            </Button>
          </Left>

          <Body>
            <Title>LoveNotes</Title>
          </Body>

          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
          </Right>
        </Header>

        <Content>
          <Notes/>
        </Content>

        <View style={{ flex: 1 }}>
            <Fab direction="up" position="bottomRight">
              <Icon name="md-add"/>
            </Fab>
        </View>
        
        <Footer>
          <FooterTab>

            <Button badge>
              <Badge success><Text>2</Text></Badge> 
              <Icon name="notifications"/>
              <Text>On this day</Text>
            </Button>

            <Button>
              <Icon name="paper" />
              <Text>Notes</Text>
            </Button>

            <Button active>
              <Icon active name="pulse"/>
              <Text>How far?</Text>
            </Button>

          </FooterTab>
        </Footer>
      
      </Container>
    );
  }
}