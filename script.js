function filtrar(categoria){

const receitas = document.querySelectorAll(".card");

receitas.forEach(function(receita){

if(categoria === "todas"){
receita.style.display = "block";
}

else if(receita.dataset.categoria === categoria){
receita.style.display = "block";
}

else{
receita.style.display = "none";
}

});

}
