import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3334"
});


export async function fetchProducts(){
    try {
        const response = await api.get("/products");
        return response.data;
    } catch (error){
        console.error("Error ao buscar produtos:", error);
        throw error;
    }
}

export async function fetchMenu(){
    try {
        const response = await api.get("/menu");
        return response.data;
    } catch (error){
        console.error("Error ao buscar produtos:", error);
        throw error;
    }
}

export function getImageUrl(imagePath){
    return `${api.defaults.baseURL}/files/${imagePath}`;
}