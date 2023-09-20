let Worldcupwatch = true

function reporter(){
    let promise = new promise(function(resolve,reject){

        if(Worldcupwatch == true){
            resolve('Messi scored a goal. The GOAT debate is over')
        }
        else{
            reject('sorry')
        }        
    })
    return promise
}

let Editor = reporter()

Editor
    .then((result)=>{
        console.log(result)
    })
    .catch((err)=>{
        console.log(err)
    })