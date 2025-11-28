import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: { flex: 1 },

  inner: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },

  // SEARCH
  searchContainer: {
    backgroundColor: "rgba(0,0,0,0.18)",
    padding: 12,
    borderRadius: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.14)",
    borderRadius: 12,
    padding: 12,
    color: "#fff",
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#ffb347",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoTexto: {
    color: "#333",
    fontWeight: "bold",
  },

  // TOPO EXPANDIDO
  topWrapper: {
    flex: 1,
    marginTop: 10,
  },

  topSceneEmpty: {
    flex: 1,
    borderRadius: 32,
    backgroundColor: "rgba(255,255,255,0.10)",
  },

  topScene: {
    flex: 1,
    borderRadius: 32,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.10)",
  },

  overlayContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },

  // NUVENS
  cloudLayerBack: {
    position: "absolute",
    bottom: 90,
    left: -30,
    flexDirection: "row",
    opacity: 0.8,
  },
  cloudLayerFront: {
    position: "absolute",
    bottom: 40,
    right: -30,
    flexDirection: "row",
    opacity: 0.9,
  },

  cloudCircleBig: {
    width: 70,
    height: 50,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,0.9)",
    marginHorizontal: 4,
  },
  cloudCircleMedium: {
    width: 55,
    height: 40,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.85)",
    marginHorizontal: 4,
  },
  cloudCircleSmall: {
    width: 45,
    height: 30,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.8)",
    marginHorizontal: 4,
  },

  // SOL
  sunWrapper: {
    position: "absolute",
    top: 15,
    right: 25,
  },

  sunCore: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFD54F",
  },

  // CHUVA
  rainLayer: {
    ...StyleSheet.absoluteFillObject,
  },
  rainDrop: {
    position: "absolute",
    width: 2,
    height: 45,
    backgroundColor: "rgba(255,255,255,0.7)",
  },

  cloudOverlayDark: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "40%",
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  // CARD
  cardWrapper: {
    width: "100%",
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.16)",
    borderRadius: 28,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },

  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    alignItems: "center",
  },

  cityName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  cardSubTitle: {
    color: "#eee",
    fontSize: 13,
  },

  mainTempRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 6,
  },

  temp: {
    fontSize: 64,
    color: "#fff",
    fontWeight: "bold",
    marginRight: 12,
  },

  feelsLike: {
    color: "#eee",
  },

  desc: {
    color: "#fff",
    fontSize: 16,
    marginTop: 3,
    textTransform: "capitalize",
  },

  weatherIcon: {
    width: 60,
    height: 60,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  chip: {
    backgroundColor: "rgba(0,0,0,0.25)",
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flex: 1,
    marginHorizontal: 4,
  },

  chipLabel: {
    color: "#eee",
    fontSize: 11,
  },

  chipValue: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },

});
