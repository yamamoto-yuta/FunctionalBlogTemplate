import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  Link as MuiLink,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Divider,
  Box,
  CardMedia,
  Card,
  CardContent,
  Grid,
  Button,
} from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

import theme from '../lib/theme'
import { EmbedLink } from './EmbedLink'
// import { InlineCode, SyntaxHighlight } from './SyntaxHighlight'
// import { PostCardBySlug } from './PostCard'

// react-markdown
import ReactMarkdown, { Components } from 'react-markdown'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import rehypeRaw from 'rehype-raw'
import remarkMath from 'remark-math'
import remarkHtmlKatex from 'remark-html-katex'

type Props = { children: string }

export const MarkdownRenderer: React.FC<Props> = ({ children }) => {
  children = children.replace(/^\n\n/gm, '<br />\n\n')
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossOrigin="anonymous"
        />
      </Head>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks, remarkMath, remarkHtmlKatex]}
        rehypePlugins={[rehypeStringify, rehypeHighlight, rehypeRaw]}
        components={{
          a: MdLink,
          h1: Heading1,
          h2: Heading2,
          h3: Heading3,
          h4: Heading4,
          h5: Heading5,
          h6: Heading6,
          code: MdCode,
          p: Paragraph,
          // ul: List,
          // ol: OrderedList,
          // li: ListItem,
          blockquote: Blockquote,
          table: MdTable,
          thead: MdThead,
          tbody: MdTbody,
          tr: Tr,
          th: Th,
          td: Td,
          img: MdImage,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}

const MdLink: Components['a'] = ({ node, href, ...props }) => {  
  if (href!==undefined){
    let title = href
      if (typeof props.children[0] === 'string') {
        title = props.children[0]
      }
    if (
      href?.startsWith('#') ||
      href?.startsWith('/')
    ) {
    return (
            <Link href={href} >
                <a>{title}</a>
            </Link>
        )
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
      )
    }
  return <div/>
}

const Heading = ({
  level,
  text,
}: {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  text: string
}) => {
  const prefix = ((x) => {
    if (x === 'h1') {
      return '#'
    } else if (x === 'h2') {
      return '##'
    } else if (x === 'h3') {
      return '###'
    } else if (x === 'h4') {
      return '####'
    } else if (x === 'h5') {
      return '#####'
    } else if (x === 'h6') {
      return '######'
    }
  })(level)
  return (
    <Box sx={{ pt: 2, pb: 1 }}>
      <Grid container>
        <Grid item xs={0.5} />
        <Grid item xs={1.5}>
          <Link href={`#${text}`} passHref>
              <MuiLink
                underline="hover"
                variant={level}
                color="secondary.main"
                sx={{ p: 0 }}
              >
                {prefix}
              </MuiLink>
          </Link>
        </Grid>
        <Grid item xs={10}>
          <Typography
            variant={level}
            component="div"
            sx={{ pt: 0.42, pl: 0, pr: 0, pb: 0 }}
          >
            {text}
          </Typography>
        </Grid>
      </Grid>
      <Divider textAlign="left" sx={{ pt: 1 }} />
    </Box>
  )
}

const Heading1: Components['h1'] = ({ level, node, ...props }) => {
  if (props.children===undefined){ return (<div/>) }
  const text = props.children.toString()
  return (
    <h1 id={text}>
      <Heading level="h1" text={text} />
    </h1>
  )
}

const Heading2: Components['h2'] = ({ level, node, ...props }) => {
  if (props.children===undefined){ return (<div/>) }
  let text = props.children.toString()
  text = text === 'Footnotes' ? '脚注' : text
  return (
    <h2 id={text}>
      <Heading level="h2" text={text} />
    </h2>
  )
}

const Heading3: Components['h3'] = ({ level, node, ...props }) => {
  if (props.children===undefined){ return (<div/>) }
  const text = props.children.toString()
  return (
    <h3 id={text}>
      <Heading level="h3" text={text} />
    </h3>
  )
}

const Heading4: Components['h4'] = ({ level, node, ...props }) => {
  if (props.children===undefined){ return (<div/>) }
  const text = props.children.toString()
  return (
    <h4 id={text}>
      <Heading level="h4" text={text} />
    </h4>
  )
}

const Heading5: Components['h5'] = ({ level, node, ...props }) => {
  if (props.children===undefined){ return (<div/>) }
  const text = props.children.toString()
  return (
    <h5 id={text}>
      <Heading level="h5" text={text} />
    </h5>
  )
}
const Heading6: Components['h6'] = ({ level, node, ...props }) => {
  if (props.children===undefined){ return (<div/>) }
  const text = props.children.toString()
  return (
    <h6 id={text}>
      <Heading level="h6" text={text} />
    </h6>
  )
}

const MdCode: Components['code'] = ({ node, ...props }) => {
    return <div/>
//   if (
//     typeof node.position?.end.line === 'number' &&
//     typeof node.position?.start.line === 'number'
//   ) {
//     if (node.position?.end.line - node.position?.start.line > 5) {
//       return SyntaxHighlight(node, true)
//     } else if (node.position?.end.line - node.position?.start.line > 0) {
//       return SyntaxHighlight(node, false)
//     } else {
//       return InlineCode(props)
//     }
//   } else {
//     return <br />
//   }
}

const Paragraph: Components['p'] = ({ node, ...props }) => {
  const child = node.children[0]
  if (
    node.children.length === 1 &&
    child.type === 'element' &&
    child.tagName === 'a' &&
    typeof child.properties?.href === 'string' &&
    child.children[0].type === 'text' &&
    child.properties.href === child.children[0].value
  ) {
    return <EmbedLink url={child.properties.href} />
  }
  if (
    node.children.length === 0 &&
    node.properties != null && 
    typeof node.properties.basepath === 'string' &&
    typeof node.properties.slug === 'string'
  ) {
    const slug = node.properties.slug
    const basePath = node.properties.basepath
    return (
      <Grid container>
        <Grid item xs={0} sm={2.5}/>
        <Grid item xs={0} sm={7}>
          <Box sx={{m: 1}}>
            {/* <PostCardBySlug slug={slug} url_subpath={basePath}/> */}
            <div/>
          </Box>
        </Grid>
        <Grid item xs={0} sm={2.5}/>
      </Grid>
    )
  }
  return <Typography {...props} variant="body1" component="div" />
}

const Blockquote: Components['blockquote'] = ({ node, ...props }) => {
  let bgColor = ''
  if (theme.palette.mode === 'light'){
    bgColor = '#efefefef'    
  } else if (theme.palette.mode === 'dark') {
    bgColor = '#303030'
  }
  return (
    <Grid container sx={{ mt: '2rem' }}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Card style={{ backgroundColor: bgColor }}>
          <CardContent>
            <Grid container>
              <Grid item xs={2}>
                <FormatQuoteIcon color="disabled" fontSize="large" />
              </Grid>
              <Grid item xs={10}>
                {props.children}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

const MdTable: Components['table'] = ({ node, ...props }) => {
  return <Table {...props} />
}

const MdThead: Components['thead'] = ({ node, ...props }) => {
  return <TableHead {...props} />
}

const MdTbody: Components['tbody'] = ({ node, ...props }) => {
  return <TableBody {...props} />
}

const Tr: Components['tr'] = ({ node, isHeader, ...props }) => {
  return <TableRow {...props} />
}

const Th: Components['th'] = ({ node, isHeader, ...props }) => {
  // @ts-expect-error
  return <TableCell align="right" {...props} />
}

const Td: Components['td'] = ({ node, isHeader, ...props }) => {
  // @ts-expect-error
  return <TableCell {...props} />
}

const MdImage: Components['img'] = ({ node, ...props }) => {
  if (
    typeof node.properties?.src === 'string' &&
    typeof node.properties?.alt === 'string'
  ) {
    let img_path = node.properties.src
    let img_url = node.properties.src
    const splited_url = img_url.split('.webphttp')
    if (splited_url.length === 2) {
      img_path = splited_url[0].concat('.webp')
      img_url = "http".concat(splited_url[1])
    }
    return (
      <Grid container>
        <Grid item xs={0} sm={1}/>
        <Grid item xs={12} sm={10}>
          <Button href={img_url} aria-label={node.properties.alt} target="_blank" rel="noopener" sx={{width: '100%'}}>
            <CardMedia
              component="img"
              image={img_path}
              alt={node.properties.alt}
            />
          </Button>
        </Grid>
        <Grid item xs={0} sm={1}/>
      </Grid>
    )
  } else {
    return <br />
  }
}
