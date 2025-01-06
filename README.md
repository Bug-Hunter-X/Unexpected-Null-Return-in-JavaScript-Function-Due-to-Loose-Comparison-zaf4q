# Unexpected Null Return in JavaScript Function Due to Loose Comparison
This repository demonstrates a common JavaScript bug involving loose comparison and null handling that can lead to unexpected null return values.
The `foo` function is designed to add two numbers. However, due to a simple oversight in null checking, it unexpectedly returns `null` when either input is `null`, even though JavaScript would typically perform type coercion in addition operations.
## Bug
The bug lies in the conditional statement `if (a === null || b === null)`.  Strict equality (`===`) prevents type coercion, meaning that it only evaluates to true if both `a` and `b` are explicitly null. This results in null being returned, even if one of the inputs is a number and the other is null. The solution addresses this by employing loose comparison instead.
## Solution
The solution replaces `===` with `==` in the conditional statement.  Loose comparison allows for type coercion, so that if one input is null, it is treated as 0, leading to the expected addition result.
This demonstrates how being mindful of loose vs. strict equality can prevent unexpected behavior in JavaScript.