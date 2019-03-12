'use babel'

export default {
  isBalanced(inputStr) {
    var expression = inputStr.split('')
    var stack = []

    for (var i = 0; i < expression.length; i++) {
      if (this.isParanthesis(expression[i])) {
        if (this.isOpenParenthesis(expression[i])) {
          stack.push(expression[i])
        } else {
          if (stack.length === 0) {
            return false
          }
          var top = stack.pop(); // pop off the top element from stack
          if (!this.matches(top, expression[i])) {
            return false
          }
        }
      }
    }

    var returnValue = stack.length === 0 ? true : false
    return returnValue
  },
  isParanthesis(char) {
    var str = '{}[]()';
    if (str.indexOf(char) > -1) {
      return true
    } else {
      return false
    }
  },
  matches(topOfStack, closedParenthesis) {
    for (var k = 0; k < this.tokens().length; k++) {
      if (this.tokens()[k][0] === topOfStack && this.tokens()[k][1] === closedParenthesis) {
        return true
      }
    }
    return false
  },
  isOpenParenthesis(parenthesisChar) {
    for (var j = 0; j < this.tokens().length; j++) {
      if (this.tokens()[j][0] === parenthesisChar) {
        return true
      }
    }
    return false
  },
  tokens() {
    return [ ['{','}'] , ['[',']'] , ['(',')']]
  }
}
