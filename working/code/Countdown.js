class Countdown {
  constructor() {
    this.timeRemaining = 180
    this.finished = false
    this.stop = false
  }
  startCountdown() {
    let oThis = this
    var x = setInterval(function() {
      if (oThis.stop == true) {
        clearInterval(x)
      }
      oThis.stop = false
      if (oThis.timeRemaining <= 0) {
        clearInterval(x)
        oThis.finished = true
        document.getElementById('countdown').innerHTML = "GAME OVER"
      }
      else {
        document.getElementById('countdown').innerHTML = "Time remaining: " + oThis.timeRemaining + " seconds"
        oThis.timeRemaining -= 1
      }
    document.getElementById('status').innerHTML = oThis.finished
    }, 1000)
  }
  stopCountdown() {
    this.stop = true
  }
  setCountdown(seconds) {
    this.finished = false
    this.timeRemaining = seconds
    this.startCountdown()
  }
}
