'use client'
import { useCallback, useEffect, useState } from 'react'
import './index.css'
import Box from '@mui/material/Box'
import ImageComponent from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
type TImage = {
    src: string | StaticImport, alt: string
}
// interface ISlider {
//     images: TImage[] 
//     slider?: any | null
//     currentImage?: number
//     maxImages?: number
    
//     timeChange?: number
// }

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { styled } from '@mui/material'

import assert_image1 from '../../asserts/images/image_0.jpg'
import assert_image2 from '../../asserts/images/image_1.jpg'
import assert_image3 from '../../asserts/images/image_2.jpg'
import assert_image4 from '../../asserts/images/image_3.jpg'
import assert_image5 from '../../asserts/images/image_4.jpg'


const carouselImages = [
    { src: assert_image1.src, alt: 'Imagem 1 da casa'},
    { src: assert_image2.src, alt: 'Imagem 2 da casa'},
    { src: assert_image3.src, alt: 'Imagem 3 da casa'},
    { src: assert_image4.src, alt: 'Imagem 4 da casa'},
    { src: assert_image5.src, alt: 'Imagem 5 da casa'}
]

const CustomBox = styled(Box)(({theme}) => ({
    position: 'relative',
    width: '100%',
    height: '500px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '4px',
    [theme.breakpoints.between("xs", "sm")]: {
        maxHeight: '382px'
    },
}))

export default function Slider() {
    
    const [ images ] = useState<TImage[]>(carouselImages)

    const [ currentImage      , setCurrentImage       ] = useState(0)
    const [ sliderCurrentImage, setSliderCurrentImage ] = useState<TImage>(carouselImages[currentImage])
    
    const loadImage = useCallback(() => {
    
        setSliderCurrentImage(images[currentImage])
        
    }, [setSliderCurrentImage, images, currentImage])

    const handleNext = () => {
        
        const total = images.length - 1
        if (currentImage >= total) return 
        setCurrentImage( prevState => prevState + 1 )
    }

    const handlePrev = () => {
       
        if (currentImage <= 0) return 
        setCurrentImage( prevState => prevState - 1 )
        
    }

    useEffect(() => loadImage(), [ loadImage ])

    return <>
        <CustomBox id={'custom_slider'} >
            <ImageComponent 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                fill
                style={{
                    objectFit: 'contain',
                    zIndex: 0,
                    
                }}
                src={sliderCurrentImage.src} 
                alt={sliderCurrentImage.alt} 
            />
            <button 
               className="btn_custom_slider "
               onClick={handlePrev}
               style={{zIndex: 2}}
            >
                <ArrowBackIosNewIcon />
            </button>

            <div id={'dvload'}>
                <div id={'dvbarra'}></div>
            </div> 

            <button 
                onClick={handleNext}
                className="btn_custom_slider "
                style={{zIndex: 2}}
            >
                <ArrowForwardIosIcon />
            </button>
        </CustomBox> 
    </>

}