# next-js-portfolio

## Hooks Under The Hood

Runtime

React is a run time
runs a a tree of node, 

Dom Node
(Document Object Model)
Under the hood converted to api code
DOM api is expensive, want to minimise recreation of dom objects, so we don't start from scratch every time
React uses reconciliation, compares old and new html, this is why mapped elements need a key, still reconciliates if list is reordered

All components are functions, but you dont call them, you use JSX/TSX
Known as Inversion of Control, allows for nested functions

## useState Under the Hood

console logging 