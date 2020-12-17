interface ISortByDate {
  date: any
  [props: string]: any
}

export const sortByDate = (arr: ISortByDate[], desc = true) =>
  sort(arr, (a, b) => {
    if (desc) return getDate(b) - getDate(a)
    return getDate(a) - getDate(b)
  })

const getDate = ({ date }): number => new Date(date).getTime()

const sort = (arr: any[], condition: (a, b) => number) => {
  const newArr = [].concat(arr as [])
  return newArr.sort(condition)
}
