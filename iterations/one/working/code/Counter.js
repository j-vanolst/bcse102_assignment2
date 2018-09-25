class Counter {
  constructor(element, elementString, initialCount = 0, min = 0) {
    this.element = element
    this.elementString = elementString
    this.count = initialCount
    this.min = min
    this.reachedMin = false
  }
  incCount(amount = 1) {
    this.count += amount
    this.updateCount()
  }
  decCount(amount = 1) {
    this.count -= amount
    this.updateCount()
  }
  setCount(newCount) {
    this.count = newCount
    this.updateCount()
  }
  updateCount() {
    this.element.innerHTML = `${this.elementString} ${this.count}`
  }
}
