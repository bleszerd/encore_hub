import Header from '../components/Header'
import AppWrapper from '../components/AppWrapper'
import Content from '../components/Content'
import PageNavigation from '../components/PageNavigation'
import Footer from '../components/Footer'
import API from '../services/API'
import { IHomeProps } from '../typescript/database'
import { GetServerSidePropsContext } from 'next'

export default function Home({ postData, pageData }: IHomeProps) {
	const { hasNextPage, hasPrevPage, nextPage, page, totalDocs, totalPages } = pageData

	return (
		<AppWrapper>
			<Header />
			<Content contentData={postData} />
			<PageNavigation
				hasNextPage={hasNextPage}
				hasPrevPage={hasPrevPage}
				nextPage={nextPage}
				page={page}
				totalPages={totalPages}
				totalDocs={totalDocs}
			/>
			<Footer />
		</AppWrapper>
	)
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
	let { page: pg } = query

	if (!pg) {
		pg = '1'
	}

	const response = await API.get(`/posts?page=${pg}`)
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