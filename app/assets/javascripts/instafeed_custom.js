$(document).on('turbolinks:load',function() {

  var userFeed = new Instafeed({
    get: 'user',
    userId: '38624178',
    limit: 21,
    resolution: 'standard_resolution',
    accessToken: '38624178.1677ed0.e3ee4e06497644c5941743ec907e34bb',
    sortBy: 'most-recent',
    template: '<div class="col-lg-4 centered gallery instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',

  });
  userFeed.run();
});
