# BlueArc Content OS

AI-assisted video production for BlueArc, a premium sleep-health brand. GitHub stores source, documentation, and reusable skills; Codex cloud or GitHub Codespaces runs Node, Chrome, and FFmpeg. Your personal computer does not need these tools. This is the foundation and an environment test, not a production automation system.

## Setup

Use Node.js 22+ (24 recommended), FFmpeg/FFprobe, and Chromium or Chrome. In this repository run:

```sh
npm ci
npm run doctor
npm run check
npm run render:test
ffprobe -v error -show_streams -show_format exports/bluearc-pipeline-test.mp4
ffmpeg -v error -i exports/bluearc-pipeline-test.mp4 -f null -
```

HyperFrames 0.8.115 and GSAP 3.14.2 are pinned in the lockfile. npm ci also prepares local GSAP assets; rendering does not fetch animation code from a CDN. Codex skills are checked into .agents/skills and will be discovered in a new Codex session. See docs/environment-status.md for verification results. Optional transcription, voice, and music tools are not required yet.

Open this repository in GitHub Codespaces for the included dev container. The GitHub Actions pipeline verifies the test and uploads its MP4 as a workflow artifact on pushes and manual runs. GitHub itself stores code; rendering happens on the cloud runner.

## Folders

- inbox/: new inputs awaiting review.
- raw-footage/: original footage, preserved without edits.
- brand/: approved brand assets and factual guidance.
- references/: human-selected examples.
- templates/: future approved reusable compositions.
- projects/: individual projects; pipeline-test is only an environment test.
- exports/: rendered deliverables, excluded from Git.
- skills/: reusable lessons from human-approved edits.
- docs/: setup, checks, and workflow documentation.

Large footage and exports belong in separate storage, not Git. No existing local assets were migrated: this foundation was recreated from the instructions supplied in chat.

## Future workflow

A human selects footage and an editorial goal. The system will eventually assist with transcription, selects, captions, restrained supporting graphics, quality checks, and rendering. Human review approves the edit and checks sleep-health claims before publication. Approved lessons are recorded for future work. None of transcription, brand design, production templates, or batch automation is implemented yet.

## Pipeline test

Three seconds, vertical 1080x1920 at 30 fps: cream background, centered “BlueArc” and “Sleep better.”, one fade-in, silent H.264 MP4. This must not be treated as BlueArc creative direction. Preview internally with `npm run preview:test`; stop it with the matching `node tools/hyperframes.mjs preview projects/pipeline-test --stop` command. Cloud onboarding does not provide a public localhost preview.
