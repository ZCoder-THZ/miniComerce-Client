<template>
    <div class="w-[90%] mx-auto ">

        <div class="my-4 bg-green-300 p-4 w-48">
            <router-link to="/">Home</router-link>
            <i class="fa-solid fa-greater-than mx-4"></i>
            <i>Detail</i>

        </div>

        <div class="flex items-center mt-12 mx-auto w-[100%]">

            <div class="flex px-2 justify-center  ">
                <div class=" w-[300px] min-w-[350px] ml-12 ">
                    <div class="flex justify-between px-3">
                        <h1 class="text-xl text-bold ">Recent Items</h1>
                        <div>
                            <h1 class="text-lg text-red-500">Vie More </h1>
                        </div>
                    </div>
                    <!--  -->
                    <div class="flex flex-col mb-3 px-3 mt-8">
                        <h1 class="text-xl text-gray-700">Sorting</h1>
                        <div class="flex mx-auto my-4 justify-between w-[60%]">

                            <a class="text-lg  text-gray-700">Latest </a>
                            <a class="text-lg  text-gray-700">Popular </a>


                        </div>
                    </div>
                    <!--  -->
                    <div class="px-3 mb-3">
                        <h1 class="text-xl text-bold mb-2">Item Name</h1>
                        <input type="text" placeholder="Input Name" name="" v-model="itemName"
                            class="bg-blue-50 rounded-md placeholder:text-gray-400 focus:ring-0 py-2 w-[100%] border-none"
                            id="">
                    </div>
                    <!--  -->
                    <div class="px-3 mb-3">
                        <h1 class="text-xl text-bold mb-2">Price Range</h1>
                        <div class="flex justify-between gap-2">
                            <input type="text" placeholder="Input Name" name="" v-model="priceRangeMin"
                                class="bg-blue-50 rounded-md placeholder:text-gray-400 focus:ring-0 py-2 w-[50%] border-none"
                                id="">
                            <input type="text" placeholder="Input Name" name="" v-model="priceRangeMax"
                                class="bg-blue-50 rounded-md placeholder:text-gray-400 focus:ring-0 py-2 w-[50%] border-none"
                                id="">
                        </div>
                    </div>
                    <!--  -->
                    <div class="px-3 mb-3">
                        <h1 class="text-xl text-bold mb-2">Category</h1>

                        <select name="" v-model="selectedCategory"
                            class="bg-blue-50 rounded-md placeholder:text-gray-400 focus:ring-0 py-2 w-[100%] border-none">
                            <option value="" selected>Choose One</option>
                            <option v-for="category in categories" :value="category.id" :key="category.id">
                                {{ category.category_name }}
                            </option>
                        </select>

                    </div>
                    <!--  -->
                    <div class="px-3 mb-3">
                        <h1 class="text-xl text-bold mb-2">Item Condition</h1>

                        <select name=""
                            class="bg-blue-50 rounded-md placeholder:text-gray-400 focus:ring-0 py-2 w-[100%] border-none"
                            v-model="itemCondition" id="">
                            <option class="mb-2" value="" selected>Choose Item Condition</option>
                            <option class="mb-2" v-for="condition in itemConditions" :value="condition">{{ condition }}
                            </option>

                        </select>
                    </div>
                    <!--  -->
                    <div class="px-3 mb-3">
                        <h1 class="text-xl text-bold mb-2">Type</h1>

                        <select name=""
                            class="bg-blue-50 rounded-md placeholder:text-gray-400 focus:ring-0 py-2 w-[100%] border-none"
                            v-model="itemType" id="">
                            <option class="mb-2" value="" selected>Choose Item Type</option>
                            <option class="mb-2" v-for="Type in itemTypes" :value="Type">{{ Type }} </option>

                        </select>
                    </div>
                    <div class="px-3 mb-3 flex justify-center">

                        <button class="bg-[#6366f1] py-3 rounded-md h-14 w-[100%] text-white" @click="applyFilter">
                            Apply Filter
                        </button>
                    </div>

                </div>
                <div class="grid w-[70%] ml-4 grid-cols-2 md:grid-cols-3 ">
                    <div class="hover:bg-gray-200 max-h-[400px] hover:cursor-pointer rounded-md"
                        v-for="product in filteredProducts">
                        <div class="p-1" @click="productDetail(product.id)">
                            <img class="h-auto max-w-full rounded-lg" :src="product.image" alt="">
                            <div class="flex justify-between">
                                <h1 class="text-xl">{{ product.item_name }}</h1>
                                <h1 class="text-sm text-blue-500">{{ product.status }}</h1>
                            </div>
                            <h1 class="tex-2xl text-blue-500">${{ product.price }}</h1>
                            <div class="flex items-center">
                                <h1><i class="fa-solid fa-user fa-2x text-white bg-blue-500 pt-2 px-1 rounded-full"></i>
                                </h1>
                                <h1 class="ml-3 text-xl">{{ product.uploader }}</h1>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import filter from '../composables/filter';
const { filteredProducts, itemName,
    priceRangeMin,
    priceRangeMax,
    selectedCategory,
    categories,
    itemConditions,
    itemCondition,
    itemTypes,
    itemType,
    productDetail,
    applyFilter } = filter()
</script>

<style lang="scss" scoped></style>
