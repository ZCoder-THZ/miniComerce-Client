<template>
    <div class="overflow-x-hidden">


        <!-- header -->
        <div class="max-h-[240px] overflow-hidden">
            <img src="../assets/hero2.jpg" class="w-full" style="height: 300px;" alt="" srcset="">
        </div>

        <div class="flex justify-center my-[-20px] mb-10">
            <input type="text" :placeholder="searchValidation ? 'don\'t empty' : 'Enter search key'"
                class="border-0 border-b-2 border-blue-700 mr-3 focus:border focus:border-transparent focus:outline-none  "
                v-model="searchKey" />
            <!-- <select
                class="px-4 mr-4 py-2 border-r-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                v-model="searchOption">
                <option value="product_name">Product Name</option>
                <option value="category">Category</option>
            </select> -->
            <button @click="search()" class="bg-blue-500 p-2 text-white rounded-md">Search</button>
        </div>















        <div class="flex justify-between w-[70%] mx-auto py-4">
            <h1 class="text-lg md:text-3xl lg:text-2xl text-bold ">What are u looking for</h1>
            <h1 class="text-lg text-blue-400">See More></h1>
        </div>





        <div class="flex items-center justify-around py-4 space-x-1 lg:space-x-4 md:space-x-4   flex-wrap w-[70%] mx-auto">

            <div class="flex flex-col items-center hover:cursor-pointer" v-for="category in categories"
                @click="filterByCategory(category.id)">
                <img class="h-14 p-2 bg-blue-200 rounded-full" :src="category.category_image" alt="">
                <h1 class="">{{ category.category_name }}</h1>
            </div>

        </div>
        <div class="flex items-center justify-between py-4 mx-auto w-[70%]  flex-wrap">
            <h1 class="text-xl text-bold">Recent Items</h1>
            <div>
                <h1 class="text-lg text-blue-5 text-blue-500">Vie More </h1>
            </div>
        </div>
        <div class="mx-auto w-[70%] h-64 grid grid-cols-2 md:grid-cols-4 grid-auto-rows-auto">
            <div class="hover:bg-gray-200 hover:cursor-pointer rounded-md" v-for="(product, key) in products"
                @click="productDetail(product.id)">
                <div class="p-2 ">
                    <img class="h-auto max-w-full rounded-lg" :src="product.image" alt="">
                    <div class="flex justify-between">
                        <h1 class="text-xl">{{ product.item_name }}</h1>
                        <h1 class="text-sm text-blue-500">{{ product.item_condition }}</h1>
                    </div>
                    <h1 class="tex-2xl text-blue-500">${{ product.price }}</h1>
                    <div class="flex items-center">
                        <h1><i class="fa-solid fa-user fa-2x text-white bg-blue-500 pt-2 px-1 rounded-full"></i></h1>
                        <h1 class="ml-3 text-xl">{{ product.uploader }}</h1>
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>

<script setup>
import home from '../composables/home';
import { ref } from 'vue';

const { getProducts, productDetail, products, categories, filterByCategory, search, searchKey, searchOption, searchValidation } = home()
</script>

<style lang="scss" scoped></style>]
