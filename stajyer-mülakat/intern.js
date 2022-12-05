//Yunus Emre Yılmaz -- yunusemreyilmaz347@gmail.com

//Stock exchange application.
//Important note:
// No regulation has been given about fractional number of lots. For example Borsa Istanbul doesnt let you trade 0,8 number of lots but Coin market does. 
// So i took the liberty of calculating via coin market logic. Logic would be a little different in traditional stock market but still this is an easy fix issue. 

const firstArray = [100,50,200,400,20,60,10,90,300,200];
const secondArray = [20,30,40,10,5,80,100,60];
const thirdArray = [20,10,5,30,60,90,40,50];

const myFirstArray=[100,10,20,30,40,35,500,30,10,20]
const mySecondArray=[5,15,20,30,40,50,60,70,80]
const myThirdArray=[90,100,90,80,70,60,50,40]

const ornek=[20,5,15,35,10,50,80,40]
//düşüş devam ediyorsa ALMA
//yükseliş başlıyorsa AL
//yükseliş devam ediyorsa SATMA
//düşüş başlıyorsa SAT

const stonks = (array) => {

    //new array to scan the progress of direction
    let goingUp=true;
   for(let i=0; i <array.length;i++){
    if(array[i]<array[i+1]){
        goingUp=true;
        array[i]=[array[i],goingUp]
    }
    else{
        goingUp=false
        array[i]=[array[i],goingUp]
    }
   }
   console.log(array)

   let bought=0;
   let sold=0;
   let profit=[0,1]; //first element is money, second is lot
   //buy command if first element met the condition
   if(array[0][1]==true){
    {bought=array[0][0];
        profit[1]=1}
        console.log("alım",array[0][0],"bought:",bought,"lot:",profit[1])
}
   for(let i=1; i <array.length;i++){
    //buy command for the rest of the array
    if(array[i-1][1]==false && array[i][1]==true){ //if we have a going-up projectory
        if(profit[0]==0) //if this is the first purchase
        {bought=array[i][0];
            profit[1]=1}
        else
        {profit[1]=profit[0]/array[i][0];
        bought=profit[1]*array[i][0];
        }
        console.log("alım",array[i][0],"bought:",bought,"lot:",profit[1])
    }
    //sell command for the rest of the array
    if(array[i-1][1]==true && array[i][1]==false){ //if we have a going-down projectory
        sold=profit[1]*array[i][0]
        profit[0]=profit[0]+sold-bought;
        console.log("satım",array[i][0],"sold:",sold,"profit:",profit)
    }
   }
   console.log("profit:",profit[0])
}
stonks(firstArray);

//https://www.linkedin.com/in/yunus-emre-y%C4%B1lmaz-a7136b242/
//yunusemreyilmaz347@gmail.com