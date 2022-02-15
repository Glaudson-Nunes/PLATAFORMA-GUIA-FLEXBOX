
onload =  function principal(){

    let ro = document.getElementById("row");
    let roreverse = document.getElementById("row-reverse");
    let col = document.getElementById("column");
    let colreverse = document.getElementById("column-reverse");

    ro.addEventListener("click",row);
    roreverse.addEventListener("click",row_reverse);
    col.addEventListener("click",column);
    colreverse.addEventListener("click",column_reverse);


    let bt1 = document.getElementById("b1"); 
    let bt2 = document.getElementById("b2"); 
    let bt3 = document.getElementById("b3"); 
    let bt4 = document.getElementById("b4");
    let bt5 = document.getElementById("b5"); 
    let bt6 = document.getElementById("b6"); 
    let bt7 = document.getElementById("b7");
    let bt8 = document.getElementById("b8");
    let bt9 = document.getElementById("b9");
    

    let buu1 = document.getElementById("bu1");
    let buu2 = document.getElementById("bu2");
    let buu3 = document.getElementById("bu3");
    let buu4 = document.getElementById("bu4");
    let buu5 = document.getElementById("bu5");
    let buu6 = document.getElementById("bu6");
   

    buu1.addEventListener("click",align_content_start);
    buu2.addEventListener("click",align_content_end);
    buu3.addEventListener("click",align_content_center);
    buu4.addEventListener("click",align_content_between);
    buu5.addEventListener("click",align_content_around);
    buu6.addEventListener("click",align_content_Stretch);

   
    let elemento1 = document.getElementById("ele1");
    let elemento2 = document.getElementById("ele2");
    let elemento3 = document.getElementById("ele3");
    let elemento4 = document.getElementById("ele4");
    let elemento5 = document.getElementById("elem5");
    let elemento6 = document.getElementById("elem6");
    let elemento7 = document.getElementById("elem7");
    let elemento8 = document.getElementById("elem8");
   


    let ca1 = document.getElementById("c1");
    let ca2 = document.getElementById("c2");
    let ca3 = document.getElementById("c3");
    let ca4 = document.getElementById("c4");
    let ca5 = document.getElementById("c5");
    let ca6 = document.getElementById("c6");
    let ca7 = document.getElementById("c7");
    let ca8 = document.getElementById("c8");
    let ca9 = document.getElementById("c9");
    let ca10 = document.getElementById("c10");

    ca1.addEventListener("click",aling_start);
    ca2.addEventListener("click",aling_end);
    ca3.addEventListener("click",align_center);
    ca4.addEventListener("click",align_base);
    ca5.addEventListener("click",align_stretch);
    ca6.addEventListener("click",justify_start);
    ca7.addEventListener("click",justify_end);
    ca8.addEventListener("click",justify_space_betwen);
    ca9.addEventListener("click",justify_center);
    ca10.addEventListener("click",justify_space_around);
    
    
    bt1.addEventListener("click",auto);
    bt2.addEventListener("click",flex_start);
    bt3.addEventListener("click",flex_end);
    bt4.addEventListener("click",center);
    bt5.addEventListener("click",baseline);
    bt6.addEventListener("click",Stretch);
    bt7.addEventListener("click",Nowrap);
    bt8.addEventListener("click",Wrap);
    bt9.addEventListener("click",wrap_reverse);
    elemento1.addEventListener("click",flex_gorwF1);
    elemento2.addEventListener("click",flex_gorwF2);
    elemento3.addEventListener("click",flex_gorwF3);
    elemento4.addEventListener("click",flex_gorwF4);
    elemento5.addEventListener("click",verificao_orde1);
    elemento6.addEventListener("click",verificao_orde2);
    elemento7.addEventListener("click",verificao_orde3);
    elemento8.addEventListener("click",verificao_orde4);
    

}


function align_content_start(){

    let aling_content = document.getElementById("align-content");
    aling_content.style.alignContent = "flex-start";

}

function align_content_end(){

    let aling_content = document.getElementById("align-content");
    aling_content.style.alignContent = "flex-end";

}

function align_content_center(){

    let aling_content = document.getElementById("align-content");
    aling_content.style.alignContent = "center";

}

function align_content_between(){

    let aling_content = document.getElementById("align-content");
    aling_content.style.alignContent = "space-between";

}

function align_content_around(){

    let aling_content = document.getElementById("align-content");
    aling_content.style.alignContent = "space-around";

}

function align_content_Stretch(){

    let aling_content = document.getElementById("align-content");
    aling_content.style.alignContent = "stretch";

}



function verificao_orde1(){

    if(elem5.value>=1){

        V1_order1();
    }else{

        V1_order0();
    }
}


function verificao_orde2(){

    
    if(elem6.value>=1){

        V2_order1();
    }else{

        V2_order0();
    }

   
}

function verificao_orde3(){

    if(elem7.value>=1){

        V3_order1();
    }else{
        V3_order0();
    }
   
}

function verificao_orde4(){

    
    if(elem8.value>=1){

        V4_order1();
    }else{

        V4_order0();
    }
   
}





function V1_order1(){

    let bo = document.getElementById("bor1");
    bo.style.order = "1";


}

function V1_order0(){

    let bo = document.getElementById("bor1");
    bo.style.order = "0";

}

/********************/

function V2_order1(){

    let bo2 = document.getElementById("bor2");
    bo2.style.order = "1";


}

function V2_order0(){

    let bo2 = document.getElementById("bor2");
    bo2.style.order = "0";

}

/********************/

function V3_order1(){

    let bo3 = document.getElementById("bor3");
    bo3.style.order = "1";


}

function V3_order0(){

    let bo3 = document.getElementById("bor3");
    bo3.style.order = "0";
    

}

/********************/

function V4_order1(){

    let bo4 = document.getElementById("bor4");
    bo4.style.order = "1";

}

function V4_order0(){

    let bo4 = document.getElementById("bor4");
    bo4.style.order = "0";

}

/********************/



function justify_start(){

   let justify = document.getElementById("justify-content");
   justify.style.justifyContent = "flex-start";

}

function justify_end(){
   
    let justify = document.getElementById("justify-content");
    justify.style.justifyContent = "flex-end";

}

function justify_space_betwen(){
    
    let justify = document.getElementById("justify-content");
    justify.style.justifyContent = "space-between";
}

function justify_center(){
    
    let justify = document.getElementById("justify-content");
    justify.style.justifyContent = "center";

}

function justify_space_around(){
    
    let justify = document.getElementById("justify-content");
    justify.style.justifyContent = "space-around";

}



function aling_start(){

    let align = document.getElementById("align-items");
    align.style.alignItems = "flex-start";

}

function aling_end(){
  
    let align = document.getElementById("align-items");
    align.style.alignItems = "flex-end";

}

function align_center(){

    let align = document.getElementById("align-items");
    align.style.alignItems = "center";
   
}

function align_base(){
    
    let align = document.getElementById("align-items");
    align.style.alignItems = "baseline";

}

function align_stretch(){

    let align = document.getElementById("align-items");
    align.style.alignItems = "stretch";
    
}


/* INICIO DAS FUNÇOÊS DE AUEMNTAR E DIMINUIR O FLEX-GROW */

function aumentar1(){

    let bt10 = document.getElementById("b10");
    bt10.style.flexGrow = "1";

}

function diminuir1(){

    let bt10 = document.getElementById("b10");
    bt10.style.flexGrow = "0";


}


function aumentar2(){

    let bt11 = document.getElementById("b11");
    bt11.style.flexGrow = "1";

}

function diminuir2(){

    let bt11 = document.getElementById("b11");
    bt11.style.flexGrow = "0";


}

function aumentar3(){

    let bt12 = document.getElementById("b12");
    bt12.style.flexGrow = "1";

}

function diminuir3(){

    let bt12 = document.getElementById("b12");
    bt12.style.flexGrow = "0";


}


function aumentar4(){

    let bt13 = document.getElementById("b13");
    bt13.style.flexGrow = "1";

}

function diminuir4(){

    let bt13 = document.getElementById("b13");
    bt13.style.flexGrow = "0";


}/* FIM DAS FUNÇOÊS DE AUEMNTAR E DIMINUIR O FLEX-GROW */






/* INICIO DAS FUNÇOÊS DO FLEX-GROW QUE VÂO CHAMAR AS FUNCçOES DE DIMINUIR E AUMENTAR*/
function flex_gorwF1(){

    if(ele1.value>=1){
 
     aumentar1();
 
    }else{
 
         diminuir1();
    }
 }




function flex_gorwF2(){

    if(ele2.value>=1){
        aumentar2();
    }else{

        diminuir2();
    }

}



function flex_gorwF3(){

    if(ele3.value>=1){
        aumentar3();
    }else{

        diminuir3();
    }
   

}



function flex_gorwF4(){

    if(ele4.value>=1){
        aumentar4();
    }else{

        diminuir4();
    }

}/* INICIO DAS FUNÇOÊS DO FLEX-GROW QUE VÂO CHAMAR AS FUNCçOES DE DIMINUIR E AUMENTAR*/



function Nowrap(){


    let F_wrap = document.getElementById("flex-wrap");
    F_wrap.style.flexWrap = "nowrap"
}

function Wrap(){

    let F_wrap = document.getElementById("flex-wrap");
    F_wrap.style.flexWrap = "wrap"

}

function wrap_reverse(){

    let F_wrap = document.getElementById("flex-wrap");
    F_wrap.style.flexWrap = "wrap-reverse";


}


function auto(){

    let item3 = document.getElementById("ite3");
    item3.style.alignSelf = "auto";

}

function flex_start(){

    let item3 = document.getElementById("ite3");
    item3.style.alignSelf = "flex-start";

}

function flex_end(){

    let item3 = document.getElementById("ite3");
    item3.style.alignSelf = "flex-end";
}

function center(){

    let item3 = document.getElementById("ite3");
    item3.style.alignSelf = "center";

}

function baseline(){

    let item3 = document.getElementById("ite3");
    item3.style.alignSelf = "baseline";
}

function Stretch(){

    let item3 = document.getElementById("ite3");
    item3.style.alignSelf = "stretch";

}




function row(){

    let flex = document.getElementById("flex-direction");
    flex.style.flexDirection = "row";

}

function row_reverse(){

    let flex = document.getElementById("flex-direction");
    flex.style.flexDirection = "row-reverse";

}

function column(){

    let flex = document.getElementById("flex-direction");
    flex.style.flexDirection = "column";
}

function column_reverse(){

    let flex = document.getElementById("flex-direction");
    flex.style.flexDirection = "column-reverse";

}