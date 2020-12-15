import { sortByDate } from "./sorts"

type TStatus = string

interface ITransaction {
  id: string
  title: string
  description: string
  status: TStatus
  amount: number
  date: string
  from: string
  to: string
  [props: string]: any
}

export const parseTransations = (transactions: ITransaction[]): any[] => {
  return sortByDate(transactions).map((props: ITransaction) => ({
    statusLabel: translateTransactionStatus(props.status),
    price: amountToBRL(props.amount),
    ...props
  }))
}

export const TRANSACTIONS_STATUS: any = {
  created: 'Solicitado',
  processing: 'Processando',
  processed: 'Concluído',
}

export const translateTransactionStatus = (status: string) => TRANSACTIONS_STATUS[status] || 'Desconhecido'

const amountToBRL = (amount: number) => amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

