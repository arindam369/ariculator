console.log("Ariculator");
var buttons = document.querySelectorAll("button");
var result = document.getElementById("result-on-screen");
var histories = document.getElementById("history-screen");
var history_box = document.getElementById("hide-history");
var operand1,operand2,operator,res="",key,res_prev,index=0;
var history=[];

history_box.style.display="none";   //at first history box will be hidden

for(var i=0; i<buttons.length ;i++){
    buttons[i].addEventListener("click",function(keys){
        key = keys.target.innerText;
        console.log(key);

        res_prev = res[res.length -1];

        if(key=="AC"){
            res="";
            result.innerText =0;
        }
        else if(key=="OFF"){
            res="";
            result.innerText = res;
            history_box.style.display="none";
            index=0;
        }
        else if(parseInt(key)>=0 && parseInt(key)<=9){
            res+=key;
            result.innerText =res;
        }
        else if( key=="+" ){
            if((res_prev=="+")||(res_prev=="-")||(res_prev=="*")||(res_prev=="/")||(res_prev=="%")){
                res = res.slice(0,res.length-1);
            }
            res+=key;
            result.innerText = res;
        }
        else if( key=="-" ){
            if((res_prev=="+")||(res_prev=="-")||(res_prev=="*")||(res_prev=="/")||(res_prev=="%")){
                res = res.slice(0,res.length-1);
            }
            res+=key;
            result.innerText = res;
        }
        else if( key=="x" ){
            key="*";
            if((res_prev=="+")||(res_prev=="-")||(res_prev=="*")||(res_prev=="/")||(res_prev=="%")){
                res = res.slice(0,res.length-1);
            }
            res+=key;
            result.innerText = res;
        }
        else if( key=="/" ){
            if((res_prev=="+")||(res_prev=="-")||(res_prev=="*")||(res_prev=="/")||(res_prev=="%")){
                res = res.slice(0,res.length-1);
            }
            res+=key;
            result.innerText = res;
        }
        else if( key=="%" ){
            if((res_prev=="+")||(res_prev=="-")||(res_prev=="*")||(res_prev=="/")||(res_prev=="%")){
                res = res.slice(0,res.length-1);
            }
            res+=key;
            result.innerText = res;
        }
        else if(key=="." && res_prev != "."){
            res+=key;
            result.innerText = res;
        }
        else if(key==""){   //backspace
            res = res.slice(0,res.length-1);
            console.log("back");
            result.innerText = res;
        }
        else if(key=="("){
            res+=key;
            result.innerText = res;
        }
        else if(key==")"){
            res += key;
            result.innerText = res;
        }
        else if(key=="="){
            var ans = eval(res);
            history[index]=res;
        
            result.innerText = ans;
            res="";
            if(index==0){
                histories.innerText = history[index]+" = "+ans;    
            }
            else{
                histories.innerText += "\n"+history[index]+" = "+ans;
            }
            index++;
        }

        
        if(res.length>21){
            res="";
            result.innerText = "OUT OF SCOPE";
        }
        
        if(index>=1){
            history_box.style.display="block";
        }

    });
}
