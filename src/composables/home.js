import { onMounted, ref, provide, inject } from "vue";
import router from '../routes/index';
import axios from "axios";
import { ApiStore } from "../store/ApiStore";
import { productApiStore } from "../store/productApiStore";
import { userApiStore } from "../store/userApiStore";
export default function home() {
    let api = ApiStore().apiRoute;
    let store = productApiStore();
    let userStore = userApiStore();
    let categories = ref();
    let searchValidation = ref(false);
    let products = ref();
    let product = ref();

    const searchKey = ref('')
    const searchOption = ref()

    const getUserDetail =async (id) => {

        await userStore.getUserDetail(api, id)
        
        
        
    }
    const search = async () => {
        if (!searchKey.value == '') {
            if (searchOption.value == 'category') {
                let data = {
                    category_name: searchKey.value

                }
                await store.searchProducts(api, data)
                products.value = await store.products.data
                console.log(products.value)

            } else {
                let data = {
                    product_name: searchKey.value

                }
                await store.searchProducts(api, data)
                products.value = await store.products.data
                console.log(products.value)


            }



        } else {
            searchValidation.value = true
        }
    }
    let getProducts = async () => {
        await store.fetchProducts(api);
        categories.value = store.categories
        products.value = store.products.data;
        console.log(products.value);
    };

    let productDetail = (id) => {

        router.push({
            path: '/detail',
            query: { id }
        });
    };

    let filterByCategory = (id) => {

        router.push({
            path: '/filter',
            query: { id }
        });

    }
    onMounted(() => {
        getProducts();
    });

    return {
        getProducts,
        products,
        categories,
        productDetail,
        filterByCategory,
        search,
        searchKey,
        searchOption,
        getUserDetail,
        searchValidation
    };
}
