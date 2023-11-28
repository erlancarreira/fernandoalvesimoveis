interface Ilancamentos {    
    src: string 
    alt: string 
    url?: string
}

interface Idata {
    lancamentos: Ilancamentos[]
}

export const data: Idata = {
    lancamentos: [
        { 
            src: '/static/images/image_1.jpg', 
            alt: 'Imagem da casa em Monguba',
            url: '/imovel/casa-venda-monguba-ce-financia/CA01' 
        },
        { 
            src: '/static/images/image_3.jpg', 
            alt: 'Imagem da casa em Monguba',
            url: '/imovel/casa-venda-monguba-ce-financia/CA02'  
        }
    ]
}