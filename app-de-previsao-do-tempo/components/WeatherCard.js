import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/globalStyles";
import { formatarHora, direcaoVento } from "../theme/theme";

export default function WeatherCard({ info }) {
  if (!info) return null;

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>

        <View style={styles.cardHeaderRow}>
          <View>
            <Text style={styles.cityName}>
              {info.name}  🌍 {info.sys?.country}
            </Text>
            <Text style={styles.cardSubTitle}>
              Hoje · Atualizado às {formatarHora(info.dt, info.timezone)}
            </Text>
          </View>

          <Image
            style={styles.weatherIcon}
            source={{
              uri: `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`,
            }}
          />
        </View>

        <View style={styles.mainTempRow}>
          <Text style={styles.temp}>{Math.round(info.main.temp)}°</Text>
          <View>
            <Text style={styles.feelsLike}>
              Sensação: {Math.round(info.main.feels_like)}°C
            </Text>
            <Text style={styles.desc}>
              {info.weather[0].description.charAt(0).toUpperCase() +
                info.weather[0].description.slice(1)}
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.chip}>
            <Text style={styles.chipLabel}>Mínima</Text>
            <Text style={styles.chipValue}>{Math.round(info.main.temp_min)}°C</Text>
          </View>

          <View style={styles.chip}>
            <Text style={styles.chipLabel}>Máxima</Text>
            <Text style={styles.chipValue}>{Math.round(info.main.temp_max)}°C</Text>
          </View>

          <View style={styles.chip}>
            <Text style={styles.chipLabel}>Umidade</Text>
            <Text style={styles.chipValue}>{info.main.humidity}%</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.chip}>
            <Text style={styles.chipLabel}>Vento</Text>
            <Text style={styles.chipValue}>
              {info.wind.speed} m/s  {direcaoVento(info.wind.deg)}
            </Text>
          </View>

          <View style={styles.chip}>
            <Text style={styles.chipLabel}>Pressão</Text>
            <Text style={styles.chipValue}>{info.main.pressure} hPa</Text>
          </View>

          <View style={styles.chip}>
            <Text style={styles.chipLabel}>Nuvens</Text>
            <Text style={styles.chipValue}>{info.clouds.all}%</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.chip}>
            <Text style={styles.chipLabel}>Nascer</Text>
            <Text style={styles.chipValue}>
              {formatarHora(info.sys.sunrise, info.timezone)}
            </Text>
          </View>

          <View style={styles.chip}>
            <Text style={styles.chipLabel}>Pôr do Sol</Text>
            <Text style={styles.chipValue}>
              {formatarHora(info.sys.sunset, info.timezone)}
            </Text>
          </View>
        </View>

      </View>
    </View>
  );
}
