let s = [];

for(let i = 0 ; i < 100 ; i++)
    s[i] = Math.floor(Math.random() * 100 + 1); // 1 이상 100 이하

s.sort(compare);

console.log(s)

function compare(a, b) {
    return b - a;
}