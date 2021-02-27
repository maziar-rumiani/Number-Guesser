let myarry=[];
document.querySelector(".btn").addEventListener("click",count);
let y=Math.floor((Math.random()*2)+1);   
function count(){
    let x=document.querySelector("input").value;
    x=Number(x);
 console.log(typeof x)
    myarry.push(x);
    if(y==x){
        let text=document.querySelector(".message").innerHTML="<br>Yeeeeeees! You're guess is correct!";
document.querySelector(".message").style.color="green";
        console.log(y)
    }
    else if(myarry.length==1){
            document.querySelector(".message").innerHTML="<br> Sorry you're guess isn't correct and you have 2 more guesses!";
            console.log("2 more"+y);
    }
    else if(myarry.length==2){
            document.querySelector(".message").innerHTML="<br> Sorry you're guess isn't correct and you have 1 more guess!";
            console.log("1 more"+y);       
    }
    else {
            document.querySelector("input").readOnly=true;   
            document.querySelector(".message").innerHTML=`<br><div>Sorry you lost the game! The correct number was ${y}!<br><button class='trybtn'>Try again</button></div>`;
            document.querySelector(".trybtn").addEventListener("click",tryagain);
            function tryagain(){
                location.reload();
            }
    }
}