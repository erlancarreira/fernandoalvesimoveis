import { useLayoutEffect, useState } from 'react'

function useSizeComponents() {
    
    const [ state, setState ] = useState({
        menu: {
            offsetHeight: 0,
        }, 
        footer: {
            offsetHeight: 0,
        }
    })
    
    const someHeights = () => {
        
        const actionHeight = state?.menu?.offsetHeight || 0
        const menuHeight   = state?.footer?.offsetHeight || 0

        return actionHeight + menuHeight
    }
    
    useLayoutEffect(() => {
        function updateSize() {
            const menu   = document.getElementById("header")
            const footer = document.getElementById("footer")

            if (menu !== null && footer !== null) {

                setState( prevState => ({
                    ...prevState, 
                    menu  : { offsetHeight: menu.offsetHeight }, 
                    footer: { offsetHeight: footer.offsetHeight }
                }))

            }
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])
    
    return {...state, someHeights }
}

export default useSizeComponents