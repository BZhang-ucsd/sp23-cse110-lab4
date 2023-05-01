# Part 2 Answer:

1. Line 12 will print ```3``` since discounted has size of tree, i will be iterate and increment 3 times from 0;

2. Line 13 will print ```150```, since the ```discountedPrice``` of the last value in ```discounted``` is 150. After the ```for``` loop, ```discountedPrice``` will be the most recent calculation.

3. Line 14 will print ```150```, it will be the last value assigned to ```finalPrice``` afeer the for loop is completed. Therefore, it will be the last rounded value of "discountedPrice", which is also ```150```

4. The function will return an array of discounted price, which will be ```[50, 100, 150]``` according to its input. This is because we are pushing the calculated discounted price it to the array call ```discounted```. Ater the 3 iteration of for loop, we will have 3 calculated values in the array ```discounted```, which is ```[50, 100, 150]``.

5. It will causes error. ```let i``` declares ```i``` in its own scope. It can not be access outside the ```for``` loop, so when we excute line 12, ```i``` is not defined in its scope, therefore it causes error.

6. It will causes error. ```let discountedPrice``` declares ```discountedPrice``` in its own scope. It can not be access outside the ```for``` loop, so when we excute line 13, ```discountedPrice``` is not defined in its scope, therefore it causes error.

7. It will print "150". Eventhough ```finalPrice``` is declared using keyword ```let```, it is delcare in the whole function scope, it can be access anywhere in function ```discountedPrices```. Therefore it will return the last assigned value to ```finalPrice```, which is ```150``` due to the last input value ```300```.

8. The function will return an array of discounted price, which will be ```[50, 100, 150]``` according to its input. This is because even though we have declare variable with keyword ```let```, ```discounted``` are still accessable in the whole function scope, and we are pushing the calculated discounted price to it. Ater the 3 iteration of for loop, we will have 3 calculated values in the array ```discounted```, which is ```[50, 100, 150]`` as return value.

9. Line 11 will causes error. Since ```i``` was declared using ```let```, it can not be access outside of its scope.

10. line 12 will print a ```3``` since ```length``` is a constant variable declared with value ```3```

11. The function will return an array with value ```[50, 100, 150]``. Eventhough 'discountedPrice' is a 'const' valuable, it is fine to declare it again in the 'for' loop. So the return value should be same as previous functions.

## Data Type

12.
A. ```student.name```

B. ```student['Grad Year']```

C. ```student.greeting()```

D. ```student['Favorite Teacher'].name```

E. ```student.courseLoad[0]```

## Basic Operators & Type Conversion 

### Arithmetic
13.

A. ```'3' + 2``` will return string ```'32'```. The + operator with a string and a number concatenates the two values as strings.

B. ```'3' - 2``` will return number ```1```. The - operator with a string and a number will try to convert the string to a number before performing the subtraction.

C.  ```3 + null``` returns ```3```. null is treated as 0 in numeric, therefore 3 + null = 3 + 0, which is 3.

D. ```'3' + null``` returns ```'3null'```. The + operator with a string and null concatenates the two values as strings.

E. ```true + 3``` returns ```4```.True is treated as 1 in numeric, so true + 3 = 1 + 3, which is 4.

F. ```false + null``` returns ```0```. False is treated as 0 in numerical so as null, therefore false + null = 0 + 0, which is 0.

G. ```'3' + undefined``` returns ```'3undefined'```. The + operator with a string and undefined concatenates the two values as strings.

H. ```'3' - undefined``` returns ```NaN```. the - operator tries to convert both value to numerical numbers before performing the subtraction. However, undefined cannot be converted to a number, therefore returns NaN(not a number).

### Comparison
14. 
A.```‘2’ > 1``` returns ```true```. In JavaScript, when comparing a string to a number with the ```>``` operator, JavaScript will first converts the string to a number, therefore ```2 > 1``` is ```true```.

B.```‘2’ < ‘12’``` returns ```true``` since comparing two strings with the ```<``` operator, JavaScript performs a character-by-character comparison of the strings.

C.```2 == ‘2’``` returns ```true```. The ```==``` operator converts one operand to a type that matches the other operand before making the comparison. In this case, the string '2' can be converted to the number 2, so the expression becomes 2 == 2, which is true.

D.```2 === ‘2’``` returns ```false```. The ```===``` operator checks if the operands have the same value and the same type. In this case, the type of ```2``` is number, and the type of ```'2'``` is string. Since the type is different, it returns false.

E.```true == 2```returns ```false```. The ```==``` operator converted true to 1, therefore become ```1 == 2```, which is false.

F.```true === Boolean(2)``` returns ```false```. Since the type of both operand is boolean and their value are all true, it will return ```true```.

15. On one hand, the ```==``` operator is known as the loose equality operator or type coercion operator. It performs type coercion, as it tries to convert the operands to the same type before comparing them. After convert or the operant is alreay same type, == operator will performs a comparison based on operants values.  On the other hand, the ```===``` operator is known as the strict equality operator.It checks if the operands are of the same type and have the same value. If either is false, it will return false.


### functions

17. If the modifyArray function is called with ```modifyArray([1,2,3], doSomething)```, the result will be an array containing the values ```[2, 4, 6]```. Here is a walk through of it:
- ```modifyArray function``` takes array ```[1,2,3]```and ```doSomething``` function as parameters. It creates an empty array newArr, and then loops through each element of the input array.
- For each element in the input array, the code ```doSomething``` with that element as its argument. The result of the ```doSomething``` is then added to the newArr array using the push method.
- Since ```doSomething``` returns the double the input value, each element in the input array will be doubled and pushed into newArr.
- After all elements in the input array have been processed, the function returns the newArr array, which each element will be doubled corresponding to the input array, therefore, with ```[1,2,3]```, it will return ```[2, 4, 6]```


19. The output wil be :
```
1
4
3
2
```
