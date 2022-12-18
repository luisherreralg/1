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
