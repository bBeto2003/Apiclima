const request = require('postman-request');
request('http://api.weatherstack.com/current?access_key=e9c911d9d5b3d77eed59ca3945d557df&query=19.323156%-103.756589', function(error, response, body1) {
    if (error != null) {
        console.log('error:', error);
    } else {
        request('http://api.airvisual.com/v2/nearest_city?lat=36.737577&lon=-119.785935&key=ef6ea22e-6d5f-4278-92e7-fe85dcbe292e', function(error1, response, body2) {
            if (error1 != null) {
              //  console.log('error:', error1);
            } else {
                let json1 = JSON.parse(body1);
               // console.log(json1)

                let json2 = JSON.parse(body2);
                console.log(json2)
                console.log('API #1')
                console.log('Localidad:  '+json1.location.name)
                console.log('Estado:  '+json1.location.region)
                console.log('Pais:  '+json1.location.country)
                console.log('Temperatura:  '+json1.current.temperature)
                console.log('Humedad:  '+json1.current.humidity)
                console.log('Nubosidad:  '+json1.current.cloudcover)
                console.log('--------------')
                console.log('API #2')
                console.log('Localidad: '+json2.data.city)
                console.log('Estado:  '+json2.data.state)
                console.log('Pais: '+json2.data.country)
                console.log('Temperatura: '+json2.data.current.weather.tp)
                console.log('Grados de contaminacion: '+json2.data.current.pollution.aqius)
                console.log('Grados de contaminacion: '+json2.data.current.pollution.aqicn)
                
                
            }
        });
    }
});

