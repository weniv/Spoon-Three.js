import * as THREE from "three";
import WebGL from 'three/examples/jsm/capabilities/WebGL.js';

if (WebGL.isWebGLAvailable()) {
  // three.js 코드를 작성

  // 장면 생성
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xFFE187)

  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(3, 3, 3);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 빛
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(0, 2, 4);
  scene.add(pointLight);

  // 박스
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0x2E6FF2 })
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  renderer.render(scene, camera);

} else {
  document.body.appendChild(WebGL.getWebGLErrorMessage())
}
