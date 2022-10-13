// おそらくいらんな
// import { setCookie } from "nookies"

export default async function post(req, res) {
  const { method, headers, body } = req
  if (method !== "POST") res.status(400).json({})

  const url = `${process.env.API_HOST}/posts`
  const apiRes = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })

  if (!apiRes.ok) {
    res.status(apiRes.status).json(await apiRes.json())
    return
  }
}
