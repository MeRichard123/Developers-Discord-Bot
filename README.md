# Developers-Discord-Bot
## Usage Instructions:
- Fork this repository
- go to [discord dev portal](https://discordapp.com/developers/applications)
- Create a new Application and Give it a Name
- go the the Bot tab add a name and icon
- go to the [discord perms calcuator](https://discordapi.com/permissions.html)
- Select Permissions 'Administrator is Recommended' but if you want to do a custom one all Text Permissions are needed
- Go back to the [discord app](https://discordapp.com/developers/applications/) and copy the client ID
- At the bottom of the permissions calcuator page paste the client id into the box
- Click the Link at the Bottom
- Select the correct channel you want to add it to (you can close this tab once the bot is added)
- Back in the Bot Section of the Developer Portal copy the Token
- Log on to [Heroku](https://dashboard.heroku.com/)
- Create an App and give it a name
- In the Deploy Section Connect to git hub and find the Repo you have forked
- I have already included a Procfile so in the Resource section you should see this:
![Image](https://github.com/MeRichard123/Developers-Discord-Bot/blob/master/screen.png?raw=true)
- If not Wait a while or Close the Page and Reload it
- Click the pencil next to the selected one and turn it off
- Click the pencil next to the deselected one and turn it on
- In Setting > Reveal Config Vars add a key of 'token' and a 'value' of the token you copied from discord
- You should be all set
