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
    dateBR: dateToBR(props.date),
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
    image: 'https://i.imgur.com/1VSImGw.gif',
    title: 'Só um instante...',
    description: 'Estamos buscando as suas transações',
  },
  empty: {
    image: 'https://www.flaticon.com/svg/static/icons/svg/3902/3902008.svg',
    title: 'Você ainda não tem transações.',
  },
  notFound: {
    image: 'https://www.flaticon.com/svg/static/icons/svg/3904/3904074.svg',
    title: 'Nenhuma transação encontrada.',
  },
  error: {
    image: 'https://www.flaticon.com/svg/static/icons/svg/3904/3904184.svg',
    title: 'Ops! não foi possível consultar os dados',
    description: 'Tente mais tarde ou entre em contato com o nosso time para reportar o problema.',
  },
}

const amountToBRL = (amount: number) => amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

const dateToBR = (date: string) => date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1')
