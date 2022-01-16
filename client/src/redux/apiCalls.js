import axios from "axios";
const apiBaseUrl = "http://localhost:5000";

export const fetchProduct = async (id) => {
    try {
        const res = await axios.get(apiBaseUrl + "/products/find/" + id);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchProducts = async (cat) => {
    try {
        if (cat) {
            const res = await axios.get(
                apiBaseUrl + "/products?category=" + cat
            );

            return res.data;
        } else {
            const res = await axios.get(apiBaseUrl + "/products");
            return res.data;
        }
    } catch (err) {
        console.log(err);
    }
};
