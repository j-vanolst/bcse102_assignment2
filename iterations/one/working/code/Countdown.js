class Countdown {
  constructor() {
    this.timeRemaining = 180
    this.finished = false
    this.stop = false
    var oThis = this
    this.x = setInterval(function() {
      oThis.startCountdown()
    }, 1000)
  }
  startCountdown() {
    if (this.timeRemaining <= 0) {
      this.stopCountdown()
      this.finished = true
      document.getElementById('countdown').innerHTML = "GAME OVER"
    }
    else {
      document.getElementById('countdown').innerHTML = 'Time Remaining: ' + this.timeRemaining + " seconds"
      this.tickDown()
    }
  }
  tickDown() {
    this.timeRemaining -= 1
  }
  stopCountdown() {
    clearInterval(this.x)
  }
  setCountdown(seconds) {
    this.stopCountdown()
    this.finished = false
    this.timeRemaining = seconds
    var oThis = this
    this.x = setInterval(function() {
      oThis.startCountdown()
    }, 1000)
  }
}
