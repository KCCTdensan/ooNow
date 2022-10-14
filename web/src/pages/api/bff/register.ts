import { setCookie } from "nookies"
import { cookieOpts } from "libs/cookies"

export default async function register(req, res) {
  const { method, headers, body } = req
  if (method !== "POST") res.status(400).json({})

  const url = `${process.env.API_HOST}/users/create`
  const urlLogin = `${process.env.API_HOST}/auth/login`
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

  // 引き続きlogin
  const { screen, passRaw } = JSON.parse(body)
  const { access_token } = await fetch(urlLogin, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ screen, passRaw }),
  }).then(res => res.json())

  setCookie({ res }, "at", access_token, cookieOpts)

  const profRes = await fetch(urlProf, {
    headers: { Authorization: `Bearer ${access_token}` },
  })
  res.json(await profRes.json())
}
