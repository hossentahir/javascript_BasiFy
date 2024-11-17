document.getElementById("clickbtn").addEventListener("click",function(){
     alert("clicked");
    p.innerHTML = "Button is clicked";// eita sob kichur upor kaj kore r textcontent sudhu text er upor kaj kore.
    //p.textContent = "Btn is clicked";//eita ektu valo kaj kore
})
// website load na nia o output dekhai eita i dynamic er ekta lokkhon.



const p = document.getElementById("paragraph")

const btn3 = document.querySelector("#btn3").addEventListener("click",function(){
    alert("Clicked 3rd button");
    myp.textContent = "working 3rd...";
})



//eita dia id, class, html er ekta property sob dhora jai. But uporer ta dia sudhu id dhora jai.
const myp = document.querySelector(".myp");


function foBtn(){
    alert("4th one clicked");
    myp.textContent = "working good...";
    myp.style.color = 'red';
}

//just ekta click kaj kore ei button gula te
//ekta click er vitor ekta object create kora jai ki na eita dekhte bolse.
//abid2012
