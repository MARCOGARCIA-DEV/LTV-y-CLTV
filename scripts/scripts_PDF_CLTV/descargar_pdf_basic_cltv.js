function descargarPDF03() {
    const clvResult = document.getElementById('clv').innerText;

    // Crear un nuevo documento PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // AÑADIR IMAGEN EN PDF (aquí se usa una imagen en formato base64)
    const imgData = 'data:image/png;base64,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'; // Reemplaza con tu imagen en base64

    const imgWidth = 25; // Ancho de la imagen
    const imgHeight = 25; // Alto de la imagen
    const pageWidth = doc.internal.pageSize.getWidth();
    const imgX = 15; // Posicionar la imagen a la izquierda

    // Añadir la imagen al PDF
    doc.addImage(imgData, 'PNG', imgX, 10, imgWidth, imgHeight);

    // Establecer la fuente y tamaño de texto para el título
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(16);
    const title = "GEN - Consultores";
    const titleX = pageWidth - 20; // Posicionar el título a la derecha
    

    // Añadir el título al PDF
    doc.text(title, titleX, 25, { align: "right" });
    doc.setFont('Helvetica', 'normal');

    // Línea debajo del encabezado
   doc.setLineWidth(0.5);
   doc.line(15, 40, 195, 40);

   // Agregar el texto adicional justo debajo de la línea
   doc.setFont('Helvetica', 'bold');
   const additionalText = "RESULTADOS DE TU CALCULO CLTV | BÁSICO";
   doc.setFontSize(12);
   const textWidth = doc.getTextWidth(additionalText);
   const textX = (pageWidth - textWidth) / 2;
   doc.text(additionalText, textX, 50);

   // Añadir espacio después del texto adicional antes de los detalles
   let y = 63;
   const lineHeight = 10;

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(`Compra Promedio (en dólares): ${document.getElementById('compraPromedio').value}`, 20, y);
    y += lineHeight;
    doc.text(`Frecuencia de Compra (veces al año): ${document.getElementById('frecuenciaCompra').value}`, 20, y);
    y += lineHeight;
    doc.text(`Duración Promedio del Cliente (años): ${document.getElementById('duracionCliente').value}`, 20, y);
    y += lineHeight;
    doc.text("CLTV: $" + clvResult, 20, y);
    y += lineHeight;


    doc.setLineWidth(0.5);
    doc.rect(15, 55, 180, y - 55); // Cambia el tamaño del rectángulo según sea necesario

    // Agregar el texto adicional justo debajo de la línea
    const contactText = "ANALISIS MAS PERSONALIZADOS Y CONSULTORIAS | ESCRIBENOS A: gerencia@gen.pe ";
    doc.setFontSize(10);
    const contacttextWidth = doc.getTextWidth(contactText);
    const contacttextX = (pageWidth - contacttextWidth) / 2;
    doc.text(contactText, contacttextX, 110);

    // Guardar el PDF
    doc.save("Resultados_CLTV_Basic.pdf");
}