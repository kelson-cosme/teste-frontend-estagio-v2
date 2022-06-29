
let equipamento = leituraJson("/data/equipment.json");
let modelo = leituraJson("data/equipmentModel.json");
let posicao = leituraJson("data/equipmentPositionHistory.json")
let status1 = leituraJson("data/equipmentState.json");
let historico = leituraJson("data/equipmentStateHistory.json")

//converter para obj
let equipamentoC = JSON.parse(equipamento);
let modeloC = JSON.parse(modelo);
let posicaoC = JSON.parse(posicao);
let statusC = JSON.parse(status1);
let historicoC = JSON.parse(historico);

function leituraJson(url) { //leitura do json
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}


let geo2 = {

	"type": "FeatureCollection",
	"features": [
	
	]
}

let maquinas;
let map;

function ativar(){

	let lat;
	let lon

	// console.log(equipamentoC[maquinas].equipmentModelId)
	// console.log(modeloC)

	let produtos = modeloC;
	let filro1 = produto => produto.id === equipamentoC[maquinas].equipmentModelId;
	let filtro1F = produtos.filter(filro1);

	let valor = Math.floor(Math.random() * 3)
 	console.log(filtro1F[0].hourlyEarnings[valor].equipmentStateId);
	
	const produtos2 = statusC;
	const filtro2 = produto2 => produto2.id === filtro1F[0].hourlyEarnings[valor].equipmentStateId;
	const filtro2F = produtos2.filter(filtro2);

	
	posicaoC[maquinas].positions.forEach(element => {
		lat = element.lat;
		lon = element.lon;

		geo2.features.push({
			"geometry": {
				"type": "Point",
				"date": element.date1,
				"coordinates": [
					lon,
					lat
				]
			},
			"type": "Feature",
			"properties": {
				"popupContent": ""
			},
		})
	});

	if(map == undefined){
		map = L.map('map').setView([lat, lon], 9);


	} else {
		map.remove();
		map = L.map('map').setView([lat, lon], 9);
	}

	var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//poup
function onEachFeature(feature, layer) {
	var popupContent = `<p> Modelo: `+filtro1F[0].name +`</p>`
					   +`<div style="background-color: ${filtro2F[0].color};" id=estado>`



	if (feature.properties && feature.properties.popupContent) {
		popupContent += feature.properties.popupContent;
	}
	
	layer.bindPopup(popupContent);	
}

var Layers = L.geoJSON([geo2.features[maquinas]], {
	onEachFeature: onEachFeature
	
}).addTo(map);

}

function m1() {
	maquinas = 0;
	ativar();
}

function m2() {
	maquinas = 1;
	ativar();
}
function m3() {
	maquinas = 2;
	ativar();
}
function m4() {
	maquinas = 3;
	ativar();
}
function m5() {
	maquinas = 4;
	ativar();
}
function m6() {
	maquinas = 5;
	ativar();
}
function m7() {
	maquinas = 6;
	ativar();
}
function m8() {
	maquinas = 7;
	ativar();
}
function m9() {
	maquinas = 8;
	ativar();
}

m1();
console.log(maquinas)
ativar()