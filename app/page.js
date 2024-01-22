import Image from 'next/image'
import styles from './page.module.css'

import ArtBox from './components/art-reveal'
import Lore from './components/lore'


import Starfield from './components/starfield'

export default function Home() {
  return (
    
      <main className={styles.main}>
        <Image
         src='/images/S.P.A.C.E.03Blurred.png'
         width={600}
         height={300}
         alt='Image Logo'
         />
      
        <section className={styles.nftGallery}>
          
          <ArtBox src='/images/1_005.png' alt='nft image' />
          <ArtBox src='/images/3_009Blue.png' alt='nft image'/>
          <ArtBox src='/images/006Purple.png' />
          <ArtBox src='/images/016Green.png' />

    
        </section>

        <section className={styles.loreWrapper}>
          <Lore/>
        </section>
        
        <Starfield/>
        
      </main>
   
  )
}
