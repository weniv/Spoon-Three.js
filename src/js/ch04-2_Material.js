import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// 장면
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe287);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2, 2, 2);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff);
light.position.set(2, 4, 3);
scene.add(light);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const basic = new THREE.MeshBasicMaterial({
  color: 0xffaaaa,
  // wireframe: true,
  transparent: false,
  opacity: 0.5,
})

const standard = new THREE.MeshStandardMaterial({
  color: 0xffaaaa,
  roughness: 0.2,
  metalness: 0.8,
  // map
  side: THREE.DoubleSide

})

const physical = new THREE.MeshPhysicalMaterial({
  color: 0xffaaaa,
  clearcoat: 0.8,
  clearcoatRoughness: 0.2,
})

const phong = new THREE.MeshPhongMaterial({
  color: 0xffaaaa,
  shininess: 100,
  specular: 0x2e6ff2,
})
const mesh = new THREE.Mesh(geometry, phong);
scene.add(mesh);

const plane = new THREE.Mesh((new THREE.PlaneGeometry(1, 1)), standard);
// scene.add(plane);

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  // 1. 카메라의 종횡비
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix(); // 카메라 업데이트

  // 2. 렌더러의 크기
  renderer.setSize(window.innerWidth, window.innerHeight);
})

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();