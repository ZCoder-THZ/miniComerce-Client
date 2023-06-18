import { defineStore } from "pinia";
export const ApiStore = defineStore('api', {
    state() {
        return {
            apiRoute: 'http://127.0.0.1:8000/api/v1'
        }
    },


})
