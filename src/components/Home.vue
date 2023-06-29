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
        <div class="mx-auto w-[70%]  grid grid-cols-2  md:grid-cols-4 grid-flow-row auto-rows-max">
            <div class="hover:bg-gray-200 relative  rounded-md" v-for="(product, key) in   products  ">
                <div class="p-2 ">
                    <img class=" max-w-full w-[100%] h-[200px]  rounded-lg hover:cursor-pointer " :src="product.image"
                        alt="" @click="productDetail(product.id)">
                    <div class="flex justify-between">
                        <h1 class="text-xl">{{ product.item_name }}</h1>
                        <h1 class="text-sm text-blue-500">{{ product.item_condition }}</h1>
                    </div>
                    <div class="flex justify-between">
                        <h1 class="tex-2xl text-blue-500">${{ product.price }}</h1>
                        <h1 class="text-xl"><i class="fa-solid fa-eye"></i> {{ product.view_count }}</h1>
                    </div>
                    <div class="flex items-center ">

                        <div v-if="product.profile_image" class=" ">
                            <img @click="getUserDetail(product.user_id)" :src="product.profile_image"
                                class="w-[40px] h-[40px] rounded-full  " alt="">

                        </div>
                        <div v-else>

                            <i @click="getUserDetail(product.user_id)"
                                class="fa-solid fa-user fa-2x text-white bg-blue-500 pt-2 px-1 rounded-full hover:cursor-pointer "></i>
                        </div>





                        <h1 class="ml-3 text-l">{{ product.name }}</h1>
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>

<script setup>
import home from '../composables/home';
import { ref } from 'vue';

const { getProducts, getUserDetail, productDetail, products, categories, filterByCategory, search, searchKey, searchOption, searchValidation } = home()
</script>

<style lang="scss" scoped></style>]
