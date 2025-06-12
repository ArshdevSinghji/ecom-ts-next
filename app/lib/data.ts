export async function getData() {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=10&skip=0");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function getDataById(id: number) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
