import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { options } from './Markdown';
export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}
