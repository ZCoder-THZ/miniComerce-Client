// productApiStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const productApiStore = defineStore('productApi', {
    state: () => ({
        products: [],
        product: null,
        categories: [],
        filteredProducts: [],
        filteredByCategory: [],
    }),
    actions: {
        async fetchProducts(apiRoute) {
            try {
                const response = await axios.get(`${apiRoute}/products`)
                this.products = response.data
                this.categories = response.data.category
            } catch (error) {
                console.error('Failed to fetch products:', error)
            }
        },
        async fetchProduct(apiRoute, id) {
            try {
                const response = await axios.get(`${apiRoute}/detail/${id}`)
                this.product = response.data
            } catch (error) {
                console.error('Failed to fetch products:', error)
            }

        },
        async fetchProductsByCategory(apiRoute, id) {
            try {
                const response = await axios.get(`${apiRoute}/categories/${id}`)
                this.filteredProducts = response.data
            } catch (error) {
                console.error('Failed to fetch products:', error)
            }

        },
        async filterProducts(apiRoute, data) {
            try {
                const response = await axios.post(`${apiRoute}/products/filter`, data);
                this.filteredProducts = response.data


            } catch (error) {
                console.error('Failed to fetch products:', error)

            }

        },
        async searchProducts(apiRoute, data) {
            try {
                const response = await axios.post(`${apiRoute}/products/search`, data);
                this.products = response.data
                console.log(response.data)
            } catch (error) {
                console.error('Failed to fetch products:', error)

            }

        },
        async updateViewCount(apiRoute, id) {
            try {
                const response = await axios.post(`${apiRoute}/products/${id}/views`);

            } catch (error) {

            }

        }
    },
})
