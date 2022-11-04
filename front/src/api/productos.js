

export const products = async () => {
    const response = await fetch("http://localhost:5000/api/products");
    const data = await response.json()
    return data;
};



