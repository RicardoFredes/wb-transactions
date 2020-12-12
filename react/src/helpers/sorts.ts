interface ISortByDate {
  date: string | number
  [props: string]: any
}

export const sortByDate = (arr: ISortByDate[]) => {
  return [].concat(arr.sort((a, b) => new Date(b.date) - new Date(a.date)))
}
