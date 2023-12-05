import * as THREE from 'three'

/**
 * Create a demo scene with a rotating cube
 */
export function createDemoScene() {
  const scene = new THREE.Scene()
  // scene.background = new THREE.Color(0x000000)
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0.9)
  document.body.appendChild(renderer.domElement)

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0x303030 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.1, 100, 16)
  const torusKnotMaterial = new THREE.MeshNormalMaterial()
  const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial)
  scene.add(torusKnot)
  torusKnot.position.x = 2

  camera.position.z = 6

  // light
  const light = new THREE.AmbientLight(0xFF0000) // soft white light
  scene.add(light)
  // White directional light at half intensity shining from the top.
  const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.5)
  scene.add(directionalLight)

  function animate() {
    requestAnimationFrame(animate)

    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01

    renderer.render(scene, camera)
  }

  animate()

  return {
    scene,
    camera,
    renderer,
    cube,
  }
}
