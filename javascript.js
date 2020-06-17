//FONT FAMILY & COLOR VAN GRAFIEK AFSTAND & VOEDSEL IS IN INDEX.HTML

//De datum bovenaan de pagina
function showDate(){
	var datum = new Date();
	var uren = datum.getHours();
	var now = new Date();
	var days = new Array("Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag");
	var months = new Array("januari","februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december");
	var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
	function fourdigits(number) {
		return (number < 1000) ? number + 1900 : number;
				                
	}

    today = days[now.getDay()] + ", " +
        	date + " " +
            months[now.getMonth()] + " " +
                (fourdigits(now.getYear())) ;
    document.getElementById("datum").innerHTML = today;
    
}

// GRAFIEK 1: AFSTAND

function afstand() {
		 			var ctx = document.getElementById('afstand').getContext('2d');
					var myChart = new Chart(ctx, {
					    type: 'line',
					    data: {
					        labels: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'],
					        datasets: [{
                      			data: [4.78, 9.45, 18, 27, 30.83, 33.33, 39.99],

					            backgroundColor: [
					            	'rgba(41, 40, 111, 0.4)', /*29286f*/
					            ],

					            borderColor: [
					            	'rgba(67, 0, 251, 1)', /*#4300fb*/
					            ],

					            borderWidth: 3
					        }]
					    },

					    options: {
					    	legend:{
					    		display:false
					    },

					        scales: {
								
								// X-as label
					        	xAxes: [{
					                scaleLabel:{
					                	display: true,
					                	labelString:'Tijd (dagen)',
					                	fontColor:'#646783',
					                }
					               
					            }],

					            // Y-as label
					            yAxes: [{
					                ticks: {
					                    beginAtZero: true
					                },

					                scaleLabel:{
					                	display: true,
					                	labelString:'Afstand ( x 1.000.000 km)',
					                	fontColor:'#646783',
					                }
					            
					            }]
					        }
					    }
						});
				}


// GRAFIEK 2: Snelheid

function snelheid(){
	const dataSource = {
		chart: {
			baseFont:"GT Walsheim Pro",
			baseFontSize:"13",
			baseFontColor:"#FFFFFF",
			showBorder:"0",
			bgColor: "#1C1E3D",  //achtergrondkleur
			bgAlpha:"100",
			captionpadding: "0",
			captionFontSize:"20",
			origw: "360", // width speedometer
			origh: "340", // height speedometer
			gaugeouterradius: "115",
			gaugestartangle: "270",
			gaugeendangle: "-25",
			showvalue: "1",
			valuefontsize: "30",
			majortmnumber: "13",
			majortmthickness: "2",
			majortmheight: "13",
			minortmheight: "7",
			minortmthickness: "1",
			minortmnumber: "1",
			showgaugeborder: "0",
			valueFontColor:"#FFFFFF",//kleur van cijfer in het midden
			valueFontSize:"30",
			chartTopMargin: "40", 
			minorTMColor:"#FFFFFF", // kleine strepen in speedometer
			majorTMColor:"#FFFFFF", // grote strepen in speedometer 
			theme: "fusion"

		},

		colorrange: {
			color: [
				{
					minvalue: "0",
					maxvalue: "110",
					code: "4300fb", //kleur eerste helft
					 "alpha": "100",
					 
				},

				{
					minvalue: "110",
					maxvalue: "280",
					code: "#ffffff", //kleur tweede helft
					plotFillAlpha:"5",
					 "alpha": "3",
				}
			]
			
		},
		
		dials: {
			dial: [
				{
					value: "110",
					valueFontColor:"#FFFFFF",
					bgcolor: "#6E73A7", //kleur wijzer
					basewidth: "8",

				}
				  ]
		},
	};

	FusionCharts.ready(function() {
		var myChart = new FusionCharts({
		type: "angulargauge",
		renderAt: "snelheid",
		width: "100%",
		height: "25%",
		dataFormat: "json",
		dataSource
		}).render();
	});
}


// GRAFIEK 3: Voedsel

function voedsel(){
	var ctx = document.getElementById('voedsel').getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'horizontalBar',
		data: {
			labels: ['Aardappel', 'Pasta', 'Rijst', 'Groenten', 'Fruit', 'Brood', 'Beleg'],
			datasets: [{
				data: [44, 57, 25, 49, 73, 89, 69],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(255, 255, 255, 0.2)'

				],
				
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(255, 255, 255, 1)'

				],
				
				borderWidth: 1,
				maxBarThickness:100,
				
			}]
		},
		
		options: {
			legend:{
				display:false
		},

			tooltips:{
				enabled:true,
			},

			scales: {

				xAxes:[{
					ticks: {
						beginAtZero: true
					},
					
					scaleLabel:{
						display: true,
						labelString:'Percentages' + ' %',
						fontColor:'#646783',
					}
				}],

				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});
}



// GRAFIEK 4: Water

function water(){
	var options = {
		chart: {
			fontFamily: 'GT Walsheim Pro, sans-serif',
			height: 280,
			type: "radialBar",
		},

		series: [77],
		colors: ["#9453FF"],
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: "60%",
			},

				track: {
					dropShadow: {
						enabled: true,
						top: 3,
						left: 3,
						blur: 4,
						opacity: 1,
						color:"#2EB9FF"
					}
				},

				dataLabels: {
					name: {
					offsetY: -10,
					color: "#fff",
					fontSize: "20px"
				},

					value: {
						color: "#fff",
						fontSize: "30px",
						show: true
					}
				}
			}
		},

		fill: {
			type: "gradient",
			gradient: {
				shade: "dark",
				type: "vertical",
				gradientToColors: ["#2EB9FF"],
				stops: [0, 100]
			}
		},

		stroke: {
			lineCap: "round"
		},

		labels: ["Water over"],
		fontSize: "30px",//Tekst in cirkel
		
	};

	var chart = new ApexCharts(document.querySelector("#water"), options);
		chart.render();
	}


window.onload=function(){
	showDate();
	afstand();
	snelheid();
	water();
	voedsel();
}