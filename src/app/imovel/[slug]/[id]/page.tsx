import Slider from "@/components/Slider"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"
import { Button } from "@mui/material"
//import Image from "next/image"

export default function Product() {
    return <Grid container spacing={2} >
        <Grid item lg={9} md={9} sm={12} xs={12}>
            <Card elevation={3}>
                <CardMedia>
                    <Slider />
                </CardMedia>
                <CardHeader sx={{ padding: 0}}>
                    CHALE MONTE LINDO
                </CardHeader>
                <Divider  />  
                <CardContent>
                    🏠 Chalé em construção tem uma vista incrível para um vale de montanhas e um pôr do sol lindo, ele possui uma varanda em L com churrasqueira, sala de estar, cozinha, área de serviço e 3 suítes sendo uma delas reversível.
                    <br/>  
                    💧 Poço profundo com vazão de 7 M³/H.
                    <br/> 
                    🚘 Estacionamento com 02 vagas.
                    <br/>
                    📍Localizada em um região alta, ficando a 1,6 km do centro de Mulungu e com 14  km do centro de Guaramiranga. 
                    <br/>
                    ☎️ Agende sua visita pelo telefone: (85) 9.8744-8001 / (85) 98685-9164.
                </CardContent>
            </Card>
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
            <Stack component={Paper} elevation={3}>
                <Stack p={2} spacing={2} sx={{
                    "& .MuiFormHelperText-root": {
                        margin: 0
                    }
                }}>
                    <Typography>ENTRAR EM CONTATO</Typography>
                    <TextField 
                        label="Nome" 
                        name={'nome'}
                        placeholder="Digite seu nome" 
                        fullWidth 
                    />
                    <TextField 
                        label="Telefone" 
                        name={'telefone'} 
                        placeholder="Digite seu telefone" 
                        fullWidth 
                    />
                    <TextField 
                        label="Email" 
                        name={'email'} 
                        placeholder="Digite seu email" 
                        fullWidth 
                        error={true}
                        helperText={"Se você não tem um email deixe esse campo em branco"} 
                    />
                    <TextField 
                        multiline 
                        rows={5} 
                        label="Mensagem" 
                        name={'mensagem'} 
                        fullWidth 
                    />

                    <Button variant="contained" size="large">Enviar</Button>
                </Stack>
            </Stack>
        </Grid>
    </Grid> 
}