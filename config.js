// Configuração do painel. É este o único ficheiro que precisas de editar.
// NÃO coloques aqui links de calendários nem passwords: esses ficam no Worker.
window.DASH_CONFIG = {
  // Endereço do teu Worker da Cloudflare (ver README, passo 3).
  WORKER_URL: "https://painel-casa.rmacedo-23.workers.dev",
  SPOTIFY_CLIENT_ID: "9eda80ee2b1049649ca170610e15dd2d",
  // Local para a meteo (latitude e longitude). Ajusta para a tua zona.
  LAT: 38.69,
  LON: -9.34,

  // Modo noturno: ecrã escuro e discreto entre estas horas.
  NIGHT_START: 2,
  NIGHT_END: 7,

  // Hora a que a página se recarrega sozinha todas as noites (liberta memória).
  RELOAD_HOUR: 4,

  // Quantos dias mostrar na agenda (2 = hoje e amanhã).
  AGENDA_DAYS: 4,

  // Notícias: quantas por página e de quantos em quantos segundos mudam.
  NEWS_PER_PAGE: 4,
  NEWS_ROTATE_SECONDS: 10,

  // Mostra os cartões "Casa" e "Spotify" vazios, a marcar o lugar das próximas fases.
  SHOW_PLACEHOLDERS: true
};
