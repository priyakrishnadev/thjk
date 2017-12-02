import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
import * as MTLLoader from 'three-mtl-loader';


class WebVR extends React.Component {
  static propTypes = {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
  };


  constructor(props, context) {
    super(props, context);

    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.

    this.state = {
      cubeRotation: new THREE.Euler(),
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.1,
          this.state.cubeRotation.y + 0.1,
          0
        ),
      });
    };
  }

componentDidMount(){
   const mtlLoader = new THREE.MTLLoader();
   console.log(mtlLoader);
mtlLoader.setBaseUrl('/js/');
mtlLoader.setPath('/js/'); // One of these might not be needed
mtlLoader.crossOrigin = '*'; // Use as needed
mtlLoader.load('torso.mtl', materials => {
    materials.preload();
    // OBJ Loader
    const objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('/js/');
    objLoader.load('torso.obj', object => {
        for(let child of object.children) {
            child.material.side = THREE.DoubleSide
        }
    });
});
}
  render() {
    const {
      width,
      height,
    } = this.props;

    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera below
      width={width}
      height={height}

      onAnimate={this._onAnimate}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}
          position={this.cameraPosition}
        />

        <mesh
          rotation={this.state.cubeRotation}
        >
          <boxGeometry
            width={1}
            height={1}
            depth={1}
          />
          <meshBasicMaterial
            color={0x5673ea}
          />
        </mesh>
      </scene>
    </React3>);
  }
}

export default WebVR;
