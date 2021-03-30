import Header from '../components/Header'
import AppWrapper from '../components/AppWrapper'
import Content from '../components/Content'
import PageNavigation from '../components/PageNavigation'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <AppWrapper>
      <Header />
      <Content />
      <PageNavigation />
      <Footer />
    </AppWrapper>
  )
}
