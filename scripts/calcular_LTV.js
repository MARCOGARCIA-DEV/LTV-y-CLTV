// Función para calcular LTV básica
document.getElementById('ltv-basic-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener valores del formulario
    const avgRevenue = document.getElementById('avgRevenue').value;
    const avgCustomerLifespan = document.getElementById('avgCustomerLifespan').value;

    // Calcular el LTV
    const ltv = avgRevenue * avgCustomerLifespan;

    // Mostrar el resultado
    document.getElementById('basicResult').innerText = `$${ltv.toFixed(2)}`;

    // Mostrar el botón de descarga
    document.getElementById('descargarBtn').style.display = 'block';
});

document.getElementById('clearBasicResult').addEventListener('click', function() {
    // Limpiar los campos y resultados
    document.getElementById('avgRevenue').value = '';
    document.getElementById('avgCustomerLifespan').value = '';
    document.getElementById('basicResult').innerText = '';
    document.getElementById('descargarBtn').style.display = 'none';
});

//-----------------------------------------------------------------------------------------------------------------------------

// Función para calcular LTV avanzada
document.getElementById('ltv-advanced-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener valores del formulario
    const averageRevenue = document.getElementById('averageRevenue').value;
    const customerAcquisitionCost = document.getElementById('customerAcquisitionCost').value;
    const customerLifetime = document.getElementById('customerLifetime').value;

    // Calcular el LTV (ARPU - CAC)
    const ltv = (averageRevenue * customerLifetime) - customerAcquisitionCost;

    // Mostrar el resultado
    document.getElementById('advancedResult').innerText = `$${ltv.toFixed(2)}`;

    // Mostrar el botón de descarga
    document.getElementById('descargarBtn01').style.display = 'block';
});

document.getElementById('clearAdvancedResult').addEventListener('click', function() {
    // Limpiar los campos y resultados
    document.getElementById('averageRevenue').value = '';
    document.getElementById('customerAcquisitionCost').value = '';
    document.getElementById('customerLifetime').value = '';
    document.getElementById('advancedResult').innerText = '';
    document.getElementById('descargarBtn01').style.display = 'none';
});

