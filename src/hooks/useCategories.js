import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCategories = () => {
return useQuery({
queryKey: ["categories"],
queryFn: async () => {
const res = await axios.get(
"https://dummyjson.com/products/categories"
);

// 👇 ساختار درست  
  const clean = res.data.map((cat) => ({  
    value: cat.slug,   // برای API  
    label: cat.name,   // برای نمایش  
  }));  

  return [{ value: "all", label: "All" }, ...clean];  
},

});
};
