import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Animated, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text, ActionSheet, Footer, FooterTab, Fab, CardItem } from 'native-base';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import { ScreenOrientation } from 'expo'



const image ='i.imgur.com/E2PbxmA.jpg'
const color1= '#149eff'
const color1Claro= '#eef8ff'
const phonewidth = Dimensions.get('screen').width

const style = StyleSheet.create({
   container: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  header : {
    height : 240,
    flexDirection: 'column',
    backgroundColor: color1Claro,
    padding : 0,
    margin : 0,
    alignContent: 'center'
  },
  editar : {
    flexDirection : 'column',
    justifyContent : 'center',
    alignContent : 'center',
    textAlign : 'center',
    alignItems : 'center',
    flex : 1
  },
  nav : {
    height : 35,
    backgroundColor : color1,
    justifyContent : 'center',
    alignContent : 'center',
    flexDirection : 'row',
    justifyContent : 'center',
    borderLeftWidth : 1,
    borderRightWidth : 1,
    borderRadius : 0,   
    borderColor: 'black',    
    width : (phonewidth / 3)
  },

  filtro : {
    height : 45,
    flexDirection : 'row',
    backgroundColor: '#eef8ff'
  }
})




const styleMiPet = StyleSheet.create({
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

const url = '../../../../assets/img'

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



animatedBox = () => {
  Animated.timing(this.animatedHeight, {
    toValue: 50,
    duration: 500
  }).start()
}

componentWillMount = () => {
this.animatedWidth = new Animated.Value(50)
this.animatedHeight = new Animated.Value(100)
}

  render() {

const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
    return (
       <Container contentContainerStyle={style.Container}>
      <View style={{height : 24 }}>
      </View>
          <Header style={style.header}> 
                <View style={{height : 250, flex : 1, marginLeft : -10}}>
                        <Image source={require(url+'/patas-fondo.jpg')} style={{flex: 1,height : undefined, width: phonewidth, margin : 0}} resizeMode={ImageResizeMode.cover} />
                </View>         
                <View  style={{height : 40, flexDirection : 'row'}} >
                      <View  style={{height : 80, width : 80, marginTop: -40}} >
                              <Image source={require(url+'/6.jpg')} style={{flex: 1, height: undefined, width: undefined, borderRadius : 40}} resizeMode={ImageResizeMode.cover} />
                      </View >
                      <Text style={{ flex : 3, padding : 5}}>Nayeon</Text>
                      <View style={style.editar}>
                         <Icon name="home" />
                      </View>
                </View >
                <TouchableOpacity style={{height : 100, backgroundColor : color1Claro}} onPress ={this.animatedBox}   >
                    <View  style = {{flex : 1, backgroundColor : 'blue' }}  >
                        <Text>
                            City : Seul      
                        </Text>
                        <Text>
                            edad : 23      
                        </Text>      
                        <Text>
                            City      
                        </Text>
                        <Animated.View style={[{height : 100, backgroundColor : color1Claro}, animatedStyle]} />
                    </View>

                  
                </TouchableOpacity>

          </Header>


          <View style={style.filtro}>
              <Button style={style.nav}  >
                <Text>Zona</Text>
              </Button>
              <Button style={style.nav} >
                <Text>Color</Text>
              </Button>
              <Button style={style.nav} >
                  <Text>Edad</Text>
              </Button>
          </View>
{
//My pet 
}
          <View style = {{flex : 1, backgroundColor : 'violet'}}>


                  <View style={styleMiPet.post}>
                    
                    <View  style={styleMiPet.postimage} >
                      <Image source={require(url+'/9.jpg')} style={{flex: 1, height: undefined, width: undefined}} resizeMode={ImageResizeMode.cover} />
                    </View >

                    <View style={styleMiPet.postHeader}>
                      <View style={styleMiPet.usuarioPost}>
                      
                          <View style={styleMiPet.postPerfilC}>
                              <Image source={require(url+'/9.jpg')} style={styleMiPet.postPerfil} resizeMode="cover" />
                          </View>

                          <Text style={{flex : 3, backgroundColor : 'transparent', padding : 3}} >@agusonce</Text>

                          <Button  style={styleMiPet.btnOptions} onPress={this.desplegarOpcionesZona}>
                              <Icon name="time" style={{height : 25,
                                width : 26, paddingLeft: 2,
                                }} />
                          </Button>
                      </View>

                      <View style={styleMiPet.contenidoPost}>
                            <Text>
                                City : Seul      
                            </Text>
                            <Text>
                                edad : 23      
                            </Text>      
                            <Text>
                                City      
                            </Text>
                             <Text>
                                City      
                            </Text>
                             <Text>
                                City      
                            </Text>
                             <Text>
                                City      
                            </Text>                             
                      </View>
                    </View>
                  </View>




          </View>



      </Container>
    );
  }
}
