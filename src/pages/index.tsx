import Header from '../components/Header'
import AppWrapper from '../components/AppWrapper'
import Content from '../components/Content'
import PageNavigation from '../components/PageNavigation'
import Footer from '../components/Footer'
import API from '../services/API'
import { IHomeProps } from '../typescript/database'
import { GetServerSidePropsContext } from 'next'

export default function Home({ postData, pageData }: IHomeProps) {
  return (
    <AppWrapper>
      <Header />
      <Content contentData={postData} />
      <PageNavigation
        hasNextPage={pageData.hasNextPage}
        hasPrevPage={pageData.hasPrevPage}
        nextPage={pageData.nextPage}
        page={pageData.page}
        totalPages={pageData.totalPages}
        totalDocs={pageData.totalDocs}
      />
      <Footer />
    </AppWrapper>
  )
}

export const getServerSideProps = async ({query} : GetServerSidePropsContext) => {
  let {page: pageQuery} = query

  if(!pageQuery){
    pageQuery = '1'
  }
  
  const response = await API.get(`/posts?page=${pageQuery}`)
  const postData = response.data.result.docs;

  const { hasPrevPage, hasNextPage, totalPages, page, nextPage, totalDocs } = response.data.result

  const pageData = {
    hasPrevPage,
    hasNextPage,
    totalPages,
    page,
    nextPage: nextPage || null,
    totalDocs
  }

  return {
    props: {
      postData,
      pageData,
    },
  }
}