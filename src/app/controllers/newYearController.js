import newYearService from '../services/newYearService.js'

class NewYear {
  router (req, res) {
    res.json(newYearService.execute())
  }
}
export default new NewYear()
