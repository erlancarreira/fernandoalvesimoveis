
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import ButtonFilters from "./ButtonFilters"
import CitiesStatesFilter from "./CitiesStatesFilter"
import TypesProperties from "./TypesProperties"
import SearchFilter from "./SearchFilter"

export default function Filter() {
    return < >
        <Grid 
            container 
            //component={Paper} 
           
            sx={{
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: 2,
                backgroundColor: 'white',
                flexGrow: 1,

                borderBottom: '1px solid rgb(241, 243, 244)'
               
            }}
            
            
        > 
            <Grid item lg={4} md={4} sm={12} xs={12} > 
                <ButtonFilters />
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12} > 
                <Grid container p={{
                    lg: 0, md: 0, sm: 2, xs: 2
                }} gap={{
                    lg: 0, md: 0, sm: 2, xs: 2
                }}> 
                    <Grid item lg={6} md={6} sm={12} xs={12} px={2}>
                        <CitiesStatesFilter />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} px={2} >
                        <TypesProperties />
                    </Grid> 
                    
                </Grid>
            </Grid>

            <Grid item lg={3} md={3} sm={12} xs={12} >
                
                <SearchFilter />
                  
            </Grid> 
             
        </Grid>
    </ >
}