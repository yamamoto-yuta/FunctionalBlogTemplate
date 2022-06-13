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
