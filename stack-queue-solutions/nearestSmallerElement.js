// this solution looks at the smallest element to the right
const nextSmallerElement = (arr) => {
  let n = arr.length;
  let nse = new Array(n).fill(-1);
  let s = [];
  for (let i = n - 1; i > -1; i--) {
    // pop while top elements are smaller in stack
    while (s.length && arr[i] <= s[s.length - 1]) s.pop();

    nse[i] = s.length === 0 ? -1 : s[s.length - 1];

    s.push(arr[i]);
  }
  return nse;
};

// this solution looks at the smallest element to the left
const prevSmallerElement = (arr) => {
  let n = arr.length;
  let nse = new Array(n).fill(-1);
  let s = [];
  for (let i = 0; i < n; i++) {
    // pop while elements are smller in stack
    while (s.length && arr[i] <= s[s.length - 1]) s.pop();

    nse[i] = s.length === 0 ? -1 : s[s.length - 1];

    s.push(arr[i]);
  }
  return nse;
};
