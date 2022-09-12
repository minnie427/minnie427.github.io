/* This is the filter function for the food categories */
function filterCategory(filterSelection, filterBy, filterButton){
    let recipeCards = Array.from(document.getElementsByClassName ("RecipeCardWrapper"));
    //console.log(recipeCards);

    for(let listItem of recipeCards){
    //console.log(listem. datest. author)
        if(listItem.dataset[filterBy] === filterSelection){
        listItem.style.display = "flex";
        } else {
        listItem.style.display = "none";
        }
    }
}

function allCategories(){
    let recipeCards = Array.from(document.getElementsByClassName ("RecipeCardWrapper"));
    //console.log(recipeCards);
    for(let listItem of recipeCards){
        listItem.style.display = "flex";
    }
}