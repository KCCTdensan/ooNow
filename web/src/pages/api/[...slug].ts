import { parseCookies } from "nookies"

export default async function proxy(req, res) {
  const { slug } = req.query
  const url = `${process.env.API_HOST}/${slug.join("/")}`

  const { method, headers, body } = req
  const cookies = parseCookies({ req })

  const apiRes = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: cookies.at ? `Bearer ${cookies.at}` : "",
    },
    body: method === "GET" ? undefined : body,
  })

  res.status(apiRes.status).json(await apiRes.json())
}
