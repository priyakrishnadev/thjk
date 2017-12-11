import React from 'react';
import ReactDOM from 'react-dom';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
//import OrbitControls from './OrbitControls';
import * as OBJLoader from 'three-obj-loader';
import * as MTLLoader from 'three-mtl-loader';
MTLLoader(THREE);
OBJLoader(THREE);

var OrbitControls = require('three-orbit-controls')(THREE)

class WebVR extends React.Component {
  static propTypes = {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,

  };




  constructor(props, context) {
    super(props, context);

    this.cameraPosition = new THREE.Vector3(0, 0, 12);

     this.state = {
      meshPosition: new THREE.Vector3(0, 5, 0),
      torsoScale: new THREE.Vector3(4.8, 4.5, 4.5),
      lightIntesity: 0.6,
      obj: 'torso.obj',
      mtl: 'torso.mtl',
      path: '/',
      cubeRotation: new THREE.Euler(),
    };


this.renderObjGraveObject = this.renderObjGraveObject.bind(this);
this.loadObjGrave = this.loadObjGrave.bind(this);
this.lightPosition = new THREE.Vector3(5, 2, 2);
    this.lightTarget = new THREE.Vector3(0, 0, 0);
    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.



    this._onAnimate = () => {
       this.controls.update();
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


  loadObjGrave() {

    this.renderObjGraveObject();
  }

  renderObjGraveObject() {
    this.THREE = THREE;
    const group = this.refs.group;
    const mtlLoader = new MTLLoader();
    mtlLoader.setBaseUrl(this.state.path);
mtlLoader.setPath(this.state.path); // One of these might not be needed
mtlLoader.crossOrigin = '0'; // Use as needed
return (
      mtlLoader.load(this.state.mtl, materials => {
        materials.preload();
        const objLoader = new this.THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(this.state.path);
        objLoader.load(this.state.obj, object => {

          object.traverse( function( child ) { if ( child instanceof THREE.Mesh ) {

            if (child.material.name == "b0b0b0")  {

                                        child.material.wireframe=true;



        }
          }});
          group.add(object);
          this.setState({object});
        })
      })
    )
  }

componentDidMount(){
   const controls = new OrbitControls(this.refs.camera);

   controls.enablePan = false;
   controls.enableZoom = false;
   controls.enableDamping = true;
   controls.minPolarAngle = 0.8;
   controls.maxPolarAngle = 2.4;
   controls.dampingFactor = 0.09;
   controls.rotateSpeed = 0.1;
   this.controls = controls;


 this.renderObjGraveObject();


}




   componentWillUnmount() {
    this.controls.dispose();
    delete this.controls;
  }




  render() {

    const {
      width,
      height,
    } = this.props;

  const {
      meshPosition,
       lightIntesity,

    } = this.state;

    var aspectratio= width / height;
    var cameraprops = {fov:75,
          aspect:aspectratio,
          near:0.1,
          far:1000,
          position:this.cameraPosition
          };
    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera below
      width={width}
      height={height}
      clearColor={0x79589F}

      onAnimate={this._onAnimate}
    >
      <scene>

        <perspectiveCamera
        ref="camera"
          name="camera"
          {...cameraprops}

        />

        <ambientLight
            color={'white'}
          />
          <directionalLight
            color={'#f3f0ea'}
            intensity={lightIntesity}

            castShadow

            shadowMapWidth={1024}
            shadowMapHeight={1024}

            shadowCameraLeft={120}
            shadowCameraRight={-20}
            shadowCameraTop={120}
            shadowCameraBottom={-20}

            shadowCameraFar={3 * 20}
            shadowCameraNear={20}

            position={this.lightPosition}
            lookAt={this.lightTarget}
          />

          <group
            ref='group'
            position={meshPosition}
            scale={this.state.torsoScale}
            castShadow
            receiveShadow

          />

      </scene>
    </React3>);
  }
}

export default WebVR;
