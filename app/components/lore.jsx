'use client'

import styles from '../page.module.css'
import { Space_Mono } from 'next/font/google'


import { Fade } from 'react-awesome-reveal'

const space = Space_Mono({
    subsets: ['latin'],
    weight: '400'
})

export default function Lore(){

    return (
        <>
         <Fade cascade damping={.8} delay={1} fraction={.5}>
        
            <article className={space.className}>
            <h2>S.P.A.C.E Lore</h2>
            <br />
            
            <p>Warpy was a tiny chameleon alien with a unique ability - he could warp himself from one place to another in the blink of an eye. 
            This power made Warpy very curious, and he often found himself warping into dangerous situations just to see what was there.</p>
            <br />
            <p>But Warpy was quick and nimble, and he could always warp away if he needed to. Still, his curiosity sometimes got the best of him, 
            and he would end up in places he really shouldn't be.
            </p>
            <br />
            <p>One day, Warpy found himself being hunted by a group of gnomes. These gnomes were known for their magic, and they had been tracking 
            Warpy for some time.</p>
            <br />
            <p>
            Warpy quickly realized that alien warp magic and gnome magic did not mix well. Whenever he tried to warp away from the gnomes, 
            he would end up in even more dangerous situations.
   
            </p>
            <br />
            <p>
            But Warpy was nothing if not determined, and he continued to warp into dangerous encounters, both human and alien, always managing 
            to escape just in the nick of time.   
            </p>
            <br />
            <p>
            Despite the many dangers he faced, Warpy never lost his curious spirit. He continued to explore the universe, warping from one place 
            to another, always on the lookout for his next adventure.   
            </p>
            </article>
         </Fade>
            
        
        
        </>


    )

}