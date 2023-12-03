import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

export const getNow = () => {
  dayjs.extend(utc)
  dayjs.extend(timezone)
  dayjs.tz.setDefault('Asia/Tokyo')
  const dt: string = dayjs().tz().format('YYYY年MM月DD日 HH時mm分')
  return dt
}

export const formatDatetime = (dt: Date) => {
  const timezone = 9

  try {
    // Format datetime string
    const year = ('    ' + dt.getFullYear()).slice(-4)
    const month = ('00' + (dt.getMonth() + 1)).slice(-2) // 0~11 -> 1~12
    const date = ('00' + dt.getDate()).slice(-2)
    const hours = ('00' + (dt.getHours() + timezone)).slice(-2) // UTC 0> JST
    const minutes = ('00' + dt.getMinutes()).slice(-2)
    const seconds = ('00' + dt.getSeconds()).slice(-2)
    return `${year}年${month}月${date}日 ${hours}時${minutes}分`
  } catch {
    return ''
  }
}
