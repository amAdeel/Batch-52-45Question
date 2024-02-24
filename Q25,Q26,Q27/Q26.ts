let alian_color:string="yellow";
if (alian_color==="Green") {
    console.log("the player just earned 5 points for shooting the alien.");    
}
//if alian-color not green and alian color is red then this else-if excute  
else if(alian_color !== "green" && alian_color==="red"){
    console.log("the player just earned 10 points for shooting the non-Green alien.");
}
// when no green or red then excute this
else{console.log("the player get no point");
};