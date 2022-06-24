import { css } from '@emotion/react'

export const scrollBarStyle = css`
*{
    -ms-overflow-style: none;
}
::-webkit-scrollbar {
    display: none;
    width: 6px;
}
::-webkit-scrollbar-thumb {
    background-color: #276976;
    border-radius: 10px;
}
&:hover {
    ::-webkit-scrollbar {
        display: inline
    }
}
`