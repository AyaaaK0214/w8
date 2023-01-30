const unit = 100;

function setup(){
    createCanvas(8*unit, 8*unit);
    background("white");
    translate(4*unit,4*unit);
    generateSeq([], 15);
}

function generateSeq(seq, level){
    if (level <= 0){ 
        evaluate(seq,2) 
	return;
    }
    for (let d=0; d<2; d++){
	seq.push(d);
	generateSeq(seq, level-1);
	seq.pop();
    }
}

function evaluate(seq, base){
    let sum = math.complex(0,0);
    const b = math.complex(-1,1);
    for (let k in seq){
        sum = math.add(sum,math.multiply(seq[k],math.pow(b,k)));
    }
    console.log(seq[10],seq[11])
    if(seq[11]==0&&seq[10]== 0){
        fill("orange");
        stroke("orange");
    }else if(seq[11]==0&&seq[10]==1){
        fill("pink");
        stroke("pink");
    }else if(seq[11]==1&&seq[10]==1){
        fill("red");
        stroke("red");
    }else{
        fill("black");
        stroke("black");
    }
    circle(2*sum.re,2*sum.im, 1);
    return(sum);
}