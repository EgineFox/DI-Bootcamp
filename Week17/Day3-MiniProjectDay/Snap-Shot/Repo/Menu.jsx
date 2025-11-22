import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Menu() {
    const navigate = useNavigate();
    const location = useLocation();

    const paths = ['/', '/beaches', '/birds', '/food'];
    const currentIndex = paths.indexOf(location.pathname);

    const handleChange = (event, newValue) => {
        navigate(paths[newValue]);
    };

    return (
        <Box sx={{ 
            width: '100%' ,  
            fontFamily: "Helvetica Neue", 
            fontSize: '16px', 
            fontWeight: 'bold'
}}>
            <Tabs value={currentIndex === -1 ? 0: currentIndex} onChange={handleChange} 
            centered 
            >
                <Tab 
                label='Mountain' 
                sx={{ 
                    fontFamily: "Poppins, sans-serif", 
                    fontSize: '16px', 
                    fontWeight: 'bold'
                    }} />
            
                <Tab 
                label='Beaches' 
                sx={{ 
                    fontFamily: "Poppins, sans-serif", 
                    fontSize: '16px', 
                    fontWeight: 'bold'
                    }} />
                <Tab 
                label='Birds' 
                sx={{ 
                    fontFamily: "Poppins, sans-serif", 
                    fontSize: '16px', 
                    fontWeight: 'bold'}}/>
                <Tab 
                label='Food' 
                sx={{ 
                    fontFamily: "Poppins, sans-serif", 
                    fontSize: '16px', 
                    fontWeight: 'bold'}}/>
            </Tabs>

        </Box>
    )
}
