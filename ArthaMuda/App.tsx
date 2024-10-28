import { Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddIncome from "./pages/AddIncome";
import AddOutcome from "./pages/AddOutcome";
import Details from "./pages/Details";
import DetailsIncome from "./pages/DetailsIncome";
import DetailsOutcome from "./pages/DetailsOutcome";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AddIncome" component={AddIncome} />
        <Stack.Screen name="AddOutcome" component={AddOutcome} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="DetailsIncome" component={DetailsIncome} />
        <Stack.Screen name="DetailsOutcome" component={DetailsOutcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
