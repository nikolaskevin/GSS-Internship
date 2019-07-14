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

/*var object_number = Object.keys(services).length
console.log(object_number);

var output='';
var select = document.getElementById("select_services");
for(var i=0;i<object_number;i++){
	var idx = i; 

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
*/
var performers = client.getUnitList ();

console.log(performers);

$('#select_services').empty();

$('#select_providers').empty();

$('#select_providers').append('<option value=""></option>');

$('#select_services').append('<option value=""></option>');

for (var id in services) {

    $('#select_services').append('<option value="' + id + '">' + services[id].name + '</option>');

};


var serviceId;

var performerId;

$('#select_services').change(function () {

	serviceId = $(this).val();

	var selectedService = services[serviceId];
	
	$("#select_providers").empty();
	
	for (var x in selectedService.unit_map) {

				$('#select_providers').append('<option value="' + x + '">' + performers[x].name + '</option>');

	};

	$('#eventId').val(serviceId).change();


});

$('#select_provider').change(function () {

	performerId = $(this).val();

	$('#unitId').val(performerId).change();

});