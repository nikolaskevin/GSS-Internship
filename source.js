
var loginClient = new JSONRpcClient({
	'url': 'https://user-api.simplybook.me' + '/login',
	'onerror': function (error) {},
});
var token = loginClient.getToken('gssmcu', '860d7fdded70c5baa39e5c34edb1cceb22d9a1fba254a22f7901057d8414ad29');

this.client = new JSONRpcClient({
	'url': 'https://user-api.simplybook.me',
	'headers': {
		'X-Company-Login': 'gssmcu',
		'X-Token': token
	},
	'onerror': function (error) {}
});
var services = client.getEventList();

console.log(services);

var output='';
for(var i=1;i<4;i++){
    output += '<li>'+services[i].name+'</li>';
}
document.getElementById("name").innerHTML = output;