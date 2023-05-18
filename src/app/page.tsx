import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles["main"]}>
      <img className={styles['card-img']} src="./main.png" alt="" />
      <div className={styles['pp-child']}>
        <img src="./zelax.png" alt="" />
      </div>
      <div className={styles["img-bg"]}>
      </div>
      <div className={styles['button-bg-top']}>
        <div className={styles["img-child"]}>
          <img src="./button.png" />
          <img className={styles["img-2"]} src="./button.png" />
          <img className={styles["img-3"]} src="./button.png" />
        </div>
      </div>
      <div className={styles["button-top"]}>
        <button className={styles["button"]}>button1</button>
        <button className={styles["button"]}>button1</button>
        <button className={styles["button"]}>button1</button>
      </div>
      <div className={styles['button-bg-bottom']}>
        <div className={styles["img-child"]}>
          <img src="./button.png" />
          <img className={styles["img-2"]} src="./button.png" />
          <img className={styles["img-3"]} src="./button.png" />
        </div>
      </div>
      <div className={styles["button-bottom"]}>
        <button className={styles["button"]}>button1</button>
        <button className={styles["button"]}>button1</button>
        <button className={styles["button"]}>button1</button>
      </div>
    </main>
  )
}
