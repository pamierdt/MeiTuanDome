import {
 StackNavigator,
 StackRouter,
} from 'react-navigation'
import './MainScreen'
const navigationRouter = StackRouter ({
  Home :{
    screen : MainScreen
  },
  Profile:{}
})
