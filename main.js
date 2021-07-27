var pizzas_default=["Veggie delight","Cheese Margherita","peppy paneer","Achari pizza"];
function getmenu(){
    var pizzas;
    pizzas="<ol class='menulist'>";
    pizzas_default.sort();
    for(var i=0; i<pizzas_default.length; i++){
        pizzas=pizzas+'<li>'+pizzas_default[i]+'</li>';
    }
    pizzas=pizzas+'</ol>';
    document.getElementById("display_menu").innerHTML=pizzas;
}
function add_item(){
    var pizzas;
    var item=document.getElementById("add_item").value;
    pizzas_default.sort();
    pizzas="<section class='cards'>";
    for(var i=0; i<pizzas_default.length; i++){
        pizzas=pizzas+'<div class="card">'+'<img src="https://tse2.mm.bing.net/th?id=OIP.b4oQhzXaJ-o1ccb_C3vKIQHaEK&pid=Api&P=0&w=281&h=159">'+pizzas_default[i]+'</div>';
    }
    pizzas=pizzas+"</section>";
    document.getElementById("display_addedmenu").innerHTML=pizzas;
}
function add_top(){
    var item=document.getElementById("add_item").value;
    pizzas_default.push(item);
    add_item();
}