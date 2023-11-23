import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/user', async (req, res) => {
  const input = req.body.input;
  const apiEndpoints = [
    {
      name: 'User (UserID)',
      endpoint: `https://users.roblox.com/v1/users/${input}`
    },
    {
      name: 'Avatar (UserID)',
      endpoint: `https://avatar.roblox.com/v1/users/${input}/avatar`
    },
    {
      name: 'Currently Wearing (UserID)',
      endpoint: `https://avatar.roblox.com/v1/users/${input}/currently-wearing`
    },
    {
      name: 'Outfits (UserID)',
      endpoint: `https://avatar.roblox.com/v1/users/${input}/outfits?page=1&itemsPerPage=100`
    },
    {
      name: 'Badges (UserID)',
      endpoint: `https://badges.roblox.com/v1/users/${input}/badges?limit=100&sortOrder=Asc`
    },
    {
      name: 'Bundles Owned (UserID)',
      endpoint: `https://catalog.roblox.com/v1/users/${input}/bundles?limit=100&sortOrder=Asc`
    },
    {
      name: 'Friends (UserID)',
      endpoint: `https://friends.roblox.com/v1/users/${input}/friends`
    },
    {
      name: 'Favorited Games (UserID)',
      endpoint: `https://games.roblox.com/v2/users/${input}/favorite/games?accessFilter=2&limit=50&sortOrder=Asc`
    },
    {
      name: 'Games (UserID)',
      endpoint: `https://games.roblox.com/v2/users/${input}/games?accessFilter=2&limit=50&sortOrder=Asc`
    },
    {
      name: 'Group Roles (UserID)',
      endpoint: `https://groups.roblox.com/v2/users/${input}/groups/roles`
    },
    {
      name: 'Owned Assets (UserID)',
      endpoint: `https://inventory.roblox.com/v1/users/${input}/assets/collectibles?limit=100&sortOrder=Asc`
    },
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
        name: 'SupportedLang (GameID)',
        endpoint: `https://gameinternationalization.roblox.com/v2/supported-languages/games/${input}`
      },
      {
        name: 'AllGameIcons (GameID)',
        endpoint: `https://gameinternationalization.roblox.com/v1/game-icon/games/${input}?width=512&height=512`
      },
      {
        name: 'GameThumbnails (GameID)',
        endpoint: `https://gameinternationalization.roblox.com/v1/game-thumbnails/games/${input}/images?width=768&height=432`
      },
      {
        name: 'NameDesc (GameID)',
        endpoint: `https://gameinternationalization.roblox.com/v1/name-description/games/${input}`
      },
      {
        name: 'SourceLanguage (GameID)',
        endpoint: `https://gameinternationalization.roblox.com/v1/source-language/games/${input}`
      },
      {
        name: 'SupportedLanguage (GameID)',
        endpoint: `https://gameinternationalization.roblox.com/v1/supported-languages/games/${input}`
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

app.post('/game', async (req, res) => {
  const input = req.body.input;

  const apiEndpoints = [
    {
      name: 'PlaceID -> UniverseID',
      endpoint: `https://apis.roblox.com/universes/v1/places/${input}/universe`
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

app.post('/group', async (req, res) => {
  const input = req.body.input;

  const apiEndpoints = [
    {
      name: 'Universes (GroupID)',
      endpoint: `https://develop.roblox.com/v1/groups/${input}/universes?isArchived=false&limit=100&sortOrder=Asc`
    },
    {
      name: 'Info (GroupID)',
      endpoint: `https://groups.roblox.com/v1/groups/${input}`
    },
    {
      name: 'NameHistory (GroupID)',
      endpoint: `https://groups.roblox.com/v1/groups/${input}/name-history?limit=100&sortOrder=Asc`
    },
    {
      name: 'GroupRoles (GroupID)',
      endpoint: `https://groups.roblox.com/v1/groups/${input}/roles`
    },
    {
      name: 'Socials (GroupID)',
      endpoint: `https://groups.roblox.com/v1/groups/${input}/social-links`
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
