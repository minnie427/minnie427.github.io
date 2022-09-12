/* This is the filter function for the food categories except "all" */
function filterCategory(filterSelection, filterBy, filterButton){
    /* Array is like a database storing list of information and it is an efficient way to organise all the listings under one object */
    let recipeCards = Array.from(document.getElementsByClassName ("RecipeCardWrapper"));
    //console.log(recipeCards);

    /* This is to filter and show only what's selected within categories */
    for(let listItem of recipeCards){
    //console.log(listem. datest. author)

    /* if it's the one selected, then it shows the item in "flex", if not, it will not show the item */
        if(listItem.dataset[filterBy] === filterSelection){
        listItem.style.display = "flex";
        } else {
        listItem.style.display = "none";
        }
    }
}
/* This is for the "all" in each of 3 categories */
function allCategories(){
    let recipeCards = Array.from(document.getElementsByClassName ("RecipeCardWrapper"));
    //console.log(recipeCards);
    for(let listItem of recipeCards){
        listItem.style.display = "flex";
    }
}