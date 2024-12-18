## 🌟 Descripción

¡Bienvenido a **Pickle Rick App**! Esta aplicación está diseñada para ofrecer una experiencia de usuario fluida y atractiva, permitiendo a los usuarios interactuar con diversas funcionalidades de manera intuitiva.

## 📊 Manejo de Peticiones

La aplicación actualmente hace una petición sencilla a la API, sin tomar en cuenta la paginación. Sin embargo, se insta a realizar el flujo necesario para la paginación. En este momento, solo se está trayendo una página de datos, mostrando un listado de **20 personajes**. Sin embargo, puedes entrar al buscador, presionar el botón de buscar y ver entre todos los que figuran en la API, lo que te permite acceder a una mayor cantidad de información.

## 🚀 Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes elementos en tu máquina:

- **Node.js** y **npm**: Necesarios para gestionar las dependencias del proyecto.
- **Expo Go**: Instala esta aplicación en tu dispositivo móvil para probar la aplicación de manera sencilla.

## 📥 Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/nestordqa/rick-and-morty.git
   cd rick-and-morty
   ```

2. **Instala las dependencias**:
   Ejecuta el siguiente comando para instalar todas las dependencias necesarias:
   ```bash
   npm install
   ```

## 🏁 Ejecución de la Aplicación

Para iniciar la aplicación, utiliza el siguiente comando:
```bash
npm run start
```

Una vez que la aplicación esté en ejecución, verás un menú similar al siguiente en la terminal:

```
› Metro waiting on exp://192.168.31.64:8082
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Using Expo Go
› Press s │ switch to development build
› Press a │ open Android
› Press w │ open web
› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› shift+m │ more tools
› Press o │ open project code in your editor
› Press ? │ show all commands

Logs for your project will appear below. Press Ctrl+C to exit.
```

### 🔧 Comandos Disponibles

Aquí tienes una lista de los comandos que puedes utilizar:

- **s**: Cambiar a la versión de desarrollo.
- **a**: Abrir en un emulador de Android.
- **w**: Abrir en la web.
- **j**: Abrir el depurador.
- **r**: Recargar la aplicación.
- **m**: Alternar el menú.
- **shift+m**: Más herramientas.
- **o**: Abrir el código del proyecto en tu editor.
- **?**: Mostrar todos los comandos disponibles.

## 📡 Conexión a Emuladores

Puedes conectar tu aplicación a emuladores de Android o iOS. Asegúrate de que el emulador esté en ejecución antes de usar el comando correspondiente.

## 📦 Generación de APK

Para generar un archivo APK de tu aplicación, ejecuta el siguiente comando:
```bash
npx expo run:android
```

Una vez completado el proceso, encontrarás el APK generado en la siguiente ruta:
```
android/app/build/outputs/apk/app-release
```

## 🤝 Contribuciones

Si deseas contribuir a este proyecto, ¡serás bienvenido! Siéntete libre de hacer un fork del repositorio y enviar un pull request con tus mejoras.


¡Gracias por usar la App!