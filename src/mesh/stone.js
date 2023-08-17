import * as THREE from "three";

export default function printStone() {
  const Stone = new THREE.Group();

  const textureLoader = new THREE.TextureLoader();
  const stoneBase = textureLoader.load('../src/textures/stone/stone_basecolor.jpg')
  const stoneNormal = textureLoader.load('../src/textures/stone/stone_normal.jpg')
  const stoneRoughness = textureLoader.load('../src/textures/stone/stone_roughness.jpg')

  const stoneMaterial = new THREE.MeshStandardMaterial({
    color: 0x565656,
    map: stoneBase,
    normalMap: stoneNormal,
    roughnessMap: stoneRoughness,
    roughness: 0.8,
  })


  const headGeometry = new THREE.CylinderGeometry(1, 1.5, 3, 4);
  const head = new THREE.Mesh(headGeometry, stoneMaterial);
  // head.rotation.y = THREE.MathUtils.degToRad(45);
  head.rotation.y = Math.PI / 4;
  head.position.y = 2.5;
  Stone.add(head);

  const hatGeometry = new THREE.BoxGeometry(2, 0.2, 2);
  const hat = new THREE.Mesh(hatGeometry, stoneMaterial);
  hat.position.y = 3.5;
  Stone.add(hat);

  const bodyGeometry = new THREE.CylinderGeometry(1.5, 1.8, 2, 4);
  const body = new THREE.Mesh(bodyGeometry, stoneMaterial);
  body.rotation.y = Math.PI / 4;
  Stone.add(body);

  const armGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2.5, 6);
  const armLeft = new THREE.Mesh(armGeometry, stoneMaterial);
  armLeft.position.set(-1.5, 1.5, 0);
  armLeft.rotation.z = THREE.MathUtils.degToRad(60);
  Stone.add(armLeft);

  const armRight = new THREE.Mesh(armGeometry, stoneMaterial);
  armRight.position.set(1.5, 1.5, 0);
  armRight.rotation.z = Math.PI / -3;
  Stone.add(armRight);

  const eyeGeometry = new THREE.CapsuleGeometry(0.3, 0.2);
  const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 })
  const eyeLeft = new THREE.Mesh(eyeGeometry, eyeMaterial);
  eyeLeft.position.set(-0.25, 2.5, 0.75);
  Stone.add(eyeLeft);
  const eyeRight = new THREE.Mesh(eyeGeometry, eyeMaterial);
  eyeRight.position.set(0.25, 2.5, 0.75);
  Stone.add(eyeRight);

  const pupilGeometry = new THREE.SphereGeometry(0.1);
  const pupilMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 })
  const pupilLeft = new THREE.Mesh(pupilGeometry, pupilMaterial);
  pupilLeft.position.set(-0.2, 2.5, 1);
  Stone.add(pupilLeft);

  const pupilRight = new THREE.Mesh(pupilGeometry, pupilMaterial);
  pupilRight.position.set(0.3, 2.5, 1);
  Stone.add(pupilRight);

  const noseGeometry = new THREE.CylinderGeometry(0.1, 0.2, 0.4, 6);
  const nose = new THREE.Mesh(noseGeometry, stoneMaterial);
  nose.position.set(0, 2.2, 1);
  Stone.add(nose);

  for (const mesh of Stone.children) {
    mesh.castShadow = true;
  }


  return Stone;
}