import { Pagination, Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";

export default function PicturesControls({ page, setPage, perPage, setPerPage }) {
    return (
        <Box sx={{ marginTop: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>

            {/* Pagination */}
            <Pagination
                count={10}
                page={page}
                onChange={(event, value) => setPage(value)}
                color="primary"
                shape="rounded"
            />

            {/* Choise count of img */}
            <FormControl sx={{ 
                minWidth: 200,
                padding: '10px' }}>
                <InputLabel id="per-page-label"></InputLabel>
                <Select
                    labelId="per-page-label"
                    value={perPage}
                    onChange={(e) => setPerPage(Number(e.target.value))}
                >
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={35}>35</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}