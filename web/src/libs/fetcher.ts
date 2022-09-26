const jsonFetcher = (...args) => fetch(...args).then(res => res.json())

export default jsonFetcher
