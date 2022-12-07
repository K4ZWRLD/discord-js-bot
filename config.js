module.exports = {
  OWNER_IDS: 1011491610216894485, // Bot owner ID's
  SUPPORT_SERVER: "https://discord.gg/gmc9sGuTc4", // Your bot support server
  PREFIX_COMMANDS: {
    ENABLED: true, // Enable/Disable prefix commands
    DEFAULT_PREFIX: "!", // Default prefix for the bot
  },
  INTERACTIONS: {
    SLASH: true, // Should the interactions be enabled
    CONTEXT: true, // Should contexts be enabled
    GLOBAL: true, // Should the interactions be registered globally
    TEST_GUILD_ID: "xxxxxxxxxxx", // Guild ID where the interactions should be registered. [** Test you commands here first **]
  },
  EMBED_COLORS: {
    BOT_EMBED: "#000000",
    TRANSPARENT: "#36393F",
    SUCCESS: "#ffffff",
    ERROR: "#bababa",
    WARNING: "#bababa",
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
    baseURL: "http://localhost:8080", // base url
    failureURL: "http://localhost:8080", // failure redirect url
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
    DEFAULT_SOURCE: "SC", // YT or YTM or SC
    // Add any number of lavalink nodes here
    // Refer to https://github.com/freyacodes/Lavalink to host your own lavalink server
    LAVALINK_NODES: [
      {
        host: "localhost",
        port: 0000,
        password: "youshallnotpass",
        id: "Local Node",
        secure: true,
      },
    ],
  },

  GIVEAWAYS: {
    ENABLED: true,
    REACTION: "🕸️",
    START_EMBED: "#FFFFFF",
    END_EMBED: "#000000",
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
      TIMEOUT: "#4D0904",
      UNTIMEOUT: "#0F4D04",
      KICK: "#4D0904",
      SOFTBAN: "#4D0904",
      BAN: "#4D0904",
      UNBAN: "#0F4D04",
      VMUTE: "#4D0904",
      VUNMUTE: "#0F4D04",
      DEAFEN: "#4D0904",
      UNDEAFEN: "#0F4D04",
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
    DEFAULT_LVL_UP_MSG: "{member:tag}, u just advanced to lvl **{level}**",
  },

  SUGGESTIONS: {
    ENABLED: true, // Should the suggestion system be enabled
    EMOJI: {
      UP_VOTE: "⬆️",
      DOWN_VOTE: "⬇️",
    },
    DEFAULT_EMBED: "#000000",
    APPROVED_EMBED: "#0F4D04",
    DENIED_EMBED: "#4D0904",
  },

  TICKET: {
    ENABLED: true,
    CREATE_EMBED: "#36393f",
    CLOSE_EMBED: "#000000",
  },
};
