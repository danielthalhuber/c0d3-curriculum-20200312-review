/*
  Goal:

  - Write a function called `secretCodeGenerator` that takes in 3 arguments, a string, a letter, and a string, and returns a string where all the matching letters are replaced by the last input string

  Examples:

  - `secretCodeGenerator()` returns ''
  - `secretCodeGenerator('-h-e-l-l-o-', '', '')` returns '-h-e-l-l-o-'
  - `secretCodeGenerator('-h-e-l-l-o-', '-', '')` returns 'h-e-l-l-o'
  - `secretCodeGenerator('-h-e-l-l-o-', '-', '__')` returns '__h__e__l__l__o__'
  - `secretCodeGenerator('-h-e-l-l-o-', '', 'x')` returns 'hello'

  Signature:

  - Parameters:
    - `str`, public, the string containing characters to be replaced
    - `char`, public, the single character to replace in `str`
    - `sub`, public, the string representing the characters to replace occurrences of `char`
    - `i`, private, number corresponding to current iteration
  - Returns: string

  Explanation:

  - Starting with `i = 1`
  - Base case: if `i > str.length`, return `result`
  - Recursive case:
    - Create `nextChar` and assign it the value:
      - if `str[i - i] === char`, then `sub`
      - otherwise `str[i - 1]
    - Return a call to `secretCodeGenerator`, incrementing `i` by 1 and passing the value `result + `nextChar` as the `result` argument

  Code:
*/
const secretCodeGenerator = (
  str = '',
  char = '',
  sub = '',
  i = 1,
  result = ''
) => {
  if (i > str.length) return result;

  const nextChar = str[i - 1] === char ? sub : str[i - 1];
  return secretCodeGenerator(str, char, sub, i + 1, result + nextChar);
};

/*
  Test:
*/
const test = () => {
  const parameters = [
    { desc: 'secretCodeGenerator() returns ""', args: [] },
    {
      desc: 'secretCodeGenerator("-h-e-l-l-o-", "", "") returns "-h-e-l-l-o-"',
      args: ['-h-e-l-l-o-', '', ''],
    },
    {
      desc: 'secretCodeGenerator("-h-e-l-l-o-", "-", "") returns "-h-e-l-l-o-"',
      args: ['-h-e-l-l-o-', '-', ''],
    },
    {
      desc:
        'secretCodeGenerator("-h-e-l-l-o-", "-", "__") returns "__h__e__l__l__o__"',
      args: ['-h-e-l-l-o-', '-', '__'],
    },
    {
      desc: 'secretCodeGenerator("-h-e-l-l-o-", "", "x") returns "hello"',
      args: ['-h-e-l-l-o-', '', 'x'],
    },
  ];

  parameters.forEach(({ desc, args }) => {
    console.log(desc, secretCodeGenerator(...args));
  });
};

module.exports = {
  code: secretCodeGenerator,
  test,
};
