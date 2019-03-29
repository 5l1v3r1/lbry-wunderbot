'use strict';
let initialized = false;
let discordBot = null;

exports.supportBot = function(discordBot_) {
  init(discordBot_);
};

function init(discordBot_) {
  if (initialized) {
    throw new Error('init was already called once');
  }

  discordBot = discordBot_;

  discordBot.on('message', checkForCommand);
}

/**
 *
 * @param {String} message
 */
let checkForCommand = function(message) {
  //if the close command is found
  if (!message.author.bot && message.content.toLowerCase().indexOf('!close') >= 0) {
    //send the -close command twice with a 4 seconds timeout
    message.channel.send('-close').catch(console.error);
    setTimeout(() => {
      message.channel.send('-close').catch(console.error);
    }, 4000);
  }
};
