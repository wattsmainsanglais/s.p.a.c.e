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
       {/*} <h2 style={{color:'white', fontSize:'20', zIndex: '11', textAlign: 'center', paddingLeft: '5%' }}>Welcome to S.P.A.C.E , Art and NFT project</h2>*/}
        <section className={styles.nftGallery}>
          
          <ArtBox src='/images/1_005.png' alt='nft image' />
          <ArtBox src='/images/3_009Blue.png' alt='nft image'/>
          <ArtBox src='/images/006Purple.png' />
          <ArtBox src='/images/016Green.png' />

    
        </section>

        <section className={styles.loreWrapper}>
          <Lore cascade damping={1} delay={1} />
        </section>
        
        <Starfield/>
        
      </main>
   
  )
}
