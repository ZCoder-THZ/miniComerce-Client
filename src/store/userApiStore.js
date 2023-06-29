import { defineStore } from "pinia";
import axios from "axios";
export const userApiStore = defineStore('userApiStore', {

    state: () => ({

        user: ''

    }),
    actions: {

        async getUserDetail(api, id) {
            let response = await axios.get(`${api}/uses/${id}`);
            


        }



    }



})