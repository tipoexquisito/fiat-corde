import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

// Two panels have caused a stuck/broken overlay in production with this many
// slides (39): the "Slides Overview" ('o' / '`') and the "Goto slide" quick
// jump ('g', see https://github.com/slidevjs/slidev/issues/2534 — the goto
// dialog doesn't fully hide once a deck has "enough" slides). Since the deck
// is shared publicly via a QR code, we disable every shortcut that can open
// either one, rather than risk it appearing during a live talk. Arrow-key/
// space navigation and everything else is untouched.
const disabledShortcuts = new Set([
  'toggle_overview',
  'hide_overview',
  'next_overview',
  'prev_overview',
  'up_overview',
  'down_overview',
  'goto_from_overview',
  'goto',
])

export default defineShortcutsSetup((_nav: NavOperations, base: ShortcutOptions[]) => {
  return base.filter(s => !disabledShortcuts.has(s.name ?? ''))
})
