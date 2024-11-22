// Función para calcular LTV básica
document.getElementById('ltv-basic-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita la recarga de la página
    
    const avgRevenue = parseFloat(document.getElementById('avgRevenue').value);
    const avgCustomerLifespan = parseFloat(document.getElementById('avgCustomerLifespan').value);

    if (isNaN(avgRevenue) || isNaN(avgCustomerLifespan)) {
        document.getElementById('basicResult').innerText = "Por favor, ingresa valores válidos.";
        return;
    }

    const ltv = avgRevenue * avgCustomerLifespan;
    document.getElementById('basicResult').innerText = `$${ltv.toFixed(2)}`;
});

// Función para limpiar el resultado de LTV básica
document.getElementById('clearBasicResult').addEventListener('click', function() {
    document.getElementById('basicResult').innerText = '';
    document.getElementById('ltv-basic-form').reset();
});

// Función para calcular LTV avanzada
document.getElementById('ltv-advanced-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita la recarga de la página
    
    const arpu = parseFloat(document.getElementById('averageRevenue').value);
    const cac = parseFloat(document.getElementById('customerAcquisitionCost').value);
    const lifetime = parseFloat(document.getElementById('customerLifetime').value);

    if (isNaN(arpu) || isNaN(cac) || isNaN(lifetime) || lifetime <= 0) {
        document.getElementById('advancedResult').innerText = 'Por favor, ingresa valores válidos.';
        return;
    }

    const ltv = (arpu * lifetime) - cac;
    document.getElementById('advancedResult').innerText = `$${ltv.toFixed(2)}`;
});

// Función para limpiar el resultado de LTV avanzada
document.getElementById('clearAdvancedResult').addEventListener('click', function() {
    document.getElementById('advancedResult').innerText = '';
    document.getElementById('ltv-advanced-form').reset();
});
