//Getting authentication and token from the simplybook
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




//End of authentication

//Getting the list of services from simplybook
var services = client.getEventList();

console.log(services);

var object_number = Object.keys(services).length
console.log(object_number);

var output='';
var select = document.getElementById("select_services");
for(var i=0;i<object_number;i++){
	var idx = i; // key2

	//Printing the list of services
	var key = Object.keys(services)[idx];
	value = services[key]
	var name = value.name;
	console.log(key,value);
	console.log(name);
	output += '<li>'+name+'</li>';

	//Printing the dropdown list
	var opt = value.name;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
//Printing the list of services
document.getElementById("name").innerHTML = output;

//Printing the dropdown list
var unit = client.getUnitList ();

/*var select = document.getElementById("select_services");
for(var i = 0; i <object_number; i++) {
    var opt = services_array[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
var unit = client.getUnitList ()

//Printing the list of services
*/
/*var output='';
for(var i=1;i<object_number;i++){
    output += '<li>'+services[i].name+'</li>';
}
document.getElementById("name").innerHTML = output;

//Creating an array of the services name
var tmp_services_array='';
for(var i=1;i<object_number;i++){
    tmp_services_array += services[i].name+",";
}
tmp_services_array = tmp_services_array.slice(0,-1);
console.log(tmp_services_array);

var services_array = tmp_services_array.split(",");
console.log(services_array);

//Printing the dropdown list
var select = document.getElementById("select_services");
for(var i = 0; i <object_number; i++) {
    var opt = services_array[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
var unit = client.getUnitList ()

//Accessing the performers list
console.log(unit);*/