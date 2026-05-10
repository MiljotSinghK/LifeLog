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
            
        // Start.addEventListener("click",function(){
        //     localStorage.setItem("categoryList",JSON.stringify(categ_list));
        //     window.open(categ_list[0],"_blank");
        // });

        //Using Form Validation so that the category user input isn't blank
        let choosing_category=document.getElementById("choose_category");
        let error=document.getElementById("error_message");
        choosing_category.addEventListener("submit",function(eve){
            error.innerHTML="";
            eve.preventDefault();
            if (categ_list.length==0){
                error.innerHTML="ERROR! : Kindly choose a category...";
                console.log(error.innerHTML);                
            }
            else{
                //Most important -saving our category list buffer to JSON so that it may be accessed on the child node pages
            localStorage.setItem("categoryList",JSON.stringify(categ_list));

            //Important to UI --before redirecting the user to another page ,first clear all the checkboxes 
            document.querySelectorAll(".category_button").forEach((cate)=>{
                let check=document.getElementById(cate.id.slice(0,3));
                check.checked=false;
            })

            //Using BOM to open the desired page 
            window.open("tabs/"+categ_list[0],"_self");
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