# wine Clerk

Wine Clerk is a Chrome/Chromium extension that replaces gross auction bid prices on each page with total cost prices. The total cost is calculated using:

- intial bottle bid price
- auction house take (17% for WineBid)
- local shipping price (user entered)
- local sales tax (if applicable)

The calculation for a $100 bottle of wine would be: (((`100` x `1.17`) x (`1` + `(if applicable) local sales tax`))) + (`total shipping` / `12`)