const Discord = require("discord.js");
const bot = new Discord.Client();

const token = process.env.token;
const prefix = "$";

const red = 0xc0392b;
const yellow = 0xf1c40f;
const blue = 0x0652dd;
const neutral = 0x44bd32;
const white = 0xdfe6e9;

bot.on("ready", () => {
  console.log("this bot is online");
});
bot.on("message", (message) => {
  if (message.isMemberMentioned(bot.user)) {
    message.reply("Hey!! How are you?");
  }
});
bot.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix)) {
    return;
  }
  if (command === "docs") {
    if (args[0] === "python") {
      message.channel.send("https://docs.python.org/3/");
    } else if (args[0] === "all") {
      message.channel.send("https://devdocs.io/");
    } else if (args[0] == "java") {
      message.channel.send("https://docs.oracle.com/javase/7/docs/");
    } else if (args[0] === "html") {
      message.channel.send("https://developer.mozilla.org/en-US/docs/Web/HTML");
    } else if (args[0] === "javascript" || args[0] === "js") {
      message.channel.send(
        "https://developer.mozilla.org/en-US/docs/Web/javascript"
      );
    } else if (args[0] === "css") {
      message.channel.send("https://developer.mozilla.org/en-US/docs/Web/CSS");
    } else if (args[0] == "c#") {
      message.channel.send("https://docs.microsoft.com/en-gb/dotnet/csharp/");
    } else if (args[0] === "c++" || args[0] === "cpp") {
      message.channel.send("https://devdocs.io/cpp/");
    } else if (args[0] === "c") {
      message.channel.send("https://devdocs.io/c/");
    } else if (args[0] === "kotlin") {
      message.channel.send("https://kotlinlang.org/docs/reference/");
    } else if (args[0] === "swift") {
      message.channel.send(
        "https://docs.swift.org/swift-book/ReferenceManual/AboutTheLanguageReference.html"
      );
    } else if (args[0] === "dart") {
      message.channel.send("https://dart.dev/guides/language/language-tour");
    } else if (args[0] === "fultter") {
      message.channel.send("https://flutter.dev/docs");
    } else if (args[0] === "sql") {
      message.channel.send("https://dev.mysql.com/doc/");
    } else if (args[0] === "react") {
      message.channel.send("https://reactjs.org/docs/getting-started.html");
    } else if (args[0] === "angular") {
      message.channel.send("https://angular.io/docs");
    } else if (args[0] === "vue") {
      message.channel.send("https://vuejs.org/v2/guide/");
    } else if (
      args[0] === "vb" ||
      args[0] == "vb net" ||
      args[0] === "visual basics"
    ) {
      message.channel.send(
        "https://docs.microsoft.com/en-us/dotnet/visual-basic/"
      );
    } else if (args[0] === "php") {
      message.channel.send("https://www.php.net/manual/en/langref.php");
    } else {
      const embedError = new Discord.RichEmbed();
      embedError
        .setTitle("An Error Has Occured")
        .addField(
          "Incorrect Type or Number of Arguments",
          "Please Specify an Argument"
        )
        .addField("Check Spelling", "Have you spelled the language correctly")
        .addField(
          "No Language was found",
          "Or Request a change if you believe a language is missing"
        )
        .addField("Usage", `${prefix}docs [Language]`)
        .setThumbnail(
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanupturnedsoul.files.wordpress.com%2F2015%2F08%2Fsad-face-emoji.jpg&f=1&nofb=1"
        )
        .setColor(red);
      message.reply(embedError);
    }
  }
  if (command === "help") {
    const Help = new Discord.RichEmbed();
    Help.setTitle("List of Commands:")
      .addField("$docs [lang]", "Get the documentation of a specified language")
      .addField("$help", "Show a List of Commands")
      .setColor(blue)
      .setThumbnail(
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fresonatinglove.files.wordpress.com%2F2014%2F03%2Fquestion-mark.png&f=1&nofb=1"
      );
    message.channel.send(Help);
  }
});

bot.login(token);
