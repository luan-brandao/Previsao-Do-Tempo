import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "../styles/globalStyles";

export default function SearchBar({
  cidade,
  setCidade,
  buscarClima,
  buscarPelaLocalizacao,
  carregando,
}) {
  return (
    <View style={styles.searchContainer}>
      
      <TextInput
        style={styles.input}
        placeholder="Digite a cidade"
        placeholderTextColor="#ccc"
        value={cidade}
        onChangeText={setCidade}
        editable={!carregando}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 6 }}>
        
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.botao, { flex: 1, marginRight: 8, opacity: carregando ? 0.7 : 1 }]}
          onPress={buscarClima}
          disabled={carregando}
        >
          <Text style={styles.botaoTexto}>
            {carregando ? "Buscando..." : "Buscar"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.botao,
            {
              flex: 1,
              marginLeft: 8,
              backgroundColor: "#4de39b",
              opacity: carregando ? 0.7 : 1,
            },
          ]}
          onPress={buscarPelaLocalizacao}
          disabled={carregando}
        >
          <Text style={styles.botaoTexto}>
            {carregando ? "..." : "GPS"}
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
