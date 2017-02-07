(function(){

	var app = angular.module('gallary', []);

	app.controller('GallaryCtrl', function(){
		this.photos = pictures;
	});

	var pictures = [
		{name:"Andriy+Maria",
		img:"https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/12998709_1076604719056981_4222070240747137432_n.jpg?oh=3d72677edc2385197b996e2cb0795040&oe=590BE3F1"},
		{name:"Andriy+Maria",
		img:"https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/12573878_1241532735862619_2368439510820447138_n.jpg?oh=03b4a466a65d53517f8f5cf7e2e77db7&oe=5949427E"},
		{name:"Andriy+Maria",
		img:"https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/12540540_1241534025862490_4359684983192305640_n.jpg?oh=d9c1b5edfb9236c96ad3e4ebf20927ef&oe=590B2BE5"},
		{name:"Andriy+Maria",
		img:"https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/12418105_1241534149195811_3971089663582949791_n.jpg?oh=73610ad7c21cd6751605cd68cb0a79f0&oe=59108887"}
	];

})();