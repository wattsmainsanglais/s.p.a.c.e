import Image from 'next/image'
import styles from './page.module.css'


import ArtBox from './components/art-reveal'
import Lore from './components/lore'
import InfoBox from './components/info'
import discordLogo from '../public/images/discord_white.svg'


import Starfield from './components/starfield'


export default function Home() {

 


  return (
    <>
      <nav className={styles.navWrapper}>
        
          <InfoBox />
          <a className={styles.mintTag} href='https://buynfts.exchange/sales/space/' target='_blank'><h2>MINT</h2></a>
          <a className={styles.mintTag} href='https://discord.com/channels/851965221929091113/918871571098124309' target= '_blank'>
            <Image
            src={discordLogo}
            width={56}
            
            alt='Discord logo, link to PocketTowne discord server' 
            />

          </a>
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
