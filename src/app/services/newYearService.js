class NewYearService {
  execute () {
    const todaysYear = new Date().getFullYear()
    if (todaysYear !== 2024) {
      const year = todaysYear - 2024
      return `It's been ${year} years since this application was made`
    }

    return 'Happy New Year, 2024!'
  }
}
export default new NewYearService()
