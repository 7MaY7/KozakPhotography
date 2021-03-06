(function(){

	var app = angular.module('gallery', []);

	app.controller('GalleryCtrl', function(){
		this.albumTitlePhoto = albumTitlePhotos;
		this.albumPhoto = albumPhotos;
	});

	var albumTitlePhotos = [
		{name:"Maksym+Mariana",
		id:"image-1",
		img:"../img/gallery/TitlePhotos/Maksym+Mariana2.jpg"},
		{name:"White umbrella Night",
		id:"image-2",
		img:"../img/gallery/TitlePhotos/WhiteUmbrellaNight.jpg"},
		{name:"Iana+Oleksiy",
		id:"image-3",
		img:"../img/gallery/TitlePhotos/Iana+Oleksiy.jpg"},
		{name:"Vitaliy+Natalia",
		id:"image-4",
		img:"../img/gallery/TitlePhotos/Vitaliy+Natalia.jpg"},
		{name:"Lida+Sasha",
		id:"image-5",
		img:"../img/gallery/TitlePhotos/Lida+Sasha.jpg"},
		{name:"Nazak+Liybomyrka",
		id:"image-6",
		img:"../img/gallery/TitlePhotos/Nazak+Liybomyrka.jpg"},
		{name:"Misha+Alexandra",
		id:"image-7",
		img:"../img/gallery/TitlePhotos/Misha+Alexandra.jpg"},
		{name:"M&Mountains",
		id:"image-8",
		img:"../img/gallery/TitlePhotos/M&Mountains.jpg"},
		{name:"Reportage Photography",
		id:"image-9",
		img:"../img/gallery/TitlePhotos/ReportagePhotography.jpg"}
	];

	var albumPhotos = [
	
		/*Maksym+Mariana*/
		{id:"image-1",
		title:"Image 11",
		img:"../img/gallery/Maksym+Mariana/Maksym+Mariana.jpg",},
		{id:"image-1",
		title:"Image 12",
		img:"../img/gallery/Maksym+Mariana/Maksym+Mariana1.jpg"},
		{id:"image-1",
		title:"Image 13",
		img:"../img/gallery/Maksym+Mariana/Maksym+Mariana2.jpg"},
		{id:"image-1",
		title:"Image 14",
		img:"../img/gallery/Maksym+Mariana/Maksym+Mariana3.jpg"},
		{id:"image-1",
		title:"Image 15",
		img:"../img/gallery/Maksym+Mariana/Maksym+Mariana4.jpg"},
		{id:"image-1",
		title:"Image 16",
		img:"../img/gallery/Maksym+Mariana/Maksym+Mariana5.jpg"},
		{id:"image-1",
		title:"Image 17",
		img:"../img/gallery/Maksym+Mariana/Maksym+Mariana6.jpg"},
		{id:"image-1",
		title:"Image 18",
		img:"../img/gallery/Maksym+Mariana/Maksym+Mariana7.jpg"},
		{id:"image-1",
		title:"Image 19",
		img:"../img/gallery/Maksym+Mariana/Maksym+Mariana8.jpg"},


		/*WhiteUmbrellaNight*/
		{id:"image-2",
		title:"Image 21",
		img:"../img/gallery/WhiteUmbrellaNight/WhiteUmbrellaNight.jpg",},
		{id:"image-2",
		title:"Image 22",
		img:"../img/gallery/WhiteUmbrellaNight/WhiteUmbrellaNight1.jpg"},
		{id:"image-2",
		title:"Image 24",
		img:"../img/gallery/WhiteUmbrellaNight/WhiteUmbrellaNight3.jpg"},
		{id:"image-2",
		title:"Image 25",
		img:"../img/gallery/WhiteUmbrellaNight/WhiteUmbrellaNight4.jpg"},
		{id:"image-2",
		title:"Image 26",
		img:"../img/gallery/WhiteUmbrellaNight/WhiteUmbrellaNight5.jpg"},
		{id:"image-2",
		title:"Image 27",
		img:"../img/gallery/WhiteUmbrellaNight/WhiteUmbrellaNight6.jpg"},
		{id:"image-2",
		title:"Image 28",
		img:"../img/gallery/WhiteUmbrellaNight/WhiteUmbrellaNight7.jpg"},
	

		/*Iana+Oleksiy*/
		{id:"image-3",
		title:"Image 31",
		img:"../img/gallery/Iana+Oleksiy/Iana+Oleksiy.jpg",},
		{id:"image-3",
		title:"Image 32",
		img:"../img/gallery/Iana+Oleksiy/Iana+Oleksiy1.jpg"},
		{id:"image-3",
		title:"Image 33",
		img:"../img/gallery/Iana+Oleksiy/Iana+Oleksiy2.jpg"},
		{id:"image-3",
		title:"Image 34",
		img:"../img/gallery/Iana+Oleksiy/Iana+Oleksiy3.jpg"},
		{id:"image-3",
		title:"Image 35",
		img:"../img/gallery/Iana+Oleksiy/Iana+Oleksiy4.jpg"},
		{id:"image-3",
		title:"Image 36",
		img:"../img/gallery/Iana+Oleksiy/Iana+Oleksiy5.jpg"},
		{id:"image-3",
		title:"Image 37",
		img:"../img/gallery/Iana+Oleksiy/Iana+Oleksiy6.jpg"},
		{id:"image-3",
		title:"Image 38",
		img:"../img/gallery/Iana+Oleksiy/Iana+Oleksiy7.jpg"},
		{id:"image-3",
		title:"Image 39",
		img:"../img/gallery/Iana+Oleksiy/Iana+Oleksiy8.jpg"},

		/*Vitaliy+Natalia*/
		{id:"image-4",
		title:"Image 41",
		img:"../img/gallery/Vitaliy+Natalia/Vitaliy+Natalia.jpg",},
		{id:"image-4",
		title:"Image 42",
		img:"../img/gallery/Vitaliy+Natalia/Vitaliy+Natalia1.jpg"},
		{id:"image-4",
		title:"Image 43",
		img:"../img/gallery/Vitaliy+Natalia/Vitaliy+Natalia2.jpg"},
		{id:"image-4",
		title:"Image 44",
		img:"../img/gallery/Vitaliy+Natalia/Vitaliy+Natalia3.jpg"},
		{id:"image-4",
		title:"Image 45",
		img:"../img/gallery/Vitaliy+Natalia/Vitaliy+Natalia4.jpg"},
		{id:"image-4",
		title:"Image 46",
		img:"../img/gallery/Vitaliy+Natalia/Vitaliy+Natalia5.jpg"},
		{id:"image-4",
		title:"Image 47",
		img:"../img/gallery/Vitaliy+Natalia/Vitaliy+Natalia6.jpg"},
	

		/*Lida+Sasha*/
		{id:"image-5",
		title:"Image 51",
		img:"../img/gallery/Lida+Sasha/Lida+Sasha.jpg",},
		{id:"image-5",
		title:"Image 52",
		img:"../img/gallery/Lida+Sasha/Lida+Sasha1.jpg"},
		{id:"image-5",
		title:"Image 53",
		img:"../img/gallery/Lida+Sasha/Lida+Sasha2.jpg"},
		{id:"image-5",
		title:"Image 54",
		img:"../img/gallery/Lida+Sasha/Lida+Sasha3.jpg"},
		{id:"image-5",
		title:"Image 55",
		img:"../img/gallery/Lida+Sasha/Lida+Sasha4.jpg"},
		{id:"image-5",
		title:"Image 56",
		img:"../img/gallery/Lida+Sasha/Lida+Sasha5.jpg"},
		{id:"image-5",
		title:"Image 57",
		img:"../img/gallery/Lida+Sasha/Lida+Sasha6.jpg"},
		{id:"image-5",
		title:"Image 58",
		img:"../img/gallery/Lida+Sasha/Lida+Sasha7.jpg"},
		{id:"image-5",
		title:"Image 59",
		img:"../img/gallery/Lida+Sasha/Lida+Sasha8.jpg"},



		/*Nazak+Liybomyrka*/
		{id:"image-6",
		title:"Image 61",
		img:"../img/gallery/Nazak+Liybomyrka/Nazak+Liybomyrka.jpg",},
		{id:"image-6",
		title:"Image 62",
		img:"../img/gallery/Nazak+Liybomyrka/Nazak+Liybomyrka1.jpg"},
		{id:"image-6",
		title:"Image 63",
		img:"../img/gallery/Nazak+Liybomyrka/Nazak+Liybomyrka2.jpg"},
		{id:"image-6",
		title:"Image 64",
		img:"../img/gallery/Nazak+Liybomyrka/Nazak+Liybomyrka3.jpg"},
		{id:"image-6",
		title:"Image 65",
		img:"../img/gallery/Nazak+Liybomyrka/Nazak+Liybomyrka4.jpg"},
		{id:"image-6",
		title:"Image 66",
		img:"../img/gallery/Nazak+Liybomyrka/Nazak+Liybomyrka5.jpg"},
		{id:"image-6",
		title:"Image 67",
		img:"../img/gallery/Nazak+Liybomyrka/Nazak+Liybomyrka6.jpg"},
		{id:"image-6",
		title:"Image 68",
		img:"../img/gallery/Nazak+Liybomyrka/Nazak+Liybomyrka7.jpg"},


		/*Misha+Alexandra*/
		{id:"image-7",
		title:"Image 71",
		img:"../img/gallery/Misha+Alexandra/Misha+Alexandra.jpg",},
		{id:"image-7",
		title:"Image 72",
		img:"../img/gallery/Misha+Alexandra/Misha+Alexandra1.jpg"},
		{id:"image-7",
		title:"Image 73",
		img:"../img/gallery/Misha+Alexandra/Misha+Alexandra2.jpg"},
		{id:"image-7",
		title:"Image 74",
		img:"../img/gallery/Misha+Alexandra/Misha+Alexandra3.jpg"},
		{id:"image-7",
		title:"Image 75",
		img:"../img/gallery/Misha+Alexandra/Misha+Alexandra4.jpg"},
		{id:"image-7",
		title:"Image 76",
		img:"../img/gallery/Misha+Alexandra/Misha+Alexandra5.jpg"},
		{id:"image-7",
		title:"Image 77",
		img:"../img/gallery/Misha+Alexandra/Misha+Alexandra6.jpg"},
		{id:"image-7",
		title:"Image 78",
		img:"../img/gallery/Misha+Alexandra/Misha+Alexandra7.jpg"},
		{id:"image-7",
		title:"Image 79",
		img:"../img/gallery/Misha+Alexandra/Misha+Alexandra8.jpg"},


		/*M&Mountains*/
		{id:"image-8",
		title:"Image 81",
		img:"../img/gallery/M&Mountains/M&Mountains.jpg",},
		{id:"image-8",
		title:"Image 82",
		img:"../img/gallery/M&Mountains/M&Mountains1.jpg"},
		{id:"image-8",
		title:"Image 83",
		img:"../img/gallery/M&Mountains/M&Mountains2.jpg"},
		{id:"image-8",
		title:"Image 84",
		img:"../img/gallery/M&Mountains/M&Mountains3.jpg"},
		{id:"image-8",
		title:"Image 85",
		img:"../img/gallery/M&Mountains/M&Mountains4.jpg"},
		{id:"image-8",
		title:"Image 86",
		img:"../img/gallery/M&Mountains/M&Mountains5.jpg"},
		{id:"image-8",
		title:"Image 87",
		img:"../img/gallery/M&Mountains/M&Mountains6.jpg"},
		{id:"image-8",
		title:"Image 88",
		img:"../img/gallery/M&Mountains/M&Mountains7.jpg"},
		{id:"image-8",
		title:"Image 89",
		img:"../img/gallery/M&Mountains/M&Mountains8.jpg"},


		/*ReportagePhotography*/
		{id:"image-9",
		title:"Image 91",
		img:"../img/gallery/ReportagePhotography/ReportagePhotography.jpg",},
		{id:"image-9",
		title:"Image 92",
		img:"../img/gallery/ReportagePhotography/ReportagePhotography1.jpg"},
		{id:"image-9",
		title:"Image 93",
		img:"../img/gallery/ReportagePhotography/ReportagePhotography2.jpg"},
		{id:"image-9",
		title:"Image 94",
		img:"../img/gallery/ReportagePhotography/ReportagePhotography3.jpg"},
		{id:"image-9",
		title:"Image 95",
		img:"../img/gallery/ReportagePhotography/ReportagePhotography4.jpg"},
		{id:"image-9",
		title:"Image 96",
		img:"../img/gallery/ReportagePhotography/ReportagePhotography5.jpg"}

	];

	$(document).ready(function() {
	        
		/* activate the carousel */
		$("#modal-carousel").carousel({interval:false});

		/* when clicking a img */
		$(".row img").click(function(){
			var content = $(".carousel-inner");
			var title = $(".modal-title");
			  
			content.empty();  
			title.empty();
			  
			var id = this.id;  
			var repo = $("#img-repo .item");
			var repoCopy = repo.filter("#" + id).clone();
			var active = repoCopy.first();
			  
			active.addClass("active");
			title.html(active.find("img").attr("title"));
			content.append(repoCopy);

			// show the modal
			$("#modal-gallery").modal("show");
		});

		/////////////
		/*Preloader*/
		/////////////
		$(window).on('load', function() {
			$('.preloadWrap').delay(1000).fadeOut('slow');
	})

	});


})();