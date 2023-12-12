AFRAME.registerComponent("treasure",{
    init:function(){
        for(var i=0 ; i<50; i++){
            var id = `chest${i}`
            var posx = (Math.random() * 2000 + (-1000))
            var posy = (Math.random() * 2 + (-1))
            var posz = (Math.random() * 2000 + (-1000))
            var position = {x:posx , y:posy , z:posz}
            this.spawntreasure(id,position)
        }
    },
    spawntreasure:function(id,position){
        var coinel = document.createElement("a-entity")
        coinel.setAttribute("gltf-model","assets/treasure-coin/the-coin.glb")
        coinel.setAttribute("animation-mixer",{})
        coinel.setAttribute("scale",{x: 0.7, y:0.7, z:0.7})
        coinel.setAttribute("static-body",{shape :"sphere",sphereRadius: 2})
        coinel.setAttribute("gameplay",{elementId: `#${id}`})
        coinel.setAttribute("id", id)
        coinel.setAttribute("position", position)
        var islandel = document.querySelector("#island")
        islandel.appendChild(coinel)

    }
})