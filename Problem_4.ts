function meanMedian(arrayinput: number[]): void {
    const length = arrayinput.length;
  
    const sum = arrayinput.reduce((acc, num) => acc + num, 0);
    const mean = sum / length;
   
    let median: number;
    if (length % 2 === 0) {
      const midIndex = length / 2;
      median = (arrayinput[midIndex - 1] + arrayinput[midIndex]) / 2;
    } else {
      const midIndex = Math.floor(length / 2);
      median = arrayinput[midIndex];
    }
  
    console.log(mean, median);
  }
  
  meanMedian([1, 2, 3, 4]);
  meanMedian([1, 2, 3, 4, 5]);
  meanMedian([7, 8, 9, 13, 15]);
  meanMedian([10, 20, 30, 40, 50]);
  meanMedian([15, 20, 30, 60, 120]);
  