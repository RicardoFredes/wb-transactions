import { sortByDate } from './sorts'

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
    ...props,
  }))
}

export const TRANSACTIONS_STATUS: any = {
  created: 'Solicitado',
  processing: 'Processando',
  processed: 'Concluído',
}

export const transactionOptions = Object.entries(TRANSACTIONS_STATUS).map(([value, label]) => ({ value, label }))

export const translateTransactionStatus = (status: string) => TRANSACTIONS_STATUS[status] || 'Desconhecido'

export const STATUS_NOTIFICATIONS = {
  loading: {
    image: 'https://www.flaticon.com/svg/static/icons/svg/3841/3841095.svg',
    title: 'Só um instante...',
    description: 'Estamos buscando as suas transações',
  },
  empty: {
    image: 'https://www.flaticon.com/svg/static/icons/svg/3841/3841031.svg',
    title: 'Você ainda não tem transações.',
  },
  notFound: {
    image: 'https://www.flaticon.com/svg/static/icons/svg/3841/3841224.svg',
    title: 'Nenhuma transação encontrada.',
  },
  error: {
    image: 'https://www.flaticon.com/svg/static/icons/svg/2765/2765311.svg',
    title: 'Ops! não foi possível consultar os dados',
    description: 'Tente mais tarde ou entre em contato com o nosso time para reportar o problema.',
  },
}

const amountToBRL = (amount: number) => amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
