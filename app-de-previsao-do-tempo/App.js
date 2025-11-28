import React from "react";
import { StatusBar, View, Text } from "react-native";
import Toast from "react-native-toast-message";
import { LinearGradient } from "expo-linear-gradient";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherAnimations from "./components/WeatherAnimations";

import useWeather from "./hooks/useWeather";
import getTheme from "./theme/theme";
import globalStyles from "./styles/globalStyles";

export default function App() {
  const {
    info,
    cidade,
    setCidade,
    buscarClima,
    buscarPelaLocalizacao,
    carregando
  } = useWeather();   

  const theme = getTheme(info);

  return (
    <>
      <StatusBar barStyle="light-content" />

      <LinearGradient colors={theme.colors} style={globalStyles.container}>
        <View style={globalStyles.inner}>

          <Text style={globalStyles.title}>🌤️  Clima Agora</Text>

          <SearchBar
            cidade={cidade}
            setCidade={setCidade}
            buscarClima={buscarClima}
            buscarPelaLocalizacao={buscarPelaLocalizacao}
            carregando={carregando}
          />

          {/* BLOCO SUPERIOR RESPONSIVO */}
          <View style={globalStyles.topWrapper}>
            <WeatherAnimations info={info} theme={theme}>
              <WeatherCard info={info} />
            </WeatherAnimations>
          </View>

        </View>

        <Toast />
      </LinearGradient>
    </>
  );
}
