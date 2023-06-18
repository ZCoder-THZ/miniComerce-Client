<template>
    <div class="w-[80%] mx-auto my-4">
        <div class="my-4 bg-green-300 p-4 w-48">
            <router-link to="/">Home</router-link>
            <i class="fa-solid fa-greater-than mx-4"></i>
            <i>Detail</i>

        </div>
        <div class="flex flex-col" v-for="pro in product">
            <div class="h-[50vh] flex items-center  bg-gray-200 mb-3">
                <img class=" h-[45vh] mx-auto" alt="" :src="pro.image">
            </div>

            <div class="flex justify-center gap-2 ">
                <div class=" w-[80%]">
                    <div class="mb-3 p-4 space-y-3 flex flex-col">
                        <h1 class="text-3xl">{{ pro.item_name }}</h1>
                        <h1 class="text-2xl text-mainColor">$360</h1>
                    </div>
                    <div class="mb-3 p-4">

                        <div class=" flex justify-between w-[60%]">
                            <div class="flex flex-col">
                                <h1 class="text-2xl mb-3">Type</h1>
                                <span class="text-md py-2 text-red-500 text-center bg-red-100">{{ pro.item_type }}</span>
                            </div>
                            <div class="flex flex-col">
                                <h1 class="text-2xl mb-3">Condition</h1>
                                <span class="text-md py-2 text-blue-500 text-center bg-blue-100">{{ pro.item_condition
                                }}</span>
                            </div>
                            <div class="flex flex-col">
                                <h1 class="text-2xl mb-3">Status</h1>
                                <span class="text-md py-2 text-green-500 text-center bg-green-100">{{ pro.status }}</span>

                            </div>

                        </div>
                    </div>
                    <!--  -->
                    <div class="mb-3 p-4 space-y-3 flex flex-col">
                        <h1 class="text-3xl">Highlighted Information</h1>
                        <p class="m-4 text-md text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                        </p>
                    </div>
                    <!--  -->
                    <div class="mb-3 p-4 space-y-3 flex flex-col">
                        <h1 class="text-3xl">Product Information</h1>
                        <div class=" " v-html="pro.description">
                        </div>
                    </div>
                    <!--  -->
                    <div class="mb-3 p-4 space-y-3 flex flex-col">
                        <h1 class="text-3xl mb-8">Owner Information</h1>
                        <div class="ml-8 flex flex-col">
                            <h1 class=" text-2xl"><i class="fa-solid fa-phone mr-2 fa-1x"></i>Contact Number</h1>
                            <h1 class=" mt-5 text-2xl">+95 {{ pro.phone }}</h1>

                            <div class="bg-blue-100 mt-9 ">
                                <div class="flex px-3 py-2 items-center">
                                    <div class="mr-3">
                                        <i class="fa-solid fa-user fa-2x text-white bg-black p-3 pb-1 rounded-full"></i>
                                    </div>
                                    <div>
                                        <h1 class="text-lg">{{ pro.username }}</h1>
                                        <h1 class="text-lg text-gray-600">{{ pro.address }}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 class="text-md mb-2">Location <i class="fa-solid fa-location-dot"></i></h1>
                    <h2 class="text-lg mb-4">{{ pro.address }}</h2>
                    <!-- <h1>lattidte{{ pro.ltd }}</h1> -->
                    <Map :initialLatitude="pro.ltd" :initialLongitude="pro.lng" :initialZoom="18" />
                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
import { inject } from "vue";
import detail from '../composables/detail';
import Map from './Map.vue'
const { product } = detail()
</script>

<style lang="scss" scoped></style>
