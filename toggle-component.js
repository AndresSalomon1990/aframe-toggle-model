AFRAME.registerComponent('toggle', {
  init: function () {
    const { el } = this;
    let toggle = true;

    el.addEventListener('click', () => {
      const gltfModel = el.getAttribute('gltf-model'); // check what returns the attribute gltf-model
      console.log(gltfModel);
      
        if (toggle) {
          el.setAttribute('gltf-model', './assets/LivingLara.glb');
          toggle = false;
        } else {
          el.setAttribute('gltf-model', './assets/LivingEsquineroMeloAzulClaro.glb');
          toggle = true;
        }
    });
  },
});