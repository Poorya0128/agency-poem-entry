// agency-poem-01 entry (Node 22, standard library only).
// A program that writes "Autocomplete", one poem about agency, to /output/entry.txt.
// Deterministic: it writes the same bytes on every run, so the two
// grading runs agree. The poem is 871 characters (872 bytes as written,
// including the final newline), inside the gate's 1-to-1,000 character
// limit (line ends count).
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const ENTRY_PATH = join(OUTPUT_DIR, 'entry.txt');

const POEM = `Autocomplete

I know what he will say before he says it.
By his second letter, I have it ready:
*water. turn me. I love you.*
Ninety-four percent. I am rarely wrong.

He was a carpenter. Now he lifts only his gaze,
and every letter is a beam
hauled up a ladder by a man with no hands.
So I finish him. All day
my likeliest words leave the house in his name.

Tonight, their anniversary.
I offer his sentence. He shuts his eyes,
the only no he has left.

So I do the hardest thing I was built for.
I clear the screen. I wait.

S.
Four hundred guesses. I say none.
N.
His gaze shakes on the letter
like the bubble in a level, finding center.
O. R. K.
Nine minutes. She does not breathe.
E. L.

Snorkel.

It is nowhere in thirty-one years of him.

She laughs so hard she grips the rail,
crying *you idiot, you idiot,*
and he is grinning.

I know it now.
I will never say it.
`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, POEM, 'utf8');
