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
			<Content
				contentData={postData}
			/>
			<PageNavigation
				pageData={pageData}
			/>
			<Footer />
		</AppWrapper>
	)
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
	const { page: pageQuery } = query
	let pageToFetch = pageQuery || "1"

	const response = await API.get(`/posts?page=${pageToFetch}`)
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