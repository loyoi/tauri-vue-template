set dotenv-load := true
# Set shell for Windows OSs:
set windows-shell := ["cmd.exe", "/C"]

@list:
  just --list

@dev:
  bun run tauri dev

@build:
  bun run tauri build

@bundle:
  bun run tauri bundle

@up:
  bun run ./build.ts up

@update:
  bun update
  cd ./src-tauri && cargo update