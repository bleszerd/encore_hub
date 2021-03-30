import remark from 'remark'
import remarkHtml from 'remark-html'

export function parseToMarkdown(rawString: string){
    const htmlContent = remark()
        .use(remarkHtml)
        .processSync(rawString)
        .toString()

    return htmlContent
}