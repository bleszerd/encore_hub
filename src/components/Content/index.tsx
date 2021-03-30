import ContentCard from '../ContentCard'
import * as S from './styles'

const contentData = [
    {
        title: "Como criar um blog utilizando NextJS",
        image: "https://www.originofscience.com/wp-content/uploads/2020/06/chem.jpg",
        author: "Vinícius Resende",
        date: "01/04/2021",
    },
    {
        title: "Como criar um blog utilizando NextJS",
        image: "https://www.originofscience.com/wp-content/uploads/2020/06/chem.jpg",
        author: "Vinícius Resende",
        date: "01/04/2021",
    },
    {
        title: "Como criar um blog utilizando NextJS",
        image: "https://www.originofscience.com/wp-content/uploads/2020/06/chem.jpg",
        author: "Vinícius Resende",
        date: "01/04/2021",
    },
    {
        title: "Como criar um blog utilizando NextJS",
        image: "https://www.originofscience.com/wp-content/uploads/2020/06/chem.jpg",
        author: "Vinícius Resende",
        date: "01/04/2021",
    },
    {
        title: "Como criar um blog utilizando NextJS",
        image: "https://www.originofscience.com/wp-content/uploads/2020/06/chem.jpg",
        author: "Vinícius Resende",
        date: "01/04/2021",
    },
    {
        title: "Como criar um blog utilizando NextJS",
        image: "https://www.originofscience.com/wp-content/uploads/2020/06/chem.jpg",
        author: "Vinícius Resende",
        date: "01/04/2021",
    },
    {
        title: "Como criar um blog utilizando NextJS",
        image: "https://www.originofscience.com/wp-content/uploads/2020/06/chem.jpg",
        author: "Vinícius Resende",
        date: "01/04/2021",
    },
    {
        title: "Como criar um blog utilizando NextJS",
        image: "https://www.originofscience.com/wp-content/uploads/2020/06/chem.jpg",
        author: "Vinícius Resende",
        date: "01/04/2021",
    },
    {
        title: "Como criar um blog utilizando NextJS",
        image: "https://www.originofscience.com/wp-content/uploads/2020/06/chem.jpg",
        author: "Vinícius Resende",
        date: "01/04/2021",
    }
]

export default function Content() {
    return (
        <S.ContentConatainer>
            {
                contentData.map(ctt => (
                    <ContentCard
                        author={ctt.author}
                        date={ctt.date}
                        image={ctt.image}
                        title={ctt.title}
                    />
                ))
            }
        </S.ContentConatainer>
    )
}