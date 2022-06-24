import { css } from '@emotion/react'

export const scrollBarStyle = css`
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 5px;
  * {
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #aaaaaa;
    border-radius: 10px;
  }
  &:hover {
    ::-webkit-scrollbar {
      display: inline;
    }
  }
`
