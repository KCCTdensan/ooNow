export default async function proxy(req, res) {
  const { slug } = req.query
  const url = `${process.env.API_HOST}/${slug.join("/")}`

  const { method, headers, body } = req
  const apiRes = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: method === "GET" ? undefined : body,
  })

  res.status(apiRes.status).json(await apiRes.json())
}
