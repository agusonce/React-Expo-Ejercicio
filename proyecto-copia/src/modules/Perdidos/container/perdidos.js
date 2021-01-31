import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Image, Dimensions } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text, ActionSheet, Footer, FooterTab, Fab, CardItem } from 'native-base';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import { ScreenOrientation } from 'expo'
/*import { FooterMio } from '../components/footer'
*/

var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
const image ='i.imgur.com/E2PbxmA.jpg'
const color1= '#149eff'
const color1Claro= '#eef8ff'
const style = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'red'
  },
  search: {
    height : 40,
    flexDirection: 'row',
    backgroundColor: color1,
    padding : 0,
    margin : 0,
    alignContent: 'center',
    justifyContent : 'space-between'
  },
  contenido : {
     flex: 4,
     height : 30,
     borderRadius : 0,
     marginTop : 0 ,
  },
  contenido1 : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignContent : 'center',
    textAlign : 'center',
    alignItems : 'center'
  },
  filtros : {
    height : 35,
    backgroundColor: color1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    paddingTop: 2
  },
  filtro : {
    height : 45,
    flexDirection : 'row',
    backgroundColor: '#eef8ff'


  },
  footer : {
    height : 50
  },
  posts : {
    flex : 6  ,
    backgroundColor : '#eef8ff'
  },
  post : {
    backgroundColor : '#ffffff',
    marginTop : 2 ,
    height: 200,
    flexDirection : 'row'

  },
  postHeader : {
    backgroundColor : 'transparent',
    flex : 2
  },
  postimage : {
    backgroundColor : 'transparent',
    flex : 1,
    padding: 5
  },contenidoPost : {
    flex: 4,
    backgroundColor: 'transparent',
    padding : 10

  },
  usuarioPost : {
    flex : 1,
    flexDirection : 'row',
    backgroundColor : '#ffffff',
    justifyContent : 'center',
    alignContent : 'center',
    padding : 10,
    alignItems : 'center',
    borderBottomColor : color1Claro,
    borderBottomWidth : 1
  },
  postPerfilC : {
    width: 40, height: 40, 
    backgroundColor : 'transparent',
    justifyContent: 'center',
    alignContent : 'center'
  },
  postPerfil : {
    width: 35, height: 35,
    borderRadius: 25,

    backgroundColor : 'transparent'
  },
  btnOptions : {
    width: 30, height: 30, 
    backgroundColor : 'transparent',
    justifyContent: 'center',
    alignContent : 'center'
  }


})


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  navegar = () => {
    //var hola = 'hola'
    this.props.navigation.navigate('Perfil')
  }
  
  auxiliar = () =>{
    var dim = Dimensions.get('screen')
    alert (dim.height)
  }

  desplegarOpcionesZona = () =>
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
            )

  render() {

    return (
      <Container contentContainerStyle={style.Container}>
      <View style={{height : 24}}>
      </View>
    <Header searchBar rounded  style={style.search}>          
          <View style={style.contenido1}>
           <Icon name="home" style={{backgroundColor: '#87cefa', padding : 5, paddingTop: 3, paddingBottom: 3, borderRadius : 20}} />
          </View>
  
          <Item style={style.contenido}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
           <Icon name="ios-people" />
          
          </Item>
          
          <Button transparent >
            <Text ></Text>
          </Button>
          <View style={style.contenido1}>
             <Icon name="home" />
          </View>
    </Header>





    <View style={style.filtro}>
           
            <ScrollView horizontal={true}>
          
              <Button style={style.filtros}
                onPress={this.desplegarOpcionesZona}>
                <Text>Zona</Text><Icon name="arrow-back" />
              </Button>
              <Button style={style.filtros}  onPress={this.desplegarOpcionesZona}>
                <Text>Color</Text><Icon name="arrow-back" />
              </Button>

              <Button style={style.filtros}  onPress={this.auxiliar}>
                  <Text>Edad</Text><Icon name="arrow-back" />
              </Button>

               <Button style={style.filtros}  onPress={this.auxiliar}>
                  <Text>Edad</Text><Icon name="arrow-back" />
              </Button>

          </ScrollView>

    </View>







    <View style={style.posts}>
      <ScrollView>
          
                  
          



                  <View style={style.post}>
                    <View  style={style.postimage} >
                      <Image source={require('./7.jpg')} style={{flex: 1, height: undefined, width: undefined}} resizeMode={ImageResizeMode.cover} />
                    </View >

                    <View style={style.postHeader}>



                    <View style={style.usuarioPost}>
                      
                      <View style={style.postPerfilC}>
                        <Image source={require('./5.jpg')} style={style.postPerfil} resizeMode="cover" />
                      </View>

                      <Text style={{flex : 3, backgroundColor : 'transparent', padding : 3}} >@agusonce</Text>
                      
                      <Button  style={style.btnOptions} onPress={this.desplegarOpcionesZona}>
                            <Icon name="mail" style={{height : 25,
                             width : 26, paddingLeft: 2,

                              }} />
                      </Button>
                  </View>

                  <View style={style.contenidoPost}>
                      <Text>Hola muy buenos dias a todos, dejo este aviso, para algun emprendedor que quiera sumarse a mi equipo de trabajo.</Text>
                  </View>






                    </View>
                    




                  </View>

                <View style={style.post}>
                    <View  style={style.postimage} >
                      <Image source={require('./9.jpg')} style={{flex: 1, height: undefined, width: undefined}} resizeMode={ImageResizeMode.cover} />
                    </View >

                    <View style={style.postHeader}>
                      <View style={style.usuarioPost}>
                      
                          <View style={style.postPerfilC}>
                              <Image source={require('./5.jpg')} style={style.postPerfil} resizeMode="cover" />
                          </View>

                          <Text style={{flex : 3, backgroundColor : 'transparent', padding : 3}} >@agusonce</Text>
                      
                          <Button  style={style.btnOptions} onPress={this.desplegarOpcionesZona}>

                              <Icon name="mail" style={{height : 25,
                                width : 26, paddingLeft: 2, backgroundColor : 'transparent',
                                }} />
                                
                          </Button>
                      </View>

                      <View style={style.contenidoPost}>
                            <Text>Hola muy buenos dias a todos, dejo este aviso, para algun emprendedor que quiera sumarse a mi equipo de trabajo.</Text>
                      </View>
                    </View>
                  </View>
                  





                  <View style={style.post}>
                    

                    <View style={style.postHeader}>
                      <View style={style.usuarioPost}>
                      
                          <View style={style.postPerfilC}>
                              <Image source={require('./9.jpg')} style={style.postPerfil} resizeMode="cover" />
                          </View>

                          <Text style={{flex : 3, backgroundColor : 'transparent', padding : 3}} >@agusonce</Text>

                          <Button  style={style.btnOptions} onPress={this.desplegarOpcionesZona}>
                              <Icon name="time" style={{height : 25,
                                width : 26, paddingLeft: 2,
                                }} />
                          </Button>
                      </View>

                      <View style={style.contenidoPost}>
                            <Text>Hola muy buenos dias a todos, dejo este aviso, para algun emprendedor que quiera sumarse a mi equipo de trabajo.</Text>
                      </View>
                    </View>
                  </View>




<View style={style.post}>
                    <View  style={style.postimage} >
                      <Image source={require('./7.jpg')} style={{flex: 1, height: undefined, width: undefined}} resizeMode={ImageResizeMode.cover} />
                    </View >

                    <View style={style.postHeader}>
                      <View style={style.usuarioPost}>
                      
                          <View style={style.postPerfilC}>
                              <Image source={require('./9.jpg')} style={style.postPerfil} resizeMode="cover" />
                          </View>

                          <Text style={{flex : 3, backgroundColor : 'transparent', padding : 3}} >@agusonce</Text>

                          <Button  style={style.btnOptions} onPress={this.desplegarOpcionesZona}>
                              <Icon name="time" style={{height : 25,
                                width : 26, paddingLeft: 2,
                                }} />
                          </Button>
                      </View>

                      <View style={style.contenidoPost}>
                            <Text>Hola muy buenos dias a todos, dejo este aviso, para algun emprendedor que quiera sumarse a mi equipo de trabajo.</Text>
                      </View>
                    </View>
                  </View>




         </ScrollView>
    </View>







    <View >
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
    </View>
      </Container>
    );
  }
}
