
(() => {

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("contacts__map", {
        center: [55.758468, 37.601088],
        zoom: 15,
        controls: ["geolocationControl", "zoomControl"],
      },
        {
          suppressMapOpenBlock: true,
          geolocationControlSize: "large",
          geolocationControlPosition: { top: "300px", right: "20px" },
          geolocationControlFloat: "none",
          zoomControlSize: "small",
          zoomControlFloat: "none",
          zoomControlPosition: { top: "200px", right: "20px" }
        }
    );

    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [55.8, 37.8] // координаты точки
        }
    });
    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/circle.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    },
    );

    if (window.matchMedia("(max-width: 1280px)").matches) {
      if (Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');
      }
    }

    myMap.behaviors.disable("scrollZoom");

    myMap.events.add("sizechange", function (e) {
      if (window.matchMedia("(max-width: 1280px)").matches) {
        if (Object.keys(myMap.controls._controlKeys).length) {
          myMap.controls.remove('zoomControl');
          myMap.controls.remove('geolocationControl');
        }
      } else {
        if (!Object.keys(myMap.controls._controlKeys).length) {
          myMap.controls.add('zoomControl');
          myMap.controls.add('geolocationControl');
        }
      }
    });

    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
}


document.addEventListener("DOMContentLoaded", function () {
  const validation = new window.JustValidate('.form', {
    errorRieldStyle: {
      border: '1px solid #D11616'
    },
    errorLabelStyle: {
      color: '#D11616',
    }
  });
  const selector = document.querySelector("input[type='tel']");
    const im = new Inputmask("+7 (999)-999-99-99");
    im.mask(selector);



    validation
      .addField('.name', [{
          rule: 'minLength',
          value: 3,
          errorMessage: "Вы не ввели имя"
        }
      ])
      .addField('.tel', [{
        rule: "function",
        validator: function (name, value) {
          const phone = selector.inputmask.unmaskedvalue();
          return phone.length === 10
        },
        errorMessage: 'Не достаточное количество символов',
      }]);
  });
})();
