const { ChannelType } = require("discord.js");

/**
 * @param {import('discord.js').GuildMember} member
 * @param {import('discord.js').GuildTextBasedChannel} giveawayChannel
 * @param {number} duration
 * @param {string} prize
 * @param {number} winners
 * @param {import('discord.js').User} [host]
 * @param {string[]} [allowedRoles]
 */
module.exports = async (member, giveawayChannel, duration, prize, winners, host, allowedRoles = []) => {
  try {
    if (!host) host = member.user;
    if (!member.permissions.has("ManageMessages")) {
      return "You need to have the manage messages permissions to start giveaways.";
    }

    if (!giveawayChannel.type === ChannelType.GuildText) {
      return "You can only start giveaways in text channels.";
    }

    /**
     * @type {import("discord-giveaways").GiveawayStartOptions}
     */
    const options = {
      duration: duration,
      prize,
      winnerCount: winners,
      hostedBy: host,
      thumbnail: "https://media.discordapp.net/attachments/1040773632185598034/1053046998904873051/5afbb7bf7d3234cc72d725bb91225d8b.jpg?width=531&height=499",
      messages: {
        giveaway: "🎉 **GIVEAWAY** 🎉",
        giveawayEnded: "🎉 **GIVEAWAY ENDED** 🎉",
        inviteToParticipate: "react to enter",
        dropMessage: "be the first to react to win!",
        hostedBy: `\nhosted by: ${host.tag}`,
      },
    };

    if (allowedRoles.length > 0) {
      options.exemptMembers = (member) => !member.roles.cache.find((role) => allowedRoles.includes(role.id));
    }

    await member.client.giveawaysManager.start(giveawayChannel, options);
    return `Giveaway started in ${giveawayChannel}`;
  } catch (error) {
    member.client.logger.error("Giveaway Start", error);
    return `An error occurred while starting the giveaway: ${error.message}`;
  }
};
