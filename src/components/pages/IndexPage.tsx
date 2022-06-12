import { Box, Typography } from "@mui/material"
import { ConfigJson } from "../../lib/api/config"
import Link from 'next/link'

export const IndexPage = ({ config }: { config: ConfigJson }) => {
    return (
        <div>
            <Typography variant="h1" color="text.secondary" align="center">
                {config.blog_title}
            </Typography>
            <Box sx={{m: '3rem'}}/>
            <Typography variant="body1" align="center">
                This is simplist template design of RibbonCMS Blog.<br />
                articles page is <Link href={`/articles`} passHref>here</Link>.
            </Typography>
        </div>
    )
}