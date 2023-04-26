import styles from '../styles/About.module.css'
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>PokéNet é uma enciclopédia virtual que contém informações detalhadas sobre cada Pokémon existente. É um recurso valioso para treinadores de Pokémon e fãs da franquia, pois permite que eles conheçam cada criatura, suas características e habilidades.</p>
      <Image 
      src="/images/charizard.png" 
      width="300" 
      height="300" 
      alt="Charizard" />
    </div>
  )
}