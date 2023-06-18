
import { ref, onMounted } from 'vue';
import router from '../routes/index';
import { useRoute } from 'vue-router';
import axios from "axios";
import { ApiStore } from "../store/ApiStore";
import { productApiStore } from "../store/productApiStore";


export default function detail() {
    let store = productApiStore();

    let apiRoute = ApiStore().apiRoute
    const product = ref();
    const productId = ref()
    const route = useRoute();
    const getProductDetail = async () => {
        await store.fetchProduct(apiRoute, Number(productId.value))

        product.value = await store.product.data
        console.log(product.value)
    }
    onMounted(() => {
        if (route.query.id) {
            productId.value = route.query.id
        }
        getProductDetail()
        // console.log(product.value)
    });

    return {
        product
    };



}
