function shuffle(arr){
    let currentIndex=arr.length;
    let randomIndex;
    let tempIndex;
    while(currentIndex){
        randomIndex=Math.floor(Math.random()*5);

        currentIndex--;
        tempIndex=arr[currentIndex];
        arr[currentIndex]=arr[randomIndex];
        arr[randomIndex]=tempIndex;
    }
}

let arr=["img1","img2","img3","img4","img5"];
shuffle(arr);



let repeatind=Math.floor(Math.random()*(arr.length-1));

let at=Math.floor(Math.random()*(arr.length-1));

arr.splice(repeatind,0,arr[at]);
let main=document.getElementById("main");
let inner="";
arr.forEach((ele)=>{
 inner+=`<img class=${ele}>`;

});
main.innerHTML=inner;

const images = document.querySelectorAll("img");
// console.log(images);
const para=document.getElementById("para");
let selected =[];
const verify=document.getElementById("verify");
verify.onclick=()=>{
    if(selected[0]===selected[1]){
        para.innerText="You are a human. Congratulations!";
    }
    else{
        para.innerText="We can't verify you as a human. You selected the non-identical tiles.";
    }
}

const reset=document.getElementById("reset");
reset.onclick=()=>{
    reset.style.display="none";
    selected=[];
    verify.style.display="none";
    images.forEach((img)=>{
        img.classList.remove("selected");
    });
};
verify.style.display="none";
reset.style.display="none";


images.forEach(img=>{
    // img.addEventListerner("click",()=>{
        // console.log(img);

        img.addEventListener("click",()=>{
            if(img.classList.contains("selected")){
                return;
            }
            img.classList.add("selected");
            selected.push(img.classList[0]);
            reset.style.display="block";
            if(selected.length==2){
                verify.style.display="block";
            }
            else{
                verify.style.display="none";
            }
        });

    });