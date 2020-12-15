interface ISortByDate {
  date: any
  [props: string]: any
}

export const sortByDate = (arr: ISortByDate[]) => sort(arr, (a, b) => getDate(b) - getDate(a))

const getDate = ({ date }): number => new Date(date).getTime()

const sort = (arr: any[], condition: (a, b) => number) => {
  const newArr = [].concat(arr as [])
  return newArr.sort(condition)
}
