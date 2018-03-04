var obj, i, x = "";
obj =
    {
        "cities": [
            { "id": 1, "city": "Sortavala", "lat": 61.6487504, "lon": 30.5926449, "country": "Russia" },
            { "id": 2, "city": "Yufrus", "lat": 13.45529, "lon": 43.94704, "country": "Yemen" },
            { "id": 3, "city": "El Nido", "lat": 11.160632, "lon": 119.3978597, "country": "Philippines" },
            { "id": 4, "city": "Wangsi", "lat": 23.7247599, "lon": 108.8076195, "country": "China" },
            { "id": 5, "city": "Beiguoyuan", "lat": 36.632873, "lon": 107.288356, "country": "China" },
            { "id": 6, "city": "Buurhakaba", "lat": 2.7991084, "lon": 44.0793911, "country": "Somalia" },
            { "id": 7, "city": "Alofi", "lat": -19.0553711, "lon": -169.9178709, "country": "Niue" },
            { "id": 8, "city": "Bayt ‘Adhāqah", "lat": 15.61576, "lon": 43.70228, "country": "Yemen" },
            { "id": 9, "city": "Duru", "lat": 31.269454, "lon": 95.63196, "country": "China" },
            { "id": 10, "city": "Ban Huai Thalaeng", "lat": 14.9649534, "lon": 102.6298251, "country": "Thailand" },
            { "id": 11, "city": "Oelaba", "lat": -10.7540132, "lon": 122.9104995, "country": "Indonesia" },
            { "id": 12, "city": "Sindangan", "lat": 8.3104933, "lon": 122.9938347, "country": "Philippines" },
            { "id": 13, "city": "Rukem", "lat": -6.8013457, "lon": 111.4126837, "country": "Indonesia" },
            { "id": 14, "city": "Krzczonów", "lat": 49.7371648, "lon": 19.9186389, "country": "Poland" },
            { "id": 15, "city": "Otrado-Kubanskoye", "lat": 45.245678, "lon": 40.8360129, "country": "Russia" },
            { "id": 16, "city": "La Cruz", "lat": -34.3998126, "lon": -58.6057651, "country": "Argentina" },
            { "id": 17, "city": "Mrkonjić Grad", "lat": 44.4186959, "lon": 17.0868199, "country": "Bosnia and Herzegovina" },
            { "id": 18, "city": "Mehar", "lat": 27.1668637, "lon": 67.8288595, "country": "Pakistan" },
            { "id": 19, "city": "Mizur", "lat": 42.8509219, "lon": 44.0546008, "country": "Russia" },
            { "id": 20, "city": "Velké Hoštice", "lat": 49.936089, "lon": 17.9738035, "country": "Czech Republic" }
        ]

    }

var container = document.getElementById('container');
/*change the number for new index*/
var latFirst = obj.cities[1].lat;
var lonFirst = obj.cities[1].lon;
/*change the number for new index*/
var latSecond = obj.cities[3].lat;
var lonSecond = obj.cities[3].lon;

document.getElementById("container").innerHTML = "You have to change the Lat & Lon indexes in the code<br><br> LAT1 " + latFirst + "<br> LON1 " + lonFirst + "<br><br>" + " LAT2 " + latSecond + "<br> LON2 " + lonSecond;

/*
    credit to haversine formula
    https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
    
*/

function deg2rad(deg) {
    return deg * Math.PI / 180
}

function distance(lat1, lon1, lat2, lon2) {
    var R = 6371;
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    var result = parseFloat(Math.round(d * 100) / 100).toFixed(2);
    text = document.createElement('p');
    text.innerHTML = result + " KM distance";
    container.appendChild(text);
}

distance(latFirst, lonFirst, latSecond, lonSecond);