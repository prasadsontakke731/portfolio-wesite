


export const fadIn=(direction,delay)=>{
return{
    hidden:{
        y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
        x: direction === "left" ? 160 : direction === "right" ? -160 : 0
    },
    show:{
        y:0,
        x:0,
        Opacity:1,
        transition:{
            type:"tween",
            duration:1.2,
            delay:delay,
            ease:[0.25,0.25,0.25,0.75]
        }
    }
}
}