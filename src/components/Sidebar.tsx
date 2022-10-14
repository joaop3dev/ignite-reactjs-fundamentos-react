import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://t.ctcdn.com.br/1h0yrszfBOSQsRkXgA_1p47ZkVo=/512x288/smart/filters:format(webp)/i616567.jpeg"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/joaop3dev.png" />

        <strong>João Paulo</strong>
        <span>Backend Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}