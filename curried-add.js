function curriedAdd(total) {
  if (total !== undefined) {
    return function(nextNum) {
      if (nextNum !== undefined) {
        return curriedAdd(total + nextNum);
      }
      return total;
    }
  }
  return 0;
}

module.exports = { curriedAdd };
