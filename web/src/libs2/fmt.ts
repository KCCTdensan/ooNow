export const date2str = (date: Date) => {
  let diff = (new Date() - date) / 1000
  if(diff < 3600 * 24) {
    if(diff < 0) return "未来"

    const dh = Math.trunc(diff / 3600)
    if(dh) return `${dh}時間前`

    const dm = Math.trunc(diff / 60)
    if(dm) return `${dm}分前`

    const ds = Math.trunc(diff)
    return `さっき(${ds}秒前)`
  } else {
    // 一ヶ月以内
    if(diff < 3600 * 24 * 31)
      return `${date.getDate()}日前`
    // 一年以内
    if(diff < 3600 * 24 * 365)
      return `${date.getMonth() + 1}ヶ月前`
    // それより前
    return `${date.getFullYear()}年前`
  }
}
