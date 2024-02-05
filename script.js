/* Declare variables below to save the different sections (divs) of your story */
let opening = document.querySelector(".story-opening");
let b1 = document.querySelector(".option-one");
let op1 = document.querySelector(".option-one-screen");
let b2 = document.querySelector(".option-two");
let op2 = document.querySelector(".option-two-screen");
let title = document.querySelector(".title");           
let home = document.querySelector(".home-screen");
let home2 = document.querySelector(".home-screen2");     
                                 
b1.onclick = function(){
    op1.style.display = "block";
    opening.style.display = "none";
    title.innerHTML = "This is your car";
    title.style.color = "pink";
};
    b2.onclick = function(){
    op2.style.display = "block";
    opening.style.display = "none";
    title.innerHTML = "This is your car";
    title.style.color = "pink";
        
};
home.onclick=function(){
    opening.style.display = "block";
    op1.style.display = "none";
    
    title.style.display = "none";

};
home2.onclick=function(){
    opening.style.display = "block";
    op2.style.display = "none";
    
    title.style.display = "none";

};
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!

};

/*INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


