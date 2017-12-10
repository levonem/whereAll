

function chClSecItems(elem){
    switch(elem){
        case 'waiting' : 
            waiting.classList.add("second_link_active");
            plans.classList.remove("second_link_active");
            past.classList.remove("second_link_active");
            my.classList.remove("second_link_active");
        break;

        case 'plans' : 
            plans.classList.add("second_link_active");
            waiting.classList.remove("second_link_active");
            past.classList.remove("second_link_active");
            my.classList.remove("second_link_active");
        break;

        case 'past' : 
            past.classList.add("second_link_active");
            plans.classList.remove("second_link_active");
            waiting.classList.remove("second_link_active");
            my.classList.remove("second_link_active");
        break;

        case 'my' : 
            my.classList.add("second_link_active");
            plans.classList.remove("second_link_active");
            waiting.classList.remove("second_link_active");
            past.classList.remove("second_link_active");
        break;
    }
    
}

function chClMainItems(elem){
    switch(elem){
        case 'dev' : 
            people.classList.remove("main_link_active");
            dialogs.classList.remove("main_link_active");
            dev.classList.add("main_link_active");
        
        break;

        case 'dialogs' : 
            dev.classList.remove("main_link_active");
            people.classList.remove("main_link_active");
            dialogs.classList.add("main_link_active");
        
        break;

        case 'people' : 
            dev.classList.remove("main_link_active");
            dialogs.classList.remove("main_link_active");
            people.classList.add("main_link_active");
        
        break;
        
    }
}
dev.onclick = () => {chClMainItems('dev')};
dialogs.onclick =() => {chClMainItems('dialogs')};
people.onclick = () => {chClMainItems('people')};

waiting.onclick = () =>{chClSecItems('waiting')};
plans.onclick = () =>{chClSecItems('plans')};
past.onclick = () =>{chClSecItems('past')};
my.onclick = () =>{chClSecItems('my')};


// dev.onclick = function () {
//     people.classList.remove("main_link_active");
//     dialogs.classList.remove("main_link_active");
//     dev.classList.add("main_link_active");
// }

// dialogs.onclick = function () {
//     dev.classList.remove("main_link_active");
//     people.classList.remove("main_link_active");
//     dialogs.classList.add("main_link_active");
// }

// people.onclick = function () {
//     dev.classList.remove("main_link_active");
//     dialogs.classList.remove("main_link_active");
//     people.classList.add("main_link_active");
// }

// waiting.onclick = function () {
//     waiting.classList.add("second_link_active");
//     plans.classList.remove("second_link_active");
//     past.classList.remove("second_link_active");
//     my.classList.remove("second_link_active");

// }

// plans.onclick = function () {
//     plans.classList.add("second_link_active");
//     waiting.classList.remove("second_link_active");
//     past.classList.remove("second_link_active");
//     my.classList.remove("second_link_active");

// }

// past.onclick = function () {
//     past.classList.add("second_link_active");
//     plans.classList.remove("second_link_active");
//     waiting.classList.remove("second_link_active");
//     my.classList.remove("second_link_active");

// }

// my.onclick = function () {
//     my.classList.add("second_link_active");
//     plans.classList.remove("second_link_active");
//     waiting.classList.remove("second_link_active");
//     past.classList.remove("second_link_active");

// }

//map/////////////////////////////////////////////////////////////////

// function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: 40, lng: 40 },
//         zoom: 2
//     });

    
//     // Try HTML5 geolocation.
//     img_location.onclick = function () {
//         if (navigator.geolocation) {
//             var infoWindow = new google.maps.InfoWindow({ map: map });
//             navigator.geolocation.getCurrentPosition(function (position) {
//                 var pos = {
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude
//                 };

//                 infoWindow.setPosition(pos);
//                 infoWindow.setContent('Location found.');
//                 map.setCenter(pos);

//                 var marker = new google.maps.Marker({
//                     position: pos,
//                     map: map,
//                     title: 'position!',
//                 });
//                 map.setZoom(8);
//             }, function () {
//                 handleLocationError(true, infoWindow, map.getCenter());
//             });
//         } else {
//             // Browser doesn't support Geolocation
//             handleLocationError(false, infoWindow, map.getCenter());
//         }

//     }

//     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//         infoWindow.setPosition(pos);
//         infoWindow.setContent(browserHasGeolocation ?
//             'Error: The Geolocation service failed.' :
//             'Error: Your browser doesn\'t support geolocation.');
//     }

// }


function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap'
    });


    img_location.onclick = function () {
        if (navigator.geolocation) {
            var infoWindow = new google.maps.InfoWindow({ map: map });
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                map.setCenter(pos);

                var marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    title: 'position!',
                });
                map.setZoom(8);
            }, function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            handleLocationError(false, infoWindow, map.getCenter());
        }

    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    }
    


    searchMap.onclick = function () {
        
            let div = document.body.appendChild(document.createElement("div"));
            let input = div.appendChild(document.createElement("input"));
            let p = div.appendChild(document.createElement("p"));
            let i = div.appendChild(document.createElement("i"));
        
            div.className = "sreach-map";
            input.setAttribute("type","text");
            input.setAttribute("id", "pac_input");
            input.setAttribute("placeholder", "Search Box");
            p.className = "keyword";
            p.innerHTML = " Press ENTER to close window ";
            i.className = "close fa fa-times";

           i.onclick = () => {
            searchLocNow.value = input.value;
            div.remove();
           };
        
            document.addEventListener("keyup", function(event) {
                event.preventDefault();
                if (event.keyCode === 13) {
                    searchLocNow.value = input.value;
                    div.remove();
                }
            });
        
            var pac_input = document.getElementById('pac_input');
            var searchBox = new google.maps.places.SearchBox(pac_input);
            map.addListener('bounds_changed', function() {
                searchBox.setBounds(map.getBounds());
              });
              var markers = [];
              // Listen for the event fired when the user selects a prediction and retrieve
              // more details for that place.
              searchBox.addListener('places_changed', function() {
                var places = searchBox.getPlaces();
          
                if (places.length == 0) {
                  return;
                }
          
                // Clear out the old markers.
                markers.forEach(function(marker) {
                  marker.setMap(null);
                });
                markers = [];
                var bounds = new google.maps.LatLngBounds();
                places.forEach(function(place) {
                  if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                  }
                  var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                  };
          
                  // Create a marker for each place.
                  markers.push(new google.maps.Marker({
                    map: map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location
                  }));
          
                  if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                  } else {
                    bounds.extend(place.geometry.location);
                  }
                });
                map.fitBounds(bounds);
              });
        }
        

      // For each place, get the icon, name and location.
     
  }



//map end/////////////////////////////////////////////////////////////////////////////


class Event {

    constructor() {
        let titles = ["Ассорти", "Искусство на грани безумия", "Мастер-класс по Массфолловингу", "HRD Inter Forum ALMATY"];
        let metros = ["Маяковская", "Киевская", "Комсомольская", "Площадь революции"];
        let addresses = ["Невский проспект, 20", "Киев", "Одесса", "Алматы"];
        let userNames = ["Олег Ермаков" , "Ангелина Колядина", "Златослава Минерова" , "Анатолий Антропов"];

        this.title = titles[Math.floor(Math.random() * titles.length)];
        this.metro = metros[Math.floor(Math.random() * metros.length)];
        this.address = addresses[Math.floor(Math.random() * addresses.length)];
        this.userName = userNames[Math.floor(Math.random() * userNames.length)]
        this.date = this.getRandomDate(new Date(), new Date(2018, 1, 1));
        this.time = this.checkTime(this.date.getHours()) + ":" + this.checkTime(this.date.getMinutes());
        this.dayAndMonth = this.date.getDate() + " " + this.getMonthName(this.date.getMonth());
        this.price = Math.floor((Math.random() * 20) + 1) * 50 - 1;
    }

    checkTime(i){
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }

    getRandomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

        getMonthName(monthNumber) {
        let month = [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'hoktember',
            'Ноябрь',
            'Декабрь',
        ];
        return month[monthNumber];
    }

    static getEvents() {
        let eventsArr = [];

        let length = Math.floor(9 + Math.random() * 12);

        for (var i = 0; i < length; i++) {
            eventsArr[i] = new Event();
        }

        return eventsArr;
    }
}



function replaceInTemplate(str, obj)
{
    for(k in obj)
    {
        str = str.replace(`{{${k}}}` , obj[k]);
    }

    return str;
}

let eventsArr = Event.getEvents();

let template = eventTemplate.innerHTML;


for (var i = 0; i < eventsArr.length; i++) {
    var event = eventsArr[i];

    eventsList.innerHTML += replaceInTemplate(template, event);
}

