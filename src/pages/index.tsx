import Header from '../components/Header'
import AppWrapper from '../components/AppWrapper'
import Content from '../components/Content'
import PageNavigation from '../components/PageNavigation'
import Footer from '../components/Footer'
import { GetStaticPropsContext } from 'next'
import API from '../services/API'

export default function Home({postData}: any) {
  return (
    <AppWrapper>
      <Header />
      <Content contentData={postData}/>
      <PageNavigation />
      <Footer />
    </AppWrapper>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps = async () => {
  const response = await API.get(`/posts`)
  const postData = response.data.result.docs;

  return {
    props: {
      postData
    }
  }
}