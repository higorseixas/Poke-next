import styles from '../styles/About.module.css'
import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1>Sobre o projeto</h1>
      <p>Lorem, </p>
      <Image 
      src="/images/charizard.png" 
      width="300" 
      height="300" 
      alt="Charizard" />
    </div>
  )
}