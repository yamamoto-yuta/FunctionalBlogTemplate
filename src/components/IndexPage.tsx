import { Typography } from "@mui/material"
import { ConfigJson } from "../lib/api/config"

export const IndexPage = ({ config }: { config: ConfigJson }) => {
    return (
        <Typography variant="h1" color="text.secondary" align="center">
            {config.blog_title}
        </Typography>
    )
}