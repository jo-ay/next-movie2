

import styles from '@/styles/Home.module.css' 
// css 충돌 방지 위해서 모듈,공통 css말궁, 공통은 app에서 사용햄
import Link from 'next/link'
import Movie from './movie'
import Layout from './component/layout'


export default function Home() {
  return (
    <>
      <Layout>
        <main>
          <Movie/>
        </main>
      </Layout>
    </>
  )
}
