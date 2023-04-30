# Part 2 Answer:

1. Line 12 will print ```3``` since discounted has size of tree, i will be iterate and increment 3 times from 0;
2. Line 13 will print ```150```, since the ```discountedPrice``` of the last value in ```discounted``` is 150. After the for loop, ```discountedPrice``` will be the most recent calculation.
3. Line 14 will print ```150```, it will be the last value assigned to ```finalPrice``` afeer the for loop is completed. Therefore, it will be the last rounded value of "discountedPrice", which is also ```150```
4. The function will return an array of discounted price, which will be ```[50, 100, 150]``` according to its input. This is because we are pushing the calculated discounted price and push it to the array call ```discounted```. Ater the 3 iteration of for loop, we will have 3 calculated values in the array ```discounted```, which is ```[50, 100, 150]``.
