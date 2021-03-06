require('dotenv').config();
const queryTypes = require("./src/util/queryTypes");
const dailyStats = require("./src/modules/dailyStats.js");
const profit = require("./src/modules/profit.js");
const profile = require("./src/modules/profile.js");
const tip = require("./src/modules/tip.js");
const { Telegraf, session, Scenes, Markup, BaseScene, Stage } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
const os = require('os');
const fs = require('fs');
const cron = require('node-cron');

bot.use(session({ ttl: 10 }))

//-------------------------------------NO API REQUIRED - AlPHABETICAL --------------------------------------------
bot.command('backup', async (ctx) => {
  command = 'backup'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    return ctx.reply(
      `Please visit this link to see how to back your node up: https://www.otnode.com/maintenance/node-backup`
    )
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('bothelp', async (ctx) => {
  command = 'bothelp'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    return ctx.reply(
      `b-OT Commands:
      /nodehelp
      /profit
      /backup
      /freespace
      /dockerless
      /overlay
      /pruning
      /jobs
      /activejobs
      /nodes
      /staked
      /locked
      /payouts`
    )
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('dockerless', async (ctx) => {
  command = 'dockerless'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    return ctx.reply(
      `Sometimes running your node in docker has its draw backs. Below is a community developed way of running without docker.
      github.com/calr0x/OT-DockSucker`
    )
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('freespace', async (ctx) => {
  command = 'freespace'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    return ctx.reply(
      `Please visit this link to see how to potentially clear up space on your node: https://www.otnode.com/maintenance/node-space-management
      You can also try running the below commands to free space.
      wget https://raw.githubusercontent.com/calr0x/OT-Settings/main/space-maker.sh
      chmod +x space-maker.sh
      ./space-maker.sh`
    )
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('nodehelp', async (ctx) => {
  command = 'nodehelp'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    return ctx.reply(
      `OT-Hub: https://othub.origin-trail.network/dashboard
      Discord Support: https://discord.gg/QCb3hqa4
      Start A New Node: otnode.com
      Support Email: tech@origin-trail.com`
    )
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('overlay', async (ctx) => {
  command = 'overlay'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    return ctx.reply(
      `The Cosmic Overlay is a gui/interface built for docker nodes. You can find it here: https://github.com/CosmiCloud/Cosmic_OverlayV2`
    )
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('pruning', async (ctx) => {
  command = 'pruning'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    return ctx.reply(
      `If you would like to easily add data pruning to your V5 node config, you can run the following command on your server:
      wget https://raw.githubusercontent.com/calr0x/OT-Settings/main/data/add-pruning.sh && chmod +x add-pruning.sh && ./add-pruning.sh`
    )
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('activejobs', async (ctx) => {
  command = 'activejobs'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB();
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.All.ActiveJobs
    await ctx.reply('There are '+result+' active jobs.')
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('avgreward', async (ctx) => {
  command = 'avgreward'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB();
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.All.JobsReward24H
    result = result.toFixed(2);
    await ctx.reply(`The average jobs pays ${result} TRAC.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('dotjobs', async (ctx) => {
  command = 'dotjobs'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    await ctx.reply(`You have just delayed the parachain by 3 months.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('ethjobs', async (ctx) => {
  command = 'ethjobs'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `jobs/jobcreatedcountinperiod?timePeriod=hours&time=24&blockchainID=1&onlyFinalizedJobs=true`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data
    await ctx.reply(`There have been ${result} eth jobs in the past 24 hours.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('ethlocked', async (ctx) => {
  command = 'ethlocked'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.Blockchains[2].TokensLocked24H
    await ctx.reply(`There has been ${result} ethTRAC locked into jobs in the past 24 hours.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('ethnodes', async (ctx) => {
  command = 'ethnodes'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.Blockchains[2].ActiveNodes
    await ctx.reply(`There are ${result} active eth nodes(identities) on the ODN.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('ethpayouts', async (ctx) => {
  command = 'ethpayouts'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.Blockchains[2].TokensPaidout24H
    await ctx.reply(`There has been ${result} ethTRAC paidout in the last 24 hours.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('ethstaked', async (ctx) => {
  command = 'ethstaked'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.Blockchains[2].StakedTokens
    await ctx.reply(`There is ${result} ethTRAC staked on the ODN.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('gnosisjobs', async (ctx) => {
  command = 'gnosisjobs'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `jobs/jobcreatedcountinperiod?timePeriod=hours&time=24&blockchainID=2&onlyFinalizedJobs=true`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data
    await ctx.reply(`There have been ${result} gnosis jobs in the past 24 hours.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('gnosislocked', async (ctx) => {
  command = 'gnosislocked'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.Blockchains[1].TokensLocked24H
    await ctx.reply(`There has been ${result} gnoTRAC locked into jobs in the past 24 hours.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('gnosisnodes', async (ctx) => {
  command = 'gnosisnodes'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.Blockchains[1].ActiveNodes
    await ctx.reply(`There are ${result} active gnosis nodes(identities) on the ODN.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('gnosispayouts', async (ctx) => {
  command = 'gnosispayouts'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.Blockchains[1].TokensPaidout24H
    await ctx.reply(`There has been ${result} gnoTRAC paidout in the last 24 hours.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('gnosisstaked', async (ctx) => {
  command = 'gnosisstaked'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.Blockchains[1].StakedTokens
    await ctx.reply(`There is ${result} gnoTRAC staked on the ODN.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('jobs', async (ctx) => {
  command = 'jobs'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `jobs/jobcreatedcountinperiod?timePeriod=hours&time=24&onlyFinalizedJobs=true`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data
    await ctx.reply(`There have been ${result} jobs in the past 24 hours.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('locked', async (ctx) => {
  command = 'locked'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.All.TokensLocked24H
    await ctx.reply(`There has been ${result} TRAC locked into jobs in the past 24 hours.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('nodes', async (ctx) => {
  command = 'nodes'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.All.ActiveNodes
    await ctx.reply(`There are ${result} active nodes(identities) on the ODN.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('payouts', async (ctx) => {
  command = 'payouts'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.All.TokensPaidout24H
    await ctx.reply(`There has been ${result} TRAC paidout in the last 24 hours.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('polyjobs', async (ctx) => {
  command = 'polyjobs'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `jobs/jobcreatedcountinperiod?timePeriod=hours&time=24&blockchainID=3&onlyFinalizedJobs=true`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data
    await ctx.reply(`There have been ${result} polygon jobs in the past 24 hours.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('polylocked', async (ctx) => {
  command = 'polylocked'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.Blockchains[0].TokensLocked24H
    await ctx.reply(`There has been ${result} polyTRAC locked into jobs in the past 24 hours.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('polynodes', async (ctx) => {
  command = 'polynodes'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.Blockchains[0].ActiveNodes
    await ctx.reply(`There are ${result} active polygon nodes(identities) on the ODN.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('polypayouts', async (ctx) => {
  command = 'polypayouts'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.Blockchains[0].TokensPaidout24H
    await ctx.reply(`There has been ${result} polyTRAC paidout in the last 24 hours.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('polystaked', async (ctx) => {
  command = 'polystaked'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.Blockchains[0].StakedTokens
    await ctx.reply(`There is ${result} polyTRAC staked on the ODN.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('profit', async (ctx) => {
  command = 'profit'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    profit_stmnt = await profit(ctx);
    await ctx.reply(profit_stmnt)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('staked', async (ctx) => {
  command = 'staked'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    await ctx.deleteMessage();
    queryOTHUB = queryTypes.queryOTHUB()
    ext = `home/HomeV3`
    result = await queryOTHUB
    .getData(ext)
    .then(async ({ result }) => {
      return result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    result = result.data.All.StakedTokens
    result = result.toFixed(2)
    await ctx.reply(`There is ${result} TRAC staked on the ODN.`)
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('tip', async (ctx) => {
  // tip_stmnt = await tip(ctx);
  // if(tip_stmnt){
  //   await ctx.reply(tip_stmnt);
  // }
  await ctx.deleteMessage();
});

bot.command('tst', async (ctx) => {
  stats = await dailyStats();
  // chat_ids = JSON.parse(process.env.CHAT_IDS_FOR_DAILY)
  // for(i = 0; i < chat_ids.length ; i++){
  //   await bot.telegram.sendMessage(chat_ids[i],stats);
  // }

  await ctx.reply(stats);
  await ctx.deleteMessage();
});

//-----------------------------------AUTOMATED REPLYS-----------------------
cron.schedule('0 20 * * *', async (ctx) => {
  stats = await dailyStats();
  chat_ids = JSON.parse(process.env.CHAT_IDS_FOR_DAILY)
  for(i = 0; i < chat_ids.length ; i++){
    await bot.telegram.sendMessage(chat_ids[i],stats);
  }
});

//--------------------------------------------PROFILES--------------------------
bot.command('myprofile', async (ctx) => {
  command = 'myprofile'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    profile_response = await profile(`profile`,ctx);
    await ctx.replyWithMarkdownV2(profile_response);
    await ctx.deleteMessage();
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('createprofile', async (ctx) => {
  profile_response = await profile(`create`,ctx);
  await ctx.replyWithMarkdownV2(profile_response);
  await ctx.deleteMessage();
});

bot.command('deleteprofile', async (ctx) => {
  profile_response = await profile(`delete`,ctx);
  await ctx.replyWithMarkdownV2(profile_response);
  await ctx.deleteMessage();
});

bot.command('nodeids', async (ctx) => {
  command = 'nodeids'
  spamCheck = await queryTypes.spamCheck();
  permission = await spamCheck
  .getData(command)
  .then(async ({ permission }) => {
    return permission;
  })
  .catch((error) => console.log(`Error : ${error}`));

  if(permission == `allow`){
    profile_response = await profile(`nodeids`,ctx);
    await ctx.replyWithMarkdownV2(profile_response);
    await ctx.deleteMessage();
  }else{
    await ctx.deleteMessage();
  }
});

bot.command('addnodeid', async (ctx) => {
  profile_response = await profile(`add`,ctx);
  await ctx.replyWithMarkdownV2(profile_response);
  await ctx.deleteMessage();
});

//-----------------------END---------------------------

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
