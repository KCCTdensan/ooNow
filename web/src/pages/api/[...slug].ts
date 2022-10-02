import { apiBase } from "libs/constants"
import jsonFetcher from "libs/fetcher"

export default async function proxy(req, res) {
  const { slug } = req.query
  const url = `${process.env.API_HOST}/${slug.join("/")}`

  const { method, headers, body } = req
  const r = await jsonFetcher(url, { method, headers, body })
  res.json(r)
}
