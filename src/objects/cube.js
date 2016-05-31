import THREE from 'three'

class Cube {

    /**
     * @constructor
     */
    constructor() {

        this.size = 200;
        this.rotation = .01;

        this.geometry = new THREE.BoxGeometry(300, 500, 200);
        // this.material = new THREE.MeshLambertMaterial({
        //     wireframe: false,
        //     color: 0x0000FF
        // });
        var sphereMaterial = new THREE.MeshLambertMaterial(
            {
                wireframe: false,
                color: 0x0000FF
            });

        this.mesh = new THREE.Mesh(this.geometry, sphereMaterial);

    }

    /**
     * @method
     * @name update
     * @description Triggered on every TweenMax tick
     */
    update() {

        this.mesh.rotation.x += this.rotation;
        this.mesh.rotation.y += this.rotation;
        this.mesh.rotation.z += this.rotation;

    }

}

export default Cube
