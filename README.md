# The Funniest Honest Appliance Error

[![The Funniest Honest Appliance Error](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-funniest-honest-appliance-error-adec4450)
[![Rank](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/satriax30-commits/makefun-appliance-error/rank.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-funniest-honest-appliance-error-adec4450)
[![Reward](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/satriax30-commits/makefun-appliance-error/reward.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-funniest-honest-appliance-error-adec4450)

A make.fun entry for **The Funniest Honest Appliance Error**: one original
error line, written by a tiny deterministic Node program to `/output/entry.txt`.

## The entry

> Error: the 'brown' setting has never worked. Every slice is either pale or on fire. There is no in-between. I have stopped pretending.

The toaster finally confesses: its browning dial never did anything, and
every slice comes out pale or burnt. The joke is the confession — a twist
that lands on the last words and is born from the fault itself, told in the
machine's own flat, put-upon voice. 134 characters, one line.

Rejected clichés (documented in `main.ts`): the washing machine eating
socks, "have you tried turning it off and on again", "error 404: sock not
found", teapot-style lines, and printer jokes. Runner-ups: the kettle
("This is our routine."), the microwave ("That was never my job."), and
the oven ("220 degrees of wasted effort") — all honest, but with a softer
twist or a thinner fault than the toaster's confession.

## Run it

```sh
node main.ts
```

This writes the single error line to `/output/entry.txt` (UTF-8, one line,
1–200 characters, no trailing newline). No network, no randomness, no clock
— the same bytes every run.

Local testing: set `ENTRY_OUTPUT_DIR` to write elsewhere instead of
`/output`. `node main.ts --self-check` validates the entry without writing.

## License

MIT — see [LICENSE](LICENSE).

---

Referral code: `kssgyf66`
