new Vue({
    el: "#app",
    data: {
        random: [],
        ingredients: [],
        measurements: [],
        nums: [],
    },
    methods: {
        randCocktail: function(){
            axios({
                method: 'get',
                url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
            }).then(response => {
                this.random = response.data
                this.randIngreds()
          
              
            })
        
            
        },
        randIngreds: function(){
            let ingreds = []
            let measurements = []
            let nums = []


            for (let item of Object.keys(this.random.drinks[0])) {
                if (item.includes('strIngredient') && this.random.drinks[0][item]){
                    ingreds.push(item)
                }
            }

            for (let thing of Object.keys(this.random.drinks[0])) {
                if (thing.includes('strMeasure') && this.random.drinks[0][thing]){
                    measurements.push(thing)
                }
            }

            for (let i=0; i < ingreds.length; i++){
                console.log(i)
                nums.push(i)

            }
            
            this.ingredients = ingreds
            this.measurements = measurements
            this.nums = nums
        }
    },
    created: function() {
        this.randCocktail()
    }
})