import Image from 'next/image'
import styles from './page.module.css'


import Starfield from './components/starfield'

export default function Home() {
  return (
    
      <main className={styles.main}>
        <Image
         src='/images/S.P.A.C.E.03.png'
         width={600}
         height={300}
         alt='Image Logo'
         />
        <h2 style={{color:'white', fontSize:'20', zIndex: '11' }}>Welcome to S.P.A.C.E , Art and NFT project</h2>
        <section className={styles.nftGallery}>
          <Image
            className={styles.nftImage}
            src='/images/1_005.png'
            width={300}
            height={300}
            alt = 'nft image' />
          
          <Image
            className={styles.nftImage}
            src='/images/3_009Blue.png'
            width={300}
            height={300}
            alt = 'nft image' />

          <Image
            className={styles.nftImage}
            src='/images/006Purple.png'
            width={300}
            height={300}
            alt = 'nft image' />

          <Image
            className={styles.nftImage}
            src='/images/016Green.png'
            width={300}
            height={300}
            alt = 'nft image' /> 
        </section>
        
        <Starfield/>
        
      </main>
   
  )
}
