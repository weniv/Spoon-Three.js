import * as THREE from 'three';

export default function printMountain() {

  const loader = new THREE.TextureLoader();
  const top = loader.load('../../src/textures/mountain/mountain_top.jpg')
  const side = loader.load('../../src/textures/mountain/mountain.jpg')

  const geometry = new THREE.CylinderGeometry(1, 3, 3, 8);
  const material = new THREE.MeshStandardMaterial({ color: 0xffaaaa })

  const materials = [
    new THREE.MeshStandardMaterial({
      // color: 0xff0000,
      map: side
    }),
    new THREE.MeshStandardMaterial({
      // color: 0x00ff00,
      map: top
    }),
    new THREE.MeshStandardMaterial({ color: 0x609966 })
  ]
  const mountain = new THREE.Mesh(geometry, materials);
  mountain.castShadow = true
  mountain.receiveShadow = true

  return mountain;

}