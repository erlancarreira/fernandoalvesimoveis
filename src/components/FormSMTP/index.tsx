import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from '@mui/material/Typography'

export default function FormSMTP() {
    return <>
        <Typography component={'h3'} fontSize={'2rem'} my={3} textAlign={'center'}>Digite seus dados no formulário abaixo</Typography>
        <Grid container spacing={2} >
            <Grid item lg={6} md={6} sm={12} xs={12}> 
                <TextField 
                    name="nome" 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    helperText=" "
                    fullWidth 
                />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}> 
                <TextField 
                    name="email" 
                    label="Email" 
                    placeholder="Digite o seu email" 
                    helperText=" "
                    fullWidth 
                />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}> 
                <TextField 
                    rows={10} 
                    multiline 
                    id={'mensagem'}
                    name="mensagem" 
                    label="Mensagem" 
                    placeholder="Digite o seu nome" 
                    helperText=" "
                    fullWidth />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}> 
                <Button size="large" variant="contained" fullWidth>Entrar em contato</Button>
            </Grid>
        </Grid>  
    </>
}