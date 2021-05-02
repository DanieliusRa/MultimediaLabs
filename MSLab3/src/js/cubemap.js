//Initial vars for the scene, camera and renderer of the app
let scene, camera, renderer;

//Main functions to create the scene, camera, renderer and the cubemap
function init() {

    //Creating the scene and setting camera view
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.set(0, 400, 1000);

    //Creating the renderer and adding it to the DOM
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    //Storing the 6 Cubemap image paths into an array
    let imgPaths = [
        'images/posx.jpg', 'images/negx.jpg',
        'images/posy.jpg', 'images/negy.jpg',
        'images/posz.jpg', 'images/negz.jpg',
    ];

    //Loading the CubeTexture
    let textureLoader = new THREE.CubeTextureLoader();
    scene.background = textureLoader.load(imgPaths);

    sphereCam = new THREE.CubeCamera(1, 1000, 500);
    sphereCam.position.set(0, 100, 0);
    scene.add(sphereCam);
    let sphereMaterial = new THREE.MeshBasicMaterial({envMap: sphereCam.renderTarget});
    let sphereGeo = new THREE.SphereGeometry(400, 50, 50);

    let mirrorSphere = new THREE.Mesh(sphereGeo, sphereMaterial);
    mirrorSphere.position.set(0, 100, 0);
    scene.add(mirrorSphere);

    render();
}

//Renders the cubemap in the scene
function render() {
    renderer.render(scene, camera);
    sphereCam.updateCubeMap(renderer, scene);
    requestAnimationFrame(render);
}

init();
