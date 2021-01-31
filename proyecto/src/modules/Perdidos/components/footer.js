import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text, ActionSheet, Footer, FooterTab, Fab, CardItem } from 'native-base';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

const color1Claro= '#eef8ff'
const color1= '#149eff'


  const style = StyleSheet.create({
  footer : {
    height : 50
  }
  })


export default class FooterMio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navegar = () => {
    //var hola = 'hola'
    this.props.navigation.navigate('Perfil')
  }

  render() {

return (
      <Footer style={style.footer}>
          <FooterTab style={{backgroundColor : color1}}>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="close" />
            </Button>
            <Button onPress={this.navegar}>
              <Icon name="person" />
            </Button>
            <Button >
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>

    );


   }}