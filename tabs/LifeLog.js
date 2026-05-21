//  To bring up the choice of category ,one needs to scroll the mouse wheel
 document.addEventListener("wheel",function(){
                document.querySelectorAll(".category").forEach(el => {
                    el.style.visibility="visible";
                    el.style.animation="Show 5s";
            });
});
            
// Implementing the category list buffer to store the user choice and improving the buttons UI 
            let categ_list=[];
            
            document.querySelectorAll(".category_button").forEach((cate)=>{
                let check=document.getElementById(cate.id.slice(0,3)),toRemove;
                cate.addEventListener("click",function(event){
                // preventDefault() is used so that the button click may not submit the form but we enhance the UI elements 
                event.preventDefault();
                check.checked=!check.checked;
                if (check.checked){
                    cate.style.border="5px solid red";
                    // category list buffer-->
                    categ_list.push(cate.id+".html");
                }
                else{
                    cate.style.border="";
                    categ_list=categ_list.filter(x=>x!=cate.id+".html");
                }
                // console.log(categ_list); 
            });
            //This here is a prevention of event Bubbling ,as if user uses the checkbox inside the category buttons ,it triggers the event 2 times
            check.addEventListener("click",function(event_getting_checked){

                event_getting_checked.stopPropagation();
                if (check.checked){
                    cate.style.border="5px solid red";
                    categ_list.push(cate.id+".html");
                }
                else{
                    cate.style.border="";
                    categ_list=categ_list.filter(x=>x!=cate.id+".html");
                }
                
            });
        });

        //Making the UI elements of submit button using JavaScript

        const Start=document.getElementById("get_started")
        Start.addEventListener("mouseenter",function(){
            Start.style.backgroundImage="linear-gradient(to right,white 80%,lightpink 20%)";
        });
        Start.addEventListener("mouseleave",function(){
            Start.style.backgroundImage="linear-gradient(to right,white 40%,lightpink 60%)";
        });
            

        let current_login=JSON.parse(localStorage.getItem("current_login"));
        console.log("Current login:",current_login);
        let person_no=current_login.person_no;
        console.log(person_no);
        
        
        console.log(current_login);

        let user_info=JSON.parse(localStorage.getItem("person_data"+person_no));
            if (user_info){
                console.log(user_info.categ_list);
                if (user_info.categ_list.length>0){
                    window.open(user_info.categ_list[0],"_self");
                }
                
            }
            else{
                user_info=JSON.parse(localStorage.getItem("person"+person_no));
            }

        let choosing_category=document.getElementById("choose_category");
        let error=document.getElementById("error_message");
        choosing_category.addEventListener("submit",function(eve){
            error.innerHTML="";
            eve.preventDefault();
            if (categ_list.length==0){
                error.innerHTML="ERROR! : Kindly choose atleast one category...";
                console.log(error.innerHTML);                
            }
            else{
                //Most important -saving our category list buffer to JSON so that it may be accessed on the child node pages
                
            user_info.categ_list=categ_list;
            localStorage.setItem("person_data"+person_no,JSON.stringify(user_info));
            


            //Important to UI --before redirecting the user to another page ,first clear all the checkboxes 
            document.querySelectorAll(".category_button").forEach((cate)=>{
                let check=document.getElementById(cate.id.slice(0,3));
                check.checked=false;
            })

            //Using BOM to open the desired page 
            window.open(categ_list[0],"_self");
            }
        });

        //dark mode logic and UI changes 
        let dark_button=document.getElementById("dark_mode");
        let dark=document.getElementById("dark");
        dark.addEventListener("click",()=>{
            if (dark.checked){
                document.body.style.backgroundColor="black";
                dark_button.style.backgroundColor="white";
                dark_button.style.color="black";
            }
            else{
                document.body.style.backgroundColor="lightpink";
                dark_button.style.backgroundColor="black";
                dark_button.style.color="white";
            }
        })
        
