import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
 import React from 'react'
 const plugins = [remarkGfm];
 function MD(markdown: string) {
   return (
     <Markdown remarkPlugins={plugins}>{markdown}</Markdown>
   )
 }1
 
 export default MD