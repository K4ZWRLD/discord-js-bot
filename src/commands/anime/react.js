const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");
const { getJson } = require("@helpers/HttpUtils");
const { EMBED_COLORS } = require("@root/config");
const Anime_Images = require("anime-images-api");
const API = new Anime_Images();

const choices = ["hug", "kiss", "slap", "punch", "wink", "pat", "cuddle", "waifu"];

/**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "react",
  description: "anime reactions",
  enabled: false,
  category: "ANIME",
  cooldown: 5,
  command: {
    enabled: false,
    minArgsCount: 1,
    usage: "[reaction]",
  },
  slashCommand: {
    enabled: false,
    options: [
      {
        name: "category",
        description: "reaction type",
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: choices.map((ch) => ({ name: ch, value: ch })),
      },
    ],
  },

  async messageRun(message, args) {
    const category = args[0].toLowerCase();
    if (!choices.includes(category)) {
      return message.safeReply(`Invalid choice: \`${category}\`.\nAvailable reactions: ${choices.join(", ")}`);
    }

    const embed = await genReaction(category, message.author);
    await message.safeReply({ embeds: [embed] });
  },

  async interactionRun(interaction) {
    const choice = interaction.options.getString("category");
    const embed = await genReaction(choice, interaction.user);
    await interaction.followUp({ embeds: [embed] });
  },
};

const genReaction = async (category, user) => {
  try {
    let imageUrl;

    // some-random api
    if (category === "wink") {
      const response = await getJson("https://some-random-api.ml/animu/wink");
      if (!response.success) throw new Error("API error");
      imageUrl = response.data.link;
    }

    // images api
    else {
      imageUrl = (await API[category]()).url;
    }

    return new EmbedBuilder()
      .setImage(imageUrl)
      .setColor("Random")
      .setFooter({ text: `Requested By ${user.tag}` });
  } catch (ex) {
    return new EmbedBuilder()
      .setColor(EMBED_COLORS.ERROR)
      .setDescription("Failed to fetch meme. Try again!")
      .setFooter({ text: `Requested By ${user.tag}` });
  }
};
