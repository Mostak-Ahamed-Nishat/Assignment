
// TASK==>1

function feetToMile(feet){
    const mile=0.00018939394

    if(feet>0){
         return feet*mile
    }
    else{
        return alert("Feet Can't be negative")
    }

    }

    let task1=feetToMile(5)
    console.log(task1);


    // TASK==>2

   function woodCalculator(chairArg,tableArg,bedArg){

      let chair=1,table=3,bed=5

      if(chairArg<=0  || tableArg<=0 || bedArg<=0)
      
      console.log("Enter Minimum Nubmer 1")
      else 
        return chair*chairArg+table*tableArg+bed*bedArg

      
   }

   var task2=woodCalculator(2,3,2)
   console.log(`Total Wood Need :${task2}`);



  // TASK==>3

 function brickCalculator(floor){
     var totalBrick=1000
     var needBrick

     if(floor <=10){
         needBrick=totalBrick*15*floor
     }
     else if(floor <=20){
        needBrick=(totalBrick*15*10)+(floor-10)*12*1000
    }
    else{
        needBrick=(totalBrick*15*10)+(totalBrick*12*10)+(floor-20)*10*1000
     }
    return needBrick

 }

var task3=brickCalculator(25)
console.log(task3);


// TASK==>4

function tinyFriend(takeArray){
        let name=takeArray[0]
        for(var i=0;i<takeArray.length;i++){
            minName=takeArray[i]
            if(minName.length<name.length){
                name=minName
            }
        }
        return name
    }

let array=["Rahim","Iva","Mostak","Abdul Zabbar","HM"]

let task4=tinyFriend(array)

console.log(task4);