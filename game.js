AFRAME.registerComponent("gameplay",{
    schema:{
        elementId: {type: "string", default: "#fish1"}
    },
    isCollided:function(elementId){
        const elem = document.querySelector(elementId)
        elem.addEventListener("collide",(e)=>{
            if (elementId.includes("#fish")){
                console.log(elementId + " collision")
            }
            else if (elementId.includes("#coin")){
                console.log(elementId + " collision")
            }
        })
    },
    update:function(){
        this.isCollided(this.data.elementId)
    }
})