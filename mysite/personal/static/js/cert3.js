$(document).ready(function(){
"use strict";
 
var tot = {
	count: 1
	},
	editedOrder = {
		number: 0
	},
	doc = {},
	docNum = {},
	cert = {},
	legal = {},
	certFees = {
		ass: 40,
		app: 40,
		pat: 40,
		FH: 65
	},
	ourFees = {
		certAss: 35,
		certApp: 35,
		certPat: 35,
		certFH: 45,
		ass: 60,
		pat: 5,
		legal: 75,
		Forward: 15,
		app: "Need Page Count",
		FH: "Need Page Count"
	},
	ourCertFees = {
		ass: 35,
		app: 35,
		pat: 35,
		FH: 45
	},
	stateDept = 8,
	stateCour = 55,
	countryCour = 60,
	countryFees = {
	    "AFG": 125,
	    "ALB": 0,
		"DZA": 75,
		"AND": 0,
		"AGO": 150,
		"ATG": 0,
		"ARG": 0,
		"ARM": 0,
		"AUS": 0,
		"AUT": 0,
		"AZE": 0,
		"BHS": 0,
		"BHR": 0,
		"BGD": 83,
		"BRB": 0,
		"BLR": 0,
		"BEL": 0,
		"BLZ": 0,
		"BEN": 50,
		"BTN": "call",
		"BOL": 150,
		"BWA": 0,
		"BRA": 0,
		"BRN": 0,
		"BGR": 0,
		"BFA": "call",
		"BDI": 0,
		"KHM": "call",
		"CMR": "call",
		"CAN": "call",
		"CAF": "call",
		"TCD": "call",
		"CHL": 0,
		"CHN": 50,
		"COL": 0,
		"COM": "call",
		"COG": "call",
		"COK": 0,
		"CRI": 0,
		"CIV": 5,
		"HRV": 0,
		"CUB": "call",
		"CYP": 0,
		"CZE": 0,
		"DNK": 0,
		"DJI": "call",
		"DMA": 0,
		"DOM": 0,
		"ECU": 0,
		"EGY": 55,
		"SLV": 0,
		"GNQ": "call",
		"ERI": "call",
		"EST": 0,
		"ETH": 100,
		"FJI": 0,
		"FIN": 0,
		"FRA": 0,
		"GAB": "call",
		"GMB": 100,
	    "GCC": 30,
		"GEO": 0,
		"DEU": 0,
		"GHA": "call",
		"GRC": 0,
		"GRD": 0,
		"GTM": 25,
		"GIN": "call",
		"GNB": "call",
		"GUY": "call",
		"HTI": 25,
		"HND": 0,
		"HKG": 0,
		"HUN": 0,
		"ISL": 0,
		"IND": 0,
		"IDN": 25,
		"IRN": 87,
		"IRQ": 160,
		"IRL": 0,
		"ISR": 0,
		"ITA": 0,
		"JAM": "call",
		"JPN": 0,
		"JOR": 84,
		"KAZ": 0,
		"KEN": 55,
		"KIR": "call",
		"KWT": 25,
		"KGZ": 0,
		"LAO": "call",
		"LVA": 0,
		"LBN": 75,
		"LSO": 0,
		"LBR": 0,
		"LBY": 105,
		"LIE": 0,
		"LTU": 0,
		"LUX": 0,
		"MAC": 0,
		"MKD": 0,
		"MDG": 5,
		"MWI": 0,
		"MYS": 10,
		"MDV": "call",
		"MLI": 10,
		"MLT": 0,
		"MHL": 0,
		"MRT": "call",
		"MUS": 0,
		"MEX": 0,
		"FSM": "call",
		"MDA": 0,
		"MCO": 0,
		"MNG": 0,
		"MNE": 0,
		"MAR": 0,
		"MOZ": "call",
		"MMR": 20,
		"NAM": 0,
		"NRU": "call",
		"NPL": "call",
		"NLD": 0,
		"NZL": 0,
		"NIC": 0,
		"NER": "call",
		"NGA": 55,
		"NIU": 0,
		"NOR": 0,
		"OMN": 0,
		"PAK": 80,
		"PSE": 200,
		"PAN": 0,
		"PNG": "call",
		"PRY": 0,
		"PER": 0,
		"PHL": 30,
		"POL": 0,
		"PRT": 0,
		"QAT": 42,
		"ROU": 0,
		"RUS": 0,
		"RWA": 30,
		"KNA": 0,
		"LCA": 0,
		"VCT": 0,
		"WSM": 0,
		"SMR": 0,
		"STP": 0,
		"SAU": 30,
		"SEN": "call",
		"SRB": 0,
		"SYC": 0,
		"SLE": 100,
		"SGP": 8,
		"SVK": 0,
		"SVN": 0,
		"SLB": "call",
		"SOM": "call",
		"ZAF": 0,
	    "KOR": "call",
		"SSD": 25,
		"ESP": 0,
		"LKA": 45,
		"SDN": 25,
		"SUR": 0,
		"SWZ": 0,
		"SWE": 0,
		"CHE": 0,
		"SYR": 115,
		"TJK": "call",
		"TZA": "call",
		"THA": 15,
		"TLS": 15,
		"TGO": "call",
		"TON": 0,
		"TTO": 0,
		"TUN": 15,
		"TUR": 0,
		"TKM": "call",
		"TUV": "call",
		"UGA": "call",
		"UKR": 0,
		"ARE": 550,
		"GBR": 0,
		"URY": 0,
		"UZB": 0,
		"VUT": 0,
		"VEN": 0,
		"VNM": 80,
		"YEM": 170,
		"ZMB": "call",
		"ZWE": "call"
	},
	countryTimes = {
        "AFG": 7,
        "ALB": 0,
        "DZA": 6,
        "AND": 0,
        "AGO": 6,
        "ATG": 0,
        "ARG": 0,
        "ARM": 0,
        "AUS": 0,
        "AUT": 0,
        "AZE": 0,
        "BHS": 0,
        "BHR": 0,
        "BGD": 3,
        "BRB": 0,
        "BLR": 0,
        "BEL": 0,
        "BLZ": 0,
        "BEN": 5,
        "BTN": "call",
        "BOL": 5,
        "BWA": 0,
        "BRA": 0,
        "BRN": 0,
        "BGR": 0,
        "BFA": "call",
        "BDI": 0,
        "KHM": "call",
        "CMR": "call",
        "CAN": "call",
        "CAF": "call",
        "TCD": "call",
        "CHL": 0,
        "CHN": 10,
        "COL": 0,
        "COM": "call",
        "COG": "call",
        "COK": 0,
        "CRI": 0,
        "CIV": 10,
        "HRV": 0,
        "CUB": "call",
        "CYP": 0,
        "CZE": 0,
        "DNK": 0,
        "DJI": "call",
        "DMA": 0,
        "DOM": 0,
        "ECU": 0,
        "EGY": 6,
        "SLV": 0,
        "GNQ": "call",
        "ERI": "call",
        "EST": 0,
        "ETH": 7,
        "FJI": 0,
        "FIN": 0,
        "FRA": 0,
        "GAB": "call",
        "GMB": 7,
        "GCC": 3,
        "GEO": 0,
        "DEU": 0,
        "GHA": "call",
        "GRC": 0,
        "GRD": 0,
        "GTM": 14,
        "GIN": "call",
        "GNB": "call",
        "GUY": "call",
        "HTI": 7,
        "HND": 0,
        "HKG": 0,
        "HUN": 0,
        "ISL": 0,
        "IND": 0,
        "IDN": 12,
        "IRN": 10,
        "IRQ": 7,
        "IRL": 0,
        "ISR": 0,
        "ITA": 0,
        "JAM": "call",
        "JPN": 0,
        "JOR": 5,
        "KAZ": 0,
        "KEN": 7,
        "KIR": "call",
        "KWT": 5,
        "KGZ": 0,
        "LAO": "call",
        "LVA": 0,
        "LBN": 10,
        "LSO": 0,
        "LBR": 0,
        "LBY": 8,
        "LIE": 0,
        "LTU": 0,
        "LUX": 0,
        "MAC": 0,
        "MKD": 0,
        "MDG": 5,
        "MWI": 0,
        "MYS": 5,
        "MDV": "call",
        "MLI": 10,
        "MLT": 0,
        "MHL": 0,
        "MRT": "call",
        "MUS": 0,
        "MEX": 0,
        "FSM": "call",
        "MDA": 0,
        "MCO": 0,
        "MNG": 0,
        "MNE": 0,
        "MAR": 0,
        "MOZ": "call",
        "MMR": 7,
        "NAM": 0,
        "NRU": "call",
        "NPL": "call",
        "NLD": 0,
        "NZL": 0,
        "NIC": 0,
        "NER": "call",
        "NGA": 10,
        "NIU": 0,
        "NOR": 0,
        "OMN": 0,
        "PAK": 10,
        "PSE": 14,
        "PAN": 0,
        "PNG": "call",
        "PRY": 0,
        "PER": 0,
        "PHL": 14,
        "POL": 0,
        "PRT": 0,
        "QAT": 14,
        "ROU": 0,
        "RUS": 0,
        "RWA": 14,
        "KNA": 0,
        "LCA": 0,
        "VCT": 0,
        "WSM": 0,
        "SMR": 0,
        "STP": 0,
        "SAU": 3,
        "SEN": "call",
        "SRB": 0,
        "SYC": 0,
        "SLE": 5,
        "SGP": 2,
        "SVK": 0,
        "SVN": 0,
        "SLB": "call",
        "SOM": "call",
        "ZAF": 0,
        "KOR": "call",
        "SSD": 3,
        "ESP": 0,
        "LKA": 5,
        "SDN": 6,
        "SUR": 0,
        "SWZ": 0,
        "SWE": 0,
        "CHE": 0,
        "SYR": 11,
        "TJK": "call",
        "TZA": "call",
        "THA": 4,
        "TLS": 4,
        "TGO": "call",
        "TON": 0,
        "TTO": 0,
        "TUN": 3,
        "TUR": 0,
        "TKM": "call",
        "TUV": "call",
        "UGA": "call",
        "UKR": 0,
        "ARE": 3,
        "GBR": 0,
        "URY": 0,
        "UZB": 0,
        "VUT": 0,
        "VEN": 0,
        "VNM": 4,
        "YEM": 4,
        "ZMB": "call",
        "ZWE": "call"
	},
	StateDeptTime = 4,
    usptoTime = 10,
	orderDetails = [],
	shippingAddress = [],
	forwardAdd = [],
	clickedAdd = [];

function pushOrderDetails(Country, DocType, DocNum, Cert, Legal, NumOfCopies, Media, Fwd, EmailCopy, Cost, Time, ShippingInfo){
	orderDetails.push({
		country: Country,
		docType: DocType,
		docNum: DocNum,
		cert: Cert,
		legal: Legal,
		numOfCopies: NumOfCopies,
		media: Media,
		fwd: Fwd,
		emailCopy: EmailCopy,
		cost: Cost,
		time: Time,
		shippingInfo: ShippingInfo
	})
}

function newDiscCalc(){
	var totalDiscounts = {
		cert: 0,
		legal: 0,
		country: 0,
		emailCopy: 0,
		ourLegalFees: 0,
		nonCertApp: 0,
		nonCertAss: 0
	},
		sameCountries = [],
		iteratedList = [];

	if (orderDetails.length == 1){
		if (orderDetails[0]['time'] != '-'){
			if(orderDetails[0]['cert'] == 'Yes'){
				var country = orderDetails[0]['country'],
				countryFee = countryFees[country];
				if (orderDetails[0]['numOfCopies'] > 1)
					if (orderDetails[0]['cert'] == 'Yes'){
						totalDiscounts.cert = Number(totalDiscounts.cert) + Number(orderDetails[0]['numOfCopies'] - 1)
					} else {
						totalDiscounts.cert = totalDiscounts.cert
					}
					if (orderDetails[0]['legal'] == 'Yes')
						if (orderDetails[0]['numOfCopies'] >= 3 && orderDetails[0]['numOfCopies'] < 6 ){
							if( countryFee == 0){
								totalDiscounts.ourLegalFees = totalDiscounts.ourLegalFees + (orderDetails[0]['numOfCopies'] * 15)
							} else if (countryFee > 0){
							totalDiscounts.ourLegalFees = totalDiscounts.ourLegalFees + (orderDetails[0]['numOfCopies'] * 30)
							}
						} else if (orderDetails[0]['numOfCopies'] >= 6){
							if( countryFee == 0){
								totalDiscounts.ourLegalFees = totalDiscounts.ourLegalFees + (orderDetails[0]['numOfCopies'] * 25)
							} else if (countryFee > 0){
								totalDiscounts.ourLegalFees = totalDiscounts.ourLegalFees + (orderDetails[0]['numOfCopies'] * 50)
							}
					}
			} else {
				//Cert No
				//App $35 + 1/pg - 1/pg
				//FH 1/pg
				//Ass $60 + 1/pg - 5 add
				//Patent 2/pat

			}
		}
	} else if (orderDetails.length > 1){
		for (var i=0; i < orderDetails.length; i++){
			if (orderDetails[i]['time'] != '-'){
					var country = orderDetails[i]['country'],
					check = iteratedList.indexOf(i);
				if (check >= 0){
					continue
				} else {
					if (country in sameCountries){
						continue
					} else {
						sameCountries[country] = Number(orderDetails[i]['numOfCopies'])
					}
					if (orderDetails[i]['numOfCopies'] > 1){
						totalDiscounts.cert = Number(totalDiscounts.cert) + Number(orderDetails[i]['numOfCopies']) - 1	
					}
					for (var j=0; j < orderDetails.length; j++){
						if (j==i){
							continue
						} else {
							if (orderDetails[j]['cert'] == 'Yes'){
								if (orderDetails[j]['country'] == country){
									var country = orderDetails[j]['country'],
									countryFee = countryFees[country];
									iteratedList.push(j)

									sameCountries[country] = Number(sameCountries[country]) + Number(orderDetails[j]['numOfCopies']);

									totalDiscounts.cert = Number(totalDiscounts.cert) + Number(orderDetails[j]['numOfCopies'])

									if (countryFee == 0){
										totalDiscounts.legal = Number(totalDiscounts.legal) + 1
									} else if (countryFee > 0){
										totalDiscounts.legal = Number(totalDiscounts.legal) + 1
										totalDiscounts.country = Number(totalDiscounts.country) + 1
									}

									if (orderDetails[j]['emailCopy'] == 'Yes' && orderDetails[i]['emailCopy'] == 'Yes'){
										totalDiscounts.emailCopy = Number(totalDiscounts.emailCopy) + 1
									} else {
										continue
									}
									
								} else {
									continue
								}
							}
						}
					}
				}
			}
		}
	}
	for (country in sameCountries){
		var countryFee = countryFees[country];

		if (sameCountries[country] >= 3 && sameCountries[country] < 6){
			if (countryFee == 0){
				totalDiscounts.ourLegalFees = totalDiscounts.ourLegalFees + (15 * sameCountries[country])
			} else if (countryFee > 0){
				totalDiscounts.ourLegalFees = totalDiscounts.ourLegalFees + (30 * sameCountries[country])
			}
		} else if (sameCountries[country] >= 6){
			if (countryFee == 0){
				totalDiscounts.ourLegalFees = totalDiscounts.ourLegalFees + (25 * sameCountries[country])
			} else if (countryFee > 0){
				totalDiscounts.ourLegalFees = totalDiscounts.ourLegalFees + (50 * sameCountries[country])
			}
		}
	}
	
	var discount = 0,
		totalEst = 0,
		finalCost = 0,
		call = 'No',
		orderTimes = [],
		nonCertDocs = [];

	for (var x=0; x < orderDetails.length; x++){
		var estimatedCost = orderDetails[x]['cost'],
			certification = orderDetails[x]['cert'];

		if (estimatedCost == 'Call'){
			$('#callNotice').css('display', 'block');
			$('#totalTime').html('Call');
			call = 'Yes'
			totalEst = totalEst

		} else if (estimatedCost != 'Call' && certification == 'Yes'){
			var costNumber = estimatedCost.replace('$',''),
			totalEst = Number(totalEst) + Number(costNumber);
			orderTimes.push(orderDetails[x]['time'])

		} else if (estimatedCost != 'Call' && certification == 'No'){
			orderTimes.push(orderDetails[x]['time'])
			$('#nonCertNotice').css('display', 'block');

			switch(orderDetails[x]['docType']){
				case 'app':
					var appCheck = nonCertDocs.indexOf('app');
					if (appCheck >= 0 ){
						totalEst = Number(totalEst) + 35
						totalDiscounts.nonCertApp = Number(totalDiscounts.nonCertApp) + 1
					} else {
						totalEst = Number(totalEst) + 35
						nonCertDocs.push('app')
					}
					break;
				case 'ass':
					var assCheck = nonCertDocs.indexOf('ass');
					if (assCheck >= 0 ){
						totalEst = Number(totalEst) + 60
						totalDiscounts.nonCertAss = Number(totalDiscounts.nonCertAss) + 1
					} else {
						totalEst = Number(totalEst) + 60
						nonCertDocs.push('ass')
					}
					break;
				case 'FH':
				case 'FH + all refs':
				case 'FH/NPLs/US':
				case 'FH/NPLs/For':
				case 'FH/US/For':
				case 'FH/NPLs':
				case 'FH/US':
				case 'FH/For':
					totalEst = Number(totalEst)
					nonCertDocs.push('FH')
					break;
				case 'pat':
					totalEst = Number(totalEst) + 2
					break;
				default:
				totalEst = Number(totalEst)
			}
		}
	}

	if (call == 'No'){
		var maxTime = Math.max.apply(Math, orderTimes);
		$('#totalTime').html(maxTime + " Bus. Days");
		$('#callNotice').css('display', 'none');
	} else {
		$('#totalTime').html('Call');
	}

	if (nonCertDocs.length == 0){
		$('#nonCertNotice').css('display', 'none');
	}



	// var checkCall = $.inArray('Call', orderCost);
	// if (checkCall >= 0){
	// 	$('#callNotice').css('display', 'block');
	// 	$('#totalTime').html('Call');
	// } else {
	// 	$('#callNotice').css('display', 'none');
	// 	var maxTime = Math.max.apply(Math, orderTime);
	// 	$('#totalTime').html(maxTime + " Bus. Days");
	// }

	// if (cert == 'Yes' && countryFee != 'call'){
	// 	var costNumber = cost.replace('$','');
	// }

	// if (countryFee != 'call'){
	// 	totalEst = Number(totalEst) + Number(costNumber);
		
	// } else {
	// 	totalEst = totalEst;
	// }

	discount = ((totalDiscounts.cert * 10) + (totalDiscounts.legal * 55) + (totalDiscounts.country * 60) + (totalDiscounts.emailCopy * 10) + totalDiscounts.ourLegalFees + (totalDiscounts.nonCertApp * 35) + (totalDiscounts.nonCertAss * 55));


	$('#totalCost').html('$'+totalEst+'.00');
	$('#totalCost').val(totalEst);

	$('#discount').html('-$'+discount+'.00');
	$('#discount').val(discount);

	var finalCost = totalEst - discount;

	$('#finalCost').html('$'+finalCost+'.00');
	$('#finalCost').val(finalCost);
}

function calculator(docType, cert, numOfCopies, PDFCopy){
	var country = document.getElementById('countries').value,
		steps = 0;
	
	if(country == ''){
		country='N/A'
	}

	if (countryFees[country] > 0) {
        steps = 2;
    } else if (countryFees[country] === 0) {
        steps = 1;
    } else if (countryFees[country] === "call") {
        steps = "call"; 
	} else {
		steps = 0;
	}

	if (steps == "call"){
		return "Call"
	} else {

	if (country != 'N/A') {
		if (steps == 1){
			if (PDFCopy == 'Yes'){
			return "$" + Math.round((((ourFees.legal) + (certFees[docType]) + (ourCertFees[docType]) + ((stateDept * 0.18)+stateDept)) * numOfCopies) +stateCour +ourFees.Forward);	
			} else if(PDFCopy == 'No' || "N/A") {
			return "$" + Math.round((((ourFees.legal) + (certFees[docType]) + (ourCertFees[docType]) + ((stateDept * 0.18)+stateDept)) * numOfCopies) +stateCour);
			}
		} else if (steps > 1) {
			if(PDFCopy =='Yes') {
				return "$" + Math.round(((((((ourFees.legal*2)+ ((stateDept * 0.18)+stateDept))) + (certFees[docType]) + (ourCertFees[docType]) + ((countryFees[country] * 0.18)+countryFees[country]))) * numOfCopies) +stateCour + countryCour + ourFees.Forward);
			} else if(PDFCopy == 'No' || "N/A") {
			return "$" + Math.round(((((((ourFees.legal*2)+ ((stateDept * 0.18)+stateDept))) + (certFees[docType]) + (ourCertFees[docType]) + ((countryFees[country] * 0.18)+countryFees[country]))) * numOfCopies) +stateCour + countryCour);
			}
		}
	} else {

	if (docType == "app" && cert == "Yes"){
		if (PDFCopy =='Yes'){
			return "$" + ((certFees[docType] * numOfCopies) + (numOfCopies * 35) + ourFees.Forward);
		} else if(PDFCopy == 'No' || "N/A"){
			return "$" + ((certFees[docType] * numOfCopies) + (numOfCopies * 35));
		} 
	} else if (docType == "app" && cert == "No"){
		return "$35.00 + $1/pg";
	} else if (docType == "FH" && cert == "Yes"){
		return "$" + ((certFees[docType] * numOfCopies) + (numOfCopies * 45));
	} else if (docType == "FH" && cert == "No"){
		return "$1/pg";
	} else if (docType == "pat" && cert == "Yes"){
		if (PDFCopy =='Yes'){
			return "$" + ((certFees[docType] * numOfCopies) + (numOfCopies * 35) + ourFees.Forward);
		} else if(PDFCopy == 'No' || "N/A"){
			return "$" + ((certFees[docType] * numOfCopies) + (numOfCopies * 35));
		} 
	} else if (docType == "pat" && cert == "No"){
		return "$" + (numOfCopies * ourFees[docType]);
	} else if (docType == "ass" && cert == "Yes"){
		if (PDFCopy =='Yes'){
			return "$" + ((certFees[docType] * numOfCopies) + (numOfCopies * 35) + ourFees.Forward);
		} else if(PDFCopy == 'No' || "N/A"){
			return "$" + ((certFees[docType] * numOfCopies) + (numOfCopies * 35));
		}
	} else if (docType == "ass" && cert == "No"){
		return "$" + (ourFees[docType]) + " + $1/pg";
	} else { 
		return "Call for Price";
	}
	}
}

}

function timeEst(docType, cert){
	var country = document.getElementById('countries').value,
		steps = 0;

	if (country == ''){
		country ='N/A'
	}

	if (countryFees[country] > 0) {
        steps = 2;
    } else if (countryFees[country] === 0) {
        steps = 1;
    } else if (countryFees[country] === "call") {
        steps = "call"; 
	} else {
		steps = 0;
	}

	if (steps =="call"){
		return "-"
	} else {

	if (country != 'N/A') {
		if (steps == 1){
			return usptoTime + StateDeptTime + 1;
		} else if (steps > 1) {
			return usptoTime + StateDeptTime + 1 + countryTimes[country];
		
		}
	} else {

	if (docType == "app" && cert == "Yes"){
		return usptoTime;
	} else if (docType == "app" && cert == "No"){
		return "1";
	} else if (docType == "FH" && cert == "Yes"){
		return "25";
	} else if (docType == "FH" && cert == "No"){
		return "1";
	} else if (docType == "pat" && cert == "Yes"){
		return usptoTime;
	} else if (docType == "pat" && cert == "No"){
		return "1";
	} else if (docType == "ass" && cert == "Yes"){
		return usptoTime;
	} else if (docType == "ass" && cert == "No"){
		return "1";
	} else { 
		return "Call for Time Estimate";
	}
	}
}

}

function docNumTypes(docType){
	switch (docType) {
		case "app":
			$('#appNum').css('display', 'block');
			$('#assNum').css('display', 'none');
			$('#FHNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "ass":
			$('#assNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#FHNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH + all refs":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH/NPLs/US":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH/NPLs/For":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH/US/For":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH/NPLs":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH/US":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "FH/For":
			$('#FHNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			$('#patNum').css('display', 'none');
			break;
		case "pat":
			$('#patNum').css('display', 'block');
			$('#appNum').css('display', 'none');
			$('#FHNum').css('display', 'none');
			$('#assNum').css('display', 'none');
			break;
	}
}

function certOptions(cert){
	if (cert == 'Yes'){ 
		$("#certYes").prop("checked", true);
		$("#certNo").prop("checked", false);
		$("#legalYes").prop("checked", false);
		$("#legalNo").prop("checked", false);
		$("#legalFieldset").prop("disabled", false);
		$('#copyOpt').css('display','block');
		$('#NPLs').prop('checked', false);
		$('#USRef').prop('checked', false);
		$('#forRef').prop('checked', false);

	} else if (cert == 'No') {
		$("#certNo").prop("checked", true);
		$("#certYes").prop("checked", false);
		$("#legalFieldset").prop("disabled", true);
		$('#legalYes').prop('checked', false);
		$('#legalNo').prop('checked', false);
		$("#legalYes").prop("checked", false);
		$("#legalNo").prop("checked", true);
		$('#copyOpt').css('display','none');
		$('#countries').css('display','none');
		$('#countries').prop('selectedIndex',0);
		$('#copyOpt').prop('selectedIndex',0);
		$('#medium').prop('selectedIndex', 0);
		$('#medium').prop('disabled', false);
	}
}

function legalOptions(legal){
	if (legal == 'Yes'){ 
	$("#certYes").prop("checked", true);
	$("#certNo").prop("checked", false);
	}
}

function docNumEnter(docType){
	switch (docType){
		case 'app':
			docNum = $('#appNum').val();
			break;
		case 'ass':
			docNum = $('#assNum').val();
			break;
		case 'FH':
			docNum = $('#FHNum').val();
			break;
		case 'pat':
			docNum = $('#patNum').val();
			break;
		default:
			docNum = "Please enter document number";
	}

}

function formReset(){
	$('#docType').prop('selectedIndex',0);
	$('#countries').prop('selectedIndex',0);
	$('#countries').css('display','none');
	$('#numOfCopies').prop('selectedIndex',0);
	$('#medium').prop('selectedIndex',0);
	$('#legalYes').prop('checked', false);
	$('#legalNo').prop('checked', false);
	$('#certYes').prop('checked', false);
	$('#certNo').prop('checked', false);
	$('#NPLs').prop('checked', false);
	$('#USRef').prop('checked', false);
	$('#forRef').prop('checked', false);
	$('#FHNPLs').css('display','none');
	$('#appNum').css('display', 'none');
	$('#appNum').val('');
	$('#assNum').css('display', 'none');
	$('#assNum').val('');
	$('#FHNum').css('display', 'none');
	$('#FHNum').val('');
	$('#patNum').css('display', 'none');
	$('#patNum').val('');
	$("#numOfCopies").prop("disabled", false);
	$("#medium").prop("disabled", false);
	$('#FAOpt').prop('selectedIndex',0);
	$('#FAaddress').css('display', 'none');
	$('#copyOpt').css('display', 'none');
	$('#copiesYes').prop('checked', false);
	$('#copiesNo').prop('checked', false);
	$('#fillAddress').css('display', 'none');
	$('#fillAddress').prop('checked', false);
	$('#FAaddress').css('display','none');
	$('#FAAdd').val('');


}

function populateForm(number){
	var legal = orderDetails[number]['legal'],
		cert = orderDetails[number]['cert'],
		docNum = orderDetails[number]['docNum'],
		docType = orderDetails[number]['docType'],
		medium = orderDetails[number]['media'],
		numOfCopies = orderDetails[number]['numOfCopies'],
		countries = orderDetails[number]['country'],
		forward = orderDetails[number]['fwd'],
		// shipAddress = shippingAddress[number],
		PDFCopy = orderDetails[number]['emailCopy'];


		if (docType == "FH + all refs"){
			docType = 'FH';
			$("#NPLs").prop("checked", true);
			$("#USRef").prop("checked", true);
			$("#forRef").prop("checked", true);
		} else if (docType == "FH/NPLs/US"){
			docType = 'FH';
			$("#NPLs").prop("checked", true);
			$("#USRef").prop("checked", true);
			$("#forRef").prop("checked", false);
		} else if (docType == "FH/NPLs/For"){
			docType = 'FH';
			$("#NPLs").prop("checked", true);
			$("#USRef").prop("checked", false);
			$("#forRef").prop("checked", true);
		} else if (docType == "FH/US/For"){
			docType = 'FH';
			$("#NPLs").prop("checked", false);
			$("#USRef").prop("checked", true);
			$("#forRef").prop("checked", true);
		} else if (docType == "FH/NPLs"){
			docType = 'FH';
			$("#NPLs").prop("checked", true);
			$("#USRef").prop("checked", false);
			$("#forRef").prop("checked", false);
		} else if (docType == "FH/US"){
			docType = 'FH';
			$("#NPLs").prop("checked", false);
			$("#USRef").prop("checked", true);
			$("#forRef").prop("checked", false);
		} else if (docType == "FH/For"){
			docType = 'FH';
			$("#NPLs").prop("checked", false);
			$("#USRef").prop("checked", false);
			$("#forRef").prop("checked", true);
		}


		$("#docNum").val(docNum);
		$("#docType").val(docType);
		$("#medium").val(medium);
		$("#numOfCopies").val(numOfCopies);
		$("#countries").val(countries);
		$("#FAOpt").val(forward);

		
		
		docNumTypes(docType);
		
		switch (docType) {
			case "app":
				$('#appNum').val(docNum);
				break;
			case "ass":
				$('#assNum').val(docNum);
				break;
			case "FH":
				$('#FHNum').val(docNum);
				break;
			case "pat":
				$('#patNum').val(docNum);
				break;
		}
		
		if ((docType == 'FH' && cert == 'No')){
			$('#FHNPLs').css('display','block');
		} else {
			$('#FHNPLs').css('display','none');
		}
		
		certOptions(cert);
		
		if (legal != 'No'){ 
			$("#legalYes").prop("checked", true);
			$("#legalNo").prop("checked", false);
			$("#countries").css('display', 'block');
		} else {
			$("#legalYes").prop("checked", false);
			$("#legalNo").prop("checked", true);
			$("#countries").css('display', 'none');
		}

		if (PDFCopy == 'Yes'){
			$("#copiesYes").prop("checked", true);
			$("#copiesNo").prop("checked", false);
		} else if (PDFCopy == 'No'){
			$("#copiesNo").prop("checked", true);
			$("#copiesYes").prop("checked", false);
		};

		if (forwardAdd.length >= 1){
			// $('#fillAddress').css('display', 'block');
			$('#FAaddress').css('display', 'block');
			$('#FAAdd').val(orderDetails[number]['shippingInfo']);
		}

		// if (forward == 'Yes'){
		// 	$('#FAaddress').css('display','block');
		// 	$('#FAAdd').val(shipAddress);
		// } else if (forward == 'No'){
		// 	$('#FAaddress').css('display','none');
		// };
		
		$('#save').css('display', 'block');
		$('#cancelEdit').css('display', 'block');
		$('#addDoc').css('display', 'none');
		$('#documentLine').css('display','block');
		$('#submitOrder').css('display', 'none');

}


$('#docType').change(function(){
	var docType = $('#docType').val();

	// if (doc.docType != 'FH'){
	// 	$('#FHNPLs').css('display','none');
	// }

	docNumTypes(docType);
});

$('#FAOpt').change(function(){
	var FAOpt = $('#FAOpt').val();

	if (FAOpt == 'Yes'){
		$('#FAaddress').css('display','block');
	} else if (FAOpt == 'No'){
		$('#FAaddress').css('display','none');
	}

	if(FAOpt =='Yes' && forwardAdd.length > 0){
		$('#fillAddress').css('display','block');
		for (var i=0; i<orderDetails.length; i++){
			$('#addressCheck'+i).prop('checked', false)
		}
	}
	else {
		$('#fillAddress').css('display','none');
	}

});

$('#fillAddress').on('change','.addCheck', function(){
	var add = $(this).val();

	if ($(this).prop('checked')){
		// clickedAdd.push(add)
		$('#FAAdd').val(orderDetails[add]['shippingInfo']);
		// if (clickedAdd.length > 1){
		// 	$('#FAAdd').val(shippingAddress[add]);
		// 	for (var i=0; i <clickedAdd.length; i++){
		// 		if ( i != add){
		// 			var idName = 'addCheck'+i
		// 			$('#'+idName).prop('checked', false);
		// 		}
		// 	}

		// } else {
		// 	$('#FAAdd').val(shippingAddress[add]);
		// }
		// if (add >= 0){
		
		// }
	} else{
		// clickedAdd.splice(add,1);
		$('#FAAdd').val('')
	}
});

$('#docTypeForm input[name=certRadio]').on('change', function() {
   cert.val = ($('input[name=certRadio]:checked', '#docTypeForm').val()); 
   legal.val = ($('input[name=legalRadio]:checked', '#docTypeForm').val());
   doc.docType = $('#docType').val();



   	if ((doc.docType == 'FH' && cert.val == 'No')){
		$('#FHNPLs').css('display','block');
	} else {
		$('#FHNPLs').css('display','none');
	}

	docNumTypes(doc.docType);
	certOptions(cert.val);

});

$('#docTypeForm input[name=legalRadio]').on('change', function() {
   legal.val = ($('input[name=legalRadio]:checked', '#docTypeForm').val());

   if (legal.val == 'Yes') {
   	$('#countries').css('display', 'block');
   	$('#medium').prop('selectedIndex',1);
	$("#medium").prop("disabled", true);
	$('#copyOpt').css('display','block');
   } else if (legal.val == 'No') {
   	$('#countries').css('display', 'none');
   	$('#medium').prop('selectedIndex',0);
   	$("#medium").prop("disabled", false);
   }
   legalOptions(legal.val);
});

$('#medium').change(function(){
	var medium = $('#medium').val();

	if (cert.val == 'No' && medium == 'PDF'){
		$('#numOfCopies').prop('selectedIndex',1);
   		$("#numOfCopies").prop("disabled", true);
	} else {
		$('#numOfCopies').prop('selectedIndex',0);
   		$("#numOfCopies").prop("disabled", false);
	}
});

function autoAddressFill(forAddress){
	if (forAddress != ''){
		// for (var x=0; x < forwardAdd.length; x++){
		// 	$('#addCheck'+x).remove()
		// }
		var forwardingAddressCheck = forwardAdd.indexOf(forAddress);
		if (forwardingAddressCheck < 0 ){
			if(orderDetails.length <= 1){
				var addCount = 0;
				var autofill = "<label id='addCheck0'><input type='checkbox' name='addCheck' class='addCheck' value="+addCount+" id='addressCheck" + addCount +"'>Click, if you would like this document also forwarded to: "+forAddress+"</label>"
				$('#addressCheckbox').append(autofill)
				$('#addressCheckbox').css('display', 'block');
				forwardAdd.push(orderDetails[0]['shippingInfo'])
			} else {
				$('#addressCheckbox').css('display', 'none');
				$('#addCheck0').remove();
				var iteratedAddList = [];
				if (forwardAdd.length == 1){
					forwardAdd = []
				}
				for (var i=0; i<orderDetails.length; i++){
					var shippingAdd = orderDetails[i]['shippingInfo'],
						addCheck = iteratedAddList.indexOf(i);
					if (addCheck >= 0 ){
						continue
					} else {
						var addCount = i,
							addressCheck = forwardAdd.indexOf(orderDetails[i]['shippingInfo']);
						if (addressCheck < 0){
							var autofill = "<label id='addCheck" + addCount +"'><input type='radio' name='addCheck' class='addCheck' value="+addCount+" id='addressCheck" + addCount +"'>Click, if you would like this document also forwarded to: "+shippingAdd+"</label>"
							$('#addressRadio').append(autofill);
							$('#addressRadio').css('display', 'block');
							forwardAdd.push(orderDetails[i]['shippingInfo'])
						} else {
							continue
						}
						for (var j=0; j<orderDetails.length; j++){
							var currentShippingAdd = orderDetails[j]['shippingInfo']
							if (j==i){
								continue
							}
							var jCheck = forwardAdd.indexOf(orderDetails[j]['shippingInfo']);
							if (currentShippingAdd != shippingAdd && jCheck < 0){
								iteratedAddList.push(j)
								var addCount = j;
								var autofill = "<label id='addCheck" + addCount +"'><input type='radio' name='addCheck' class='addCheck' id='addressCheck" + addCount +"' value="+addCount+">Click, if you would like this document also forwarded to: "+currentShippingAdd+"</label>"
								$('#addressRadio').append(autofill)
								forwardAdd.push(orderDetails[j]['shippingInfo'])
							} else {
								iteratedAddList.push(j)
							}
						}
					}
				}
			}
		}
	}
}

function tableMaker(){
	for(var i=0; i<orderDetails.length; i++){
		var legal = orderDetails[i]['legal'],
		cert = orderDetails[i]['cert'],
		docNum = orderDetails[i]['docNum'],
		docType = orderDetails[i]['docType'],
		media = orderDetails[i]['media'],
		numOfCopies = orderDetails[i]['numOfCopies'],
		country = orderDetails[i]['country'],
		forward = orderDetails[i]['fwd'],
		count = i+1,
		emailCopy = orderDetails[i]['emailCopy'],
		cost = orderDetails[i]['cost'],
		time = orderDetails[i]['time'];

		if (country ==''){
			country = "N/A"
		}

		if (emailCopy == null){
			emailCopy = "N/A"
		}

		$('#table'+ i).remove();
		var table = "<table id='table"+i+"' class='form-group table table-bordered text-center'><tr><th rowspan='6' class='text-center'>Document "+count+"<br><br> <button  type='button' id='"+i+"' name='"+i+"' class='btn btn-primary text-center edit'>Edit</button><br><br><button name="+i+" type='button' class='btn btn-danger text-center delete'>Remove</button></th></tr><tr class='active text-center'><th>Doc Type</th><th colspan='2'>Doc Number</th><th>Cert</th><th>Legal</th><th>Country</th></tr><tr class='text-center'><td>"+docType+"</td><td colspan='2'>"+docNum+"</td><td>"+cert+"</td><td>"+legal+"</td><td>"+country+"</td></tr><tr class='active text-center'><th>Media</th><th>Copies</th><th>Forward</th><th>PDF Copy</th><th>Cost</th><th>Time</th></tr><tr class='text-center'><td>"+media+"</td><td>"+numOfCopies+"</td><td>"+forward+"</td><td>"+emailCopy+"</td><td>"+cost+"</td><td>"+time+" Bus. Days</td></tr></table>";
		
		$('#cart').append(table);
		$('#cart').css('display','table');
	}
}

$('#addDoc').click(function(){
	$('#docTypeForm').submit();
});

$('#docTypeForm').validate({

	rules:{
		docType: {
			required: true
		},
		certRadio:{
			required: true
		},
		legalRadio:{
			required: true
		},
		media:{
			required: true
		},
		numOfCopies:{
			required: true
		},
		FAOpt:{
			required: true
		},
		appNum: {
			required: function(){$('#docType').val() == 'app'},
			minlength: 8
		},
		assNum: {
			required: function(){$('#docType').val() == 'ass'},
			minlength: 10
		},
		FHNum: {
			required: function(){$('#docType').val() == 'FH'},
			minlength: 7
		},
		patNum: {
			required: function(){$('#docType').val() == 'pat'},
			minlength: 7
		},
		countries:{
			required: '#legalYes[value="Yes"]:checked'
		},
		FAAdd: {
			required: function(){$('#FAOpt').val() == "Yes"},
			minlength: 2
		},
		copyRadio:{
			required: '#certYes[value="Yes"]:checked'
		}

	},
	messages: {
		docType: "Please select a type of USPTO document",
		media: "Please select the document media",
		numOfCopies: "Please select the number of copies you need",
		FAOpt: "Please select if the document need to be forwarded to an associate",
		appNum: "Please enter a valid application number. Example: 01/234567",
		assNum: "Please enter the reel/frame of the assignment. Example 012345/6789",
		FHNum: "Please enter a valid patent or application number. Examples: 1,234,567 or 01/234567",
		patNum: "Please enter a valid application number. Example 1,234,567",
		FAAdd: "Please enter the address you would like the document forwarded",
		countries: "Please select the country where the document will be used"
	},
	submitHandler: function(form){

	var 
		docType = $('#docType').val(),
		cert = ($('input[name=certRadio]:checked', '#docTypeForm').val()),
		legal = ($('input[name=legalRadio]:checked', '#docTypeForm').val()),
		country = $('#countries').val(),
		countryFee = countryFees[country],
		numOfCopies = $('#numOfCopies').val(),
		medium = $('#medium').val(),
		cartLine = 'line' + tot.count,
		//ref = ($('input[name=optradio]:checked', '#FHNPLs').val()),
		forward = $('#FAOpt').val(),
		count = (tot.count - 1),
		emailCopy = ($('input[name=copyRadio]:checked', '#docTypeForm').val()),
		cost = calculator(docType, cert, numOfCopies, emailCopy),
		time = timeEst(docType, cert),
		address = $('#address').val(),
		forAddress = $('#FAAdd').val();

	if(emailCopy == null){
		emailCopy = "N/A"
	}

	if(country == ''){
		country = 'N/A'
	}



	if(medium == 'PDF'){
		var shippingInfo = 'Email'
	} else if (medium == 'Paper'){
		if(forAddress != ''){
			var shippingInfo = forAddress;
		} else {
			var shippingInfo = address;
		}
	}

	docNumEnter(docType);
	
	if (($('#NPLs').prop('checked')) && ($('#USRef').prop('checked')) && ($('#forRef').prop('checked'))){
		docType = "FH + all refs";
	} else if (($('#NPLs').prop('checked')) && ($('#USRef').prop('checked'))){
		docType = "FH/NPLs/US";
	} else if (($('#NPLs').prop('checked')) && ($('#forRef').prop('checked'))){
		docType = "FH/NPLs/For";
	} else if (($('#forRef').prop('checked')) && ($('#USRef').prop('checked'))){
		docType = "FH/US/For";
	} else if ($('#NPLs').prop('checked')){
		docType = "FH/NPLs";
	} else if ($('#USRef').prop('checked')){
		docType = "FH/US";
	} else if ($('#forRef').prop('checked')){
		docType = "FH/For";
	}

	
	pushOrderDetails(country, docType, docNum, cert, legal, numOfCopies, medium, forward, emailCopy, cost, time, shippingInfo);
	newDiscCalc();
	autoAddressFill(forAddress);

	tableMaker()
	
	tot.count++;
	formReset();

	// checkedAddReset();
	$('#submitOrder').css('display','block');
	$('#anotherDoc').css('display','block');
	$('#docCart').css('display','block');
	$('#documentLine').css('display', 'none'); 
	$('#delete').css('display','none');
	$('#disclaimer').css('display','block');
	$('#instructions').css('display','block');
	$('html, body').animate({ scrollTop: $('#docCart').offset().top }, 'Fast');

	
	}
});

$('#anotherDoc').click(function(){
	$('#documentLine').css('display', 'block');
	$('#addDoc').css('display', 'block');
	$('#save').css('display', 'none');
	$('#docHeader').text('Document ' + tot.count);
	$('#anotherDoc').css('display','none');
	$('#submitOrder').css('display','none');
	$('#docCart').css('display','block');
	$('#cancelAdd').css('display', 'block');
	$('html, body').animate({ scrollTop: $('#documentLine').offset().top }, 'Fast');
});

$('#cancelAdd').click(function(){
	$('#documentLine').css('display', 'none');
	$('#addDoc').css('display', 'none');
	$('#save').css('display', 'block');
	$('#anotherDoc').css('display','block');
	$('#submitOrder').css('display','block');
	$('#docCart').css('display','block');
	$('#cancelAdd').css('display', 'none');
	formReset();
	$('html, body').animate({ scrollTop: $('#docCart').offset().top }, 'Fast');
});

$('#cancelEdit').click(function(){
	$('#documentLine').css('display', 'none');
	$('#addDoc').css('display', 'none');
	$('#save').css('display', 'block');
	$('#anotherDoc').css('display','block');
	$('#submitOrder').css('display','block');
	$('#docCart').css('display','block');
	$('#cancelEdit').css('display', 'none');
	formReset();
	$('html, body').animate({ scrollTop: $('#docCart').offset().top }, 'Fast');
});

function submitForms(){
    document.getElementById("clientInfoForm").submit();
	document.getElementById("docTypeForm").submit();
	document.getElementById("certForm").submit();
	document.getElementById("legalForm").submit();
	document.getElementById("NPLForm").submit();
	document.getElementById("finalForm").submit();
}

$('#clientInforForm').submit(function(e){
	e.preventDefault();
})



$('#cart').on('click', '.edit', function(){
	var editLine = $(this).attr('name');
	editedOrder.number = editLine;

	populateForm(editLine);
	$('#cancelAdd').css('display', 'none');

	$('#docCart').css('display','block');
	$('html, body').animate({ scrollTop: $('#documentLine').offset().top }, 'Fast');


});


$('#cart').on('click', '.delete', function(){
	var editLine = $(this).attr('name');

	for (var i=0; i<orderDetails.length; i++){
		$('#table'+ i).remove();
	}
		orderDetails.splice(editLine,1)
		newDiscCalc()
		tableMaker()
		$('#docCart').css('display','block');

});

$('#save').click(function(){
	orderDetails.splice(editedOrder.number,1)
	var 
		docType = $('#docType').val(),
		cert = ($('input[name=certRadio]:checked', '#docTypeForm').val()),
		legal = ($('input[name=legalRadio]:checked', '#docTypeForm').val()),
		country = $('#countries').val(),
		numOfCopies = $('#numOfCopies').val(),
		medium = $('#medium').val(),
		cartLine = 'line' + tot.count,
		//ref = ($('input[name=optradio]:checked', '#FHNPLs').val()),
		forward = $('#FAOpt').val(),
		count = (tot.count - 1),
		emailCopy = ($('input[name=copyRadio]:checked', '#docTypeForm').val()),
		cost = calculator(docType, cert, numOfCopies, emailCopy),
		time = timeEst(docType, cert),
		address = $('#address').val(),
		forAddress = $('#FAAdd').val();

		if(emailCopy == null){
			emailCopy = "N/A"
		}

		if(country == ""){
			country = "N/A"
		}

		if(medium == 'PDF'){
			var shippingInfo = 'Email'
		} else if (medium == 'Paper'){
			if(forAddress != ''){
				var shippingInfo = forAddress;
			} else {
				var shippingInfo = address;
			}
		}

		docNumEnter(docType);

		if (($('#NPLs').prop('checked')) && ($('#USRef').prop('checked')) && ($('#forRef').prop('checked'))){
			docType = "FH + all refs";
		} else if (($('#NPLs').prop('checked')) && ($('#USRef').prop('checked'))){
			docType = "FH/NPLs/US";
		} else if (($('#NPLs').prop('checked')) && ($('#forRef').prop('checked'))){
			docType = "FH/NPLs/For";
		} else if (($('#forRef').prop('checked')) && ($('#USRef').prop('checked'))){
			docType = "FH/US/For";
		} else if ($('#NPLs').prop('checked')){
			docType = "FH/NPLs";
		} else if ($('#USRef').prop('checked')){
			docType = "FH/US";
		} else if ($('#forRef').prop('checked')){
			docType = "FH/For";
		}

		pushOrderDetails(country, docType, docNum, cert, legal, numOfCopies, medium, forward, emailCopy, cost, time, shippingInfo)
		newDiscCalc()
		autoAddressFill(forAddress);


		//DO NOT DELETE!!!!!!!!!
		// var checkCall = $.inArray('Call', orderCost);
		// if (checkCall >= 0){
		// 	$('#callNotice').css('display', 'block');
		// 	$('#totalTime').html('Call');
		// } else {
		// 	$('#callNotice').css('display', 'none');
		// 	var maxTime = Math.max.apply(Math, orderTime);
		// 	$('#totalTime').html(maxTime + " Bus. Days");
		// }

		tableMaker();
		formReset();

	$('#submitOrder').css('display','block');
	$('#anotherDoc').css('display','block');
	$('#documentLine').css('display', 'none');
	$('#docCart').css('display','block');
	});

$('#anotherDoc').click(function(){
$('#documentLine').css('display', 'block');
$('#addDoc').css('display', 'block');
$('#save').css('display', 'none');
$('#docHeader').text('Document ' + tot.count);
$('#anotherDoc').css('display','none');
$('#submitOrder').css('display','none');

});


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
/*$.ajaxSetup({
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
	});*/

function csrfSafeMethod(method) {
		// these HTTP methods do not require CSRF protection
		return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
	beforeSend: function(xhr, settings) {
		if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
			xhr.setRequestHeader("X-CSRFToken", csrftoken);
		}
	}
});

$('#submit').click(function(){
	$('#clientInfoForm').submit();
});

$('#clientInfoForm').validate({
    rules:{
        first_name: {
            required: true,
            minlength: 2
        },
        last_name: {
            required: true,
            minlength: 2            
        },
		email: 'required',
        address: {
            required: true,
            minlength: 2            
        },
        ref_num: {
            required: true,
            minlength: 2
        }
    },
    messages: {
        firstName: "Please enter your first name",
        last_name: "Please enter your last name",
        email: "Please enter a valid email address",
		address: "Please enter your address",
		ref_num: "Please enter your reference number, if you do not have one enter \"None\""
    },
    submitHandler: function(form){	
			 if (orderDetails.length > 0){
				// var counter2 = 0;
				var json_data = []
				json_data.push({
					first_Name: $('#first_name').val(),
					last_Name: $('#last_name').val(),
					company: $('#company_name').val(),
					address: $('#address').val(),
					email: $('#email').val(),
					ref: $('#ref_num').val(),
					instructions: $('#specialInstructions').val(),
				})
				json_data.push({
					totalEst: $('#totalCost').val(),
					discount: $('#discount').val(),
					finalEst: $('#finalCost').val(),
				})
				for (var i=0; i<orderDetails.length; i++){
					json_data.push(orderDetails[i]);
				}
				// for (var i=0; i<orderDocNum.length; i++){
				// 	counter2 ++
				// 	json_data.push({
				// 		counter: counter2,
				// 		docNum: orderDocNum[i],
				// 		docType: orderDocType[i],
				// 		docCert: orderCert[i],
				// 		docLegal: orderLegal[i],
				// 		docCountry: orderCountry[i],
				// 		docNumofCopies: orderNumOfCopies[i],
				// 		docMedia: orderMedia[i],
				// 		docForward: orderForward[i],
				// 		docEmail: orderEmailCopy[i],
				// 		docCost: orderCost[i],
				// 		shipInfo: shippingAddress[i],
				// 		docTime: orderTime[i]
				// 	})
		
				// }
				window.location.replace("/thanks?order=" + JSON.stringify(json_data));
				// $.post( "/thanks?order=" + JSON.stringify(json_data), 
				// function(xml, textStatus, xhr){
				// 		alert("Continuing to Review Order Page!");
				// 		window.location.replace("
				// 	});
			} else {
				alert("You don't have any items in your cart!");
			}
        $(form).submit;
    }
});


});




