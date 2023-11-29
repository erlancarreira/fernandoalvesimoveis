interface Ilancamentos {    
    src: string 
    alt: string 
    url?: string
}

interface Idata {
    lancamentos: Ilancamentos[]
}

import assert_image1 from '../../asserts/images/image_1.jpg'
import assert_image2 from '../../asserts/images/image_3.jpg'

export const data: Idata = {
    lancamentos: [
        { 
            src: assert_image1.src, 
            alt: 'Imagem da casa em Monguba',
            url: '/imovel/casa-venda-monguba-ce-financia/CA01' 
        },
        { 
            src: assert_image2.src, 
            alt: 'Imagem da casa em Monguba',
            url: '/imovel/casa-venda-monguba-ce-financia/CA02'  
        }
    ]
}