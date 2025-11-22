import { Box, TextField } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function SearchPanel( { initialValue }) {
  const [localValue, setLocalValue] = useState(initialValue || '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${localValue}`);
  };

  return (
    <form
    onSubmit={handleSubmit}>

   <Box sx={{ width: "100%", padding: '20px', margin: '20px', maxWidth: '1200px' }}>
    <TextField 
    label="Search"
    variant="outlined"
    value={localValue}
    onChange = {(e) => setLocalValue(e.target.value)}
    fullWidth
    sx={{marginBottom: 2, fontFamily: "Poppins, sans-serif", fontSize: '16px', fontWeight: 'bold'}}
    />
    </Box>
    </form>
  );
}
