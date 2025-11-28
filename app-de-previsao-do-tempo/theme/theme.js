// 🎨 THEME MODERNO PARA A NOVA UI

export default function getTheme(info) {
  // Sem clima ainda → fundo neutro azul suave
  if (!info) {
    return {
      colors: ["#1E3C72", "#2A5298"],
      mainIcon: "☁️",
    };
  }

  const cond = info.weather[0].main;
  const now = info.dt;
  const sunrise = info.sys.sunrise;
  const sunset = info.sys.sunset;

  const isDay = now >= sunrise && now <= sunset;

  // ☀️ CÉU LIMPO
  if (cond === "Clear") {
    return {
      colors: isDay
        ? ["#4facfe", "#00f2fe"] // azul céu puro
        : ["#0F2027", "#203A43", "#2C5364"], // noite azul profunda
      mainIcon: isDay ? "☀️" : "🌙",
    };
  }

  // ☁️ NUBLADO
  if (cond === "Clouds") {
    return {
      colors: ["#616D86", "#9AA5B1", "#CBD2D9"], // cinza profissional suave
      mainIcon: "☁️",
    };
  }

  // 🌧️ CHUVA / GAROA
  if (cond === "Rain" || cond === "Drizzle") {
    return {
      colors: ["#373B44", "#4286f4"], // azul chuva elegante
      mainIcon: "🌧️",
    };
  }

  // ⛈️ TEMPESTADE
  if (cond === "Thunderstorm") {
    return {
      colors: ["#232526", "#414345"], // tempestade mais escura
      mainIcon: "⛈️",
    };
  }

  // 🌫 NEBLINA OU OUTROS
  return {
    colors: ["#757F9A", "#D7DDE8"], // cinza suave
    mainIcon: "🌫️",
  };
}

export function formatarHora(timestamp, timezoneOffset) {
  const date = new Date((timestamp + timezoneOffset) * 1000);
  const h = String(date.getUTCHours()).padStart(2, "0");
  const m = String(date.getUTCMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}

export function direcaoVento(deg) {
  const direcoes = ["N", "NE", "L", "SE", "S", "SO", "O", "NO"];
  return direcoes[Math.round(deg / 45) % 8];
}
