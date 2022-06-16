import { Link } from '@mui/material'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { CardLink } from './CardLink'

export const EmbedLink = ({ url }: { url: string }) => {
  if (
    // Tweet Link
    /https?:\/\/(www\.)?twitter\.com\/\w{1,15}\/status\/.*/.test(url)
  ) {
    return <TweetEmbed url={url} />
  } else if (
    // Youtube Link
    /https?:\/\/youtu\.be\/.+/.test(url) ||
    /https:\/\/www\.youtube\.com\/watch\?v=[\w\d_]+[\S]*/.test(url)
  ) {
    return <YoutubeEmbed url={url} />
  } else {
    // Other Links
    return <CardLink url={url} />
  }
}

const TweetEmbed = ({ url }: { url: string }) => {
  const tweetid = url.split('/').pop()
  if (tweetid != undefined) {
    return <TwitterTweetEmbed tweetId={tweetid} />
  } else {
    return <Link href={url} target="_blank" rel="noopener" />
  }
}

const YoutubeEmbed = ({ url }: { url: string }) => {
  const embed = (youtubeId: string) => {
    return (
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%' /* 16:9 */,
          paddingTop: 25,
          height: 0,
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          src={`https://www.youtube.com/embed/${youtubeId}`}
          frameBorder="0"
        />
      </div>
    )
  }
  let match = /https?:\/\/youtu\.be\/(.+)/g.exec(url)
  if (match != null) {
    return embed(match[1])
  }
  match = /https:\/\/www\.youtube\.com\/watch\?v=([\w\d_]+)/g.exec(url)
  if (match != null) {
    return embed(match[1])
  }
  return <Link href={url} target="_blank" rel="noopener" />
}
