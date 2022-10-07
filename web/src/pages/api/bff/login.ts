import { setCookie } from "nookies"

export default async function login(req, res) {
  const { method, headers, body } = req
  if (method !== "POST") res.status(400).json({})

  const url = `${process.env.API_HOST}/auth/login`
  const urlProf = `${process.env.API_HOST}/users/profile`

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

  const { access_token } = await apiRes.json()
  setCookie({ res }, "at", access_token, { httpOnly: true })

  const profRes = await fetch(urlProf, {
    headers: { Authorization: `Bearer ${access_token}` },
  })
  res.json(await profRes.json())
}
