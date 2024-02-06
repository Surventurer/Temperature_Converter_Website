document.addEventListener('DOMContentLoaded', function() {
    let celsius =  document.getElementById('celsius'); 
    let fahrenheit =  document.getElementById('fahrenheit'); 
    let kelvin =  document.getElementById('kelvin'); 
    let Reaumur =  document.getElementById('Reaumur');
    let Rankine = document.getElementById('Rankine');
    celsius.oninput = function () { 
        let f = (parseFloat(celsius.value) * 9) / 5 + 32; 
        fahrenheit.value = parseFloat(f.toFixed(2)); 

        let k = (parseFloat(celsius.value) + 273.15); 
        kelvin.value = parseFloat(k.toFixed(2)); 

        let R = (parseFloat(celsius.value) * 9) / 5 + 491.67;
        Rankine.value = parseFloat(R.toFixed(2)); 

        let Re = (parseFloat(celsius.value) * 0.8);
        Reaumur.value = parseFloat(Re.toFixed(2));
    } 
    fahrenheit.oninput = function () { 
        let c = ((parseFloat( 
            fahrenheit.value) - 32) * 5) / 9; 
        celsius.value = parseFloat(c.toFixed(2)); 

        let k = (parseFloat( 
            fahrenheit.value) - 32) * 5 / 9 + 273.15; 
        kelvin.value = parseFloat(k.toFixed(2)); 

        let R = (parseFloat(fahrenheit.value)) + 459.67;
        Rankine.value = parseFloat(R.toFixed(2));

        let Re = (parseFloat(fahrenheit.value) - 32)/2.25;
        Reaumur.value = parseFloat(Re.toFixed(2));
    } 
    kelvin.oninput = function () { 
        let f = (parseFloat( 
            kelvin.value) - 273.15) * 9 / 5 + 32; 
        fahrenheit.value = parseFloat(f.toFixed(2)); 

        let c = (parseFloat(kelvin.value) - 273.15); 
        celsius.value = parseFloat(c.toFixed(2)); 

        let R = parseFloat(kelvin.value) * 1.8;
        Rankine.value = parseFloat(R.toFixed(2));

        let Re = (parseFloat(kelvin.value) - 273.15) / 1.25;
        Reaumur.value = parseFloat(Re.toFixed(2));
    } 
    Rankine.oninput = function () { 
            let f = (parseFloat(Rankine.value) - 459.67); 
            fahrenheit.value = parseFloat(f.toFixed(2)); 

            let c = (parseFloat(Rankine.value) - 491.67)/1.8; 
            celsius.value = parseFloat(c.toFixed(2));

            let k = parseFloat(Rankine.value) / 1.8;
            kelvin.value = parseFloat(k.toFixed(2));

            let Re = (parseFloat(Rankine.value) - 491.67)/2.25; 
            Reaumur.value = parseFloat(Re.toFixed(2));
    }
    Reaumur.oninput = function () { 
        let f = (parseFloat(Reaumur.value) * 2.25) + 32; 
        fahrenheit.value = parseFloat(f.toFixed(2)); 

        let c = (parseFloat(Reaumur.value) * 1.25); 
        celsius.value = parseFloat(c.toFixed(2));

        let k = (parseFloat(Reaumur.value) * 1.25) + 273.15;
            kelvin.value = parseFloat(k.toFixed(2));

        let R = (parseFloat(Reaumur.value) * 2.25) + 491.67;
            Rankine.value = parseFloat(R.toFixed(2));
    }
});
