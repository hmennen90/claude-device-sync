# Changelog

## v1.0.1 — 2026-04-18

- fix(hooks): wrap commands in hooks array per Claude Code schema
- docs: add CHANGELOG.md, demo SVG, restructure README
- chore: validate marketplace.json for submission

**Full Changelog**: https://github.com/hmennen90/claude-device-sync/compare/v1.0.0...v1.0.1

## v1.0.0 — 2026-04-18

- feat: add star command and one-time GitHub star hint after first push
- fix(windows): include drive-letter colon in project dir normalization
- fix(git): defer simpleGit binding until repo exists
- chore: add Claude Code marketplace plugin structure

**Full Changelog**: https://github.com/hmennen90/claude-device-sync/compare/v0.2.2...v1.0.0

## v0.2.2 — 2026-04-18

- fix(windows): include drive-letter colon in project directory normalization

**Full Changelog**: https://github.com/hmennen90/claude-device-sync/compare/v0.2.1...v0.2.2

## v0.2.1 — 2026-04-18

- fix(git): defer simpleGit binding until repo exists — fixes `GitConstructError` on first init

**Full Changelog**: https://github.com/hmennen90/claude-device-sync/compare/v0.2.0...v0.2.1

## v0.2.0 — 2026-04-15

### Breaking Changes

- CLI command renamed from `claude-sync` to `device-sync`
- npm package renamed to `claude-device-sync`
- Config directory moved from `~/.claude-sync` to `~/.device-sync`

### New Features

- Full Windows support — Task Scheduler daemon via `schtasks`
- Windows-compatible hooks — `cmd /c` wrapper for silent fail
- Windows path handling — Backslash-aware project directory detection

### Fixes

- Fix `require()` call in ESM module (replaced with `readdirSync` import)
- Fix `isMacOS()` reference after platform refactor

## v0.1.0 — 2026-04-15

### Initial Release

First release of claude-device-sync — cross-device session storage, shared memory, and reminders for Claude Code.

- **Session Sync** — Save and resume full Claude Code sessions from any device
- **Shared Memory** — Sync Claude Code memory files across machines
- **Reminders** — Time-based reminders with DE/EN parsing (`30m`, `2h`, `morgen 9:00`) and webhook notifications
- **Team Mode** — Share sessions, memory, and reminders with team members
- **E2E Encryption** — Argon2id key derivation + ChaCha20-Poly1305, password-based
- **Auto-Sync Hooks** — Automatically push/pull on Claude Code session start/end
- **Cron Daemon** — Background reminder checker (macOS launchd + Linux crontab)
- **Session Purging** — Clean up old sessions with dry-run support
