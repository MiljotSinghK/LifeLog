let current_login=JSON.parse(localStorage.getItem("current_login"));
let person_no=current_login.person_no;
console.log(person_no);
let person_data=JSON.parse(localStorage.getItem("person_data"+person_no));
let categ_list=person_data.categ_list;
console.log(categ_list);
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
        categ_list=[];
        person_data.categ_list=[];
        console.log("Person No-",person_no);
        localStorage.setItem("person_data"+person_no,JSON.stringify(person_data));
    window.open("LifeLog.html","_self");
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




