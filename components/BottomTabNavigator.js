import { faCompass, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Discover from "../screens/Discover";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Homescreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <FontAwesomeIcon icon={faHome} />;
          },
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <FontAwesomeIcon icon={faCompass} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
