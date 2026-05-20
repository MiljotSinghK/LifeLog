let categ_list=JSON.parse(localStorage.getItem("categoryList"));
//Using the previously saved category list here in the navbar and things
            categ_list.forEach(element => {
                let titles= element[0].toUpperCase()+ element.slice(1,-5);
                document.getElementById("navbar").innerHTML+=`<a href=${element} class="nav_elements">${titles}</a> `;
                //Building the Navbar...
            });

            document.querySelectorAll(".flex_category a").forEach(link=>{
                if (link.href==window.location.href){
                    link.style.border="5px solid red";
                }
            })
            //Using JavaScript to improve navbar UI elements to show unique identifier ,here red border on active hyperlink in navbar

let GO_BACK=document.getElementById("go_back");
GO_BACK.addEventListener("click",function(){
    if (confirm("Are you sure ? Your choice will be gone ...")){ //Used confirm() instead of alert() for user choice
    window.open("../LifeLog.html","_self");
    }
})
//This was in order to go back to the original webpage- LifeLog.html

//To make the dark mode trigger working:
let dark_button=document.getElementById("dark_mode");
let dark=document.getElementById("dark");
        dark.addEventListener("click",()=>{
            if (dark.checked){
                document.body.style.backgroundColor="black";
                dark.style.backgroundColor="white";
                dark.style.color="black";
                GO_BACK.style.backgroundColor="white";
                GO_BACK.style.color="black";
            }
            else{
                document.body.style.backgroundColor="";
                dark.style.backgroundColor="black";
                dark.style.color="white";
                GO_BACK.style.backgroundColor="black";
                GO_BACK.style.color="white";
            }
})

let add_button=document.getElementById("add_new");
add_button.addEventListener("click",function(){
    console.log("+ button clicked");
    console.log(document.querySelector(".reminder").innerHTML);
    let new_element=document.createElement("li");
    new_element.type="1";
    new_element.className="reminder";
    new_element.innerHTML='<input id="text_box" ><div id="icons"><button id="delete"><img src="../Icons/blueDeleteIcon.png"></button><button id="time"><img src="../Icons/timeIcon.png"></button> </div>';
    document.querySelector(".lists").appendChild(new_element);

    if (localStorage.getItem("reminder_list")){
    console.log(JSON.parse(localStorage.getItem("reminder_list")));
}
    else{
    localStorage.setItem("reminder_list",JSON.stringify(document.querySelectorAll(".reminder")));
}
})

// localStorage.setItem("reminder_list",JSON.stringify(document.querySelectorAll(".reminder")));
