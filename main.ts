// agency-poem-01 entry (Node 22, standard library only).
// A program that writes "Daniel", one poem about agency, to /output/entry.txt.
// Deterministic: it writes the same bytes on every run, so the two
// grading runs agree. The poem is 818 characters, inside the gate's
// 1-to-1,000 character limit (line ends count).
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const ENTRY_PATH = join(OUTPUT_DIR, 'entry.txt');

const POEM = `Daniel

Since I was nine the agent spoke for me.
It ordered bread. It told the doctor where it hurt.
It said my name at every door
so smoothly that the doors forgot
my name catches on its first letter
like a coat on a nail.

At the bakery today the girl looked up,
and the agent drew its clean breath,
and I lifted one finger. Wait.

It waited.
The whole shop waited.
The ovens ticked. A spoon stopped.
My name came out in pieces,
D, D, a door I had to shoulder
three times before it gave,
then: Daniel.

She did not look away.
She wrote it on the bag in thick black marker,
crooked, spelled right, mine.

Outside, the agent asked
if it should take the rest of the day.
I held the warm bag to my chest
like something I had carried
all the way from the first letter.
No, I said.
It took me four tries.
I said it anyway.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, POEM, 'utf8');
