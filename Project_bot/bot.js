console.log('bot is running....');

var Twit = require('twit');

var T = new Twit({
    consumer_key: 'rZL7IXZAnOGBCA2dtsps9P3lK',
    consumer_secret: 'gzRzSWv17K1RxO7pkHWEPfpaDjyzSJvOLdtLwwkWzDQQMg3yvR',
    access_token: '1057960081717743617-4iZiXFjPnS0nnn2dPbFLeeLRrQP8tF',
    access_token_secret: '1j9tCvWin1iz8meb6SG3K12cuKARlAvAyWWHtnS3Z0iE6',
});
/* 
var status = {
    status: 'is this bot working'
};

T.post('statuses/update', status,onCompleListener);

function onCompleListener(err, data, response) {
    console.log(data);
}
 */

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
let query = 'hello';

let config_to_search = {
    q: query,
    count: 5,
};
T.get('search/tweets',config_to_search, onGetCompleteListener);

function onGetCompleteListener(err, data, response) {
    console.log(data.statuses[0]);
}