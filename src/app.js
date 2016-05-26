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

        var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        directionalLight.position.set( 0, 1, 0 );
        this.scene.add( directionalLight );

        this.scene.add(this.cube.mesh);
        this.scene.add(new THREE.AmbientLight(0x0000F0));

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
