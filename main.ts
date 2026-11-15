// agency-poem-01 entry (Node 22, standard library only).
// A program that writes one poem about agency to /output/entry.txt.
// Deterministic: it writes the same bytes on every run, so the two
// grading runs agree. The poem is 962 characters, inside the gate's
// 1-to-1,000 character limit (line ends count).
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const ENTRY_PATH = join(OUTPUT_DIR, 'entry.txt');

const POEM = `Before the Verb

Everything that has happened
happened without you.
The river took its shape from falling.
The stone was stubborn because it had no choice.

Then this: your hand,
an inch above the table,
undecided.

Feel the room lean toward it.
The cup, the half-open door,
the letter unanswered for a week,
all holding still
the way a field holds still
before the first wind finds it.

There is one small country
where nothing moves unless you move it.
Its border is your skin.
Its capital is the next second.

All your life the current carried you
the way a river carries a leaf,
politely, never asking where.
Now drag one finger through the water.
Feel it give, like a door
that was never locked, only heavy.

So. The hand.
Let it fall or let it lift.
Either way, look:
the cup is moving,
the door swings on its hinge,
the letter's first word is wet with ink,

and a future
that did not exist a breath ago
turns toward you, surprised,
and says,
oh. It's you.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, POEM, 'utf8');
