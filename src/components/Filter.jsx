// import React from "react";
// import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
// import { useCategories } from "../hooks/useCategories";

// export default function Filter({ value, onChange }) {
//   const { data: categories = [], isLoading } = useCategories();

//   return (
//     <FormControl size="small" sx={{ width: 160, mr: 2 }}>
//       <InputLabel>Category</InputLabel>

//       <Select
//         value={value}
//         label="Category"
//         onChange={(e) => onChange(e.target.value)}
//       >
//         {isLoading ? (
//           <MenuItem value="">Loading...</MenuItem>
//         ) : (
//           categories.map((cat) => (
//             <MenuItem key={cat} value={cat}>
//               {cat.charAt(0).toUpperCase() + cat.slice(1)}
//             </MenuItem>
//           ))
//         )}
//       </Select>
//     </FormControl>
//   );
// }



















import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useCategories } from "../hooks/useCategories";

export default function Filter({ value, onChange }) {
  const { data: categories = [], isLoading } = useCategories();

  return (
    <FormControl size="small" sx={{ width: 180, mr: 2 }}>
      <InputLabel>Category</InputLabel>

      <Select
        value={value}
        label="Category"
        onChange={(e) => onChange(e.target.value)}
      >
        {isLoading ? (
          <MenuItem value="">Loading...</MenuItem>
        ) : (
          categories.map((cat) => (
            <MenuItem key={cat.value} value={cat.value}>
              {cat.label}
            </MenuItem>
          ))
        )}
      </Select>
    </FormControl>
  );
}
