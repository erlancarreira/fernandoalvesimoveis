"use client"

import useSizeComponents from "../useSizeComponents"

export default function ResizeBody() {
    
    const { someHeights } = useSizeComponents()


    console.log(someHeights(), "someHeights")

    return <>
       ENTREI
    </>
}