class Drops{
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        
        this.rain=Bodies.circle(x,y,5,options)
        var maxDrops=100;

        for(var i=0; i<maxDrops; i++)
        {
            drops.push(new createDrop(random(0,400),random(0,400)));
        }
    }
}