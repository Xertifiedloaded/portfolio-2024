import React from 'react'
import styles from './styles.module.css'
import user from '../../assets/profile.jpeg'
export default function MyMenu() {
  return (
    <>
      <section className={styles.banner}>
        <div>
          <h2>Makinde Olaitan</h2>
          <h3>
           Fullstack Software Engineer
          </h3>
        </div>
        <img src={user} />
      </section>
      <section className={styles.section}>
        <h2>Brand New Shiz</h2>
        <p>
          An NFT collection is an assortment of digital assets released by an
          artist (or group of artists) containing a limited number of individual
          NFTs. Typically, most NFT collections consist of numerous NFTs that all
          conform to the same artistic style, with slight variations across each
          individual token.
        </p>
        <p>
          One of the most attractive aspects of the NFT world is that anybody can
          become an NFT artist and make their own collection. Unlike the
          traditional art scene, which generally requires extensive formal
          training and a significant amount of skill, the barriers to entry are
          considerably lower when it comes to NFTs.
        </p>
        <p>
          For starters, since NFTs are created digitally, artists can lean into
          graphic design and other computer-based skills, which are generally much
          simpler to master than becoming adept with a paintbrush. Second, many of
          the most popular NFT collections are rather simplistic in nature, such
          as the aforementioned Bored Apes Yacht Club, as well as other highly
          valued collections such as Crypto Punks.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim quod
          cumque voluptatem delectus maxime cupiditate, totam dolorem ad corporis
          repudiandae itaque quaerat dignissimos voluptatum explicabo facere dolor
          deleniti neque.
        </p>
        <br />
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim quod
          cumque voluptatem delectus maxime cupiditate, totam dolorem ad corporis
          repudiandae itaque quaerat dignissimos voluptatum explicabo facere dolor
          deleniti neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim quod
          cumque voluptatem delectus maxime cupiditate, totam dolorem ad corporis
          repudiandae itaque quaerat dignissimos voluptatum explicabo facere dolor
          deleniti neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim quod
          cumque voluptatem delectus maxime cupiditate, totam dolorem ad corporis
          repudiandae itaque quaerat dignissimos voluptatum explicabo facere dolor
          deleniti neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim quod
          cumque voluptatem delectus maxime cupiditate, totam dolorem ad corporis
          repudiandae itaque quaerat dignissimos voluptatum explicabo facere dolor
          deleniti neque.
        </p>
      </section>
    </>
  )
}
