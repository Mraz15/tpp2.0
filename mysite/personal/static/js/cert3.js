$(document).ready(function(){
"use strict";

//test
 
var tot = {
	count: 1
	},
	orderArray = {
	number: 0
	},
	previousCountry = {
		docs: 0
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
	    "GCC": 25,
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
        "LBN": 50,
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
	orderDocType = [],
	orderDocNum = [],
	orderCert = [],
	orderLegal = [],
	orderCountry = [],
	orderNumOfCopies = [],
	orderMedia = [],
	orderForward = [],
	orderEmailCopy = [],
	orderCost = [],
	orderTime = [],
	orderDisc = [],
	shippingAddress = [],
	forwardAdd = [],
	docsForCountry = [],
	totalEst = 0,
	nonCertString = "+ $1/page",
	discount = 0,
	certTotal = 0,
	nonCertTotal=0,
	legalTotal = 0,
	countryTotal = 0,
	certDis = [],
	legalDis = [],
	countryDis = [],
	ourLegalDis = [],
	PDFDis = [],
	legalNumber = {
		Disc: 0,
		NCApp: 0,
		NCAss: 0,
		NCPat: 0,
		NCFile: 0},
	nonCertDoc = [],
	PDFTotal = 0,
	documentDetails = [];

function discountCalculator(cert, docType, country, PDF, numOfDocs, cost){
	var certCheck = $.inArray('Yes', orderCert),
		numOfCountryDocs = docsForCountry[country],
		countryFee = countryFees[country],
		docTypeCheck = $.inArray('docType', nonCertDoc),
		countryCheck = $.inArray(country, orderCountry),
		prevCert = certTotal,
		prevLegal = legalTotal,
		prevCountry = countryTotal,
		prevPDF = PDFTotal,
		prevOurLegal = legalNumber.Disc;

	if (cert == 'Yes'){
		if (countryCheck >= 0){
			certTotal = Number(certTotal) + Number(numOfDocs);
		} else {
			if (numOfDocs > 1){
				certTotal = certTotal + (numOfDocs - 1)
			} else if (numOfDocs == 1){
				certTotal = certTotal
			}
		}

	} else if (cert == 'No'){
		certTotal = certTotal;
		if (docType == 'app'){
			if(docTypeCheck >= 0 ){
				legalNumber.NCApp = legalNumber.NCApp
			} else if (docTypeCheck < 0 ){
				costNumber = 35;
			}
		}
		if (docType == 'ass'){
			if(docTypeCheck >= 0 ){
				costNumber = 0
			} else if (docTypeCheck < 0 ){
				costNumber = 60
			}
		}
		if (docType == 'FH'){
			if(docTypeCheck >= 0 ){
				costNumber = 0
			} else if (docTypeCheck < 0 ){
				costNumber = 0
			}
		}
		if (docType == 'pat'){
			if(docTypeCheck >= 0 ){
				costNumber = 2
			} else if (docTypeCheck < 0 ){
				costNumber = 2
			}
		}

	}

	var legalCheck = $.inArray('Yes',orderLegal);
	// if (legal == 'Yes'){
	// 	if (numOfDocs > 1){
	// 		legalTotal = legalTotal + (numOfDocs -1);
	// 	} else {
	// 		if (legalCheck >= 0){
	// 		legalTotal = legalTotal + 1;
	// 		} else if (legalCheck ==-1){
	// 			legalTotal = legalTotal;
	// 		}
	// 	}
	// } else if (legal == 'No'){
	// 	legalTotal = legalTotal;
	// }

	if (country != 'No'){
		if (countryCheck >= 0){
			if(countryFee ==0){
				legalTotal = legalTotal + 1
				countryTotal = countryTotal
			} else if (countryFee > 0){
				legalTotal = legalTotal + 1
				countryTotal = countryTotal +1
			}
		} else if (countryCheck == -1){
			// if (numOfDocs > 1){
			// 	if(countryFee ==0){
			// 		legalTotal = legalTotal + 1
			// 		countryTotal = countryTotal
			// 	} else if (countryFee > 0){
			// 		legalTotal = legalTotal + 1
			// 		countryTotal = countryTotal +1
			// 	}
			// } else {
				legalTotal = legalTotal;
				countryTotal = countryTotal;
		}



		// if (numOfDocs > 1){
		// 	countryTotal = countryTotal + (numOfDocs -1);
		// } else {
			// if (countryCheck >= 0){
			// 	countryTotal = countryTotal + 1;
			// } else if (countryCheck == -1){
			// 	countryTotal = countryTotal;
			// }
		// }
	}

	var PDFCheck = $.inArray('Yes', orderEmailCopy);
	if (PDF == 'Yes'){
		if(PDFCheck >= 0){
		PDFTotal = PDFTotal + 1;
		} else if (PDFCheck == -1){
			PDFTotal = PDFTotal;
		}
	} else if (PDF == 'No' || "N/A"){
		PDFTotal = PDFTotal;
	}



	if(numOfCountryDocs > 0){
		var oldCountryDocs = numOfCountryDocs - numOfDocs;

		if (oldCountryDocs >= 3 && oldCountryDocs < 6){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc - (15 * oldCountryDocs)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc - (30 * oldCountryDocs)
			}
		} else if (oldCountryDocs >= 6){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc - (25 * oldCountryDocs)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc - (50 * oldCountryDocs)
			}	
		}

	}



	if (numOfCountryDocs >= 3 && numOfCountryDocs < 6){
		if (countryFee == 0){
			legalNumber.Disc = legalNumber.Disc + (15 * numOfCountryDocs)
		} else if (countryFee > 0){
			legalNumber.Disc = legalNumber.Disc + (30 * numOfCountryDocs)
		}
	} else if (numOfCountryDocs >= 6){
		if (countryFee == 0){
			legalNumber.Disc = legalNumber.Disc + (25 * numOfCountryDocs)
		} else if (countryFee > 0){
			legalNumber.Disc = legalNumber.Disc + (50 * numOfCountryDocs)
		}	
	}

	// if (countryCheck == 2){
	// 	if 
	// }

	// var prevDisc = discount;


	discount = ((certTotal * 10) + (legalTotal * 55) + (countryTotal * 60) + (PDFTotal * 10) + legalNumber.Disc);

	var lineCertDisc = certTotal - prevCert,
		lineLegalDisc = legalTotal - prevLegal,
		lineCountryDisc = countryTotal - prevCountry,
		linePDFDisc = PDFTotal - prevPDF,
		lineOurLegalDisc = legalNumber.Disc - prevOurLegal;

	certDis.push(lineCertDisc);
	legalDis.push(lineLegalDisc);
	countryDis.push(lineCountryDisc);
	PDFDis.push(linePDFDisc);
	ourLegalDis.push(lineOurLegalDisc);

	// var orderDiscount = discount - prevDisc;

	// orderDisc.push(orderDiscount);

	var appCheck = $.inArray('app', orderDocType);
	var assCheck = $.inArray('ass', orderDocType);

	if (cert == 'Yes'){
		var costNumber = cost.replace('$','');
	// } else if (cert == 'No'){
	// 	if (docType == 'app'){
	// 		if (appCheck >= 0){
	// 			var costNumber = Number(0);
	// 		} else if (appCheck < 0){
	// 			var costNumber = 35;
	// 		}
	// 	}
	// 	if (docType == 'FH'){
	// 		var costNumber = 0;
	// 	}
	// 	if (docType == 'ass'){
	// 		if (assCheck >= 0){
	// 			var costNumber = 0;
	// 		} else if (assCheck < 0){
	// 			var costNumber = 60;
	// 		}
	// 	}
	// 	if (docType == 'pat'){
	// 		var costNumber = 2;
	// 	}
	// 	nonCertDisc(docType);
	// }

	if (cert == 'No'){
		nonCertDoc.push(docType);
	}

	// if (cert == 'No'){
	// 	nonCertDisc(docType);
	// }

	totalEst = Number(totalEst) + Number(costNumber);

	// var certCheck = $.inArray('No', orderCert);

	// if (certfCheck > 0){
	// 	if(cert != 'pat'){

	// 	}
	// } else if (certCheck == -1){

	// }

	$('#totalCost').html('$'+totalEst+'.00');

	// if (orderDocType.length < 1){
	// 	docsForCountry[country] = numOfCopies;
	// } else if (orderDocType.length > 0){
	// 	if (country in docsForCountry){
	// 		docsForCountry[country] = Number(docsForCountry[country]) + Number(numOfCopies);
	// 	} else {
	// 		docsForCountry[country] = numOfCopies
	// 	}
	// }

	if(orderDocType.length > 0 || numOfDocs > 1){
		$('#discount').html('-$'+discount+'.00');
	} else{ 
		$('#discount').html('$0.00');
	}

	var finalCost = totalEst - discount;

	$('#finalCost').html('$'+finalCost+'.00');
}
};

function editCalculator(cert, docType, country, PDF, numOfDocs, cost){
	var certCheck = $.inArray('Yes', orderCert),
		numOfCountryDocs = docsForCountry[country],
		countryFee = countryFees[country],
		docTypeCheck = $.inArray('docType', nonCertDoc),
		countryCheck = $.inArray(country, orderCountry),
		prevCert = certTotal,
		prevLegal = legalTotal,
		prevCountry = countryTotal,
		prevPDF = PDFTotal,
		prevOurLegal = legalNumber.Disc;

	if (cert == 'Yes'){
		if (countryCheck >= 0){
			certTotal = Number(certTotal) + Number(numOfDocs);
		} else {
			if (numOfDocs > 1){
				certTotal = certTotal + (numOfDocs - 1)
			} else if (numOfDocs == 1){
				certTotal = certTotal
			}
		}

	} else if (cert == 'No'){
		certTotal = certTotal;
		if (docType == 'app'){
			if(docTypeCheck >= 0 ){
				legalNumber.NCApp = legalNumber.NCApp
			} else if (docTypeCheck < 0 ){
				costNumber = 35;
			}
		}
		if (docType == 'ass'){
			if(docTypeCheck >= 0 ){
				costNumber = 0
			} else if (docTypeCheck < 0 ){
				costNumber = 60
			}
		}
		if (docType == 'FH'){
			if(docTypeCheck >= 0 ){
				costNumber = 0
			} else if (docTypeCheck < 0 ){
				costNumber = 0
			}
		}
		if (docType == 'pat'){
			if(docTypeCheck >= 0 ){
				costNumber = 2
			} else if (docTypeCheck < 0 ){
				costNumber = 2
			}
		}

	}

	if (country != 'No'){
		if (countryCheck >= 0){
			if(countryFee ==0){
				legalTotal = legalTotal + 1
				countryTotal = countryTotal
			} else if (countryFee > 0){
				legalTotal = legalTotal + 1
				countryTotal = countryTotal +1
			}
		} else if (countryCheck == -1){
				legalTotal = legalTotal;
				countryTotal = countryTotal;
		}
	}

	var PDFCheck = $.inArray('Yes', orderEmailCopy);
	if (PDF == 'Yes'){
		if(PDFCheck >= 0){
		PDFTotal = PDFTotal + 1;
		} else if (PDFCheck == -1){
			PDFTotal = PDFTotal;
		}
	} else if (PDF == 'No' || "N/A"){
		PDFTotal = PDFTotal;
	}


	if(numOfCountryDocs > 0){
		var oldCountryDocs = numOfCountryDocs - numOfDocs;

		if (oldCountryDocs >= 3 && oldCountryDocs < 6){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc - (15 * oldCountryDocs)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc - (30 * oldCountryDocs)
			}
		} else if (oldCountryDocs >= 6){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc - (25 * oldCountryDocs)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc - (50 * oldCountryDocs)
			}	
		}

	}




	if (numOfCountryDocs >= 3 && numOfCountryDocs < 6){
		if (countryFee == 0){
			legalNumber.Disc = legalNumber.Disc + (15 * numOfCountryDocs)
		} else if (countryFee > 0){
			legalNumber.Disc = legalNumber.Disc + (30 * numOfCountryDocs)
		}
	} else if (numOfCountryDocs >= 6){
		if (countryFee == 0){
			legalNumber.Disc = legalNumber.Disc + (25 * numOfCountryDocs)
		} else if (countryFee > 0){
			legalNumber.Disc = legalNumber.Disc + (50 * numOfCountryDocs)
		}	
	}

	discount = ((certTotal * 10) + (legalTotal * 55) + (countryTotal * 60) + (PDFTotal * 10) + legalNumber.Disc);

	var lineCertDisc = certTotal - prevCert,
		lineLegalDisc = legalTotal - prevLegal,
		lineCountryDisc = countryTotal - prevCountry,
		linePDFDisc = PDFTotal - prevPDF,
		lineOurLegalDisc = legalNumber.Disc - prevOurLegal;

	certDis.splice(orderArray.number,1,lineCertDisc);
	legalDis.splice(orderArray.number,1,lineLegalDisc);
	countryDis.splice(orderArray.number,1,lineCountryDisc);
	PDFDis.splice(orderArray.number,1,linePDFDisc);
	ourLegalDis.splice(orderArray.number,1,lineOurLegalDisc);


	var appCheck = $.inArray('app', orderDocType);
	var assCheck = $.inArray('ass', orderDocType);

	if (cert == 'Yes'){
		var costNumber = cost.replace('$','');

	if (cert == 'No'){
		nonCertDoc.push(docType);
	}

	totalEst = Number(totalEst) + Number(costNumber);

	$('#totalCost').html('$'+totalEst+'.00');

	if(orderDocType.length > 0 || numOfDocs > 1){
		$('#discount').html('-$'+discount+'.00');
	} else{ 
		$('#discount').html('$0.00');
	}

	var finalCost = totalEst - discount;

	$('#finalCost').html('$'+finalCost+'.00');
}
};

// function nonCertDisc(docType){
// 	var docTypeCheck = $.inArray(docType, orderDocType);

// 	if (docType == 'app'){
// 		if(docTypeCheck > 0 ){
// 			costNumber = 0;
// 		} else if (docTypeCheck < 0 ){
// 			costNumber = 35;
// 		}
// 	}
// 	if (docType == 'ass'){
// 		if(docTypeCheck > 0 ){
// 			costNumber = 0
// 		} else if (docTypeCheck < 0 ){
// 			costNumber = 60
// 		}
// 	}
// 	if (docType == 'FH'){
// 		if(docTypeCheck > 0 ){
// 			costNumber = 0
// 		} else if (docTypeCheck < 0 ){
// 			costNumber = 0
// 		}
// 	}
// 	if (docType == 'pat'){
// 		if(docTypeCheck > 0 ){
// 			costNumber = 2
// 		} else if (docTypeCheck < 0 ){
// 			costNumber = 2
// 		}
// 	}
// }

function editDisc(arrayNumber, numofdocs){
	var PDF = orderEmailCopy[arrayNumber],
	cert = orderCert[arrayNumber],
	legal = orderLegal[arrayNumber],
	country = orderCountry[arrayNumber],
	// numofDocs = orderNumOfCopies[arrayNumber],
	countryFee = countryFees[country],
	numOfCountryDocs = docsForCountry[country],
	cost = orderCost[arrayNumber],
	certCheck = $.inArray('Yes', orderCert),
	costNumber = cost.replace('$',''),
 
	certDiscounts = certDis[arrayNumber],
	legalDiscounts = legalDis[arrayNumber],
	countryDiscounts = countryDis[arrayNumber],
	PDFDiscounts = PDFDis[arrayNumber],
	ourLegalDiscounts = ourLegalDis[arrayNumber],

	numberOfDocsLegalForCountry = numOfCountryDocs - previousCountry.docs;

	if (cert == 'Yes'){
		if (numOfCountryDocs > 1){
			if (numberOfDocsLegalForCountry > 0){
				certTotal = certTotal + numberOfDocsLegalForCountry - 1 
			} else if (numberOfDocsLegalForCountry < 0){
				certTotal = certTotal + numberOfDocsLegalForCountry 
			}
		} else {
			certTotal = certTotal
		}
		// if (certDiscounts >= 1){
		// certTotal = certTotal - certDiscounts;
		// } else {
		// 	certTotal = certTotal
		// }
	}
	if (legal == 'Yes'){
		if (numberOfDocsLegalForCountry > 0){
			legalTotal = legalTotal + numberOfDocsLegalForCountry - 1 
		} else if (numberOfDocsLegalForCountry < 0){
			legalTotal = legalTotal + numberOfDocsLegalForCountry 
		} else {
		legalTotal = legalTotal
		}
	}
	if (country == 'Yes'){
		if (numberOfDocsLegalForCountry > 0){
			countryTotal = countryTotal + numberOfDocsLegalForCountry - 1 
		} else if (numberOfDocsLegalForCountry < 0){
			countryTotal = countryTotal + numberOfDocsLegalForCountry 
		} else {
		countryTotal = countryTotal
		}
	}

	if (PDF == 'Yes'){
		if (numberOfDocsLegalForCountry > 0){
			PDFTotal = PDFTotal + numberOfDocsLegalForCountry - 1 
		} else if (numberOfDocsLegalForCountry < 0){
			PDFTotal = PDFTotal + numberOfDocsLegalForCountry 
		} else {
			PDFTotal = PDFTotal
		}
	}
	// if (ourLegalDiscounts > 0){
	// 	legalNumber.Disc = legalNumber.Disc - ourLegalDiscounts;
	// } else {
	// 	legalNumber.Disc = legalNumber.Disc;
	// }

	if (numberOfDocsLegalForCountry < 3){
		if (numberOfDocsLegalForCountry < 0){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc + (15 * numOfCountryDocs)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc + (30 * numOfCountryDocs)
			}
		} else if (numberOfDocsLegalForCountry > 0){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc + (15 * numOfCountryDocs)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc + (30 * numOfCountryDocs)
			}
		}
	} else if (numberOfDocsLegalForCountry >= 3 && numberOfDocsLegalForCountry < 6){
		if (numberOfDocsLegalForCountry < 0){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc + (15 * numberOfDocsLegalForCountry)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc + (30 * numberOfDocsLegalForCountry)
			}
		} else if (numberOfDocsLegalForCountry > 0){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc + (15 * numberOfDocsLegalForCountry)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc + (30 * numberOfDocsLegalForCountry)
			}
		}
	} else if (numberOfDocsLegalForCountry >= 6){
		if (numberOfDocsLegalForCountry < 0){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc + (25 * numberOfDocsLegalForCountry)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc + (50 * numberOfDocsLegalForCountry)
			}
		} else if (numberOfDocsLegalForCountry > 0){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc + (25 * numberOfDocsLegalForCountry)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc + (50 * numberOfDocsLegalForCountry)
			}
		}

	} else {
		legalNumber.Disc = legalNumber.Disc - ourLegalDiscounts;
}


	

	totalEst = totalEst - costNumber;
}



function deleteEditDiscounts(editNumber){
	var country = orderCountry[editNumber],
		numOfCountryDocs = docsForCountry[country],
		numofDocs = orderNumOfCopies[editNumber],
		countryFee = countryFees[country],
		cert = orderCert[editNumber],
		PDF = orderEmailCopy[editNumber],
		countryFee = countryFees[country],
		cost = orderCost[editNumber],
		costNumber = cost.replace('$','');

		delete orderCountry[country];
	
	var	countryCheck = $.inArray(country, orderCountry);
		

	if (countryCheck >= 0 || numofDocs > 1){
		if(certTotal > 0 && cert == 'Yes'){
			certTotal = certTotal - numofDocs;
		} else {
			certTotal = certTotal
		}

		if(PDFTotal > 0 && PDF == 'Yes'){
			PDFTotal = PDFTotal - 1;
		} else {
			PDFTotal = PDFTotal
		}

		if(legalTotal > 0){
			legalTotal = legalTotal - 1;
		} else {
			legalTotal = legalTotal
		}

		if(countryTotal > 0){
			if (countryFee > 0){
			countryTotal = countryTotal - 1;
			} else if (countryFee == 0){
				countryTotal = countryTotal
			}
		} else {
			countryTotal = countryTotal
		}

		if(numOfCountryDocs >=3 && numOfCountryDocs <6){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc - (numOfCountryDocs * 15);
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc - (numOfCountryDocs * 30);
			}
		} else if (numOfCountryDocs >= 6){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc - (numOfCountryDocs * 25);
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc - (numOfCountryDocs * 50);
			}
		}

		if (country in docsForCountry){
			docsForCountry[country] = Number(docsForCountry[country]) - Number(numofDocs);
		}

	}

	totalEst = totalEst - costNumber;

	
}

















function editLegalDisc(arrayNumber){
	var 
	country = orderCountry[arrayNumber],
	numOfCountryDocs = docsForCountry[country],
	numofDocs = orderNumOfCopies[arrayNumber],
	countryFee = countryFees[country],
	// cost = orderCost[arrayNumber],
	// certCheck = $.inArray('Yes', orderCert),
	// costNumber = cost.replace('$',''),
 
	// certDiscounts = certDis[arrayNumber],
	// legalDiscounts = legalDis[arrayNumber],
	// countryDiscounts = countryDis[arrayNumber],
	// PDFDiscounts = PDFDis[arrayNumber],
	ourLegalDiscounts = ourLegalDis[arrayNumber];

	var numberOfDocsLegalForCountry = numOfCountryDocs - previousCountry.docs;

	if (numberOfDocsLegalForCountry < 3){
		if (numberOfDocsLegalForCountry < 0){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc + (15 * numOfCountryDocs)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc + (30 * numOfCountryDocs)
			}
		} else if (numberOfDocsLegalForCountry > 0){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc + (15 * numOfCountryDocs)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc + (30 * numOfCountryDocs)
			}
		}
	} else if (numberOfDocsLegalForCountry >= 3 && numberOfDocsLegalForCountry < 6){
		if (numberOfDocsLegalForCountry < 0){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc + (15 * numberOfDocsLegalForCountry)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc + (30 * numberOfDocsLegalForCountry)
			}
		} else if (numberOfDocsLegalForCountry > 0){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc + (15 * numberOfDocsLegalForCountry)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc + (30 * numberOfDocsLegalForCountry)
			}
		}
	} else if (numberOfDocsLegalForCountry >= 6){
		if (numberOfDocsLegalForCountry < 0){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc + (25 * numberOfDocsLegalForCountry)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc + (50 * numberOfDocsLegalForCountry)
			}
		} else if (numberOfDocsLegalForCountry > 0){
			if (countryFee == 0){
				legalNumber.Disc = legalNumber.Disc + (25 * numberOfDocsLegalForCountry)
			} else if (countryFee > 0){
				legalNumber.Disc = legalNumber.Disc + (50 * numberOfDocsLegalForCountry)
			}
		}

	} else {
		legalNumber.Disc = legalNumber.Disc - ourLegalDiscounts;
}

}

function deleteDisc(arrayNumber){
	var PDF = orderEmailCopy[arrayNumber],
	cert = orderCert[arrayNumber],
	legal = orderLegal[arrayNumber],
	country = orderCountry[arrayNumber],
	numOfCountryDocs = docsForCountry[country],
	numofDocs = orderNumOfCopies[arrayNumber],
	countryFee = countryFees[country],
	cost = orderCost[arrayNumber],
	certCheck = $.inArray('Yes', orderCert),
	costNumber = cost.replace('$',''),
 
	certDiscounts = certDis[arrayNumber],
	legalDiscounts = legalDis[arrayNumber],
	countryDiscounts = countryDis[arrayNumber],
	PDFDiscounts = PDFDis[arrayNumber],
	ourLegalDiscounts = ourLegalDis[arrayNumber];

	if (cert == 'Yes'){
		if (certDiscounts >= 1){
		certTotal = certTotal - certDiscounts;
		} else {
			certTotal = certTotal
		}
	}
	if (legal == 'Yes'){
		if (legalDiscounts >= 1){
		legalTotal = legalTotal - legalDiscounts;
		} else {
			legalTotal = legalTotal
		}
	}
	if (country == 'Yes'){
		if (countryDiscounts >= 1){
		countryTotal = countryTotal - countryDiscounts;
		} else {
			countryTotal = countryTotal
		}
	}
	if (PDF == 'Yes'){
		if (PDFDiscounts >= 1){
		PDFTotal = PDFTotal - PDFDiscounts;
		} else {
			PDFTotal = PDFTotal
		}
	}
	// if (ourLegalDiscounts > 0){
	// 	legalNumber.Disc = legalNumber.Disc - ourLegalDiscounts;
	// } else if (ourLegalDiscounts == 0 && numOfCountryDocs > 0){
		var numberOfDocsLegalForCountry = numofDocs - numOfCountryDocs;

		if (numberOfDocsLegalForCountry < 3){
			if (numberOfDocsLegalForCountry < 0){
				if (countryFee == 0){
					legalNumber.Disc = legalNumber.Disc - (15 * numOfCountryDocs)
				} else if (countryFee > 0){
					legalNumber.Disc = legalNumber.Disc - (30 * numOfCountryDocs)
				}
			} else if (numberOfDocsLegalForCountry > 0){
				if (countryFee == 0){
					legalNumber.Disc = legalNumber.Disc + (15 * numOfCountryDocs)
				} else if (countryFee > 0){
					legalNumber.Disc = legalNumber.Disc + (30 * numOfCountryDocs)
				}
			}
		} else if (numberOfDocsLegalForCountry >= 3 && numberOfDocsLegalForCountry < 6){
			if (numberOfDocsLegalForCountry < 0){
				if (countryFee == 0){
					legalNumber.Disc = legalNumber.Disc - (15 * numberOfDocsLegalForCountry)
				} else if (countryFee > 0){
					legalNumber.Disc = legalNumber.Disc - (30 * numberOfDocsLegalForCountry)
				}
			} else if (numberOfDocsLegalForCountry > 0){
				if (countryFee == 0){
					legalNumber.Disc = legalNumber.Disc + (15 * numberOfDocsLegalForCountry)
				} else if (countryFee > 0){
					legalNumber.Disc = legalNumber.Disc + (30 * numberOfDocsLegalForCountry)
				}
			}
		} else if (numberOfDocsLegalForCountry >= 6){
			if (numberOfDocsLegalForCountry < 0){
				if (countryFee == 0){
					legalNumber.Disc = legalNumber.Disc - (25 * numberOfDocsLegalForCountry)
				} else if (countryFee > 0){
					legalNumber.Disc = legalNumber.Disc - (50 * numberOfDocsLegalForCountry)
				}
			} else if (numberOfDocsLegalForCountry > 0){
				if (countryFee == 0){
					legalNumber.Disc = legalNumber.Disc + (25 * numberOfDocsLegalForCountry)
				} else if (countryFee > 0){
					legalNumber.Disc = legalNumber.Disc + (50 * numberOfDocsLegalForCountry)
				}
			}

		} else {
			legalNumber.Disc = legalNumber.Disc - ourLegalDiscounts;
	}

	discount = ((certTotal * 10) + (legalTotal * 55) + (countryTotal * 60) + (PDFTotal * 10) + legalNumber.Disc);

	totalEst = totalEst - costNumber;

	$('#totalCost').html('$'+totalEst+'.00');

	if(orderDocType.length > 0 || numOfDocs > 1){
		$('#discount').html('-$'+discount+'.00');
	} else{ 
		$('#discount').html('$0.00');
	}

	var finalCost = totalEst - discount;

	$('#finalCost').html('$'+finalCost+'.00');
}


function calculator(docType, cert, numOfCopies, PDFCopy){
	var country = document.getElementById('countries').value,
		steps = 0;

	if (countryFees[country] > 0) {
        steps = 2;
    } else if (countryFees[country] === 0) {
        steps = 1;
    } else if (countryFees[country] === "call") {
        steps = "call"; 
	}

	if (country != 'No') {
		if (steps == 1){
			if (PDFCopy == 'Yes'){
			return "$" + Math.round((((ourFees.legal) + (certFees[docType]) + 35 + ((stateDept * 0.18)+stateDept)) * numOfCopies) +stateCour +ourFees.Forward);	
			} else if(PDFCopy == 'No' || "N/A") {
			return "$" + Math.round((((ourFees.legal) + (certFees[docType]) + 35 + ((stateDept * 0.18)+stateDept)) * numOfCopies) +stateCour);
			}
		} else if (steps > 1) {
			if(PDFCopy =='Yes') {
				return "$" + Math.round(((((((ourFees.legal*2)+ ((stateDept * 0.18)+stateDept))) + (certFees[docType]) + 35 + ((countryFees[country] * 0.18)+countryFees[country]))) * numOfCopies) +stateCour + countryCour + ourFees.Forward);
			} else if(PDFCopy == 'No' || "N/A") {
			return "$" + Math.round(((((((ourFees.legal*2)+ ((stateDept * 0.18)+stateDept))) + (certFees[docType]) + 35 + ((countryFees[country] * 0.18)+countryFees[country]))) * numOfCopies) +stateCour + countryCour);
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
		return "$" + ((certFees[docType] * numOfCopies) + (numOfCopies * 55));
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
		return "$" + (ourFees[docType] + (numOfCopies * 5));
	} else { 
		return "Call for Price";
	}
	}

}

function timeEst(docType, cert){
	var country = document.getElementById('countries').value,
		steps = 0;

	if (countryFees[country] > 0) {
        steps = 2;
    } else if (countryFees[country] === 0) {
        steps = 1;
    } else if (countryFees[country] === "call") {
        steps = "call"; 
	}

	if (country != 'No') {
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
	} else if (cert == 'No') {
		$("#certNo").prop("checked", true);
		$("#certYes").prop("checked", false);
		$("#legalFieldset").prop("disabled", true);
		$('#legalYes').prop('checked', false);
		$('#legalNo').prop('checked', false);
		$("#legalYes").prop("checked", false);
		$("#legalNo").prop("checked", true);
		$('#copyOpt').css('display','none');
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

function orderArrayPush(docType, docNum, cert, legal, country, media, numOfCopies, forward, emailCopy, cost, shipAddress, time){

	orderDocType.push(docType);
	orderDocNum.push(docNum);
	orderCert.push(cert);
	orderLegal.push(legal);
	orderCountry.push(country);
	orderNumOfCopies.push(numOfCopies);
	orderMedia.push(media);
	orderForward.push(forward);
	orderEmailCopy.push(emailCopy);
	orderCost.push(cost);
	orderTime.push(time);
	shippingAddress.push(shipAddress);
}

function orderSplice(orderNum, docType, docNum, cert, legal, country, media, numOfCopies, forward, emailCopy, cost, shipAddress, time){

	orderDocType.splice(orderNum,1,docType);
	orderDocNum.splice(orderNum,1,docNum);
	orderCert.splice(orderNum,1,cert);
	orderLegal.splice(orderNum,1,legal);
	orderCountry.splice(orderNum,1,country);
	orderNumOfCopies.splice(orderNum,1,numOfCopies);
	orderMedia.splice(orderNum,1,media);
	orderForward.splice(orderNum,1,forward);
	orderEmailCopy.splice(orderNum,1,emailCopy);
	orderCost.splice(orderNum,1,cost);
	orderTime.splice(orderNum,1,time);
	shippingAddress.splice(orderNum,1,shipAddress);
}

function orderDelete(orderNum){

	delete orderDocType[orderNum];
	delete orderDocNum[orderNum];
	delete orderCert[orderNum];
	delete orderLegal[orderNum];
	delete orderCountry[orderNum];
	delete orderNumOfCopies[orderNum];
	delete orderMedia[orderNum];
	delete orderForward[orderNum];
	delete orderEmailCopy[orderNum];
	delete orderCost[orderNum];
	delete orderTime[orderNum];
	delete shippingAddress[orderNum];
}

function discountDelet(orderNumber){
	var country = orderCountry[orderNumber];

	delete orderCountry[orderNumber];
	delete nonCertDoc[orderNumber];
	delete docsForCountry[country];
}

function testFun(){
	$('#test3').text('it works');
}

function populateForm(number){
	var legal = orderLegal[number],
		cert = orderCert[number],
		docNum = orderDocNum[number],
		docType = orderDocType[number],
		medium = orderMedia[number],
		numOfCopies = orderNumOfCopies[number],
		countries = orderCountry[number],
		forward = orderForward[number],
		shipAddress = shippingAddress[number],
		PDFCopy = orderEmailCopy[number];


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
		}

		if (PDFCopy == 'Yes'){
			$("#copiesYes").prop("checked", true);
			$("#copiesNo").prop("checked", false);
		} else if (PDFCopy == 'No'){
			$("#copiesNo").prop("checked", true);
			$("#copiesYes").prop("checked", false);
		};

		if (forward == 'Yes'){
			$('#FAaddress').css('display','block');
			$('#FAAdd').val(shipAddress);
		} else if (forward == 'No'){
			$('#FAaddress').css('display','none');
		};
		
		$('#save').css('display', 'block');
		$('#addDoc').css('display', 'none');
		$('#documentLine').css('display','block');
		$('#submitOrder').css('display', 'none');

}


$('#docType').change(function(){
	doc.docType = $('#docType').val();

	// if (doc.docType != 'FH'){
	// 	$('#FHNPLs').css('display','none');
	// }

	docNumTypes(doc.docType);
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
	}
	// } else if ((FAOpt =='Yes') && (forwardAdd.length > 2)){
	// 	$('#test3').html('more than 2');
	// }
	else {
		$('#fillAddress').css('display','none');
	}

});

// $('#fillAddress').on('change', '.addAutoFill', function(){
// 	if($('input.addAutoFill').is(':checked')){
// 		var add = Number($(this).attr('name'))
// 		$('#FAAdd').val(shippingAddress[add]);
// 	} else if ($('input.addAutoFill').is(':unchecked')) {
// 		$('#FAAdd').val('');
// 	}
// });
$('#docTypeForm input[name=addRadio]').on('change', function() {
	var add = $(this).val()
	$('#test3').html('it works!')
	if (add >= 0){
	$('#FAAdd').val(shippingAddress[add]);
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

// $('#docTypeForm input').on('change', function() {
// 	legal.val = ($('input[name=legalRadio]:checked', '#docTypeForm').val()); 
// 	legalOptions(legal.val);
//  });

$('#docTypeForm input[name=legalRadio]').on('change', function() {
   legal.val = ($('input[name=legalRadio]:checked', '#docTypeForm').val());

   if (legal.val == 'Yes') {
   	$('#countries').css('display', 'block');
   	$('#medium').prop('selectedIndex',1);
	$("#medium").prop("disabled", true);
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

$('#testBtn').click(function(){
	$('#test3').text(cert.val);
});

$('#addDoc').click(function(){
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

	// var appCheck = $.inArray('app', orderDocType);
	// var assCheck = $.inArray('ass', orderDocType);

	// if (cert == 'Yes'){
	// 	var costNumber = cost.replace('$','');
	// } else if (cert == 'No'){
	// 	if (docType == 'app'){
	// 		if (appCheck >= 0){
	// 			var costNumber = Number(0);
	// 		} else if (appCheck < 0){
	// 			var costNumber = 35;
	// 		}
	// 	}
	// 	if (docType == 'FH'){
	// 		var costNumber = 0;
	// 	}
	// 	if (docType == 'ass'){
	// 		if (assCheck >= 0){
	// 			var costNumber = 0;
	// 		} else if (assCheck < 0){
	// 			var costNumber = 60;
	// 		}
	// 	}
	// 	if (docType == 'pat'){
	// 		var costNumber = 2;
	// 	}
		// nonCertDisc(docType);
	// }

	// if (cert == 'No'){
	// 	nonCertDoc.push(docType);
	// }

	// if (cert == 'No'){
	// 	nonCertDisc(docType);
	// }

	// totalEst = Number(totalEst) + Number(costNumber);

	// var certCheck = $.inArray('No', orderCert);

	// if (certfCheck > 0){
	// 	if(cert != 'pat'){

	// 	}
	// } else if (certCheck == -1){

	// }

	// $('#totalCost').html('$'+totalEst+'.00');

	if (orderDocType.length < 1){
		docsForCountry[country] = numOfCopies;
	} else if (orderDocType.length > 0){
		if (country in docsForCountry){
			docsForCountry[country] = Number(docsForCountry[country]) + Number(numOfCopies);
		} else {
			docsForCountry[country] = numOfCopies
		}
	}

	discountCalculator(cert, legal, country, emailCopy, numOfCopies, cost)

	// if(orderDocType.length > 0 || numOfCopies > 1){

	// 	$('#discount').html('-$'+discount+'.00');
	// } else{ 
	// 	$('#discount').html('$0.00');
	// }

	// var finalCost = totalEst - discount;

	// $('#finalCost').html('$'+finalCost+'.00');

	docNumEnter(docType);
	
	if(emailCopy == null){
		emailCopy = "N/A"
	}

	if(medium == 'PDF'){
		var shipAddress = 'Email'
	} else if (medium == 'Paper'){
		if (forward == 'No'){
			var shipAddress = address;
		} else if (forward == 'Yes'){
			var shipAddress = forAddress;
		}
	}

	if (forAddress != ''){
		var forAddCheck = $.inArray(forAddress, forwardAdd);
		if (forAddCheck == -1){
			forwardAdd.push(forAddress);
			var addCount = forwardAdd.length -1;
			var autofill = "<label class='radio-inline'><input type='radio' name='addRadio' value="+addCount+">Check if you would like this document also forwarded to: "+forAddress+"</label>"
			$('#addFieldset').append(autofill)
		}
	}
	
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

	
	if (docType == 'select'){
		$('#docType').css('border-color','red');
	} else if (cert === 'undefined') {
		$('#certYes').css('border-color','red');
	} else if (numOfCopies == 'select') {
		$('#numOfCopies').css('border-color','red');
	} else {

	orderArrayPush(docType, docNum, cert, legal, country, medium, numOfCopies, forward, emailCopy, cost, shipAddress, time);	

	var maxTime = Math.max.apply(Math, orderTime);
	$('#totalTime').html(maxTime + " Bus. Days");
	
	var table = "<table id='table"+tot.count+"' class='form-group table table-bordered text-center'><tr><th rowspan='6' class='text-center'>Document "+tot.count+"<br><br> <button  type='button' id='"+tot.count+"' name='"+tot.count+"' class='btn btn-primary text-center edit'>Edit</button><br><br><button name="+tot.count+" type='button' class='btn btn-danger text-center delete'>Remove</button></th></tr><tr class='active text-center'><th>Doc Type</th><th colspan='2'>Doc Number</th><th>Cert</th><th>Legal</th><th>Country</th></tr><tr class='text-center'><td>"+orderDocType[(count)]+"</td><td colspan='2'>"+orderDocNum[(count)]+"</td><td>"+orderCert[(count)]+"</td><td>"+orderLegal[(count)]+"</td><td>"+orderCountry[(count)]+"</td></tr><tr class='active text-center'><th>Media</th><th>Copies</th><th>Forward</th><th>PDF Copy</th><th>Cost</th><th>Time</th></tr><tr class='text-center'><td>"+orderMedia[(count)]+"</td><td>"+orderNumOfCopies[(count)]+"</td><td>"+orderForward[(count)]+"</td><td>"+orderEmailCopy[(count)]+"</td><td>"+orderCost[(count)]+"</td><td>"+orderTime[(count)]+" Bus. Days</td></tr></table>";

	$('#cart').append(table);
	$('#cart').css('display','table');
	
	tot.count++;
	formReset();

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
		orderArray.number = editLine - 1;

	// var country = orderCountry[orderArray.number],
	// 	numofDocs = orderNumOfCopies[orderArray.number];

	// 	// editDisc(orderArray.number)
	// 	// discountDelet(orderArray.number)
	// 	previousCountry.docs = docsForCountry[country]

	// 	// if (docsForCountry > 0){
	// 	// 	docsForCountry[country] = docsForCountry[country] - numofDocs
	// 	// }

	deleteEditDiscounts(orderArray.number)

		$('#table'+ editLine).remove();
		populateForm(orderArray.number);
		$('#docCart').css('display','block');
		$('html, body').animate({ scrollTop: $('#documentLine').offset().top }, 'Fast');

});


$('#cart').on('click', '.delete', function(){
	var editLine = $(this).attr('name');
		orderArray.number = editLine - 1;

		deleteDisc(orderArray.number)

		$('#table'+ editLine).remove();
		orderDelete(orderArray.number);
		$('#docCart').css('display','block');

});

$('#save').click(function(){
	var 
		// docType = $('#docType').val(),
		// cert = ($('input[name=radioName]:checked', '#certForm').val()),
		// legal = ($('input[name=radioName]:checked', '#legalForm').val()),
		// country = $('#countries').val(),
		// numOfCopies = $('#numOfCopies').val(),
		// medium = $('#medium').val(),
		// ref = ($('input[name=optradio]:checked', '#FHNPLs').val()),
		// forward = $('#FAOpt').val(),
		// emailCopy = ($('input[name=radioName]:checked', '#emailCopies').val()),
		// cost = calculator(docType, cert, numOfCopies, emailCopy),
		// time = timeEst(docType, cert),
		// address = $('#address').val(),
		// forAddress = $('#FAAdd').val();
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

		if (orderDocType.length < 1){
			docsForCountry[country] = numOfCopies;
		} else if (orderDocType.length > 0){
			if (country in docsForCountry){
				docsForCountry[country] = Number(docsForCountry[country]) + Number(numOfCopies);
			} else {
				docsForCountry[country] = numOfCopies
			}
		}

		if(emailCopy == null){
			emailCopy = "N/A"
		}

		if(medium == 'PDF'){
			var shipAddress = 'Email'
		} else if (medium == 'Paper'){
			if (forward == 'No'){
				var shipAddress = address;
			} else if (forward == 'Yes'){
				var shipAddress = forAddress;
			}
		}

		if (forAddress != null){
			var forAddCheck = $.inArray(forAddress, forwardAdd);
			if (forAddCheck == -1){
				forwardAdd.push(forAddress);
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
		// editDisc(orderArray.number)
		// discountDelet(orderArray.number)
		// editLegalDisc(orderArray.number)
		editCalculator(cert, docType, country, emailCopy, numOfCopies, cost)
		orderSplice(orderArray.number, docType, docNum, cert, legal, country, medium, numOfCopies, forward, emailCopy, cost, shipAddress, time)


		// var table = "<table id='table"+Number(orderArray.number+1)+"' class='table table-bordered text-center'><tr><th rowspan='5' class='text-center'>Document "+Number(orderArray.number+1)+"<br><br> <button  type='button' id='"+Number(orderArray.number+1)+"' name='"+Number(orderArray.number+1)+"' class='btn btn-primary text-center edit'>Edit</button><br><br><button name='"+Number(orderArray.number+1)+"' id='deleteBtn' type='button' class='btn btn-danger text-center delete'>Remove</button></th></tr><tr class='active text-center'><th>Doc Type</th><th>Doc #</th><th>Cert</th><th>Legal</th><th>Country</th></tr><tr class='text-center'><td>"+orderDocType[(orderArray.number)]+"</td><td>"+orderDocNum[(orderArray.number)]+"</td><td>"+orderCert[(orderArray.number)]+"</td><td>"+orderLegal[(orderArray.number)]+"</td><td>"+orderCountry[(orderArray.number)]+"</td></tr><tr class='active text-center'><th>Media</th><th># copies</th><th>Forward</th><th>PDF Copy</th><th>Cost</th></tr><tr class='text-center'><td>"+orderMedia[(orderArray.number)]+"</td><td>"+orderNumOfCopies[(orderArray.number)]+"</td><td>"+orderForward[(orderArray.number)]+"</td><td>"+orderEmailCopy[(orderArray.number)]+"</td><td>"+orderCost[(orderArray.number)]+"</td></tr></table>";
        var table = "<table id='table"+Number(orderArray.number+1)+"' class='table table-bordered text-center'><tr><th rowspan='6' class='text-center'>Document "+Number(orderArray.number+1)+"<br><br> <button  type='button' id='"+Number(orderArray.number+1)+"' name='"+Number(orderArray.number+1)+"' class='btn btn-primary text-center edit'>Edit</button><br><br><button name='"+Number(orderArray.number+1)+"' id='deleteBtn' type='button' class='btn btn-danger text-center delete'>Remove</button></th></tr><tr class='active text-center'><th>Doc Type</th><th colspan='2'>Doc Number</th><th>Cert</th><th>Legal</th><th>Country</th></tr><tr class='text-center'><td>"+orderDocType[(orderArray.number)]+"</td><td colspan='2'>"+orderDocNum[(orderArray.number)]+"</td><td>"+orderCert[(orderArray.number)]+"</td><td>"+orderLegal[(orderArray.number)]+"</td><td>"+orderCountry[(orderArray.number)]+"</td></tr><tr class='active text-center'><th>Media</th><th>Copies</th><th>Forward</th><th>PDF Copy</th><th>Cost</th><th>Time</th></tr><tr class='text-center'><td>"+orderMedia[(orderArray.number)]+"</td><td>"+orderNumOfCopies[(orderArray.number)]+"</td><td>"+orderForward[(orderArray.number)]+"</td><td>"+orderEmailCopy[(orderArray.number)]+"</td><td>"+orderCost[(orderArray.number)]+"</td><td>"+orderTime[(orderArray.number)]+" Bus. Days</td></tr></table>";


		$('#cart').append(table);
		$('#cart').css('display','table');
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
			if (orderDocNum.length > 0){
				var counter2 = 0;
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
				for (var i=0; i<orderDocNum.length; i++){
					counter2 ++
					json_data.push({
						counter: counter2,
						docNum: orderDocNum[i],
						docType: orderDocType[i],
						docCert: orderCert[i],
						docLegal: orderLegal[i],
						docCountry: orderCountry[i],
						docNumofCopies: orderNumOfCopies[i],
						docMedia: orderMedia[i],
						docForward: orderForward[i],
						docEmail: orderEmailCopy[i],
						docCost: orderCost[i],
						shipInfo: shippingAddress[i],
						docTime: orderTime[i]
					})
		
				}
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

// $('#submit').click(function(){
// 	$('#clientInforForm').submit(function(e){
// 		e.preventDefault();
// 		$("#clientInfoForm").validate();
// 	})



// 	if (orderDocNum.length > 0){
// 		var counter2 = 0;
// 		var json_data = []
// 		json_data.push({
// 			first_Name: $('#firstName').val(),
// 			last_Name: $('#last_name').val(),
// 			company: $('#company_name').val(),
// 			address: $('#address').val(),
// 			email: $('#email').val(),
// 			ref: $('#ref_num').val(),
// 			instructions: $('#specialInstructions').val(),
// 		})
// 		for (var i=0; i<orderDocNum.length; i++){
// 			counter2 ++
// 			json_data.push({
// 				counter: counter2,
// 				docNum: orderDocNum[i],
// 				docType: orderDocType[i],
// 				docCert: orderCert[i],
// 				docLegal: orderLegal[i],
// 				docCountry: orderCountry[i],
// 				docNumofCopies: orderNumOfCopies[i],
// 				docMedia: orderMedia[i],
// 				docForward: orderForward[i],
// 				docEmail: orderEmailCopy[i],
// 				docCost: orderCost[i],
// 				shipInfo: ForwardingAddress[i],
// 				docTime: orderTime[i]
// 			})

// 		}
// 		window.location.replace("/thanks?order=" + JSON.stringify(json_data));
// 	} else {
// 		alert("You don't have any items in your cart!");
// 	}
// });


/*for (i=0; i<length(orderDocNum); i++){
	var json_data = {"docNum": orderDocNum[i], "docType": orderDocType[i]}
}*/


});




