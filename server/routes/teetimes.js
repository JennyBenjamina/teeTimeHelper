const express = require('express');
// const Todo = require("../models/todo.js");
// const authUser = require("../middleware/authUser.js");
// const adminRole = require("../middleware/adminRole.js");

const cohere = require('cohere-ai');
const router = express.Router();

cohere.init('AHmZxtaCC7nMqm4Kh4UPNbW0md8u6lXDINJnJrfo'); // This is your trial API key

router.get('/', (req, res) => {
  (async () => {
    const response = await cohere.generate({
      model: 'command',
      prompt:
        'Create a two-column CSV of player name, tee time, and date based on the chat below.\n\nhi guys\n\n \n\ni need a twosome for me and my son, parker renick.. he turned 23 in march.. im not sure if that still allows to play as my son or if hes a guest..\n\n \n\nwe want to play about 4 on saturday\n\n \n\nthanks\n\n \n\nkeith hasday',
      max_tokens: 300,
      temperature: 0.1,
      k: 0,
      stop_sequences: [],
      return_likelihoods: 'NONE',
    });
    console.log(`Prediction: ${response.body.generations[0].text}`);
    res.send(response.body.generations[0].text);
  })();
});

module.exports = router;
