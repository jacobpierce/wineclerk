# wine Clerk

**Compatibility:** [WineBid.com](http://www.winebid.com)

Wine Clerk is a Chrome/Chromium extension that automatically replaces gross auction bid prices with estimated total purchase cost. Modified prices will have a tilde (~) added in front of them, for example `$~231.32`.

Total cost is estimated using:

- gross bottle bid price
- auction house take (e.g. 17% for WineBid)
- local shipping price (user entered)
- local sales tax (if applicable)

The calculation for a $100 bottle of wine would be: (((`100` x `1.17`) x (`1` + `(if applicable) local sales tax`))) + (`total shipping` / `12`)