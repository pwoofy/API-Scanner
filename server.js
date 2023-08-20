import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/scan', async (req, res) => {
    const input = req.body.input;
  
    const apiEndpoints = [
      {
        name: 'Media (UniverseID)',
        endpoint: `https://games.roblox.com/v2/games/${input}/media`
      },
      {
        name: 'Favorites (UniverseID)',
        endpoint: `https://games.roblox.com/v1/games/${input}/favorites/count`
      },
      {
        name: 'Gamepasses (UniverseID)',
        endpoint: `https://games.roblox.com/v1/games/${input}/game-passes`
      },
      {
        name: 'Places (UniverseID)',
        endpoint: `https://develop.roblox.com/v1/universes/${input}/places`
      },
      {
        name: 'Badges (UniverseID)',
        endpoint: `https://badges.roblox.com/v1/universes/${input}/badges?limit=100&sortOrder=Asc`
      },
      {
        name: 'GameInfo (UniverseID)',
        endpoint: `https://develop.roblox.com/v1/universes/${input}`
      },
      {
        name: 'Localization (UniverseID)',
        endpoint: `https://gameinternationalization.roblox.com/v1/user-localization-settings/universe/${input}`
      }
  ];

  let results = '';

  for (const api of apiEndpoints) {
    try {
      const response = await fetch(api.endpoint);
      const json = await response.json();
      const formattedJson = JSON.stringify(json, null, 2);

      results += `${api.name}\n`;
      results += '='.repeat(70) + '\n';
      results += `${formattedJson}\n`;
      results += '='.repeat(70) + '\n\n';
    } catch (error) {
      results += `${api.name} - Error: ${error.message}\n\n`;
    }
  }

  res.send(`<pre>${results}</pre>`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
