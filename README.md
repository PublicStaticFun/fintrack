![Miniatura 2](https://github.com/PublicStaticFun/fintrack/blob/main/Portada2.png?raw=true)

# Sistema de Financiamiento FinTrack
Este proyecto es una aplicación Full Stack diseñada para administrar y visualizar transacciones financieras, incluyendo ingresos y gastos.

El sistema permite llevar un registro detallado de las operaciones monetarias, organizar la información por categorías y mostrar los datos en un panel dinámico.

La aplicación está dividida en dos partes:
* **Backend**: proporciona API segura y robusta para gestionar transacciones y categorías.
* **Frontend**: interfaz visual sencilla, rápida y moderna para interactuar con la API.

## Objetivo
Es crear un sistema que permita:

* **Registrar ingresos y gastos**
* **Gestionar categorías personalizadas**
* **Consultar una lista de transacciones**
* **Visualizar los datos de forma ordenada**
* **Facilitar la administración financiera del usuario**

## Funciones

Para la gestión de transacciones:
* Crea transacciones con:
  * **Monto**
  * **Descripción**
  * **Tipo (ingreso/gasto)**
  * **Categoría**
  * **Fecha**
  * **Titulo**
* Validación en backend para evitar errores de datos
* Listado de todas las transacciones, ordenadas por fecha.

Para la gestión de categorías:
* Crear categorías desde el backend o un panel administrativo.
* Listar categorías para asignarlas a una transacción
* Evitar duplicados mediante validación del modelo.

Para la interfaz frontend con **React**:
* Formulario para agregar transacciones.
* Listado visual de todas las transacciones
* Diseño moderno con TailwindCSS
* Comunicación directa con API Django mediante fetch o axios.

Manejo de errores:
* Validaciones automáticas en campos obligatorios.
* Respuestas JSON con mensajes claros.
* Manejo de errores en el frontend (try/catch)
* Configuración de `.env` para evitar errores por variables faltantes.

## Realización del proyecto
Para la realización de este proyecto, implementamos estos frameworks:
<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" height="40" alt="django logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="40" alt="postgresql logo"  />
</div>

Otros programas serian: 
* **Django REST Framework**
* **python-dotenv**: manejo de variables de entorno.
* **CORS Headers**
* **Axios**
* **TailwindCSS**
