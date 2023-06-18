
import { ref, onMounted } from 'vue';
import router from '../routes/index';
import { useRoute } from 'vue-router';
import axios from "axios";
import { ApiStore } from "../store/ApiStore";
import { productApiStore } from "../store/productApiStore";


export default function detail() {
    let store = productApiStore();

    let apiRoute = ApiStore().apiRoute
    const filteredProducts = ref();
    const categoryId = ref()
    const route = useRoute();
    const itemName = ref();
    const priceRangeMax = ref();
    const priceRangeMin = ref()
    const selectedCategory = ref();
    const categories = ref()

    const itemCondition = ref()
    const itemConditions = ref()
    const itemTypes = ref()
    const itemType = ref()
    const itemStatus = ref()
    const filterdByCategory = async () => {
        await store.fetchProductsByCategory(apiRoute, Number(categoryId.value))

        filteredProducts.value = await store.filteredProducts.data
        categories.value = await store.filteredProducts.category
        itemConditions.value = await store.filteredProducts.itemConditions
        itemTypes.value = await store.filteredProducts.itemTypes
        console.log(filteredProducts.value)
        console.log(categories.value)
    }
    //detail product
    let productDetail = (id) => {

        router.push({
            path: '/detail',
            query: { id }
        });
    };

    async function applyFilter() {
        const filteredData = {};

        if (itemName.value) {
            filteredData.item_name = itemName.value;
        }

        if (priceRangeMin.value) {
            filteredData.price_min = parseInt(priceRangeMin.value);
        }
        if (itemCondition.value) {
            filteredData.item_condition = itemCondition.value
        }
        if (itemType.value) {
            filteredData.type = itemType.value
        }
        if (priceRangeMax.value) {
            filteredData.price_max = parseInt(priceRangeMax.value);
        }

        if (selectedCategory.value) {
            filteredData.category = selectedCategory.value;
        }

        await store.filterProducts(apiRoute, filteredData);
        filteredProducts.value = await store.filteredProducts.data
        console.log(filteredData);
    }

    // function filterItems(items, filters) {
    //     return items.filter((item) => {
    //         let match = true;

    //         for (const key in filters) {
    //             if (filters.hasOwnProperty(key)) {
    //                 if (filters[key] !== item[key]) {
    //                     match = false;
    //                     break;
    //                 }
    //             }
    //         }

    //         return match;
    //     });
    // }
    //
    onMounted(() => {
        if (route.query.id) {
            categoryId.value = route.query.id
        }
        filterdByCategory()
        // console.log(product.value)
    });

    return {
        filteredProducts,
        itemName,
        priceRangeMin,
        priceRangeMax,
        selectedCategory,
        itemCondition,
        itemConditions,
        itemType,
        categories,
        itemTypes,
        applyFilter,
        productDetail
    };



}
