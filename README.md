# API-Scanner
An API scanner for ROBLOX. 

## About this project
This project was made for the sole reason of puzzling, because there are a lot of puzzles that still require ROBLOX API for some reason.
However, if you are a developer (or someone who is just curious), you can find information about a game or a group using this.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)


### Installation
1. Clone the repository:

```bash
git clone https://github.com/pwoofy/API-Scanner.git
```

2. Navigate to the project directory:

```bash
cd API-Scanner
```

3. Install dependencies:

```bash
npm install
```

### Usage
1. Run the server

```bash
npm start
```
The server will start on http://localhost:3000.

2. Open your web browser and go to http://localhost:3000.
3. Once you do that, the rest should be easy to understand.

### Quitting

(because i forgot to include it)

Quitting the server just requires you to do ctrl-c

However, if you somehow forgot to do this, and when you restart it this warning shows up:

```bash
address already in use :::3000
```

Then simply run:

```bash
sudo lsof -i:3000
```

Then get the PID, then paste it in  this command:

```bash
kill -9 {ID HERE}
```

### Contibuting

Feel free to contribute to this project by opening issues or pull requests.

### License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/pwoofy/API-Scanner/blob/main/LICENSE) file for details. 
