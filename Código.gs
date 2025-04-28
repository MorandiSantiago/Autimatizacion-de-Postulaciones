const ID_CV = '1Vf7jmB70DIrvO9zbMCgPT2wh4ZTwrFsL'; //  ID CV en Google Drive

function enviarCartasDePresentacion() {
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const datos = hoja.getDataRange().getValues();
  
  for (let i = 1; i < datos.length; i++) {
    const fila = datos[i];
    const empresa = fila[0];
    const correoEmpresa = fila[1];
    const puesto = fila[2];
    
    if (!correoEmpresa) continue; // Saltear si falta correo
    
    // Cargar el CV desde Drive
    const cv = DriveApp.getFileById(ID_CV).getAs('application/pdf');
    
    // Asunto
    const asunto = `Postulación para ${puesto} - Santiago Morandi`;
    
    // Cuerpo del mail en HTML
    const mensaje = `
    <p>Estimado equipo de ${empresa}, me gustaría postularme para el puesto de ${puesto}.</p>

    <p>Soy estudiante avanzado de Ingeniería Industrial con una sólida base técnica y experiencia aplicada en desarrollo web, automatización de procesos y análisis de datos. Estoy motivado por el desafío de aportar mis capacidades técnicas y analíticas a proyectos innovadores en ${empresa}.</p>

    <p>A lo largo de mi formación y de proyectos profesionales, he trabajado con tecnologías como JavaScript, Python, SQL y Power BI, enfocándome en optimizar procesos, mejorar la eficiencia operativa y facilitar la toma de decisiones basada en datos. Algunos de los proyectos donde he aplicado estas habilidades incluyen:</p>

    <p>
      <strong>Desarrollo de sitios web optimizados</strong>: Diseño y optimización de páginas web, mejorando la velocidad de carga y la experiencia del usuario.<br>
      <strong>Automatización de procesos administrativos</strong>: Implementación de soluciones automatizadas en Excel y Google Apps Script para reducir errores y aumentar la productividad, como la planificación de turnos hospitalarios.<br>
      <strong>Análisis de datos y visualización</strong>: Generación de dashboards y reportes interactivos en Power BI para facilitar decisiones estratégicas a partir de grandes volúmenes de datos.
    </p>

    <p>Me considero una persona con fuerte pensamiento analítico, proactiva y comprometida con la mejora continua. Mi perfil combina conocimientos técnicos con la capacidad de trabajar en equipo y adaptarme a nuevos desafíos.</p>

    <p>Adjunto mi CV para su evaluación. Quedo a disposición para ampliar información sobre mi perfil y conversar sobre cómo podría contribuir a los proyectos de ${empresa}.</p>

    <p>Muchas gracias por su tiempo y consideración.</p>

    <p>Atentamente,<br>
    Santiago Morandi<br>
    +54 260 4222117<br>
    <a href="https://linkedin.com/in/santiago-morandi1">LinkedIn</a> | <a href="https://morandisantiago.github.io/Porfolio">Portfolio</a></p>
    `;

    // Enviar el mail en HTML
    GmailApp.sendEmail(correoEmpresa, asunto, '', {
      htmlBody: mensaje,
      attachments: [cv],
      name: 'Santiago Morandi'
    });
  }
}
