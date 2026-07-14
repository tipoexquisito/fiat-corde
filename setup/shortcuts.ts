import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

// The "Slides Overview" panel (toggled by 'o' / '`') has been getting stuck
// open on load in production, with a broken layout that hides its own close
// button. Since the deck is shared publicly via a QR code, we disable the
// shortcuts that can open it entirely, rather than risk it appearing during
// a live talk. Arrow-key/space navigation and everything else is untouched.
const disabledShortcuts = new Set([
  'toggle_overview',
  'hide_overview',
  'next_overview',
  'prev_overview',
  'up_overview',
  'down_overview',
  'goto_from_overview',
])

export default defineShortcutsSetup((_nav: NavOperations, base: ShortcutOptions[]) => {
  return base.filter(s => !disabledShortcuts.has(s.name ?? ''))
})
