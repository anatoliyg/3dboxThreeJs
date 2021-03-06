import 'TweenMax'
import Scene from './scene/scene'
import Cube from './objects/cube'
import THREE from 'three'


class App {

    /**
     * @constructor
     */
    constructor() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.scene = new Scene();
        this.cube = new Cube();


        this.scene.add(this.cube.mesh);

        // create a point light
        // var pointLight =
        //   new THREE.PointLight(0xFFFFFF);

        // // set its position
        // pointLight.position.x = 10;
        // pointLight.position.y = 50;
        // pointLight.position.z = 130;

        // // add to the scene
        // this.scene.add(pointLight);

        const root = document.body.querySelector('.app');
        root.appendChild(this.scene.renderer.domElement);

        this.addListeners();

    }

    /**
     * @method
     * @name onResize
     * @description Triggered when window is resized
     */
    onResize() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.scene.resize(this.width, this.height);

    }

    /**
     * @method
     * @name addListeners
     */
    addListeners() {

        window.addEventListener('resize', this.onResize.bind(this));
        TweenMax.ticker.addEventListener('tick', this.update.bind(this));

    }

    /**
     * @method
     * @name update
     * @description Triggered on every TweenMax tick
     */
    update() {

        this.cube.update();
        this.scene.render();

    }

}

export default App
