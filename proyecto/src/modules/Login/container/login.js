import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text, ActionSheet } from 'native-base';

var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const style = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'red'
  },
  search: {
    alignSelf: 'auto',
    flexDirection: 'column',
    backgroundColor: 'green',

  },
  contenido: {
     flex: 4,
  },
  contenido1: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignContent: 'center'
  },
  filtros:{
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    paddingTop: 2
  },
  filtro:{
    height: 30,
    flexDirection: 'row'


  }

})

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <Container contentContainerStyle={style.Container}>
      <View style={style.search}>
        <Header searchBar rounded >
          <View style={style.contenido1}>
           <Text>perfil</Text>
          </View>
  
          <Item style={style.contenido}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
           <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Sfearch</Text>
          </Button>
          <View style={style.contenido1}>
            <Text>chat</Text>        
              </View>

        </Header>
      </View>
        <View style={style.filtro}>
           
            <Button style={style.filtros}
               onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Testing ActionSheet"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}
            >

            <Text>Zona</Text><Icon name="arrow-back" />
            </Button>
        </View>
      </Container>
    );
  }
}
