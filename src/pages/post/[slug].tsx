import AppWrapper from '../../components/AppWrapper'
import AuthorFooter from '../../components/AuthorFooter'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PostSection from '../../components/PostContainer'

const postData = {
    title: "Como criar um blog utilizando NextJS",
    slug: "como-criar-um-blog-utilizando-nextjs-01-04-2021",
    image: "https://www.originofscience.com/wp-content/uploads/2020/06/chem.jpg",
    author: "Vinícius Resende",
    date: "01/04/2021",
    content: `Lorem ipsum dolor sit amet, consectetur dipiscing elit. Duis porta ante vitae massa facilisis porta. Mauris elementum risus eget tortor convallis, et pellentesque leo accumsan. Duis sodales condimentum urna, sed aliquet mi aliquam nec. Donec ultricies mauris in sapien hendrerit congue. Vestibulum auctor, nisl in posuere scelerisque, urna turpis congue ex, id dapibus augue nibh at nunc. Sed vestibulum, justo quis suscipit molestie, purus felis facilisis risus, ac egestas orci nvelit ut sem. Nunc fermentum elementum nisi, sit amet malesuada nunc pulvinar sed. Praesent lacus enim, finibus id turpis in, tempor porta tellus. Mauris congue, dolor non rhoncus laoreet, ipsum orci imperdiet turpis, nec accumsan est nunc non purus. Donec sit amet magna in purus vulputate suscipit. Vestibulum ante lorem, blandit quis mattis in, fringilla vel dolor. Vivamus tempor erat tincidunt feugiat ornare. Sed maximus dolor nulla, in vehicula metus rhoncus eu. Integer ultrices congue nisl et cursus. Ut sit amet finibus mi. Cras non fringilla dui. Phasellus sapien nisi, luctus vel eros ut, ultricies dignissim metus. Suspendisse varius viverra pretium. Morbi elementum metus velit, vel rutrum dolor pretium ac. Morbi sed tincidunt ex. Duis vel molestie nisi. Fusce bibendum a eros id consectetur. Mauris leo nulla, hendrerit at arcu ac, blandit euismod turpis. Vestibulum laoreet lorem at mi fermentum semper. Praesent velit eros, posuere sed ex non, hendrerit fermentum ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse vitae erat elit. Suspendisse euismod, nibh quis bibendum euismod, augue tellus hendrerit tellus, vel facilisis augue neque fermentum ligula. Donec non velit nunc.`
}

export default function Post() {
    return (
        <AppWrapper>
            <Header />
            <PostSection author={postData.author} image={postData.image} title={postData.title} date={postData.date} content={postData.content}/>
            <AuthorFooter />
            <Footer />
        </AppWrapper>
    )
}