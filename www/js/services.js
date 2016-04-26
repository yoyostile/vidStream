angular.module('starter.services', [])

.factory('Streams', function($resource) {

  var Stream = $resource('http://localhost:3000/streams/:id');

  return {
    all: function() {
      return Stream.query();
    },
    // remove: function(chat) {
    //   chats.splice(chats.indexOf(chat), 1);
    // },
    get: function(streamId) {
      return Stream.get({ id: streamId });
    }
  };
})

.factory('signaling', function(socketFactory) {
  return socketFactory({
    ioSocket: io.connect('http://localhost:3001/')
  });
});
