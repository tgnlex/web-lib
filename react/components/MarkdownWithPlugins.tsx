import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkLint from 'remark-lint';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkDirective from 'remark-directive';
import remarkGithub from 'remark-github';
import remarkHtml from 'remark-html';
import rehypeReact from 'rehype-react';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

const remark = [remarkGfm, remarkMath, remarkLint, remarkDirective, remarkGithub, remarkHtml];
const rehype = [rehypeKatex, rehypeReact, rehypeHighlight, rehypeSlug];
const Mark = (markdown) => {
  return (
    <Markdown remarkPlugins={remark} rehypePlugins={rehype}>
        {markdown}
    </Markdown>
  )
}
export {Mark}