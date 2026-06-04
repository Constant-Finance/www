import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const metadata = { title: 'Term of Use — Constant Finance' }

export default function TermOfUse() {
  const content = fs.readFileSync(
    path.join(process.cwd(), 'content/term-of-use.md'),
    'utf-8'
  )
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  )
}
