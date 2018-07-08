import React, { Component } from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import { Container, Content, Thumbnail, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import CardComponent from './CardComponent'

class SocialMediaFeed extends Component {
    
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container style={styles.container}>
      <Header>
          <Left />
          <Body>
          <Thumbnail square source={{uri: uri}} />
          </Body>
          <Right />
        </Header>
      <Content>
          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="201" />
          <CardComponent imageSource="3" likes="301" />
      </Content>
  </Container>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default SocialMediaFeed