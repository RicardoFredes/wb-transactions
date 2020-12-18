import fetch, { Response } from 'node-fetch'
import { parseTransations } from './transations'

const apiUrl = 'https://warren-transactions-api.herokuapp.com/api/transactions'

export const getTransactions = async () =>
  fetch(apiUrl)
    .then((reponse: Response) => {
      if (!reponse.ok) throw new Error('Unexpected error')
      return reponse.json()
    })
    .then(response => {
      if (!Array.isArray(response)) throw new Error('Not reconized format')
      return parseTransations(response) as []
    })
