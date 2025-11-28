import { useState } from "react";
import Toast from "react-native-toast-message";
import * as Location from "expo-location";

export default function useWeather() {
  const [cidade, setCidade] = useState("");
  const [info, setInfo] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const API_KEY = "cd436e1cdf6fa7748d007d732b17f7ee";

  async function buscarClima() {
    if (!cidade.trim()) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Digite uma cidade.",
        visibilityTime: 2000,
        position: "top",
      });
      return;
    }

    setCarregando(true);
    setInfo(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`
      );
      const dados = await response.json();

      if (dados.cod !== 200) {
        Toast.show({
          type: "error",
          text1: "Cidade não encontrada",
          text2: "Verifique a digitação.",
          visibilityTime: 2000,
          position: "top",
        });
        setCarregando(false);
        return;
      }

      setInfo(dados);
      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: `Clima carregado: ${dados.name}`,
        visibilityTime: 2000,
        position: "top",
      });
    } catch (e) {
      Toast.show({
        type: "error",
        text1: "Erro na API",
        text2: "Tente novamente mais tarde.",
        visibilityTime: 2000,
        position: "top",
      });
    }

    setCarregando(false);
  }

  async function buscarPelaLocalizacao() {
    setCarregando(true);
    setInfo(null);

    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Toast.show({
          type: "error",
          text1: "Permissão negada",
          text2: "Ative o GPS para usar essa função.",
          visibilityTime: 2000,
          position: "top",
        });
        setCarregando(false);
        return;
      }

      const posicao = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });

      const { latitude, longitude } = posicao.coords;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=pt_br`
      );
      const dados = await response.json();

      if (dados.cod !== 200) {
        Toast.show({
          type: "error",
          text1: "Erro",
          text2: "Não foi possível buscar o clima pela localização.",
          visibilityTime: 2000,
          position: "top",
        });
        setCarregando(false);
        return;
      }

      setInfo(dados);
      setCidade(dados.name || "");

      Toast.show({
        type: "success",
        text1: "Localização detectada",
        text2: `Clima de ${dados.name}`,
        visibilityTime: 2000,
        position: "top",
      });

    } catch (e) {
      Toast.show({
        type: "error",
        text1: "Erro ao acessar o GPS",
        text2: "Verifique se o GPS está ativado.",
        visibilityTime: 2000,
        position: "top",
      });
    }

    setCarregando(false);
  }

  return {
    info,
    cidade,
    setCidade,
    buscarClima,
    buscarPelaLocalizacao,
    carregando,
  };
}
