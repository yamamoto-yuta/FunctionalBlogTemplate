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

export const formatDatetime = (dt: string) => {
  const timezone = 9
  
  try {
  // UTC -> JST
  const ymdhms = dt.split(' ')
    let ymd = ymdhms[0].split('-').map((d: string) => {return Number(d)})
    const _hms = ymdhms[1].split('+')
    let hms = _hms[0].split(':').map((d: string) => {return Number(d)})
    hms[0] += timezone
    const datetime = new Date(ymd[0], ymd[1], ymd[2], hms[0], hms[1], hms[2])

    // Format datetime string
    const year = ('    ' + datetime.getFullYear()).slice(-4)
    const month = ('00' + datetime.getMonth()).slice(-2)
    const date = ('00' + datetime.getDate()).slice(-2)
    const hours = ('00' + datetime.getHours()).slice(-2)
    const minutes = ('00' + datetime.getMinutes()).slice(-2)
    const seconds = ('00' + datetime.getSeconds()).slice(-2)
    return `${year}年${month}月${date}日 ${hours}時${minutes}分`
  } catch {
    return ''
  }
}