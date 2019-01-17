<template>
    <div>
        {{items}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                type: this.$route.params.type,
                items: []
            }
        },
        watch: {
            "$route":"fetchItems"
        },
        methods:{
            fetchItems(){
                this.items = [];
                let init_ids = [2,4,7];
                for (let i in init_ids) {
                    let id = init_ids[i];
                    console.log("id", id)
                    fetch(
                        `https://swapi.co/api/${this.type}/${id}`, 
                        {method:"GET"})
                    .then(response => response.json())
                    .then(json => this.items.push(json))
                }
            }
        },
        created(){
            this.fetchItems()
        }
    };
</script>