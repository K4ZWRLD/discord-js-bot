module.exports = {
  OWNER_IDS: [1011491610216894485], // Bot owner ID's
  SUPPORT_SERVER: "https://discord.gg/QkDe9CWJ", // Your bot support server
  PREFIX_COMMANDS: {
    ENABLED: true, // Enable/Disable prefix commands
    DEFAULT_PREFIX: ":", // Default prefix for the bot
  },
  INTERACTIONS: {
    SLASH: true, // Should the interactions be enabled
    CONTEXT: true, // Should contexts be enabled
    GLOBAL: true, // Should the interactions be registered globally
    TEST_GUILD_ID: "xxxxxxxxxxx", // Guild ID where the interactions should be registered. [** Test you commands here first **]
  },
  EMBED_COLORS: {
    BOT_EMBED: "#36393f",
    TRANSPARENT: "#36393F",
    SUCCESS: "#36393f",
    ERROR: "#ffffff",
    WARNING: "#ffffff",
  },
  CACHE_SIZE: {
    GUILDS: 100,
    USERS: 10000,
    MEMBERS: 10000,
  },
  MESSAGES: {
    API_ERROR: "Unexpected Backend Error! Try again later or contact support server",
  },

  // PLUGINS

  AUTOMOD: {
    ENABLED: true,
    LOG_EMBED: "#36393F",
    DM_EMBED: "#36393F",
  },

  DASHBOARD: {
    enabled: true, // enable or disable dashboard
    baseURL: "https://losr-production.up.railway.app/api/callback", // base url
    failureURL: "https://losr-production.up.railway.app/api/callback", // failure redirect url
    port: "8080", // port to run the bot on
  },

  ECONOMY: {
    ENABLED: true,
    CURRENCY: "★",
    DAILY_COINS: 150, // coins to be received by daily command
    MIN_BEG_AMOUNT: 100, // minimum coins to be received when beg command is used
    MAX_BEG_AMOUNT: 2500, // maximum coins to be received when beg command is used
  },

  MUSIC: {
    ENABLED: true,
    IDLE_TIME: 60, // Time in seconds before the bot disconnects from an idle voice channel
    MAX_SEARCH_RESULTS: 5,
    DEFAULT_SOURCE: "SC", // YT = Youtube, YTM = Youtube Music, SC = SoundCloud
    // Add any number of lavalink nodes here
    // Refer to https://github.com/freyacodes/Lavalink to host your own lavalink server
    LAVALINK_NODES: [
      {
        host: "lavalink.luneocloud.com",
        port: 443,
        password: "B25.Xaa+C4y",
        id: "#1",
        secure: true,
      },
    ],
  },

  GIVEAWAYS: {
    ENABLED: true,
    REACTION: "🎁",
    START_EMBED: "#36393f",
    END_EMBED: "#FFFFFF",
  },

  IMAGE: {
    ENABLED: true,
    BASE_API: "https://strangeapi.fun/api",
  },

  INVITE: {
    ENABLED: true,
  },

  MODERATION: {
    ENABLED: true,
    EMBED_COLORS: {
      TIMEOUT: "#FFFFFF",
      UNTIMEOUT: "#36393f",
      KICK: "#36393f",
      SOFTBAN: "#36393f",
      BAN: "#36393f",
      UNBAN: "#36393f",
      VMUTE: "#36393f",
      VUNMUTE: "#36393f",
      DEAFEN: "#36393f",
      UNDEAFEN: "#36393f",
      DISCONNECT: "RANDOM",
      MOVE: "RANDOM",
    },
  },

  PRESENCE: {
    ENABLED: true, // Whether or not the bot should update its status
    STATUS: "dnd", // The bot's status [online, idle, dnd, invisible]
    TYPE: "WATCHING", // Status type for the bot [PLAYING | LISTENING | WATCHING | COMPETING]
    MESSAGE: "{members} members in {servers} servers", // Your bot status message
  },

  STATS: {
    ENABLED: true,
    XP_COOLDOWN: 5, // Cooldown in seconds between messages
    DEFAULT_LVL_UP_MSG: "congrats {member:tag}, u just advanced to **lvl {level}**",
  },

  SUGGESTIONS: {
    ENABLED: true, // Should the suggestion system be enabled
    EMOJI: {
      UP_VOTE: "⬆️",
      DOWN_VOTE: "⬇️",
    },
    DEFAULT_EMBED: "#36393f",
    APPROVED_EMBED: "#FFFFFF",
    DENIED_EMBED: "#000000",
  },

  TICKET: {
    ENABLED: true,
    CREATE_EMBED: "#36393f",
    CLOSE_EMBED: "#36393f",
  },
};
