
# handy-helpers

`handy-helpers` is a simple yet powerful JavaScript utility library designed to help with common tasks such as text analysis, URL management, date interpretation, and string formatting. It offers a concise set of functions that are easy to integrate into any web development project.

## Quick Installation

To get started with `handy-helpers`, you need to install the package via npm. Open your terminal and run the following command in your project directory:

```bash
npm install handy-helpers --save
```

This command installs `handy-helpers` and adds it to your project's `package.json` dependencies.

## Usage Examples

Here's how you can use the various functions provided by `handy-helpers`:

### Counting Characters and Words

```javascript
import { count } from 'handy-helpers';

const textAnalysis = count('Hello, world! Welcome to handy-helpers.');
console.log(textAnalysis); // { charLength: 37, wordCount: 5 }
```

This function counts the number of characters and words in a given string, returning an object with `charLength` and `wordCount` properties.

### URL Prefix Check

```javascript
import { webPrefix } from 'handy-helpers';

const secureUrl = webPrefix('www.example.com');
console.log(secureUrl); // 'https://www.example.com'

const nonSecureUrl = webPrefix('http://example.com');
console.log(nonSecureUrl); // 'URL not secure'
```

`webPrefix` evaluates and modifies URLs based on their security (HTTPS) and format.

### Converting Month Numbers to Labels

```javascript
import { monthToLabel } from 'handy-helpers';

const month = monthToLabel(4);
console.log(month); // 'April'
```

Easily convert a month number to its corresponding name with `monthToLabel`.

### Cleaning and Formatting Strings

```javascript
import { stringClean } from 'handy-helpers';

const formattedString = stringClean('make-your-code-readable');
console.log(formattedString); // 'Make Your Code Readable'
```

`stringClean` takes a string and formats it into a more readable format, capitalizing the first letter of each word and replacing hyphens with spaces.

## Conclusion

`handy-helpers` aims to simplify your JavaScript code with these utility functions. By installing and incorporating `handy-helpers` into your projects, you can perform common tasks more efficiently and keep your codebase cleaner.
