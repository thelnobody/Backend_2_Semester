var processedData;
window.onload = function(){
var obj = [
            {
                "speakers": "5459",
                "language": "Dutch",
                "countrycode": "ABW"
            },
            {
                "speakers": "9785",
                "language": "English",
                "countrycode": "ABW"
            },
            {
                "speakers": "79001",
                "language": "Papiamento",
                "countrycode": "ABW"
            },
            {
                "speakers": "7622",
                "language": "Spanish",
                "countrycode": "ABW"
            },
            {
                "speakers": "204480",
                "language": "Balochi",
                "countrycode": "AFG"
            },
            {
                "speakers": "7293120",
                "language": "Dari",
                "countrycode": "AFG"
            },
            {
                "speakers": "11905280",
                "language": "Pashto",
                "countrycode": "AFG"
            },
            {
                "speakers": "431680",
                "language": "Turkmenian",
                "countrycode": "AFG"
            },
            {
                "speakers": "1999360",
                "language": "Uzbek",
                "countrycode": "AFG"
            },
            {
                "speakers": "309072",
                "language": "Ambo",
                "countrycode": "AGO"
            },
            {
                "speakers": "540876",
                "language": "Chokwe",
                "countrycode": "AGO"
            },
            {
                "speakers": "1699896",
                "language": "Kongo",
                "countrycode": "AGO"
            },
            {
                "speakers": "309072",
                "language": "Luchazi",
                "countrycode": "AGO"
            },
            {
                "speakers": "695412",
                "language": "Luimbe-nganguela",
                "countrycode": "AGO"
            },
            {
                "speakers": "463608",
                "language": "Luvale",
                "countrycode": "AGO"
            },
            {
                "speakers": "2781648",
                "language": "Mbundu",
                "countrycode": "AGO"
            },
            {
                "speakers": "695412",
                "language": "Nyaneka-nkhumbi",
                "countrycode": "AGO"
            },
            {
                "speakers": "4790616",
                "language": "Ovimbundu",
                "countrycode": "AGO"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "AIA"
            },
            {
                "speakers": "3329775",
                "language": "Albaniana",
                "countrycode": "ALB"
            },
            {
                "speakers": "61222",
                "language": "Greek",
                "countrycode": "ALB"
            },
            {
                "speakers": "3401",
                "language": "Macedonian",
                "countrycode": "ALB"
            },
            {
                "speakers": "25194",
                "language": "Catalan",
                "countrycode": "AND"
            },
            {
                "speakers": "4836",
                "language": "French",
                "countrycode": "AND"
            },
            {
                "speakers": "8424",
                "language": "Portuguese",
                "countrycode": "AND"
            },
            {
                "speakers": "34788",
                "language": "Spanish",
                "countrycode": "AND"
            },
            {
                "speakers": "0",
                "language": "Dutch",
                "countrycode": "ANT"
            },
            {
                "speakers": "16926",
                "language": "English",
                "countrycode": "ANT"
            },
            {
                "speakers": "187054",
                "language": "Papiamento",
                "countrycode": "ANT"
            },
            {
                "speakers": "1025220",
                "language": "Arabic",
                "countrycode": "ARE"
            },
            {
                "speakers": "0",
                "language": "Hindi",
                "countrycode": "ARE"
            },
            {
                "speakers": "111096",
                "language": "Indian Languages",
                "countrycode": "ARG"
            },
            {
                "speakers": "629544",
                "language": "Italian",
                "countrycode": "ARG"
            },
            {
                "speakers": "35846977",
                "language": "Spanish",
                "countrycode": "ARG"
            },
            {
                "speakers": "3287680",
                "language": "Armenian",
                "countrycode": "ARM"
            },
            {
                "speakers": "91520",
                "language": "Azerbaijani",
                "countrycode": "ARM"
            },
            {
                "speakers": "2108",
                "language": "English",
                "countrycode": "ASM"
            },
            {
                "speakers": "61608",
                "language": "Samoan",
                "countrycode": "ASM"
            },
            {
                "speakers": "2108",
                "language": "Tongan",
                "countrycode": "ASM"
            },
            {
                "speakers": "65076",
                "language": "Creole English",
                "countrycode": "ATG"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "ATG"
            },
            {
                "speakers": "188860",
                "language": "Arabic",
                "countrycode": "AUS"
            },
            {
                "speakers": "207746",
                "language": "Canton Chinese",
                "countrycode": "AUS"
            },
            {
                "speakers": "15335431",
                "language": "English",
                "countrycode": "AUS"
            },
            {
                "speakers": "113316",
                "language": "German",
                "countrycode": "AUS"
            },
            {
                "speakers": "302176",
                "language": "Greek",
                "countrycode": "AUS"
            },
            {
                "speakers": "415492",
                "language": "Italian",
                "countrycode": "AUS"
            },
            {
                "speakers": "113316",
                "language": "Serbo-Croatian",
                "countrycode": "AUS"
            },
            {
                "speakers": "151088",
                "language": "Vietnamese",
                "countrycode": "AUS"
            },
            {
                "speakers": "16184",
                "language": "Czech",
                "countrycode": "AUT"
            },
            {
                "speakers": "7444456",
                "language": "German",
                "countrycode": "AUT"
            },
            {
                "speakers": "32367",
                "language": "Hungarian",
                "countrycode": "AUT"
            },
            {
                "speakers": "16184",
                "language": "Polish",
                "countrycode": "AUT"
            },
            {
                "speakers": "16184",
                "language": "Romanian",
                "countrycode": "AUT"
            },
            {
                "speakers": "178020",
                "language": "Serbo-Croatian",
                "countrycode": "AUT"
            },
            {
                "speakers": "32367",
                "language": "Slovene",
                "countrycode": "AUT"
            },
            {
                "speakers": "121377",
                "language": "Turkish",
                "countrycode": "AUT"
            },
            {
                "speakers": "154680",
                "language": "Armenian",
                "countrycode": "AZE"
            },
            {
                "speakers": "6883260",
                "language": "Azerbaijani",
                "countrycode": "AZE"
            },
            {
                "speakers": "177882",
                "language": "Lezgian",
                "countrycode": "AZE"
            },
            {
                "speakers": "232020",
                "language": "Russian",
                "countrycode": "AZE"
            },
            {
                "speakers": "0",
                "language": "French",
                "countrycode": "BDI"
            },
            {
                "speakers": "6567795",
                "language": "Kirundi",
                "countrycode": "BDI"
            },
            {
                "speakers": "0",
                "language": "Swahili",
                "countrycode": "BDI"
            },
            {
                "speakers": "163824",
                "language": "Arabic",
                "countrycode": "BEL"
            },
            {
                "speakers": "6061488",
                "language": "Dutch",
                "countrycode": "BEL"
            },
            {
                "speakers": "3337914",
                "language": "French",
                "countrycode": "BEL"
            },
            {
                "speakers": "102390",
                "language": "German",
                "countrycode": "BEL"
            },
            {
                "speakers": "245736",
                "language": "Italian",
                "countrycode": "BEL"
            },
            {
                "speakers": "92151",
                "language": "Turkish",
                "countrycode": "BEL"
            },
            {
                "speakers": "676767",
                "language": "Adja",
                "countrycode": "BEN"
            },
            {
                "speakers": "530439",
                "language": "Aizo",
                "countrycode": "BEN"
            },
            {
                "speakers": "530439",
                "language": "Bariba",
                "countrycode": "BEN"
            },
            {
                "speakers": "2426606",
                "language": "Fon",
                "countrycode": "BEN"
            },
            {
                "speakers": "341432",
                "language": "Ful",
                "countrycode": "BEN"
            },
            {
                "speakers": "743834",
                "language": "Joruba",
                "countrycode": "BEN"
            },
            {
                "speakers": "408499",
                "language": "Somba",
                "countrycode": "BEN"
            },
            {
                "speakers": "417795",
                "language": "Busansi",
                "countrycode": "BFA"
            },
            {
                "speakers": "370047",
                "language": "Dagara",
                "countrycode": "BFA"
            },
            {
                "speakers": "310362",
                "language": "Dyula",
                "countrycode": "BFA"
            },
            {
                "speakers": "1157889",
                "language": "Ful",
                "countrycode": "BFA"
            },
            {
                "speakers": "680409",
                "language": "Gurma",
                "countrycode": "BFA"
            },
            {
                "speakers": "5992374",
                "language": "Mossi",
                "countrycode": "BFA"
            },
            {
                "speakers": "126184431",
                "language": "Bengali",
                "countrycode": "BGD"
            },
            {
                "speakers": "516620",
                "language": "Chakma",
                "countrycode": "BGD"
            },
            {
                "speakers": "129155",
                "language": "Garo",
                "countrycode": "BGD"
            },
            {
                "speakers": "129155",
                "language": "Khasi",
                "countrycode": "BGD"
            },
            {
                "speakers": "258310",
                "language": "Marma",
                "countrycode": "BGD"
            },
            {
                "speakers": "129155",
                "language": "Santhali",
                "countrycode": "BGD"
            },
            {
                "speakers": "129155",
                "language": "Tripuri",
                "countrycode": "BGD"
            },
            {
                "speakers": "6814829",
                "language": "Bulgariana",
                "countrycode": "BGR"
            },
            {
                "speakers": "212963",
                "language": "Macedonian",
                "countrycode": "BGR"
            },
            {
                "speakers": "303063",
                "language": "Romani",
                "countrycode": "BGR"
            },
            {
                "speakers": "769945",
                "language": "Turkish",
                "countrycode": "BGR"
            },
            {
                "speakers": "417709",
                "language": "Arabic",
                "countrycode": "BHR"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "BHR"
            },
            {
                "speakers": "275379",
                "language": "Creole English",
                "countrycode": "BHS"
            },
            {
                "speakers": "31621",
                "language": "Creole French",
                "countrycode": "BHS"
            },
            {
                "speakers": "3940224",
                "language": "Serbo-Croatian",
                "countrycode": "BIH"
            },
            {
                "speakers": "6714816",
                "language": "Belorussian",
                "countrycode": "BLR"
            },
            {
                "speakers": "61416",
                "language": "Polish",
                "countrycode": "BLR"
            },
            {
                "speakers": "3275520",
                "language": "Russian",
                "countrycode": "BLR"
            },
            {
                "speakers": "133068",
                "language": "Ukrainian",
                "countrycode": "BLR"
            },
            {
                "speakers": "122428",
                "language": "English",
                "countrycode": "BLZ"
            },
            {
                "speakers": "16388",
                "language": "Garifuna",
                "countrycode": "BLZ"
            },
            {
                "speakers": "23136",
                "language": "Maya Languages",
                "countrycode": "BLZ"
            },
            {
                "speakers": "76156",
                "language": "Spanish",
                "countrycode": "BLZ"
            },
            {
                "speakers": "65000",
                "language": "English",
                "countrycode": "BMU"
            },
            {
                "speakers": "266528",
                "language": "Aimar\u00e1",
                "countrycode": "BOL"
            },
            {
                "speakers": "8329",
                "language": "Guaran\u00ed",
                "countrycode": "BOL"
            },
            {
                "speakers": "674649",
                "language": "Ket\u0161ua",
                "countrycode": "BOL"
            },
            {
                "speakers": "7304533",
                "language": "Spanish",
                "countrycode": "BOL"
            },
            {
                "speakers": "850575",
                "language": "German",
                "countrycode": "BRA"
            },
            {
                "speakers": "340230",
                "language": "Indian Languages",
                "countrycode": "BRA"
            },
            {
                "speakers": "680460",
                "language": "Italian",
                "countrycode": "BRA"
            },
            {
                "speakers": "680460",
                "language": "Japanese",
                "countrycode": "BRA"
            },
            {
                "speakers": "165862125",
                "language": "Portuguese",
                "countrycode": "BRA"
            },
            {
                "speakers": "256770",
                "language": "Bajan",
                "countrycode": "BRB"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "BRB"
            },
            {
                "speakers": "30504",
                "language": "Chinese",
                "countrycode": "BRN"
            },
            {
                "speakers": "10168",
                "language": "English",
                "countrycode": "BRN"
            },
            {
                "speakers": "149240",
                "language": "Malay",
                "countrycode": "BRN"
            },
            {
                "speakers": "94464",
                "language": "Malay-English",
                "countrycode": "BRN"
            },
            {
                "speakers": "322848",
                "language": "Asami",
                "countrycode": "BTN"
            },
            {
                "speakers": "1062000",
                "language": "Dzongkha",
                "countrycode": "BTN"
            },
            {
                "speakers": "739152",
                "language": "Nepali",
                "countrycode": "BTN"
            },
            {
                "speakers": "40550",
                "language": "Khoekhoe",
                "countrycode": "BWA"
            },
            {
                "speakers": "21086",
                "language": "Ndebele",
                "countrycode": "BWA"
            },
            {
                "speakers": "56770",
                "language": "San",
                "countrycode": "BWA"
            },
            {
                "speakers": "199506",
                "language": "Shona",
                "countrycode": "BWA"
            },
            {
                "speakers": "1224610",
                "language": "Tswana",
                "countrycode": "BWA"
            },
            {
                "speakers": "849525",
                "language": "Banda",
                "countrycode": "CAF"
            },
            {
                "speakers": "860370",
                "language": "Gbaya",
                "countrycode": "CAF"
            },
            {
                "speakers": "535020",
                "language": "Mandjia",
                "countrycode": "CAF"
            },
            {
                "speakers": "231360",
                "language": "Mbum",
                "countrycode": "CAF"
            },
            {
                "speakers": "271125",
                "language": "Ngbaka",
                "countrycode": "CAF"
            },
            {
                "speakers": "231360",
                "language": "Sara",
                "countrycode": "CAF"
            },
            {
                "speakers": "778675",
                "language": "Chinese",
                "countrycode": "CAN"
            },
            {
                "speakers": "155735",
                "language": "Dutch",
                "countrycode": "CAN"
            },
            {
                "speakers": "18812788",
                "language": "English",
                "countrycode": "CAN"
            },
            {
                "speakers": "31147",
                "language": "Eskimo Languages",
                "countrycode": "CAN"
            },
            {
                "speakers": "7288398",
                "language": "French",
                "countrycode": "CAN"
            },
            {
                "speakers": "498352",
                "language": "German",
                "countrycode": "CAN"
            },
            {
                "speakers": "529499",
                "language": "Italian",
                "countrycode": "CAN"
            },
            {
                "speakers": "218029",
                "language": "Polish",
                "countrycode": "CAN"
            },
            {
                "speakers": "218029",
                "language": "Portuguese",
                "countrycode": "CAN"
            },
            {
                "speakers": "218029",
                "language": "Punjabi",
                "countrycode": "CAN"
            },
            {
                "speakers": "218029",
                "language": "Spanish",
                "countrycode": "CAN"
            },
            {
                "speakers": "186882",
                "language": "Ukrainian",
                "countrycode": "CAN"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "CCK"
            },
            {
                "speakers": "0",
                "language": "Malay",
                "countrycode": "CCK"
            },
            {
                "speakers": "1374797",
                "language": "French",
                "countrycode": "CHE"
            },
            {
                "speakers": "4554014",
                "language": "German",
                "countrycode": "CHE"
            },
            {
                "speakers": "551351",
                "language": "Italian",
                "countrycode": "CHE"
            },
            {
                "speakers": "42962",
                "language": "Romansh",
                "countrycode": "CHE"
            },
            {
                "speakers": "76055",
                "language": "Aimar\u00e1",
                "countrycode": "CHL"
            },
            {
                "speakers": "1460256",
                "language": "Araucan",
                "countrycode": "CHL"
            },
            {
                "speakers": "30422",
                "language": "Rapa nui",
                "countrycode": "CHL"
            },
            {
                "speakers": "13644267",
                "language": "Spanish",
                "countrycode": "CHL"
            },
            {
                "speakers": "1175353360",
                "language": "Chinese",
                "countrycode": "CHN"
            },
            {
                "speakers": "2555116",
                "language": "Dong",
                "countrycode": "CHN"
            },
            {
                "speakers": "10220464",
                "language": "Hui",
                "countrycode": "CHN"
            },
            {
                "speakers": "11498022",
                "language": "Mant\u0161u",
                "countrycode": "CHN"
            },
            {
                "speakers": "8942906",
                "language": "Miao",
                "countrycode": "CHN"
            },
            {
                "speakers": "5110232",
                "language": "Mongolian",
                "countrycode": "CHN"
            },
            {
                "speakers": "2555116",
                "language": "Puyi",
                "countrycode": "CHN"
            },
            {
                "speakers": "5110232",
                "language": "Tibetan",
                "countrycode": "CHN"
            },
            {
                "speakers": "6387790",
                "language": "Tujia",
                "countrycode": "CHN"
            },
            {
                "speakers": "7665348",
                "language": "Uighur",
                "countrycode": "CHN"
            },
            {
                "speakers": "7665348",
                "language": "Yi",
                "countrycode": "CHN"
            },
            {
                "speakers": "17885812",
                "language": "Zhuang",
                "countrycode": "CHN"
            },
            {
                "speakers": "4435800",
                "language": "Akan",
                "countrycode": "CIV"
            },
            {
                "speakers": "1729962",
                "language": "Gur",
                "countrycode": "CIV"
            },
            {
                "speakers": "1552530",
                "language": "Kru",
                "countrycode": "CIV"
            },
            {
                "speakers": "1685604",
                "language": "Malinke",
                "countrycode": "CIV"
            },
            {
                "speakers": "1138522",
                "language": "[South]Mande",
                "countrycode": "CIV"
            },
            {
                "speakers": "2805810",
                "language": "Bamileke-bamum",
                "countrycode": "CMR"
            },
            {
                "speakers": "1644265",
                "language": "Duala",
                "countrycode": "CMR"
            },
            {
                "speakers": "2971745",
                "language": "Fang",
                "countrycode": "CMR"
            },
            {
                "speakers": "1448160",
                "language": "Ful",
                "countrycode": "CMR"
            },
            {
                "speakers": "739165",
                "language": "Maka",
                "countrycode": "CMR"
            },
            {
                "speakers": "859845",
                "language": "Mandara",
                "countrycode": "CMR"
            },
            {
                "speakers": "588315",
                "language": "Masana",
                "countrycode": "CMR"
            },
            {
                "speakers": "1116290",
                "language": "Tikar",
                "countrycode": "CMR"
            },
            {
                "speakers": "1188042",
                "language": "Boa",
                "countrycode": "COD"
            },
            {
                "speakers": "929772",
                "language": "Chokwe",
                "countrycode": "COD"
            },
            {
                "speakers": "8264640",
                "language": "Kongo",
                "countrycode": "COD"
            },
            {
                "speakers": "9297720",
                "language": "Luba",
                "countrycode": "COD"
            },
            {
                "speakers": "6973290",
                "language": "Mongo",
                "countrycode": "COD"
            },
            {
                "speakers": "2995932",
                "language": "Ngala and Bangi",
                "countrycode": "COD"
            },
            {
                "speakers": "1962852",
                "language": "Rundi",
                "countrycode": "COD"
            },
            {
                "speakers": "5320362",
                "language": "Rwanda",
                "countrycode": "COD"
            },
            {
                "speakers": "1394658",
                "language": "Teke",
                "countrycode": "COD"
            },
            {
                "speakers": "3150894",
                "language": "Zande",
                "countrycode": "COD"
            },
            {
                "speakers": "1515645",
                "language": "Kongo",
                "countrycode": "COG"
            },
            {
                "speakers": "141264",
                "language": "Mbete",
                "countrycode": "COG"
            },
            {
                "speakers": "335502",
                "language": "Mboshi",
                "countrycode": "COG"
            },
            {
                "speakers": "85347",
                "language": "Punu",
                "countrycode": "COG"
            },
            {
                "speakers": "76518",
                "language": "Sango",
                "countrycode": "COG"
            },
            {
                "speakers": "509139",
                "language": "Teke",
                "countrycode": "COG"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "COK"
            },
            {
                "speakers": "0",
                "language": "Maori",
                "countrycode": "COK"
            },
            {
                "speakers": "42321",
                "language": "Arawakan",
                "countrycode": "COL"
            },
            {
                "speakers": "42321",
                "language": "Caribbean",
                "countrycode": "COL"
            },
            {
                "speakers": "169284",
                "language": "Chibcha",
                "countrycode": "COL"
            },
            {
                "speakers": "42321",
                "language": "Creole English",
                "countrycode": "COL"
            },
            {
                "speakers": "41897790",
                "language": "Spanish",
                "countrycode": "COL"
            },
            {
                "speakers": "433500",
                "language": "Comorian",
                "countrycode": "COM"
            },
            {
                "speakers": "9248",
                "language": "Comorian-Arabic",
                "countrycode": "COM"
            },
            {
                "speakers": "74562",
                "language": "Comorian-French",
                "countrycode": "COM"
            },
            {
                "speakers": "31790",
                "language": "Comorian-madagassi",
                "countrycode": "COM"
            },
            {
                "speakers": "2890",
                "language": "Comorian-Swahili",
                "countrycode": "COM"
            },
            {
                "speakers": "428000",
                "language": "Crioulo",
                "countrycode": "CPV"
            },
            {
                "speakers": "0",
                "language": "Portuguese",
                "countrycode": "CPV"
            },
            {
                "speakers": "12069",
                "language": "Chibcha",
                "countrycode": "CRI"
            },
            {
                "speakers": "8046",
                "language": "Chinese",
                "countrycode": "CRI"
            },
            {
                "speakers": "80460",
                "language": "Creole English",
                "countrycode": "CRI"
            },
            {
                "speakers": "3922425",
                "language": "Spanish",
                "countrycode": "CRI"
            },
            {
                "speakers": "11201000",
                "language": "Spanish",
                "countrycode": "CUB"
            },
            {
                "speakers": "0",
                "language": "Chinese",
                "countrycode": "CXR"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "CXR"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "CYM"
            },
            {
                "speakers": "559233",
                "language": "Greek",
                "countrycode": "CYP"
            },
            {
                "speakers": "169053",
                "language": "Turkish",
                "countrycode": "CYP"
            },
            {
                "speakers": "8345817",
                "language": "Czech",
                "countrycode": "CZE"
            },
            {
                "speakers": "51390",
                "language": "German",
                "countrycode": "CZE"
            },
            {
                "speakers": "20556",
                "language": "Hungarian",
                "countrycode": "CZE"
            },
            {
                "speakers": "1325875",
                "language": "Moravian",
                "countrycode": "CZE"
            },
            {
                "speakers": "61669",
                "language": "Polish",
                "countrycode": "CZE"
            },
            {
                "speakers": "30834",
                "language": "Romani",
                "countrycode": "CZE"
            },
            {
                "speakers": "41112",
                "language": "Silesiana",
                "countrycode": "CZE"
            },
            {
                "speakers": "318621",
                "language": "Slovak",
                "countrycode": "CZE"
            },
            {
                "speakers": "75016374",
                "language": "German",
                "countrycode": "DEU"
            },
            {
                "speakers": "328659",
                "language": "Greek",
                "countrycode": "DEU"
            },
            {
                "speakers": "575153",
                "language": "Italian",
                "countrycode": "DEU"
            },
            {
                "speakers": "246494",
                "language": "Polish",
                "countrycode": "DEU"
            },
            {
                "speakers": "1150306",
                "language": "Southern Slavic Languages",
                "countrycode": "DEU"
            },
            {
                "speakers": "2136282",
                "language": "Turkish",
                "countrycode": "DEU"
            },
            {
                "speakers": "222024",
                "language": "Afar",
                "countrycode": "DJI"
            },
            {
                "speakers": "67628",
                "language": "Arabic",
                "countrycode": "DJI"
            },
            {
                "speakers": "280082",
                "language": "Somali",
                "countrycode": "DJI"
            },
            {
                "speakers": "71000",
                "language": "Creole English",
                "countrycode": "DMA"
            },
            {
                "speakers": "0",
                "language": "Creole French",
                "countrycode": "DMA"
            },
            {
                "speakers": "37310",
                "language": "Arabic",
                "countrycode": "DNK"
            },
            {
                "speakers": "4983550",
                "language": "Danish",
                "countrycode": "DNK"
            },
            {
                "speakers": "15990",
                "language": "English",
                "countrycode": "DNK"
            },
            {
                "speakers": "373100",
                "language": "Fynsk",
                "countrycode": "DNK"
            },
            {
                "speakers": "26650",
                "language": "German",
                "countrycode": "DNK"
            },
            {
                "speakers": "2659670",
                "language": "Jysk",
                "countrycode": "DNK"
            },
            {
                "speakers": "15990",
                "language": "Norwegian",
                "countrycode": "DNK"
            },
            {
                "speakers": "15990",
                "language": "Swedish",
                "countrycode": "DNK"
            },
            {
                "speakers": "42640",
                "language": "Turkish",
                "countrycode": "DNK"
            },
            {
                "speakers": "1812200",
                "language": "\u00c5rhusiansk",
                "countrycode": "DNK"
            },
            {
                "speakers": "169900",
                "language": "Creole French",
                "countrycode": "DOM"
            },
            {
                "speakers": "8325100",
                "language": "Spanish",
                "countrycode": "DOM"
            },
            {
                "speakers": "27065060",
                "language": "Arabic",
                "countrycode": "DZA"
            },
            {
                "speakers": "4405940",
                "language": "Berberi",
                "countrycode": "DZA"
            },
            {
                "speakers": "885220",
                "language": "Ket\u0161ua",
                "countrycode": "ECU"
            },
            {
                "speakers": "11760780",
                "language": "Spanish",
                "countrycode": "ECU"
            },
            {
                "speakers": "67648362",
                "language": "Arabic",
                "countrycode": "EGY"
            },
            {
                "speakers": "0",
                "language": "Sinaberberi",
                "countrycode": "EGY"
            },
            {
                "speakers": "165550",
                "language": "Afar",
                "countrycode": "ERI"
            },
            {
                "speakers": "115500",
                "language": "Bilin",
                "countrycode": "ERI"
            },
            {
                "speakers": "146300",
                "language": "Hadareb",
                "countrycode": "ERI"
            },
            {
                "speakers": "115500",
                "language": "Saho",
                "countrycode": "ERI"
            },
            {
                "speakers": "1220450",
                "language": "Tigre",
                "countrycode": "ERI"
            },
            {
                "speakers": "1890350",
                "language": "Tigrinja",
                "countrycode": "ERI"
            },
            {
                "speakers": "293000",
                "language": "Arabic",
                "countrycode": "ESH"
            },
            {
                "speakers": "631067",
                "language": "Basque",
                "countrycode": "ESP"
            },
            {
                "speakers": "6665647",
                "language": "Catalan",
                "countrycode": "ESP"
            },
            {
                "speakers": "2524269",
                "language": "Galecian",
                "countrycode": "ESP"
            },
            {
                "speakers": "29344625",
                "language": "Spanish",
                "countrycode": "ESP"
            },
            {
                "speakers": "20149",
                "language": "Belorussian",
                "countrycode": "EST"
            },
            {
                "speakers": "939798",
                "language": "Estonian",
                "countrycode": "EST"
            },
            {
                "speakers": "10074",
                "language": "Finnish",
                "countrycode": "EST"
            },
            {
                "speakers": "400098",
                "language": "Russian",
                "countrycode": "EST"
            },
            {
                "speakers": "40298",
                "language": "Ukrainian",
                "countrycode": "EST"
            },
            {
                "speakers": "18769500",
                "language": "Amhara",
                "countrycode": "ETH"
            },
            {
                "speakers": "2940555",
                "language": "Gurage",
                "countrycode": "ETH"
            },
            {
                "speakers": "19395150",
                "language": "Oromo",
                "countrycode": "ETH"
            },
            {
                "speakers": "2002080",
                "language": "Sidamo",
                "countrycode": "ETH"
            },
            {
                "speakers": "2565165",
                "language": "Somali",
                "countrycode": "ETH"
            },
            {
                "speakers": "4504680",
                "language": "Tigrinja",
                "countrycode": "ETH"
            },
            {
                "speakers": "1751820",
                "language": "Walaita",
                "countrycode": "ETH"
            },
            {
                "speakers": "10343",
                "language": "Estonian",
                "countrycode": "FIN"
            },
            {
                "speakers": "4793795",
                "language": "Finnish",
                "countrycode": "FIN"
            },
            {
                "speakers": "20685",
                "language": "Russian",
                "countrycode": "FIN"
            },
            {
                "speakers": "0",
                "language": "Saame",
                "countrycode": "FIN"
            },
            {
                "speakers": "294764",
                "language": "Swedish",
                "countrycode": "FIN"
            },
            {
                "speakers": "415036",
                "language": "Fijian",
                "countrycode": "FJI"
            },
            {
                "speakers": "357029",
                "language": "Hindi",
                "countrycode": "FJI"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "FLK"
            },
            {
                "speakers": "1480642",
                "language": "Arabic",
                "countrycode": "FRA"
            },
            {
                "speakers": "55435254",
                "language": "French",
                "countrycode": "FRA"
            },
            {
                "speakers": "236903",
                "language": "Italian",
                "countrycode": "FRA"
            },
            {
                "speakers": "710708",
                "language": "Portuguese",
                "countrycode": "FRA"
            },
            {
                "speakers": "236903",
                "language": "Spanish",
                "countrycode": "FRA"
            },
            {
                "speakers": "236903",
                "language": "Turkish",
                "countrycode": "FRA"
            },
            {
                "speakers": "0",
                "language": "Danish",
                "countrycode": "FRO"
            },
            {
                "speakers": "43000",
                "language": "Faroese",
                "countrycode": "FRO"
            },
            {
                "speakers": "8687",
                "language": "Kosrean",
                "countrycode": "FSM"
            },
            {
                "speakers": "9044",
                "language": "Mortlock",
                "countrycode": "FSM"
            },
            {
                "speakers": "28322",
                "language": "Pohnpei",
                "countrycode": "FSM"
            },
            {
                "speakers": "49504",
                "language": "Trukese",
                "countrycode": "FSM"
            },
            {
                "speakers": "4403",
                "language": "Wolea",
                "countrycode": "FSM"
            },
            {
                "speakers": "6902",
                "language": "Yap",
                "countrycode": "FSM"
            },
            {
                "speakers": "438908",
                "language": "Fang",
                "countrycode": "GAB"
            },
            {
                "speakers": "169188",
                "language": "Mbete",
                "countrycode": "GAB"
            },
            {
                "speakers": "178996",
                "language": "Mpongwe",
                "countrycode": "GAB"
            },
            {
                "speakers": "209646",
                "language": "Punu-sira-nzebi",
                "countrycode": "GAB"
            },
            {
                "speakers": "58013570",
                "language": "English",
                "countrycode": "GBR"
            },
            {
                "speakers": "59623",
                "language": "Gaeli",
                "countrycode": "GBR"
            },
            {
                "speakers": "536611",
                "language": "Kymri",
                "countrycode": "GBR"
            },
            {
                "speakers": "84456",
                "language": "Abhyasi",
                "countrycode": "GEO"
            },
            {
                "speakers": "337824",
                "language": "Armenian",
                "countrycode": "GEO"
            },
            {
                "speakers": "273240",
                "language": "Azerbaijani",
                "countrycode": "GEO"
            },
            {
                "speakers": "3562056",
                "language": "Georgiana",
                "countrycode": "GEO"
            },
            {
                "speakers": "119232",
                "language": "Osseetti",
                "countrycode": "GEO"
            },
            {
                "speakers": "437184",
                "language": "Russian",
                "countrycode": "GEO"
            },
            {
                "speakers": "10591088",
                "language": "Akan",
                "countrycode": "GHA"
            },
            {
                "speakers": "2405228",
                "language": "Ewe",
                "countrycode": "GHA"
            },
            {
                "speakers": "1576536",
                "language": "Ga-adangme",
                "countrycode": "GHA"
            },
            {
                "speakers": "666996",
                "language": "Gurma",
                "countrycode": "GHA"
            },
            {
                "speakers": "262756",
                "language": "Joruba",
                "countrycode": "GHA"
            },
            {
                "speakers": "3193496",
                "language": "Mossi",
                "countrycode": "GHA"
            },
            {
                "speakers": "1850",
                "language": "Arabic",
                "countrycode": "GIB"
            },
            {
                "speakers": "22225",
                "language": "English",
                "countrycode": "GIB"
            },
            {
                "speakers": "2867980",
                "language": "Ful",
                "countrycode": "GIN"
            },
            {
                "speakers": "445800",
                "language": "Kissi",
                "countrycode": "GIN"
            },
            {
                "speakers": "341780",
                "language": "Kpelle",
                "countrycode": "GIN"
            },
            {
                "speakers": "170890",
                "language": "Loma",
                "countrycode": "GIN"
            },
            {
                "speakers": "1723760",
                "language": "Malinke",
                "countrycode": "GIN"
            },
            {
                "speakers": "817300",
                "language": "Susu",
                "countrycode": "GIN"
            },
            {
                "speakers": "215470",
                "language": "Yalunka",
                "countrycode": "GIN"
            },
            {
                "speakers": "433200",
                "language": "Creole French",
                "countrycode": "GLP"
            },
            {
                "speakers": "0",
                "language": "French",
                "countrycode": "GLP"
            },
            {
                "speakers": "120060",
                "language": "Diola",
                "countrycode": "GMB"
            },
            {
                "speakers": "211410",
                "language": "Ful",
                "countrycode": "GMB"
            },
            {
                "speakers": "445005",
                "language": "Malinke",
                "countrycode": "GMB"
            },
            {
                "speakers": "99180",
                "language": "Soninke",
                "countrycode": "GMB"
            },
            {
                "speakers": "164430",
                "language": "Wolof",
                "countrycode": "GMB"
            },
            {
                "speakers": "177098",
                "language": "Balante",
                "countrycode": "GNB"
            },
            {
                "speakers": "441532",
                "language": "Crioulo",
                "countrycode": "GNB"
            },
            {
                "speakers": "201358",
                "language": "Ful",
                "countrycode": "GNB"
            },
            {
                "speakers": "83697",
                "language": "Malinke",
                "countrycode": "GNB"
            },
            {
                "speakers": "59437",
                "language": "Mandyako",
                "countrycode": "GNB"
            },
            {
                "speakers": "98253",
                "language": "Portuguese",
                "countrycode": "GNB"
            },
            {
                "speakers": "39411",
                "language": "Bubi",
                "countrycode": "GNQ"
            },
            {
                "speakers": "384144",
                "language": "Fang",
                "countrycode": "GNQ"
            },
            {
                "speakers": "10387514",
                "language": "Greek",
                "countrycode": "GRC"
            },
            {
                "speakers": "94911",
                "language": "Turkish",
                "countrycode": "GRC"
            },
            {
                "speakers": "94000",
                "language": "Creole English",
                "countrycode": "GRD"
            },
            {
                "speakers": "7000",
                "language": "Danish",
                "countrycode": "GRL"
            },
            {
                "speakers": "49000",
                "language": "Greenlandic",
                "countrycode": "GRL"
            },
            {
                "speakers": "1013265",
                "language": "Cakchiquel",
                "countrycode": "GTM"
            },
            {
                "speakers": "557865",
                "language": "Kekch\u00ed",
                "countrycode": "GTM"
            },
            {
                "speakers": "307395",
                "language": "Mam",
                "countrycode": "GTM"
            },
            {
                "speakers": "1149885",
                "language": "Quich\u00e9",
                "countrycode": "GTM"
            },
            {
                "speakers": "7366095",
                "language": "Spanish",
                "countrycode": "GTM"
            },
            {
                "speakers": "170683",
                "language": "Creole French",
                "countrycode": "GUF"
            },
            {
                "speakers": "3439",
                "language": "Indian Languages",
                "countrycode": "GUF"
            },
            {
                "speakers": "49728",
                "language": "Chamorro",
                "countrycode": "GUM"
            },
            {
                "speakers": "63000",
                "language": "English",
                "countrycode": "GUM"
            },
            {
                "speakers": "3360",
                "language": "Japanese",
                "countrycode": "GUM"
            },
            {
                "speakers": "5544",
                "language": "Korean",
                "countrycode": "GUM"
            },
            {
                "speakers": "33096",
                "language": "Philippene Languages",
                "countrycode": "GUM"
            },
            {
                "speakers": "12054",
                "language": "Arawakan",
                "countrycode": "GUY"
            },
            {
                "speakers": "18942",
                "language": "Caribbean",
                "countrycode": "GUY"
            },
            {
                "speakers": "830004",
                "language": "Creole English",
                "countrycode": "GUY"
            },
            {
                "speakers": "6015634",
                "language": "Canton Chinese",
                "countrycode": "HKG"
            },
            {
                "speakers": "94948",
                "language": "Chiu chau",
                "countrycode": "HKG"
            },
            {
                "speakers": "149204",
                "language": "English",
                "countrycode": "HKG"
            },
            {
                "speakers": "128858",
                "language": "Fukien",
                "countrycode": "HKG"
            },
            {
                "speakers": "108512",
                "language": "Hakka",
                "countrycode": "HKG"
            },
            {
                "speakers": "12970",
                "language": "Creole English",
                "countrycode": "HND"
            },
            {
                "speakers": "84305",
                "language": "Garifuna",
                "countrycode": "HND"
            },
            {
                "speakers": "12970",
                "language": "Miskito",
                "countrycode": "HND"
            },
            {
                "speakers": "6303420",
                "language": "Spanish",
                "countrycode": "HND"
            },
            {
                "speakers": "4289607",
                "language": "Serbo-Croatian",
                "countrycode": "HRV"
            },
            {
                "speakers": "0",
                "language": "Slovene",
                "countrycode": "HRV"
            },
            {
                "speakers": "0",
                "language": "French",
                "countrycode": "HTI"
            },
            {
                "speakers": "8222000",
                "language": "Haiti Creole",
                "countrycode": "HTI"
            },
            {
                "speakers": "40173",
                "language": "German",
                "countrycode": "HUN"
            },
            {
                "speakers": "9892552",
                "language": "Hungarian",
                "countrycode": "HUN"
            },
            {
                "speakers": "50216",
                "language": "Romani",
                "countrycode": "HUN"
            },
            {
                "speakers": "10043",
                "language": "Romanian",
                "countrycode": "HUN"
            },
            {
                "speakers": "20086",
                "language": "Serbo-Croatian",
                "countrycode": "HUN"
            },
            {
                "speakers": "10043",
                "language": "Slovak",
                "countrycode": "HUN"
            },
            {
                "speakers": "3605819",
                "language": "Bali",
                "countrycode": "IDN"
            },
            {
                "speakers": "3817926",
                "language": "Banja",
                "countrycode": "IDN"
            },
            {
                "speakers": "4666354",
                "language": "Batakki",
                "countrycode": "IDN"
            },
            {
                "speakers": "4666354",
                "language": "Bugi",
                "countrycode": "IDN"
            },
            {
                "speakers": "83570161",
                "language": "Javanese",
                "countrycode": "IDN"
            },
            {
                "speakers": "9120601",
                "language": "Madura",
                "countrycode": "IDN"
            },
            {
                "speakers": "25664948",
                "language": "Malay",
                "countrycode": "IDN"
            },
            {
                "speakers": "5090568",
                "language": "Minangkabau",
                "countrycode": "IDN"
            },
            {
                "speakers": "33512906",
                "language": "Sunda",
                "countrycode": "IDN"
            },
            {
                "speakers": "15204930",
                "language": "Asami",
                "countrycode": "IND"
            },
            {
                "speakers": "83120282",
                "language": "Bengali",
                "countrycode": "IND"
            },
            {
                "speakers": "48655778",
                "language": "Gujarati",
                "countrycode": "IND"
            },
            {
                "speakers": "404451153",
                "language": "Hindi",
                "countrycode": "IND"
            },
            {
                "speakers": "39532819",
                "language": "Kannada",
                "countrycode": "IND"
            },
            {
                "speakers": "36491831",
                "language": "Malajalam",
                "countrycode": "IND"
            },
            {
                "speakers": "75010989",
                "language": "Marathi",
                "countrycode": "IND"
            },
            {
                "speakers": "33450846",
                "language": "Orija",
                "countrycode": "IND"
            },
            {
                "speakers": "28382536",
                "language": "Punjabi",
                "countrycode": "IND"
            },
            {
                "speakers": "63860708",
                "language": "Tamil",
                "countrycode": "IND"
            },
            {
                "speakers": "79065638",
                "language": "Telugu",
                "countrycode": "IND"
            },
            {
                "speakers": "51696761",
                "language": "Urdu",
                "countrycode": "IND"
            },
            {
                "speakers": "3714698",
                "language": "English",
                "countrycode": "IRL"
            },
            {
                "speakers": "60402",
                "language": "Irish",
                "countrycode": "IRL"
            },
            {
                "speakers": "1489444",
                "language": "Arabic",
                "countrycode": "IRN"
            },
            {
                "speakers": "11373935",
                "language": "Azerbaijani",
                "countrycode": "IRN"
            },
            {
                "speakers": "1150934",
                "language": "Bakhtyari",
                "countrycode": "IRN"
            },
            {
                "speakers": "1557146",
                "language": "Balochi",
                "countrycode": "IRN"
            },
            {
                "speakers": "3588206",
                "language": "Gilaki",
                "countrycode": "IRN"
            },
            {
                "speakers": "6160882",
                "language": "Kurdish",
                "countrycode": "IRN"
            },
            {
                "speakers": "2911186",
                "language": "Luri",
                "countrycode": "IRN"
            },
            {
                "speakers": "2437272",
                "language": "Mazandarani",
                "countrycode": "IRN"
            },
            {
                "speakers": "30939815",
                "language": "Persian",
                "countrycode": "IRN"
            },
            {
                "speakers": "1083232",
                "language": "Turkmenian",
                "countrycode": "IRN"
            },
            {
                "speakers": "17844779",
                "language": "Arabic",
                "countrycode": "IRQ"
            },
            {
                "speakers": "184920",
                "language": "Assyrian",
                "countrycode": "IRQ"
            },
            {
                "speakers": "392955",
                "language": "Azerbaijani",
                "countrycode": "IRQ"
            },
            {
                "speakers": "4391850",
                "language": "Kurdish",
                "countrycode": "IRQ"
            },
            {
                "speakers": "184920",
                "language": "Persian",
                "countrycode": "IRQ"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "ISL"
            },
            {
                "speakers": "267003",
                "language": "Icelandic",
                "countrycode": "ISL"
            },
            {
                "speakers": "1119060",
                "language": "Arabic",
                "countrycode": "ISR"
            },
            {
                "speakers": "3922927",
                "language": "Hebrew",
                "countrycode": "ISR"
            },
            {
                "speakers": "553313",
                "language": "Russian",
                "countrycode": "ISR"
            },
            {
                "speakers": "115360",
                "language": "Albaniana",
                "countrycode": "ITA"
            },
            {
                "speakers": "288400",
                "language": "French",
                "countrycode": "ITA"
            },
            {
                "speakers": "692160",
                "language": "Friuli",
                "countrycode": "ITA"
            },
            {
                "speakers": "288400",
                "language": "German",
                "countrycode": "ITA"
            },
            {
                "speakers": "54276879",
                "language": "Italian",
                "countrycode": "ITA"
            },
            {
                "speakers": "115360",
                "language": "Romani",
                "countrycode": "ITA"
            },
            {
                "speakers": "1557360",
                "language": "Sardinian",
                "countrycode": "ITA"
            },
            {
                "speakers": "115360",
                "language": "Slovene",
                "countrycode": "ITA"
            },
            {
                "speakers": "2433186",
                "language": "Creole English",
                "countrycode": "JAM"
            },
            {
                "speakers": "49077",
                "language": "Hindi",
                "countrycode": "JAM"
            },
            {
                "speakers": "4976257",
                "language": "Arabic",
                "countrycode": "JOR"
            },
            {
                "speakers": "50830",
                "language": "Armenian",
                "countrycode": "JOR"
            },
            {
                "speakers": "50830",
                "language": "Circassian",
                "countrycode": "JOR"
            },
            {
                "speakers": "0",
                "language": "Ainu",
                "countrycode": "JPN"
            },
            {
                "speakers": "253428",
                "language": "Chinese",
                "countrycode": "JPN"
            },
            {
                "speakers": "126714",
                "language": "English",
                "countrycode": "JPN"
            },
            {
                "speakers": "125573572",
                "language": "Japanese",
                "countrycode": "JPN"
            },
            {
                "speakers": "633570",
                "language": "Korean",
                "countrycode": "JPN"
            },
            {
                "speakers": "126714",
                "language": "Philippene Languages",
                "countrycode": "JPN"
            },
            {
                "speakers": "502913",
                "language": "German",
                "countrycode": "KAZ"
            },
            {
                "speakers": "7462580",
                "language": "Kazakh",
                "countrycode": "KAZ"
            },
            {
                "speakers": "5629381",
                "language": "Russian",
                "countrycode": "KAZ"
            },
            {
                "speakers": "324460",
                "language": "Tatar",
                "countrycode": "KAZ"
            },
            {
                "speakers": "811150",
                "language": "Ukrainian",
                "countrycode": "KAZ"
            },
            {
                "speakers": "373129",
                "language": "Uzbek",
                "countrycode": "KAZ"
            },
            {
                "speakers": "1834880",
                "language": "Gusii",
                "countrycode": "KEN"
            },
            {
                "speakers": "3248640",
                "language": "Kalenjin",
                "countrycode": "KEN"
            },
            {
                "speakers": "3368960",
                "language": "Kamba",
                "countrycode": "KEN"
            },
            {
                "speakers": "6286720",
                "language": "Kikuyu",
                "countrycode": "KEN"
            },
            {
                "speakers": "4151040",
                "language": "Luhya",
                "countrycode": "KEN"
            },
            {
                "speakers": "3850240",
                "language": "Luo",
                "countrycode": "KEN"
            },
            {
                "speakers": "481280",
                "language": "Masai",
                "countrycode": "KEN"
            },
            {
                "speakers": "1654400",
                "language": "Meru",
                "countrycode": "KEN"
            },
            {
                "speakers": "1443840",
                "language": "Nyika",
                "countrycode": "KEN"
            },
            {
                "speakers": "421120",
                "language": "Turkana",
                "countrycode": "KEN"
            },
            {
                "speakers": "37592",
                "language": "Kazakh",
                "countrycode": "KGZ"
            },
            {
                "speakers": "2805303",
                "language": "Kirgiz",
                "countrycode": "KGZ"
            },
            {
                "speakers": "761238",
                "language": "Russian",
                "countrycode": "KGZ"
            },
            {
                "speakers": "37592",
                "language": "Tadzhik",
                "countrycode": "KGZ"
            },
            {
                "speakers": "61087",
                "language": "Tatar",
                "countrycode": "KGZ"
            },
            {
                "speakers": "79883",
                "language": "Ukrainian",
                "countrycode": "KGZ"
            },
            {
                "speakers": "662559",
                "language": "Uzbek",
                "countrycode": "KGZ"
            },
            {
                "speakers": "346208",
                "language": "Chinese",
                "countrycode": "KHM"
            },
            {
                "speakers": "9894848",
                "language": "Khmer",
                "countrycode": "KHM"
            },
            {
                "speakers": "268032",
                "language": "T\u0161am",
                "countrycode": "KHM"
            },
            {
                "speakers": "614240",
                "language": "Vietnamese",
                "countrycode": "KHM"
            },
            {
                "speakers": "82087",
                "language": "Kiribati",
                "countrycode": "KIR"
            },
            {
                "speakers": "415",
                "language": "Tuvalu",
                "countrycode": "KIR"
            },
            {
                "speakers": "38000",
                "language": "Creole English",
                "countrycode": "KNA"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "KNA"
            },
            {
                "speakers": "46844",
                "language": "Chinese",
                "countrycode": "KOR"
            },
            {
                "speakers": "46797157",
                "language": "Korean",
                "countrycode": "KOR"
            },
            {
                "speakers": "1540132",
                "language": "Arabic",
                "countrycode": "KWT"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "KWT"
            },
            {
                "speakers": "3650976",
                "language": "Lao",
                "countrycode": "LAO"
            },
            {
                "speakers": "282516",
                "language": "Lao-Soung",
                "countrycode": "LAO"
            },
            {
                "speakers": "896445",
                "language": "Mon-khmer",
                "countrycode": "LAO"
            },
            {
                "speakers": "423774",
                "language": "Thai",
                "countrycode": "LAO"
            },
            {
                "speakers": "3052260",
                "language": "Arabic",
                "countrycode": "LBN"
            },
            {
                "speakers": "193638",
                "language": "Armenian",
                "countrycode": "LBN"
            },
            {
                "speakers": "0",
                "language": "French",
                "countrycode": "LBN"
            },
            {
                "speakers": "432098",
                "language": "Bassa",
                "countrycode": "LBR"
            },
            {
                "speakers": "249166",
                "language": "Gio",
                "countrycode": "LBR"
            },
            {
                "speakers": "280706",
                "language": "Grebo",
                "countrycode": "LBR"
            },
            {
                "speakers": "615030",
                "language": "Kpelle",
                "countrycode": "LBR"
            },
            {
                "speakers": "227088",
                "language": "Kru",
                "countrycode": "LBR"
            },
            {
                "speakers": "182932",
                "language": "Loma",
                "countrycode": "LBR"
            },
            {
                "speakers": "160854",
                "language": "Malinke",
                "countrycode": "LBR"
            },
            {
                "speakers": "227088",
                "language": "Mano",
                "countrycode": "LBR"
            },
            {
                "speakers": "5380800",
                "language": "Arabic",
                "countrycode": "LBY"
            },
            {
                "speakers": "56050",
                "language": "Berberi",
                "countrycode": "LBY"
            },
            {
                "speakers": "123200",
                "language": "Creole French",
                "countrycode": "LCA"
            },
            {
                "speakers": "30800",
                "language": "English",
                "countrycode": "LCA"
            },
            {
                "speakers": "28747",
                "language": "German",
                "countrycode": "LIE"
            },
            {
                "speakers": "808",
                "language": "Italian",
                "countrycode": "LIE"
            },
            {
                "speakers": "808",
                "language": "Turkish",
                "countrycode": "LIE"
            },
            {
                "speakers": "3690092",
                "language": "Mixed Languages",
                "countrycode": "LKA"
            },
            {
                "speakers": "11352681",
                "language": "Singali",
                "countrycode": "LKA"
            },
            {
                "speakers": "3690092",
                "language": "Tamil",
                "countrycode": "LKA"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "LSO"
            },
            {
                "speakers": "1830050",
                "language": "Sotho",
                "countrycode": "LSO"
            },
            {
                "speakers": "322950",
                "language": "Zulu",
                "countrycode": "LSO"
            },
            {
                "speakers": "51779",
                "language": "Belorussian",
                "countrycode": "LTU"
            },
            {
                "speakers": "3017976",
                "language": "Lithuanian",
                "countrycode": "LTU"
            },
            {
                "speakers": "258895",
                "language": "Polish",
                "countrycode": "LTU"
            },
            {
                "speakers": "299579",
                "language": "Russian",
                "countrycode": "LTU"
            },
            {
                "speakers": "40684",
                "language": "Ukrainian",
                "countrycode": "LTU"
            },
            {
                "speakers": "18299",
                "language": "French",
                "countrycode": "LUX"
            },
            {
                "speakers": "10021",
                "language": "German",
                "countrycode": "LUX"
            },
            {
                "speakers": "20042",
                "language": "Italian",
                "countrycode": "LUX"
            },
            {
                "speakers": "280591",
                "language": "Luxembourgish",
                "countrycode": "LUX"
            },
            {
                "speakers": "56641",
                "language": "Portuguese",
                "countrycode": "LUX"
            },
            {
                "speakers": "99392",
                "language": "Belorussian",
                "countrycode": "LVA"
            },
            {
                "speakers": "1335734",
                "language": "Latvian",
                "countrycode": "LVA"
            },
            {
                "speakers": "29090",
                "language": "Lithuanian",
                "countrycode": "LVA"
            },
            {
                "speakers": "50908",
                "language": "Polish",
                "countrycode": "LVA"
            },
            {
                "speakers": "787865",
                "language": "Russian",
                "countrycode": "LVA"
            },
            {
                "speakers": "70302",
                "language": "Ukrainian",
                "countrycode": "LVA"
            },
            {
                "speakers": "404888",
                "language": "Canton Chinese",
                "countrycode": "MAC"
            },
            {
                "speakers": "2365",
                "language": "English",
                "countrycode": "MAC"
            },
            {
                "speakers": "5676",
                "language": "Mandarin Chinese",
                "countrycode": "MAC"
            },
            {
                "speakers": "10879",
                "language": "Portuguese",
                "countrycode": "MAC"
            },
            {
                "speakers": "18428150",
                "language": "Arabic",
                "countrycode": "MAR"
            },
            {
                "speakers": "9355830",
                "language": "Berberi",
                "countrycode": "MAR"
            },
            {
                "speakers": "2210",
                "language": "English",
                "countrycode": "MCO"
            },
            {
                "speakers": "14246",
                "language": "French",
                "countrycode": "MCO"
            },
            {
                "speakers": "5474",
                "language": "Italian",
                "countrycode": "MCO"
            },
            {
                "speakers": "5474",
                "language": "Monegasque",
                "countrycode": "MCO"
            },
            {
                "speakers": "70080",
                "language": "Bulgariana",
                "countrycode": "MDA"
            },
            {
                "speakers": "140160",
                "language": "Gagauzi",
                "countrycode": "MDA"
            },
            {
                "speakers": "2711220",
                "language": "Romanian",
                "countrycode": "MDA"
            },
            {
                "speakers": "1016160",
                "language": "Russian",
                "countrycode": "MDA"
            },
            {
                "speakers": "376680",
                "language": "Ukrainian",
                "countrycode": "MDA"
            },
            {
                "speakers": "0",
                "language": "French",
                "countrycode": "MDG"
            },
            {
                "speakers": "15766638",
                "language": "Malagasy",
                "countrycode": "MDG"
            },
            {
                "speakers": "286000",
                "language": "Dhivehi",
                "countrycode": "MDV"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "MDV"
            },
            {
                "speakers": "593286",
                "language": "Mixtec",
                "countrycode": "MEX"
            },
            {
                "speakers": "1779858",
                "language": "N\u00e1huatl",
                "countrycode": "MEX"
            },
            {
                "speakers": "395524",
                "language": "Otom\u00ed",
                "countrycode": "MEX"
            },
            {
                "speakers": "91069399",
                "language": "Spanish",
                "countrycode": "MEX"
            },
            {
                "speakers": "1087691",
                "language": "Yucatec",
                "countrycode": "MEX"
            },
            {
                "speakers": "593286",
                "language": "Zapotec",
                "countrycode": "MEX"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "MHL"
            },
            {
                "speakers": "61952",
                "language": "Marshallese",
                "countrycode": "MHL"
            },
            {
                "speakers": "463496",
                "language": "Albaniana",
                "countrycode": "MKD"
            },
            {
                "speakers": "1345960",
                "language": "Macedonian",
                "countrycode": "MKD"
            },
            {
                "speakers": "46552",
                "language": "Romani",
                "countrycode": "MKD"
            },
            {
                "speakers": "40480",
                "language": "Serbo-Croatian",
                "countrycode": "MKD"
            },
            {
                "speakers": "80960",
                "language": "Turkish",
                "countrycode": "MKD"
            },
            {
                "speakers": "3572412",
                "language": "Bambara",
                "countrycode": "MLI"
            },
            {
                "speakers": "1561526",
                "language": "Ful",
                "countrycode": "MLI"
            },
            {
                "speakers": "1348080",
                "language": "Senufo and Minianka",
                "countrycode": "MLI"
            },
            {
                "speakers": "775146",
                "language": "Songhai",
                "countrycode": "MLI"
            },
            {
                "speakers": "977358",
                "language": "Soninke",
                "countrycode": "MLI"
            },
            {
                "speakers": "820082",
                "language": "Tamashek",
                "countrycode": "MLI"
            },
            {
                "speakers": "7984",
                "language": "English",
                "countrycode": "MLT"
            },
            {
                "speakers": "364232",
                "language": "Maltese",
                "countrycode": "MLT"
            },
            {
                "speakers": "31471590",
                "language": "Burmese",
                "countrycode": "MMR"
            },
            {
                "speakers": "1003442",
                "language": "Chin",
                "countrycode": "MMR"
            },
            {
                "speakers": "638554",
                "language": "Kachin",
                "countrycode": "MMR"
            },
            {
                "speakers": "2827882",
                "language": "Karen",
                "countrycode": "MMR"
            },
            {
                "speakers": "182444",
                "language": "Kayah",
                "countrycode": "MMR"
            },
            {
                "speakers": "1094664",
                "language": "Mon",
                "countrycode": "MMR"
            },
            {
                "speakers": "2052495",
                "language": "Rakhine",
                "countrycode": "MMR"
            },
            {
                "speakers": "3876935",
                "language": "Shan",
                "countrycode": "MMR"
            },
            {
                "speakers": "50578",
                "language": "Bajad",
                "countrycode": "MNG"
            },
            {
                "speakers": "45254",
                "language": "Buryat",
                "countrycode": "MNG"
            },
            {
                "speakers": "37268",
                "language": "Dariganga",
                "countrycode": "MNG"
            },
            {
                "speakers": "71874",
                "language": "Dorbet",
                "countrycode": "MNG"
            },
            {
                "speakers": "157058",
                "language": "Kazakh",
                "countrycode": "MNG"
            },
            {
                "speakers": "2097656",
                "language": "Mongolian",
                "countrycode": "MNG"
            },
            {
                "speakers": "3744",
                "language": "Carolinian",
                "countrycode": "MNP"
            },
            {
                "speakers": "23400",
                "language": "Chamorro",
                "countrycode": "MNP"
            },
            {
                "speakers": "5538",
                "language": "Chinese",
                "countrycode": "MNP"
            },
            {
                "speakers": "3744",
                "language": "English",
                "countrycode": "MNP"
            },
            {
                "speakers": "5070",
                "language": "Korean",
                "countrycode": "MNP"
            },
            {
                "speakers": "26598",
                "language": "Philippene Languages",
                "countrycode": "MNP"
            },
            {
                "speakers": "1121760",
                "language": "Chuabo",
                "countrycode": "MOZ"
            },
            {
                "speakers": "1535040",
                "language": "Lomwe",
                "countrycode": "MOZ"
            },
            {
                "speakers": "5471040",
                "language": "Makua",
                "countrycode": "MOZ"
            },
            {
                "speakers": "688800",
                "language": "Marendje",
                "countrycode": "MOZ"
            },
            {
                "speakers": "649440",
                "language": "Nyanja",
                "countrycode": "MOZ"
            },
            {
                "speakers": "728160",
                "language": "Ronga",
                "countrycode": "MOZ"
            },
            {
                "speakers": "1849920",
                "language": "Sena",
                "countrycode": "MOZ"
            },
            {
                "speakers": "1279200",
                "language": "Shona",
                "countrycode": "MOZ"
            },
            {
                "speakers": "2440320",
                "language": "Tsonga",
                "countrycode": "MOZ"
            },
            {
                "speakers": "1180800",
                "language": "Tswa",
                "countrycode": "MOZ"
            },
            {
                "speakers": "32040",
                "language": "Ful",
                "countrycode": "MRT"
            },
            {
                "speakers": "2181390",
                "language": "Hassaniya",
                "countrycode": "MRT"
            },
            {
                "speakers": "72090",
                "language": "Soninke",
                "countrycode": "MRT"
            },
            {
                "speakers": "144180",
                "language": "Tukulor",
                "countrycode": "MRT"
            },
            {
                "speakers": "176220",
                "language": "Wolof",
                "countrycode": "MRT"
            },
            {
                "speakers": "32040",
                "language": "Zenaga",
                "countrycode": "MRT"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "MSR"
            },
            {
                "speakers": "381570",
                "language": "Creole French",
                "countrycode": "MTQ"
            },
            {
                "speakers": "0",
                "language": "French",
                "countrycode": "MTQ"
            },
            {
                "speakers": "244338",
                "language": "Bhojpuri",
                "countrycode": "MUS"
            },
            {
                "speakers": "817548",
                "language": "Creole French",
                "countrycode": "MUS"
            },
            {
                "speakers": "39372",
                "language": "French",
                "countrycode": "MUS"
            },
            {
                "speakers": "13896",
                "language": "Hindi",
                "countrycode": "MUS"
            },
            {
                "speakers": "8106",
                "language": "Marathi",
                "countrycode": "MUS"
            },
            {
                "speakers": "9264",
                "language": "Tamil",
                "countrycode": "MUS"
            },
            {
                "speakers": "6369275",
                "language": "Chichewa",
                "countrycode": "MWI"
            },
            {
                "speakers": "2010200",
                "language": "Lomwe",
                "countrycode": "MWI"
            },
            {
                "speakers": "731975",
                "language": "Ngoni",
                "countrycode": "MWI"
            },
            {
                "speakers": "1442100",
                "language": "Yao",
                "countrycode": "MWI"
            },
            {
                "speakers": "2001960",
                "language": "Chinese",
                "countrycode": "MYS"
            },
            {
                "speakers": "244684",
                "language": "Dusun",
                "countrycode": "MYS"
            },
            {
                "speakers": "355904",
                "language": "English",
                "countrycode": "MYS"
            },
            {
                "speakers": "622832",
                "language": "Iban",
                "countrycode": "MYS"
            },
            {
                "speakers": "12990496",
                "language": "Malay",
                "countrycode": "MYS"
            },
            {
                "speakers": "867516",
                "language": "Tamil",
                "countrycode": "MYS"
            },
            {
                "speakers": "30247",
                "language": "French",
                "countrycode": "MYT"
            },
            {
                "speakers": "62431",
                "language": "Mahor\u00e9",
                "countrycode": "MYT"
            },
            {
                "speakers": "23989",
                "language": "Malagasy",
                "countrycode": "MYT"
            },
            {
                "speakers": "163970",
                "language": "Afrikaans",
                "countrycode": "NAM"
            },
            {
                "speakers": "81122",
                "language": "Caprivi",
                "countrycode": "NAM"
            },
            {
                "speakers": "15534",
                "language": "German",
                "countrycode": "NAM"
            },
            {
                "speakers": "138080",
                "language": "Herero",
                "countrycode": "NAM"
            },
            {
                "speakers": "167422",
                "language": "Kavango",
                "countrycode": "NAM"
            },
            {
                "speakers": "214024",
                "language": "Nama",
                "countrycode": "NAM"
            },
            {
                "speakers": "875082",
                "language": "Ovambo",
                "countrycode": "NAM"
            },
            {
                "speakers": "32794",
                "language": "San",
                "countrycode": "NAM"
            },
            {
                "speakers": "73402",
                "language": "French",
                "countrycode": "NCL"
            },
            {
                "speakers": "97156",
                "language": "Malenasian Languages",
                "countrycode": "NCL"
            },
            {
                "speakers": "24824",
                "language": "Polynesian Languages",
                "countrycode": "NCL"
            },
            {
                "speakers": "1040810",
                "language": "Ful",
                "countrycode": "NER"
            },
            {
                "speakers": "5697630",
                "language": "Hausa",
                "countrycode": "NER"
            },
            {
                "speakers": "472120",
                "language": "Kanuri",
                "countrycode": "NER"
            },
            {
                "speakers": "2274760",
                "language": "Songhai-zerma",
                "countrycode": "NER"
            },
            {
                "speakers": "1115920",
                "language": "Tamashek",
                "countrycode": "NER"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "NFK"
            },
            {
                "speakers": "1784096",
                "language": "Bura",
                "countrycode": "NGA"
            },
            {
                "speakers": "3679698",
                "language": "Edo",
                "countrycode": "NGA"
            },
            {
                "speakers": "12600178",
                "language": "Ful",
                "countrycode": "NGA"
            },
            {
                "speakers": "23527766",
                "language": "Hausa",
                "countrycode": "NGA"
            },
            {
                "speakers": "6244336",
                "language": "Ibibio",
                "countrycode": "NGA"
            },
            {
                "speakers": "20182586",
                "language": "Ibo",
                "countrycode": "NGA"
            },
            {
                "speakers": "2007108",
                "language": "Ijo",
                "countrycode": "NGA"
            },
            {
                "speakers": "23862284",
                "language": "Joruba",
                "countrycode": "NGA"
            },
            {
                "speakers": "4571746",
                "language": "Kanuri",
                "countrycode": "NGA"
            },
            {
                "speakers": "2564638",
                "language": "Tiv",
                "countrycode": "NGA"
            },
            {
                "speakers": "25370",
                "language": "Creole English",
                "countrycode": "NIC"
            },
            {
                "speakers": "81184",
                "language": "Miskito",
                "countrycode": "NIC"
            },
            {
                "speakers": "4952224",
                "language": "Spanish",
                "countrycode": "NIC"
            },
            {
                "speakers": "10148",
                "language": "Sumo",
                "countrycode": "NIC"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "NIU"
            },
            {
                "speakers": "0",
                "language": "Niue",
                "countrycode": "NIU"
            },
            {
                "speakers": "142776",
                "language": "Arabic",
                "countrycode": "NLD"
            },
            {
                "speakers": "15165984",
                "language": "Dutch",
                "countrycode": "NLD"
            },
            {
                "speakers": "586968",
                "language": "Fries",
                "countrycode": "NLD"
            },
            {
                "speakers": "126912",
                "language": "Turkish",
                "countrycode": "NLD"
            },
            {
                "speakers": "17914",
                "language": "Danish",
                "countrycode": "NOR"
            },
            {
                "speakers": "22392",
                "language": "English",
                "countrycode": "NOR"
            },
            {
                "speakers": "4326231",
                "language": "Norwegian",
                "countrycode": "NOR"
            },
            {
                "speakers": "0",
                "language": "Saame",
                "countrycode": "NOR"
            },
            {
                "speakers": "13436",
                "language": "Swedish",
                "countrycode": "NOR"
            },
            {
                "speakers": "1794750",
                "language": "Bhojpuri",
                "countrycode": "NPL"
            },
            {
                "speakers": "717900",
                "language": "Hindi",
                "countrycode": "NPL"
            },
            {
                "speakers": "2847670",
                "language": "Maithili",
                "countrycode": "NPL"
            },
            {
                "speakers": "12060720",
                "language": "Nepali",
                "countrycode": "NPL"
            },
            {
                "speakers": "885410",
                "language": "Newari",
                "countrycode": "NPL"
            },
            {
                "speakers": "1172570",
                "language": "Tamang",
                "countrycode": "NPL"
            },
            {
                "speakers": "1292220",
                "language": "Tharu",
                "countrycode": "NPL"
            },
            {
                "speakers": "1020",
                "language": "Chinese",
                "countrycode": "NRU"
            },
            {
                "speakers": "900",
                "language": "English",
                "countrycode": "NRU"
            },
            {
                "speakers": "2148",
                "language": "Kiribati",
                "countrycode": "NRU"
            },
            {
                "speakers": "6900",
                "language": "Nauru",
                "countrycode": "NRU"
            },
            {
                "speakers": "1020",
                "language": "Tuvalu",
                "countrycode": "NRU"
            },
            {
                "speakers": "3359940",
                "language": "English",
                "countrycode": "NZL"
            },
            {
                "speakers": "166066",
                "language": "Maori",
                "countrycode": "NZL"
            },
            {
                "speakers": "1949714",
                "language": "Arabic",
                "countrycode": "OMN"
            },
            {
                "speakers": "0",
                "language": "Balochi",
                "countrycode": "OMN"
            },
            {
                "speakers": "4694490",
                "language": "Balochi",
                "countrycode": "PAK"
            },
            {
                "speakers": "1877796",
                "language": "Brahui",
                "countrycode": "PAK"
            },
            {
                "speakers": "3755592",
                "language": "Hindko",
                "countrycode": "PAK"
            },
            {
                "speakers": "20499274",
                "language": "Pashto",
                "countrycode": "PAK"
            },
            {
                "speakers": "75424807",
                "language": "Punjabi",
                "countrycode": "PAK"
            },
            {
                "speakers": "15335334",
                "language": "Saraiki",
                "countrycode": "PAK"
            },
            {
                "speakers": "18464994",
                "language": "Sindhi",
                "countrycode": "PAK"
            },
            {
                "speakers": "11892708",
                "language": "Urdu",
                "countrycode": "PAK"
            },
            {
                "speakers": "17136",
                "language": "Arabic",
                "countrycode": "PAN"
            },
            {
                "speakers": "399840",
                "language": "Creole English",
                "countrycode": "PAN"
            },
            {
                "speakers": "57120",
                "language": "Cuna",
                "countrycode": "PAN"
            },
            {
                "speakers": "17136",
                "language": "Embera",
                "countrycode": "PAN"
            },
            {
                "speakers": "151368",
                "language": "Guaym\u00ed",
                "countrycode": "PAN"
            },
            {
                "speakers": "2193408",
                "language": "Spanish",
                "countrycode": "PAN"
            },
            {
                "speakers": "0",
                "language": "Pitcairnese",
                "countrycode": "PCN"
            },
            {
                "speakers": "590226",
                "language": "Aimar\u00e1",
                "countrycode": "PER"
            },
            {
                "speakers": "4208568",
                "language": "Ket\u0161ua",
                "countrycode": "PER"
            },
            {
                "speakers": "20478277",
                "language": "Spanish",
                "countrycode": "PER"
            },
            {
                "speakers": "4330119",
                "language": "Bicol",
                "countrycode": "PHL"
            },
            {
                "speakers": "17700310",
                "language": "Cebuano",
                "countrycode": "PHL"
            },
            {
                "speakers": "6912997",
                "language": "Hiligaynon",
                "countrycode": "PHL"
            },
            {
                "speakers": "7064931",
                "language": "Ilocano",
                "countrycode": "PHL"
            },
            {
                "speakers": "1063538",
                "language": "Maguindanao",
                "countrycode": "PHL"
            },
            {
                "speakers": "987571",
                "language": "Maranao",
                "countrycode": "PHL"
            },
            {
                "speakers": "2279010",
                "language": "Pampango",
                "countrycode": "PHL"
            },
            {
                "speakers": "1367406",
                "language": "Pangasinan",
                "countrycode": "PHL"
            },
            {
                "speakers": "22258330",
                "language": "Pilipino",
                "countrycode": "PHL"
            },
            {
                "speakers": "2886746",
                "language": "Waray-waray",
                "countrycode": "PHL"
            },
            {
                "speakers": "304",
                "language": "Chinese",
                "countrycode": "PLW"
            },
            {
                "speakers": "608",
                "language": "English",
                "countrycode": "PLW"
            },
            {
                "speakers": "15618",
                "language": "Palau",
                "countrycode": "PLW"
            },
            {
                "speakers": "1748",
                "language": "Philippene Languages",
                "countrycode": "PLW"
            },
            {
                "speakers": "961400",
                "language": "Malenasian Languages",
                "countrycode": "PNG"
            },
            {
                "speakers": "3754267",
                "language": "Papuan Languages",
                "countrycode": "PNG"
            },
            {
                "speakers": "193268",
                "language": "Belorussian",
                "countrycode": "POL"
            },
            {
                "speakers": "502497",
                "language": "German",
                "countrycode": "POL"
            },
            {
                "speakers": "37725913",
                "language": "Polish",
                "countrycode": "POL"
            },
            {
                "speakers": "231922",
                "language": "Ukrainian",
                "countrycode": "POL"
            },
            {
                "speakers": "1833906",
                "language": "English",
                "countrycode": "PRI"
            },
            {
                "speakers": "1984797",
                "language": "Spanish",
                "countrycode": "PRI"
            },
            {
                "speakers": "24039",
                "language": "Chinese",
                "countrycode": "PRK"
            },
            {
                "speakers": "24014961",
                "language": "Korean",
                "countrycode": "PRK"
            },
            {
                "speakers": "9897624",
                "language": "Portuguese",
                "countrycode": "PRT"
            },
            {
                "speakers": "49464",
                "language": "German",
                "countrycode": "PRY"
            },
            {
                "speakers": "2203896",
                "language": "Guaran\u00ed",
                "countrycode": "PRY"
            },
            {
                "speakers": "175872",
                "language": "Portuguese",
                "countrycode": "PRY"
            },
            {
                "speakers": "3028296",
                "language": "Spanish",
                "countrycode": "PRY"
            },
            {
                "speakers": "2973859",
                "language": "Arabic",
                "countrycode": "PSE"
            },
            {
                "speakers": "127141",
                "language": "Hebrew",
                "countrycode": "PSE"
            },
            {
                "speakers": "6815",
                "language": "Chinese",
                "countrycode": "PYF"
            },
            {
                "speakers": "95880",
                "language": "French",
                "countrycode": "PYF"
            },
            {
                "speakers": "109040",
                "language": "Tahitian",
                "countrycode": "PYF"
            },
            {
                "speakers": "243793",
                "language": "Arabic",
                "countrycode": "QAT"
            },
            {
                "speakers": "0",
                "language": "Urdu",
                "countrycode": "QAT"
            },
            {
                "speakers": "19572",
                "language": "Chinese",
                "countrycode": "REU"
            },
            {
                "speakers": "19572",
                "language": "Comorian",
                "countrycode": "REU"
            },
            {
                "speakers": "639585",
                "language": "Creole French",
                "countrycode": "REU"
            },
            {
                "speakers": "9786",
                "language": "Malagasy",
                "countrycode": "REU"
            },
            {
                "speakers": "0",
                "language": "Tamil",
                "countrycode": "REU"
            },
            {
                "speakers": "89822",
                "language": "German",
                "countrycode": "ROM"
            },
            {
                "speakers": "1616796",
                "language": "Hungarian",
                "countrycode": "ROM"
            },
            {
                "speakers": "157188",
                "language": "Romani",
                "countrycode": "ROM"
            },
            {
                "speakers": "20367138",
                "language": "Romanian",
                "countrycode": "ROM"
            },
            {
                "speakers": "22456",
                "language": "Serbo-Croatian",
                "countrycode": "ROM"
            },
            {
                "speakers": "67367",
                "language": "Ukrainian",
                "countrycode": "ROM"
            },
            {
                "speakers": "587736",
                "language": "Avarian",
                "countrycode": "RUS"
            },
            {
                "speakers": "1028538",
                "language": "Bashkir",
                "countrycode": "RUS"
            },
            {
                "speakers": "440802",
                "language": "Belorussian",
                "countrycode": "RUS"
            },
            {
                "speakers": "881604",
                "language": "Chechen",
                "countrycode": "RUS"
            },
            {
                "speakers": "1322406",
                "language": "Chuvash",
                "countrycode": "RUS"
            },
            {
                "speakers": "587736",
                "language": "Kazakh",
                "countrycode": "RUS"
            },
            {
                "speakers": "587736",
                "language": "Mari",
                "countrycode": "RUS"
            },
            {
                "speakers": "734670",
                "language": "Mordva",
                "countrycode": "RUS"
            },
            {
                "speakers": "127244842",
                "language": "Russian",
                "countrycode": "RUS"
            },
            {
                "speakers": "4701888",
                "language": "Tatar",
                "countrycode": "RUS"
            },
            {
                "speakers": "440802",
                "language": "Udmur",
                "countrycode": "RUS"
            },
            {
                "speakers": "1910142",
                "language": "Ukrainian",
                "countrycode": "RUS"
            },
            {
                "speakers": "0",
                "language": "French",
                "countrycode": "RWA"
            },
            {
                "speakers": "7733000",
                "language": "Rwanda",
                "countrycode": "RWA"
            },
            {
                "speakers": "20526650",
                "language": "Arabic",
                "countrycode": "SAU"
            },
            {
                "speakers": "14568060",
                "language": "Arabic",
                "countrycode": "SDN"
            },
            {
                "speakers": "737250",
                "language": "Bari",
                "countrycode": "SDN"
            },
            {
                "speakers": "1887360",
                "language": "Beja",
                "countrycode": "SDN"
            },
            {
                "speakers": "501330",
                "language": "Chilluk",
                "countrycode": "SDN"
            },
            {
                "speakers": "3391350",
                "language": "Dinka",
                "countrycode": "SDN"
            },
            {
                "speakers": "619290",
                "language": "Fur",
                "countrycode": "SDN"
            },
            {
                "speakers": "442350",
                "language": "Lotuko",
                "countrycode": "SDN"
            },
            {
                "speakers": "2388690",
                "language": "Nubian Languages",
                "countrycode": "SDN"
            },
            {
                "speakers": "1445010",
                "language": "Nuer",
                "countrycode": "SDN"
            },
            {
                "speakers": "796230",
                "language": "Zande",
                "countrycode": "SDN"
            },
            {
                "speakers": "474050",
                "language": "Diola",
                "countrycode": "SEN"
            },
            {
                "speakers": "2057377",
                "language": "Ful",
                "countrycode": "SEN"
            },
            {
                "speakers": "360278",
                "language": "Malinke",
                "countrycode": "SEN"
            },
            {
                "speakers": "1185125",
                "language": "Serer",
                "countrycode": "SEN"
            },
            {
                "speakers": "123253",
                "language": "Soninke",
                "countrycode": "SEN"
            },
            {
                "speakers": "4560361",
                "language": "Wolof",
                "countrycode": "SEN"
            },
            {
                "speakers": "2750157",
                "language": "Chinese",
                "countrycode": "SGP"
            },
            {
                "speakers": "502947",
                "language": "Malay",
                "countrycode": "SGP"
            },
            {
                "speakers": "263958",
                "language": "Tamil",
                "countrycode": "SGP"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "SHN"
            },
            {
                "speakers": "0",
                "language": "Norwegian",
                "countrycode": "SJM"
            },
            {
                "speakers": "0",
                "language": "Russian",
                "countrycode": "SJM"
            },
            {
                "speakers": "380064",
                "language": "Malenasian Languages",
                "countrycode": "SLB"
            },
            {
                "speakers": "38184",
                "language": "Papuan Languages",
                "countrycode": "SLB"
            },
            {
                "speakers": "16872",
                "language": "Polynesian Languages",
                "countrycode": "SLB"
            },
            {
                "speakers": "184452",
                "language": "Bullom-sherbro",
                "countrycode": "SLE"
            },
            {
                "speakers": "184452",
                "language": "Ful",
                "countrycode": "SLE"
            },
            {
                "speakers": "247554",
                "language": "Kono-vai",
                "countrycode": "SLE"
            },
            {
                "speakers": "165036",
                "language": "Kuranko",
                "countrycode": "SLE"
            },
            {
                "speakers": "402882",
                "language": "Limba",
                "countrycode": "SLE"
            },
            {
                "speakers": "1689192",
                "language": "Mende",
                "countrycode": "SLE"
            },
            {
                "speakers": "1543572",
                "language": "Temne",
                "countrycode": "SLE"
            },
            {
                "speakers": "165036",
                "language": "Yalunka",
                "countrycode": "SLE"
            },
            {
                "speakers": "0",
                "language": "Nahua",
                "countrycode": "SLV"
            },
            {
                "speakers": "6276000",
                "language": "Spanish",
                "countrycode": "SLV"
            },
            {
                "speakers": "27000",
                "language": "Italian",
                "countrycode": "SMR"
            },
            {
                "speakers": "0",
                "language": "Arabic",
                "countrycode": "SOM"
            },
            {
                "speakers": "9925351",
                "language": "Somali",
                "countrycode": "SOM"
            },
            {
                "speakers": "0",
                "language": "French",
                "countrycode": "SPM"
            },
            {
                "speakers": "126861",
                "language": "Crioulo",
                "countrycode": "STP"
            },
            {
                "speakers": "1029",
                "language": "French",
                "countrycode": "STP"
            },
            {
                "speakers": "0",
                "language": "Hindi",
                "countrycode": "SUR"
            },
            {
                "speakers": "337770",
                "language": "Sranantonga",
                "countrycode": "SUR"
            },
            {
                "speakers": "59386",
                "language": "Czech and Moravian",
                "countrycode": "SVK"
            },
            {
                "speakers": "566864",
                "language": "Hungarian",
                "countrycode": "SVK"
            },
            {
                "speakers": "91778",
                "language": "Romani",
                "countrycode": "SVK"
            },
            {
                "speakers": "4621287",
                "language": "Slovak",
                "countrycode": "SVK"
            },
            {
                "speakers": "32392",
                "language": "Ukrainian and Russian",
                "countrycode": "SVK"
            },
            {
                "speakers": "9939",
                "language": "Hungarian",
                "countrycode": "SVN"
            },
            {
                "speakers": "157036",
                "language": "Serbo-Croatian",
                "countrycode": "SVN"
            },
            {
                "speakers": "1747276",
                "language": "Slovene",
                "countrycode": "SVN"
            },
            {
                "speakers": "70891",
                "language": "Arabic",
                "countrycode": "SWE"
            },
            {
                "speakers": "212674",
                "language": "Finnish",
                "countrycode": "SWE"
            },
            {
                "speakers": "44307",
                "language": "Norwegian",
                "countrycode": "SWE"
            },
            {
                "speakers": "115198",
                "language": "Southern Slavic Languages",
                "countrycode": "SWE"
            },
            {
                "speakers": "53168",
                "language": "Spanish",
                "countrycode": "SWE"
            },
            {
                "speakers": "7930953",
                "language": "Swedish",
                "countrycode": "SWE"
            },
            {
                "speakers": "906192",
                "language": "Swazi",
                "countrycode": "SWZ"
            },
            {
                "speakers": "20160",
                "language": "Zulu",
                "countrycode": "SWZ"
            },
            {
                "speakers": "2926",
                "language": "English",
                "countrycode": "SYC"
            },
            {
                "speakers": "1001",
                "language": "French",
                "countrycode": "SYC"
            },
            {
                "speakers": "70301",
                "language": "Seselwa",
                "countrycode": "SYC"
            },
            {
                "speakers": "14512500",
                "language": "Arabic",
                "countrycode": "SYR"
            },
            {
                "speakers": "1451250",
                "language": "Kurdish",
                "countrycode": "SYR"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "TCA"
            },
            {
                "speakers": "941073",
                "language": "Arabic",
                "countrycode": "TCD"
            },
            {
                "speakers": "474362",
                "language": "Gorane",
                "countrycode": "TCD"
            },
            {
                "speakers": "512617",
                "language": "Hadjarai",
                "countrycode": "TCD"
            },
            {
                "speakers": "688590",
                "language": "Kanem-bornu",
                "countrycode": "TCD"
            },
            {
                "speakers": "879865",
                "language": "Mayo-kebbi",
                "countrycode": "TCD"
            },
            {
                "speakers": "665637",
                "language": "Ouaddai",
                "countrycode": "TCD"
            },
            {
                "speakers": "2119327",
                "language": "Sara",
                "countrycode": "TCD"
            },
            {
                "speakers": "497315",
                "language": "Tandjile",
                "countrycode": "TCD"
            },
            {
                "speakers": "263853",
                "language": "Ane",
                "countrycode": "TGO"
            },
            {
                "speakers": "1073928",
                "language": "Ewe",
                "countrycode": "TGO"
            },
            {
                "speakers": "157386",
                "language": "Gurma",
                "countrycode": "TGO"
            },
            {
                "speakers": "638802",
                "language": "Kaby\u00e9",
                "countrycode": "TGO"
            },
            {
                "speakers": "263853",
                "language": "Kotokoli",
                "countrycode": "TGO"
            },
            {
                "speakers": "249966",
                "language": "Moba",
                "countrycode": "TGO"
            },
            {
                "speakers": "189789",
                "language": "Naudemba",
                "countrycode": "TGO"
            },
            {
                "speakers": "476787",
                "language": "Watyi",
                "countrycode": "TGO"
            },
            {
                "speakers": "7429279",
                "language": "Chinese",
                "countrycode": "THA"
            },
            {
                "speakers": "798187",
                "language": "Khmer",
                "countrycode": "THA"
            },
            {
                "speakers": "675389",
                "language": "Kuy",
                "countrycode": "THA"
            },
            {
                "speakers": "16516331",
                "language": "Lao",
                "countrycode": "THA"
            },
            {
                "speakers": "2210364",
                "language": "Malay",
                "countrycode": "THA"
            },
            {
                "speakers": "32295873",
                "language": "Thai",
                "countrycode": "THA"
            },
            {
                "speakers": "600236",
                "language": "Russian",
                "countrycode": "TJK"
            },
            {
                "speakers": "3848936",
                "language": "Tadzhik",
                "countrycode": "TJK"
            },
            {
                "speakers": "1435616",
                "language": "Uzbek",
                "countrycode": "TJK"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "TKL"
            },
            {
                "speakers": "0",
                "language": "Tokelau",
                "countrycode": "TKL"
            },
            {
                "speakers": "89180",
                "language": "Kazakh",
                "countrycode": "TKM"
            },
            {
                "speakers": "298753",
                "language": "Russian",
                "countrycode": "TKM"
            },
            {
                "speakers": "3420053",
                "language": "Turkmenian",
                "countrycode": "TKM"
            },
            {
                "speakers": "410228",
                "language": "Uzbek",
                "countrycode": "TKM"
            },
            {
                "speakers": "0",
                "language": "Portuguese",
                "countrycode": "TMP"
            },
            {
                "speakers": "0",
                "language": "Sunda",
                "countrycode": "TMP"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "TON"
            },
            {
                "speakers": "97317",
                "language": "Tongan",
                "countrycode": "TON"
            },
            {
                "speakers": "37555",
                "language": "Creole English",
                "countrycode": "TTO"
            },
            {
                "speakers": "1210825",
                "language": "English",
                "countrycode": "TTO"
            },
            {
                "speakers": "44030",
                "language": "Hindi",
                "countrycode": "TTO"
            },
            {
                "speakers": "6700614",
                "language": "Arabic",
                "countrycode": "TUN"
            },
            {
                "speakers": "2521118",
                "language": "Arabic-French",
                "countrycode": "TUN"
            },
            {
                "speakers": "306752",
                "language": "Arabic-French-English",
                "countrycode": "TUN"
            },
            {
                "speakers": "932274",
                "language": "Arabic",
                "countrycode": "TUR"
            },
            {
                "speakers": "7058646",
                "language": "Kurdish",
                "countrycode": "TUR"
            },
            {
                "speakers": "58333715",
                "language": "Turkish",
                "countrycode": "TUR"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "TUV"
            },
            {
                "speakers": "900",
                "language": "Kiribati",
                "countrycode": "TUV"
            },
            {
                "speakers": "11100",
                "language": "Tuvalu",
                "countrycode": "TUV"
            },
            {
                "speakers": "133536",
                "language": "Ami",
                "countrycode": "TWN"
            },
            {
                "speakers": "89024",
                "language": "Atayal",
                "countrycode": "TWN"
            },
            {
                "speakers": "2448160",
                "language": "Hakka",
                "countrycode": "TWN"
            },
            {
                "speakers": "4473456",
                "language": "Mandarin Chinese",
                "countrycode": "TWN"
            },
            {
                "speakers": "14844751",
                "language": "Min",
                "countrycode": "TWN"
            },
            {
                "speakers": "66768",
                "language": "Paiwan",
                "countrycode": "TWN"
            },
            {
                "speakers": "1642333",
                "language": "Chaga and Pare",
                "countrycode": "TZA"
            },
            {
                "speakers": "1307163",
                "language": "Gogo",
                "countrycode": "TZA"
            },
            {
                "speakers": "1173095",
                "language": "Ha",
                "countrycode": "TZA"
            },
            {
                "speakers": "1977503",
                "language": "Haya",
                "countrycode": "TZA"
            },
            {
                "speakers": "2312673",
                "language": "Hehet",
                "countrycode": "TZA"
            },
            {
                "speakers": "1642333",
                "language": "Luguru",
                "countrycode": "TZA"
            },
            {
                "speakers": "1977503",
                "language": "Makonde",
                "countrycode": "TZA"
            },
            {
                "speakers": "1809918",
                "language": "Nyakusa",
                "countrycode": "TZA"
            },
            {
                "speakers": "7072087",
                "language": "Nyamwesi",
                "countrycode": "TZA"
            },
            {
                "speakers": "1441231",
                "language": "Shambala",
                "countrycode": "TZA"
            },
            {
                "speakers": "2949496",
                "language": "Swahili",
                "countrycode": "TZA"
            },
            {
                "speakers": "958232",
                "language": "Acholi",
                "countrycode": "UGA"
            },
            {
                "speakers": "3941818",
                "language": "Ganda",
                "countrycode": "UGA"
            },
            {
                "speakers": "980010",
                "language": "Gisu",
                "countrycode": "UGA"
            },
            {
                "speakers": "1807574",
                "language": "Kiga",
                "countrycode": "UGA"
            },
            {
                "speakers": "1284902",
                "language": "Lango",
                "countrycode": "UGA"
            },
            {
                "speakers": "1023566",
                "language": "Lugbara",
                "countrycode": "UGA"
            },
            {
                "speakers": "2330246",
                "language": "Nkole",
                "countrycode": "UGA"
            },
            {
                "speakers": "696896",
                "language": "Rwanda",
                "countrycode": "UGA"
            },
            {
                "speakers": "1785796",
                "language": "Soga",
                "countrycode": "UGA"
            },
            {
                "speakers": "1306680",
                "language": "Teso",
                "countrycode": "UGA"
            },
            {
                "speakers": "151368",
                "language": "Belorussian",
                "countrycode": "UKR"
            },
            {
                "speakers": "151368",
                "language": "Bulgariana",
                "countrycode": "UKR"
            },
            {
                "speakers": "151368",
                "language": "Hungarian",
                "countrycode": "UKR"
            },
            {
                "speakers": "50456",
                "language": "Polish",
                "countrycode": "UKR"
            },
            {
                "speakers": "353192",
                "language": "Romanian",
                "countrycode": "UKR"
            },
            {
                "speakers": "16600025",
                "language": "Russian",
                "countrycode": "UKR"
            },
            {
                "speakers": "32645030",
                "language": "Ukrainian",
                "countrycode": "UKR"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "UMI"
            },
            {
                "speakers": "3193509",
                "language": "Spanish",
                "countrycode": "URY"
            },
            {
                "speakers": "1670142",
                "language": "Chinese",
                "countrycode": "USA"
            },
            {
                "speakers": "239943726",
                "language": "English",
                "countrycode": "USA"
            },
            {
                "speakers": "1948499",
                "language": "French",
                "countrycode": "USA"
            },
            {
                "speakers": "1948499",
                "language": "German",
                "countrycode": "USA"
            },
            {
                "speakers": "1670142",
                "language": "Italian",
                "countrycode": "USA"
            },
            {
                "speakers": "556714",
                "language": "Japanese",
                "countrycode": "USA"
            },
            {
                "speakers": "835071",
                "language": "Korean",
                "countrycode": "USA"
            },
            {
                "speakers": "835071",
                "language": "Polish",
                "countrycode": "USA"
            },
            {
                "speakers": "556714",
                "language": "Portuguese",
                "countrycode": "USA"
            },
            {
                "speakers": "20876775",
                "language": "Spanish",
                "countrycode": "USA"
            },
            {
                "speakers": "1113428",
                "language": "Tagalog",
                "countrycode": "USA"
            },
            {
                "speakers": "556714",
                "language": "Vietnamese",
                "countrycode": "USA"
            },
            {
                "speakers": "486360",
                "language": "Karakalpak",
                "countrycode": "UZB"
            },
            {
                "speakers": "924084",
                "language": "Kazakh",
                "countrycode": "UZB"
            },
            {
                "speakers": "2650662",
                "language": "Russian",
                "countrycode": "UZB"
            },
            {
                "speakers": "1069992",
                "language": "Tadzhik",
                "countrycode": "UZB"
            },
            {
                "speakers": "437724",
                "language": "Tatar",
                "countrycode": "UZB"
            },
            {
                "speakers": "17654868",
                "language": "Uzbek",
                "countrycode": "UZB"
            },
            {
                "speakers": "0",
                "language": "Italian",
                "countrycode": "VAT"
            },
            {
                "speakers": "112974",
                "language": "Creole English",
                "countrycode": "VCT"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "VCT"
            },
            {
                "speakers": "96680",
                "language": "Goajiro",
                "countrycode": "VEN"
            },
            {
                "speakers": "23420730",
                "language": "Spanish",
                "countrycode": "VEN"
            },
            {
                "speakers": "24170",
                "language": "Warrau",
                "countrycode": "VEN"
            },
            {
                "speakers": "0",
                "language": "English",
                "countrycode": "VGB"
            },
            {
                "speakers": "75981",
                "language": "English",
                "countrycode": "VIR"
            },
            {
                "speakers": "2325",
                "language": "French",
                "countrycode": "VIR"
            },
            {
                "speakers": "12369",
                "language": "Spanish",
                "countrycode": "VIR"
            },
            {
                "speakers": "1117648",
                "language": "Chinese",
                "countrycode": "VNM"
            },
            {
                "speakers": "1117648",
                "language": "Khmer",
                "countrycode": "VNM"
            },
            {
                "speakers": "558824",
                "language": "Man",
                "countrycode": "VNM"
            },
            {
                "speakers": "718488",
                "language": "Miao",
                "countrycode": "VNM"
            },
            {
                "speakers": "1197480",
                "language": "Muong",
                "countrycode": "VNM"
            },
            {
                "speakers": "878152",
                "language": "Nung",
                "countrycode": "VNM"
            },
            {
                "speakers": "1277312",
                "language": "Thai",
                "countrycode": "VNM"
            },
            {
                "speakers": "1436976",
                "language": "Tho",
                "countrycode": "VNM"
            },
            {
                "speakers": "69294178",
                "language": "Vietnamese",
                "countrycode": "VNM"
            },
            {
                "speakers": "107540",
                "language": "Bislama",
                "countrycode": "VUT"
            },
            {
                "speakers": "53770",
                "language": "English",
                "countrycode": "VUT"
            },
            {
                "speakers": "26980",
                "language": "French",
                "countrycode": "VUT"
            },
            {
                "speakers": "0",
                "language": "Futuna",
                "countrycode": "WLF"
            },
            {
                "speakers": "0",
                "language": "Wallis",
                "countrycode": "WLF"
            },
            {
                "speakers": "1080",
                "language": "English",
                "countrycode": "WSM"
            },
            {
                "speakers": "85500",
                "language": "Samoan",
                "countrycode": "WSM"
            },
            {
                "speakers": "93600",
                "language": "Samoan-English",
                "countrycode": "WSM"
            },
            {
                "speakers": "18039552",
                "language": "Arabic",
                "countrycode": "YEM"
            },
            {
                "speakers": "0",
                "language": "Soqutri",
                "countrycode": "YEM"
            },
            {
                "speakers": "1755600",
                "language": "Albaniana",
                "countrycode": "YUG"
            },
            {
                "speakers": "361760",
                "language": "Hungarian",
                "countrycode": "YUG"
            },
            {
                "speakers": "53200",
                "language": "Macedonian",
                "countrycode": "YUG"
            },
            {
                "speakers": "148960",
                "language": "Romani",
                "countrycode": "YUG"
            },
            {
                "speakers": "8001280",
                "language": "Serbo-Croatian",
                "countrycode": "YUG"
            },
            {
                "speakers": "74480",
                "language": "Slovak",
                "countrycode": "YUG"
            },
            {
                "speakers": "5773911",
                "language": "Afrikaans",
                "countrycode": "ZAF"
            },
            {
                "speakers": "3432045",
                "language": "English",
                "countrycode": "ZAF"
            },
            {
                "speakers": "605655",
                "language": "Ndebele",
                "countrycode": "ZAF"
            },
            {
                "speakers": "3674307",
                "language": "Northsotho",
                "countrycode": "ZAF"
            },
            {
                "speakers": "3068652",
                "language": "Southsotho",
                "countrycode": "ZAF"
            },
            {
                "speakers": "1009425",
                "language": "Swazi",
                "countrycode": "ZAF"
            },
            {
                "speakers": "1736211",
                "language": "Tsonga",
                "countrycode": "ZAF"
            },
            {
                "speakers": "3270537",
                "language": "Tswana",
                "countrycode": "ZAF"
            },
            {
                "speakers": "888294",
                "language": "Venda",
                "countrycode": "ZAF"
            },
            {
                "speakers": "7146729",
                "language": "Xhosa",
                "countrycode": "ZAF"
            },
            {
                "speakers": "9165579",
                "language": "Zulu",
                "countrycode": "ZAF"
            },
            {
                "speakers": "2723193",
                "language": "Bemba",
                "countrycode": "ZMB"
            },
            {
                "speakers": "522633",
                "language": "Chewa",
                "countrycode": "ZMB"
            },
            {
                "speakers": "586816",
                "language": "Lozi",
                "countrycode": "ZMB"
            },
            {
                "speakers": "394267",
                "language": "Nsenga",
                "countrycode": "ZMB"
            },
            {
                "speakers": "715182",
                "language": "Nyanja",
                "countrycode": "ZMB"
            },
            {
                "speakers": "1008590",
                "language": "Tongan",
                "countrycode": "ZMB"
            },
            {
                "speakers": "256718",
                "language": "English",
                "countrycode": "ZWE"
            },
            {
                "speakers": "1890378",
                "language": "Ndebele",
                "countrycode": "ZWE"
            },
            {
                "speakers": "256718",
                "language": "Nyanja",
                "countrycode": "ZWE"
            },
            {
                "speakers": "8413349",
                "language": "Shona",
                "countrycode": "ZWE"
            }

        ];
        var result = {};
        for(var i = 0; i < obj.length; i++){
            for(var item in obj[i]){
                if(!result[item]){
                    result[item] = {};
                }
                if(!result[item][obj[i][item]]){
                    result[item][obj[i][item]] = 0;
                }
                
                
                result[item][obj[i][item]]++;
            }
        }
        console.log(result.language);
    }
