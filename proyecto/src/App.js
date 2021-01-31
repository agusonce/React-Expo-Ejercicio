import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Perdidos from './modules/Perdidos/container/perdidos'
import Login from './modules/Login/container/login'
import Perfil from './modules/Perfil/container/perfil'

const PerdidosNavigation = createStackNavigator({
  SeccionPerdidos : {
    screen : Perdidos,
    navigationOptions: 'perdidos'
  },
  Login : {
    screen : Login
  },
  Perfil : {
    screen : Perfil
  }

},
{
    mode: 'modal',
    headerMode: 'none',
  });


export default createAppContainer(PerdidosNavigation)