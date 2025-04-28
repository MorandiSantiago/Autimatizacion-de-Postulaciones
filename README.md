# Automatizador de Envío de Cartas de Presentación por Gmail usando Google Apps Script
Descripción
Este proyecto permite enviar de forma automática cartas de presentación personalizadas a múltiples empresas desde tu cuenta de Gmail, adjuntando tu CV en PDF.
Se conecta con una Google Sheets que contiene la información de empresas, correos y puestos.

Automatizado utilizando Google Apps Script (basado en JavaScript) y servicios de Google Drive, Gmail y Spreadsheets.

📂 ¿Qué archivos necesito?
Google Sheets con las siguientes columnas:

Empresa

Correo electrónico

Puesto

CV en Google Drive (en formato PDF).

🚀 ¿Cómo usar este proyecto?
1. Preparar el Google Sheets
Crea un nuevo archivo en Google Sheets con la siguiente estructura:


Empresa	Correo	Puesto
Empresa A	contacto@empresaA.com	Analista de Datos
Empresa B	rrhh@empresaB.com	Desarrollador Web
(Primera fila son los encabezados)

2. Subir tu CV a Google Drive
Sube tu archivo CV.pdf a Google Drive.

Haz clic derecho sobre el archivo → "Obtener enlace" → Copia el ID del archivo (es la parte larga entre /d/ y /view en el enlace).

Ejemplo:
Enlace: https://drive.google.com/file/d/1Vf7jmB70DIrvO9zbMCgPT2wh4ZTwrFsL/view?usp=sharing
ID: 1Vf7jmB70DIrvO9zbMCgPT2wh4ZTwrFsL

3. Crear el Script en Google Sheets
Dentro del Google Sheets, ve a Extensiones > Apps Script.

4. Configurar el Botón (Opcional)
Inserta un botón en Google Sheets (Insertar → Dibujo → Botón).

Asigna la función enviarCartasDePresentacion al botón.

Así cada vez que lo presiones, enviará todos los correos automáticamente.

⚙️ Tecnologías utilizadas
Lenguaje: JavaScript (Google Apps Script)

Servicios de Google: Gmail API, Drive API, Spreadsheet API

Entorno: Google Apps Script Editor

🛡️ Consideraciones
El remitente será tu propia cuenta de Gmail.

El nombre visible en el correo es el configurado en tu cuenta de Google.

El sistema no reenvía correos ya enviados, si quieres evitar duplicaciones, marca las filas después de enviar.

Revisar tu cuota de envío de Gmail (aprox. 100-150 correos diarios para cuentas gratuitas).
