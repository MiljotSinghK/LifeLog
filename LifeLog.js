 
 document.addEventListener("wheel",function(){
                document.querySelectorAll(".category").forEach(el => {
                    el.style.visibility="visible";
                    el.style.animation="Show 5s";
            });
            });
                

            let reminders=document.getElementById("reminders"),rem=document.getElementById("rem"),
            hobbies=document.getElementById("hobbies"),hob=document.getElementById("hob"),
            tasks=document.getElementById("tasks"),tas=document.getElementById("tas"),
            watched=document.getElementById("watched"),wat=document.getElementById("wat"),
            quotes=document.getElementById("quotes"),quo=document.getElementById("quo");
            
            let categ_list=[];
            
            document.querySelectorAll(".category_button").forEach((cate)=>{
                let check=document.getElementById(cate.id.slice(0,3)),toRemove;
                cate.addEventListener("click",function(event){
                check.checked=!check.checked;
                if (check.checked){
                    cate.style.border="5px solid red";
                    categ_list.push(cate.id+".html");
                }
                else{
                    cate.style.border="";
                    toRemove=categ_list.indexOf(cate.id+".html")
                    categ_list.splice(toRemove,1);
                }
                console.log(categ_list);
            });
            check.addEventListener("click",function(event_getting_checked){
                event_getting_checked.stopPropagation();
                if (check.checked){
                    cate.style.border="5px solid red";
                    categ_list.push(cate.id+".html");
                }
                else{
                    cate.style.border="";
                    toRemove=categ_list.indexOf(cate.id+".html")
                    categ_list.splice(toRemove,1);
                }
                
            });
        });

        const Start=document.getElementById("get_started")
        Start.addEventListener("mouseenter",function(){
            Start.style.backgroundImage="linear-gradient(to right,white 80%,lightpink 20%)";
        });
        Start.addEventListener("mouseleave",function(){
            Start.style.backgroundImage="linear-gradient(to right,white 40%,lightpink 60%)";
        });
            
        Start.addEventListener("click",function(){
            localStorage.setItem("categoryList",JSON.stringify(categ_list));
            window.open(categ_list[0],"_blank");
        });