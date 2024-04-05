import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StepsScreen from "./src/screens/StepsScreen";

const App = () => {
  const steps = [
    {
      step: 1,
      description: "Separa los materiales reciclables del  resto de la basura.",
      image: "1",
    },
    { step: 2,
      description: "Lava los envases antes de reciclarlos." ,
      image: "2",
    },
    {
      step: 3,
      description: "Identifica los contenedores de reciclaje de tu área.",
      image: "3",
    },
    {
      step: 4,
      description: "Coloca los materiales reciclables en loscontenedores correspondientes.",
      image: "4",
    },
  ];
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pasos de Reciclaje">
          {(props) => <StepsScreen {...props} steps={steps} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
