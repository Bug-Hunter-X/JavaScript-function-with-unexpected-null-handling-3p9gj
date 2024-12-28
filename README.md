# JavaScript Function with Unexpected Null Handling

This repository demonstrates a subtle bug in a JavaScript function that handles null values. The function `foo` is designed to add two numbers. However, its handling of null inputs may lead to unexpected behavior or errors, depending on the context. 

## Bug Description
The function works as expected for numerical inputs. But if either 'a' or 'b' or both are null or undefined the result can be unexpected or cause a runtime error depending on what the user expects. 

## Bug Solution
The solution addresses this by explicitly checking for null or undefined values and handling them appropriately (returning 0).  This ensures that the function always returns a defined value, regardless of input type.