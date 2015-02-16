'use strict';

var url = ' https://api.dezrez.com/api/simplepropertyrole/search?APIKey=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1dGguZGV6cmV6LmNvbS9BcGlLZXlJc3N1ZXIiLCJhdWQiOiJodHRwczovL2FwaS5kZXpyZXouY29tL3NpbXBsZXdlYmdhdGV3YXkiLCJuYmYiOjE0MjM3NTY5MzcsImV4cCI6NDU3OTQzMDUzNywiSXNzdWVkVG9Hcm91cElkIjoiMjQwMSIsIkFnZW5jeUlkIjoiMyIsInNjb3BlIjpbImltcGVyc29uYXRlX3dlYl91c2VyIiwiYmFzaWNfcHJvcGVydHlfcmVhZCJdfQ.mdUA934hx-ZOuncO_PfNJh7aRZrwun_Coog11UEBsy8';

angular.module('properties').factory('Properties', ['$resource', 
  function($resource) {

    return $resource(url, {
      update: {
        method: 'POST',
        isArray: false,
      }
    });
  }
]);