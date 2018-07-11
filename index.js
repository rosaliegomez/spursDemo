"use strict";
console.log("Hey Yo");
buildApiRequest('GET',
    '/youtube/v3/videos',
    {'id': 'Ks-_Mh1QhMc',
        'part': 'snippet,contentDetails,statistics'});