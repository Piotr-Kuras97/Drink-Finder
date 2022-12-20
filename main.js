window.onload = function(){
    mainApp.init()
}





const mainApp = {
    data: null,
    searchInput: null,
    drinksSection: null,
    init: function(){
        console.log('app started');
        this.searchInput = document.querySelector("input")
        this.searchInput.addEventListener("keyup", (e)=>{
            if(e.keyCode == 13){
                console.log('enter click');
                this.loadData(this.searchInput.value)
            }
        })

        this.drinksSection = document.querySelector(".drinks-section")
        this.loadData("margarita")
    },
    loadData: function(str){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + str.trim())
         .then(response => response.json())
         .then(data => this.dataReady(data))
    },
    dataReady: function(showData){
        this.data = showData.drinks
        
        
        let allBoxesHTML = ""

        if(!showData.drinks){
            console.log('Brak wyszukań');
            allBoxesHTML = this.getNothing()
            this.drinksSection.innerHTML = allBoxesHTML
        }

        for(let i = 0; i < showData.drinks.length; i++){
            let show = showData.drinks[i]
            console.log(show);
            
            let imgSrc = null
            imgSrc = show.strDrinkThumb
            
            let drinkName = null
            drinkName = show.strDrink

            let drinkCategory = null
            drinkCategory = show.strCategory

            let drinkSummary = null
            drinkSummary = show.strInstructions

            let drinkIngredient1 = null
            if (show.strIngredient1){
                drinkIngredient1 = show.strIngredient1
            } else {
                drinkIngredient1 = ""
            }

            let drinkIngredient2 = null
            if (show.strIngredient2){
                drinkIngredient2 = show.strIngredient2
            } else {
                drinkIngredient2 = ""
            }

            let drinkIngredient3 = null
            if (show.strIngredient3){
                drinkIngredient3 = show.strIngredient3
            } else {
                drinkIngredient3 = ""
            }

            let drinkIngredient4 = null
            if (show.strIngredient4){
                drinkIngredient4 = show.strIngredient4
            } else {
                drinkIngredient4 = ""
            }

            let drinkIngredient5 = null
            if (show.strIngredient5){
                drinkIngredient5 = show.strIngredient5
            } else {
                drinkIngredient5 = ""
            }

            let drinkIngredient6 = null
            if (show.strIngredient6){
                drinkIngredient6 = show.strIngredient6
            } else {
                drinkIngredient6 = ""
            }

            let drinkIngredient7 = null
            if (show.strIngredient7){
                drinkIngredient7 = show.strIngredient7
            } else {
                drinkIngredient7 = ""
            }

            let drinkIngredient8 = null
            if (show.strIngredient8){
                drinkIngredient8 = show.strIngredient8
            } else {
                drinkIngredient8 = ""
            }

            let drinkIngredient9 = null
            if (show.strIngredient9){
                drinkIngredient9 = show.strIngredient9
            } else {
                drinkIngredient9 = ""
            }
            
            let drinkIngredient10 = null
            if (show.strIngredient10){
                drinkIngredient10 = show.strIngredient10
            } else {
                drinkIngredient10 = ""
            }

            let drinkIngredient11 = null
            if (show.strIngredient11){
                drinkIngredient11 = show.strIngredient11
            } else {
                drinkIngredient11 = ""
            }

            let drinkIngredient12 = null
            if (show.strIngredient12){
                drinkIngredient12 = show.strIngredient12
            } else {
                drinkIngredient12 = ""
            }

            let drinkIngredient13 = null
            if (show.strIngredient13){
                drinkIngredient13 = show.strIngredient13
            } else {
                drinkIngredient13 = ""
            }

            let drinkIngredient14 = null
            if (show.strIngredient14){
                drinkIngredient14 = show.strIngredient14
            } else {
                drinkIngredient14 = ""
            }

            let drinkIngredient15 = null
            if (show.strIngredient15){
                drinkIngredient15 = show.strIngredient15
            } else {
                drinkIngredient15 = ""
            }

            allBoxesHTML += this.getShowBox(imgSrc, drinkName, drinkCategory, drinkSummary, drinkIngredient1, drinkIngredient2, drinkIngredient3, drinkIngredient4, drinkIngredient5, drinkIngredient6, drinkIngredient7, drinkIngredient8, drinkIngredient9, drinkIngredient10, drinkIngredient11, drinkIngredient12, drinkIngredient13, drinkIngredient13, drinkIngredient14, drinkIngredient15)
            
        }
        this.drinksSection.innerHTML = allBoxesHTML

        const buttons = document.querySelectorAll("button");
        const drinksMoreInfo = document.querySelectorAll(".show-after-click");

        function addActiveClass(button, element) {
            button.addEventListener("click", function() {
            element.classList.toggle("active");
            console.log('działa');
            });
        }

        buttons.forEach(function(button, index) {
            addActiveClass(button, drinksMoreInfo[index]);
            button.addEventListener("click", ()=>{
        
            if(button.textContent === "Back"){
                button.textContent= "Show More Information"
            } else {
                button.textContent = "Back"
            }
             })
        });
        
    },
    getShowBox: function(imgSrc, drinkName, drinkCategory, drinkSummary, drinkIngredient1, drinkIngredient2, drinkIngredient3, drinkIngredient4, drinkIngredient5, drinkIngredient6, drinkIngredient7, drinkIngredient8, drinkIngredient9, drinkIngredient10, drinkIngredient11, drinkIngredient12, drinkIngredient13, drinkIngredient13, drinkIngredient14, drinkIngredient15){
        return `
        <div class="drink">
        <img src="${imgSrc}" alt="">
        <div class="drink-name">${drinkName}</div>
        <div class="drink-category">${drinkCategory}</div>
        <button class="show-more">Show More Information</button>

        <div class="show-after-click">
            <div class="drink-summary">${drinkSummary}</div>
            <div class="drink-ingredients">
                <h3>Necessary Ingredients</h3>
                <ul>
                    <li>${drinkIngredient1}</li>
                    <li>${drinkIngredient2}</li>
                    <li>${drinkIngredient3}</li>
                    <li>${drinkIngredient4}</li>
                    <li>${drinkIngredient5}</li>
                    <li>${drinkIngredient6}</li>
                    <li>${drinkIngredient7}</li>
                    <li>${drinkIngredient8}</li>
                    <li>${drinkIngredient9}</li>
                    <li>${drinkIngredient10}</li>
                    <li>${drinkIngredient11}</li>
                    <li>${drinkIngredient12}</li>
                    <li>${drinkIngredient13}</li>
                    <li>${drinkIngredient14}</li>
                    <li>${drinkIngredient15}</li>
                </ul>
            </div>
        </div>
        </div>`
        
    },
    getNothing: function(){
        return `
           <div class="empty"> Brak wyszukań, spróbuj ponownie </div>`
    }
}

