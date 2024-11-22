//CALCULADORA CLTV BASICA
// Lógica de la calculadora básica CLTV
document.getElementById('cltv-basic-form').addEventListener('submit',function(event) {
    event.preventDefault();

    //Obtener valores de formulario
    const compraPromedio = document.getElementById('compraPromedio').value;
    const frecuenciaCompra = document.getElementById('frecuenciaCompra').value;
    const duracionCliente = document.getElementById('duracionCliente').value;

    //calcular CLTV BASIC
    const clv = compraPromedio * frecuenciaCompra * duracionCliente;

    // Formatear el resultado con coma de miles - MUESTRA EL RESULTADO
    document.getElementById('clv').innerText = "$" + clv.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

   // Mostrar el botón de descarga
   document.getElementById('descargarBtn03').style.display = 'block';    
});

document.getElementById('clearBasicResult15').addEventListener('click', function() {
    //limpiar mis datos de los input
    document.getElementById('compraPromedio').value = '';
    document.getElementById('frecuenciaCompra').value = '';
    document.getElementById('duracionCliente').value = '';
    document.getElementById('clv').innerText = '';
    document.getElementById('descargarBtn03').style.display = 'none';
});

//-------------------------------------------------------------------------------------------------------------------
//CALCULADORA CLTV TRADICONAL
// Función para validar que el valor no exceda un límite máximo
function validateInput(input, maxValue, fieldName) {
    let value = parseFloat(input.value);
    if (value > maxValue) {
        alert(fieldName + " no puede ser mayor a " + maxValue + "%. Por favor, ingrese un valor válido.");
        input.value = maxValue; // Establecer el valor máximo permitido
    } else if (value < 0) {
        alert(fieldName + " no puede ser menor a 0%. Por favor, ingrese un valor válido.");
        input.value = 0; // Establecer el valor mínimo permitido
    }
}

// Añadir eventos de validación en tiempo real para cada campo
document.getElementById('retention-discounted').addEventListener('input', function() {
    validateInput(this, 100, "La probabilidad de retención");
});

document.getElementById('discount-discounted').addEventListener('input', function() {
    validateInput(this, 20, "La tasa de descuento");
});

// Lógica de cálculo de la CLTV TRADICIONAL
document.getElementById('cltv-advanced-form-2').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores de mi formulario y convertir a números
    const incomeDiscounted = parseFloat(document.getElementById('income-discounted').value);
    let retentionDiscounted = parseFloat(document.getElementById('retention-discounted').value);
    let discountDiscounted = parseFloat(document.getElementById('discount-discounted').value);
    const yearsDiscounted = parseInt(document.getElementById('years-discounted').value);

    // Validar que los valores ya están ajustados por la función validateInput

    // Convertir a decimal para el cálculo
    retentionDiscounted /= 100;
    discountDiscounted /= 100;

    // Calcular CLTV TRADICIONAL
    let cltv = 0;
    for (let t = 0; t <= yearsDiscounted; t++) {
        cltv += (incomeDiscounted * Math.pow(retentionDiscounted, t)) / Math.pow(1 + discountDiscounted, t);
    }

    // RESULTADOS
    document.getElementById("result-discounted").innerText = "$" + cltv.toFixed(2);

    // Mostrar el botón de descarga
    document.getElementById('descargarBtn04').style.display = 'block';
});

// Limpiar los resultados
document.getElementById('clearBasicResult20').addEventListener('click', function() {
    // Limpiar los inputs de la CLTV TRADICIONAL
    document.getElementById('income-discounted').value = '';
    document.getElementById('retention-discounted').value = '';
    document.getElementById('discount-discounted').value = '';
    document.getElementById('years-discounted').value = '';
    document.getElementById('result-discounted').innerText = '';
    document.getElementById('descargarBtn04').style.display = 'none';
});
//-------------------------------------------------------------------------------------------------------------------
//CALCULAODRA CLTV MARGEN
// Función para validar que el valor no exceda un límite máximo
function validateInput(input, maxValue, fieldName) {
    let value = parseFloat(input.value);
    if (value > maxValue) {
        alert(fieldName + " no puede ser mayor a " + maxValue + "%. Por favor, ingrese un valor válido.");
        input.value = maxValue; // Establecer el valor máximo permitido
    } else if (value < 0) {
        alert(fieldName + " no puede ser menor a 0%. Por favor, ingrese un valor válido.");
        input.value = 0; // Establecer el valor mínimo permitido
    }
}

// Añadir eventos de validación en tiempo real para cada campo
document.getElementById('retention-margin').addEventListener('input', function() {
    validateInput(this, 100, "La probabilidad de retención");
});

document.getElementById('discount-margin').addEventListener('input', function() {
    validateInput(this, 20, "La tasa de descuento");
});

document.getElementById('margin-margin').addEventListener('input', function() {
    validateInput(this, 100, "Margen Bruto");
});

// Lógica de cálculo de la LTV
document.getElementById('cltv-advanced-form-30').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario y convertir a números
    const incomeDiscounted = parseFloat(document.getElementById('income-margin').value);
    const grossMargin = parseFloat(document.getElementById('margin-margin').value);
    let retentionDiscounted = parseFloat(document.getElementById('retention-margin').value);
    let discountDiscounted = parseFloat(document.getElementById('discount-margin').value);
    const yearsDiscounted = parseInt(document.getElementById('years-margin').value);

    // Validar que los valores ya están ajustados por la función validateInput

    // Convertir a decimal para el cálculo
    retentionDiscounted /= 100;
    discountDiscounted /= 100;
    const grossMarginDecimal = grossMargin / 100;

    // Calcular LTV con margen bruto
    let cltv = 0;
    for (let t = 0; t <= yearsDiscounted; t++) {
        cltv += (incomeDiscounted * grossMarginDecimal * Math.pow(retentionDiscounted, t)) / Math.pow(1 + discountDiscounted, t);
    }

    // RESULTADOS
    document.getElementById("advancedResult30").innerText = "$" + cltv.toFixed(2);

    // Mostrar el botón de descarga
    document.getElementById('descargarBtn50').style.display = 'block';
});

// Limpiar los resultados
document.getElementById('clearAdvancedResult50').addEventListener('click', function() {
    // Limpiar los inputs de la LTV
    document.getElementById('income-margin').value = '';
    document.getElementById('margin-margin').value = '';
    document.getElementById('retention-margin').value = '';
    document.getElementById('discount-margin').value = '';
    document.getElementById('years-margin').value = '';
    document.getElementById('advancedResult30').innerText = '';
    document.getElementById('descargarBtn50').style.display = 'none';
});
//----------------------------------------------------------------------------------------------------------------------
//CLACULADORA CLTV PREDITIVA

//CLACULADORA CLTV PREDITIVA

// Función para validar que el valor no exceda un límite máximo
function validateInput(input, maxValue, fieldName) {
    let value = parseFloat(input.value);
    if (value > maxValue) {
        alert(fieldName + " no puede ser mayor a " + maxValue + "%. Por favor, ingrese un valor válido.");
        input.value = maxValue; // Establecer el valor máximo permitido
    } else if (value < 0) {
        alert(fieldName + " no puede ser menor a 0%. Por favor, ingrese un valor válido.");
        input.value = 0; // Establecer el valor mínimo permitido
    }
}

// Añadir eventos de validación en tiempo real para cada campo de retención por año
document.getElementById('retention-year-1').addEventListener('input', function() {
    validateInput(this, 100, "La probabilidad de retención Año 1");
});
document.getElementById('retention-year-2').addEventListener('input', function() {
    validateInput(this, 100, "La probabilidad de retención Año 2");
});
document.getElementById('retention-year-3').addEventListener('input', function() {
    validateInput(this, 100, "La probabilidad de retención Año 3");
});

// Lógica de cálculo de la LTV con retenciones por año
document.getElementById('cltv-advanced-form-40').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario y convertir a números
    const ingresopromedio = parseFloat(document.getElementById('ingreso_promedio').value);
    let retentionYear1 = parseFloat(document.getElementById('retention-year-1').value) / 100;
    let retentionYear2 = parseFloat(document.getElementById('retention-year-2').value) / 100;
    let retentionYear3 = parseFloat(document.getElementById('retention-year-3').value) / 100;

    // Verificar que los valores no sean NaN
    if (isNaN(ingresopromedio) || isNaN(retentionYear1) || isNaN(retentionYear2) || isNaN(retentionYear3)) {
        alert("Por favor, complete todos los campos con valores válidos.");
        return;
    }

    const cltv = (ingresopromedio * retentionYear1) + (ingresopromedio * retentionYear2) + (ingresopromedio * retentionYear3);

    // RESULTADOS
    document.getElementById("result-prediction").innerText = "$" + cltv.toFixed(2);

    // Mostrar el botón de descarga
    document.getElementById('descargarBtn60').style.display = 'block';
});

// Limpiar los resultados
document.getElementById('clearAdvancedResult60').addEventListener('click', function() {
    // Limpiar los inputs de la LTV
    document.getElementById('ingreso_promedio').value = '';
    document.getElementById('retention-year-1').value = '';
    document.getElementById('retention-year-2').value = '';
    document.getElementById('retention-year-3').value = '';
    document.getElementById('result-prediction').innerText = '';
    document.getElementById('descargarBtn60').style.display = 'none';
});

//------------------------------------------------------------------------------------------------------
// Función para validar que las probabilidades no excedan el 100% y permitir solo números y comas
function validateInput(input, maxValue, fieldName) {
    let value = parseFloat(input.value.replace(',', '.')); // Reemplazar comas por puntos decimales
    if (value > maxValue) {
        alert(fieldName + " no puede ser mayor a " + maxValue + "%. Por favor, ingrese un valor válido.");
        input.value = maxValue; // Establecer el valor máximo permitido
    } else if (value < 0) {
        alert(fieldName + " no puede ser menor a 0%. Por favor, ingrese un valor válido.");
        input.value = 0; // Establecer el valor mínimo permitido
    }
}

// Añadir eventos de validación en tiempo real para cada campo
document.getElementById('state1-markov').addEventListener('input', function() {
    validateInput(this, 100, "La probabilidad del Estado 1");
});
document.getElementById('state2-markov').addEventListener('input', function() {
    validateInput(this, 100, "La probabilidad del Estado 2");
});
document.getElementById('state3-markov').addEventListener('input', function() {
    validateInput(this, 100, "La probabilidad del Estado 3");
});

// Lógica de cálculo de la CLTV con el modelo Markov
document.getElementById('cltv-advanced-form-5').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario y convertir a números
    const state1 = parseFloat(document.getElementById("state1-markov").value.replace(',', '.')) / 100;
    const value1 = parseFloat(document.getElementById("value1-markov").value.replace(',', '.'));
    const state2 = parseFloat(document.getElementById("state2-markov").value.replace(',', '.')) / 100;
    const value2 = parseFloat(document.getElementById("value2-markov").value.replace(',', '.'));
    const state3 = parseFloat(document.getElementById("state3-markov").value.replace(',', '.')) / 100;
    const value3 = parseFloat(document.getElementById("value3-markov").value.replace(',', '.'));

    // Verificar si los valores ingresados son válidos
    if (isNaN(state1) || isNaN(value1) || isNaN(state2) || isNaN(value2) || isNaN(state3) || isNaN(value3)) {
        alert("Por favor, ingresa solo números válidos.");
        return;
    }

    // Calcular la suma total de las probabilidades para validar que no exceda el 100%
    const totalProbability = (state1 * 100) + (state2 * 100) + (state3 * 100);

    if (totalProbability > 100) {
        alert("La suma de las probabilidades no puede exceder el 100%. Actualmente es " + totalProbability + "%.");
        return;
    }

    // Calcular el CLTV
    const clv = (state1 * value1) + (state2 * value2) + (state3 * value3);

    // Mostrar el resultado del CLTV en pantalla
    document.getElementById("result-markov").innerText = "$" + clv.toFixed(2);

    // Mostrar el botón de descarga
    document.getElementById('descargarBtn70').style.display = 'block';
});

// Limpiar los resultados
document.getElementById('clearAdvancedResult70').addEventListener('click', function() {
    // Limpiar los inputs de la LTV
    document.getElementById("state1-markov").value = '';
    document.getElementById("value1-markov").value = '';
    document.getElementById("state2-markov").value = '';
    document.getElementById("value2-markov").value = '';
    document.getElementById("state3-markov").value = '';
    document.getElementById("value3-markov").value = '';
    document.getElementById("result-markov").innerText = '';
    document.getElementById("descargarBtn70").style.display = 'none';
});
