import { apiBase } from "libs/constants"
import jsonFetcher from "libs/fetcher"

export default async function proxy(req, res) {
  const { slug } = req.query
  const url = `${process.env.API_HOST}/${slug.join("/")}`

  switch (req.method) {
    case "GET": {
      res.json(await jsonFetcher(url))
    }
  }
}
