<template>
        <div class="col-md-4">
            <div class="item-card">
                <div class="card-block">
                    <div class="card-title">
                       <h4>{{item.name}} </h4>
                       <div v-for="(value, key, index) in items">
                           <div v-if="index < 5">
                               <strong>
                                   {{key}}
                               </strong>:{{value}}
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props:['item']
}
</script>

