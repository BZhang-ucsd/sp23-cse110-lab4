for (let car in statistics) {
    if (car.startsWith('r') || statistics[car] % 2 !== 0) {
      console.log(statistics[car]);
    }
  }