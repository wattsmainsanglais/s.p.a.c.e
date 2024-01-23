import Image from 'next/image'
import styles from './page.module.css'


import ArtBox from './components/art-reveal'
import Lore from './components/lore'
import InfoBox from './components/info'


import Starfield from './components/starfield'


export default function Home() {

 


  return (
    <>
      <nav className={styles.navWrapper}>
        
          <InfoBox />
      </nav>
      
      <main className={styles.main}>
        <Image
         src='/images/S.P.A.C.E.04.png'
         width={600}
         height={431}
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
      </>
  )
}
