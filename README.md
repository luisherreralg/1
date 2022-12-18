# Estructura básica en vanilla JS

Created: December 18, 2022 10:34 AM

Primero de todo vamos a crear un proyecto en vanilla js para ir familiarizándonos con el funcionamiento de three.

# Preparamos el proyecto

Creamos:

- Un archivo HTML: `index.html`
- Un archivo JS: `script.js`
- Guardamos la librería simplificada: `three.min.js`

> Para conseguir el archivo de la librería “simplificada”, solo hay que irse a la web de three.js e ir a la parte de descargas. Te descargará un fichero comprimido que se llama `three.js-master` . Una vez descargado y descomprimido encontraremos el archivo en build
> 

# HTML

Dentro del fichero HTML tendremos que añadir tres cositas dentro del body.
Primero creamos un canvas vacío con una clase para poder acceder a él luego más tarde.

Después importamos la “librería simplificada” como script y por último añadimos el `script.js`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="Basic Scene" content="width=device-width, initial-scale=1.0" />
    <title>Basic Scene</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
    <script src="./three.min.js"></script>
    <script src="./script.js"></script>
  </body>
</html>
```

# Script.js

Dentro de nuestro fichero `script.js`  lo primero que tenemos que hacer es crear una “scene”. Que será la variable que va a almacenar nuestras meshes, materiales, luces… etc

Una vez creada la escena, estará vacía, entonces vamos a crear algunas cosas básicas para poder rellenarla (Red Cube, Camera)

Cuando ya hemos añadido el cubo y la cámara a la escena, ahora vamos a preocuparnos por hacer el render.
Primero tenemos que crear el sistema de renderizado, que en este caso es el renderer, donde le vamos a especificar el canvas donde vamos a guardar toda esta información. Vamos a utilizar el canvas que hemos creado anteriormente. Una vez que hemos creado del renderer tenemos que especificarle el espacio que va a ocupar en la vista, para eso utilizamos los sizes que hemos creado anteriormente.

Una vez que ya hemos creado algunas cosas básicas para que funcione solo tenemos que proceder a hacer el renderizado. Para hacer el renderizado solo tenemos que pasarle la escena y la cámara que hemos creado anteriormente. Y eso es todo.

Es una escena muy sencilla sin interacción, animaciones ni nada por el estilo. Pero es una estructura básica para ir comprendiendo el funcionamiento de la librería.

```jsx
// Scene
const scene = new THREE.Scene();

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: /** "red" */ 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const fov = 75;
const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio);
camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

// Para que tenga el tamaño que queremos
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
```
