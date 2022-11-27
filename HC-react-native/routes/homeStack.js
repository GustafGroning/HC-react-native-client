import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import BasicGame from "../screens/basicGame";

// You need to send all screens you want into the createStackNavigator
const screens = {
  Home: {
    screen: Home,
  },
  BasicGame: {
    screen: BasicGame,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
