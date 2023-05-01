# DevTools - Debugging
1.
The bug in the code is that the ```num1``` and ```num2``` variables are treated as strings, so the ```+``` operator in the calculateSum function concatenates them to form a string instead of adding them as numbers.

![Screenshot_20230430182326](https://user-images.githubusercontent.com/97600878/235387642-b70d06a0-3277-4c29-bfe8-6154194a49c1.png)

2. To fix it, we use parseInt to convert input strigs to numers first, so the + operator will do numerical addition instead.
3. ![fix](https://user-images.githubusercontent.com/97600878/235387719-ed68cb1c-bd0c-4729-be33-9d11c55b7d0e.png)
