var TwitterPackage = require('twitter');

var secret = {
  consumer_key: 'R0ii4pBgdGfJ8VXfsYBY38P2r',
  consumer_secret: 'oFNoGPMcVL7aE4nGxvmp1dCtWU3Asbtlqh5WWauZPNUVxgZqWQ',
  access_token_key: '2564815644-AEvuSJPTDx8Zw0lAyb7u6NSqWtR3jCegEBnO7bQ',
  access_token_secret: 'AVJ8t88dqHsYZ8jYmhSe80pqCiAPayvGNwUjiVlnhXa6t'
}
var Twitter = new TwitterPackage(secret);

Twitter.post('statuses/update', {status: 'Hiiii'},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});
