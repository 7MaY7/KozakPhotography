(function(){

	var app = angular.module('gallary', []);

	app.controller('GallaryCtrl', function(){
		this.photos = pictures;
	});

	var pictures = [
		{name:"Maksym+Mariana",
		img:"css/img/gallary/Maksym+Mariana.jpg"},
		{name:"White umbrella Night",
		img:"css/img/gallary/WhiteUmbrellaNight.jpg"},
		{name:"Iana+Oleksiy",
		img:"css/img/gallary/Iana+Oleksiy.jpg"},
		{name:"Vitaliy+Natalia",
		img:"css/img/gallary/Vitaliy+Natalia.jpg"},
		{name:"Lida+Sasha",
		img:"css/img/gallary/Lida+Sasha.jpg"},
		{name:"Nazak+Liybomyrka",
		img:"css/img/gallary/Nazak+Liybomyrka.jpg"},
		{name:"Roman+Natalia",
		img:"css/img/gallary/Roman+Natalia.jpg"},
		{name:"M&Mountains",
		img:"css/img/gallary/M&Mountains.jpg"},
		{name:"Reportage Photography",
		img:"css/img/gallary/ReportagePhotography.jpg"}
	];

})();