# Cloud verification

Verified in the Codex cloud machine on 2026-10-03:

- Node.js 24.19.0, npm 11.9.0, FFmpeg/FFprobe 7.1.5.
- HyperFrames 0.8.115, GSAP 3.14.2; frozen npm ci installation passed.
- Four project-local Codex skills installed under .agents/skills.
- Required doctor checks passed. Optional transcription, voice and music packages are absent.
- Strict check: zero lint/runtime/layout/motion errors or warnings; five layout timestamps; 10/10 contrast checks passed. Motion sidecar verifies appearance and frame containment.
- Studio returned HTTP 200; rendered frame visually inspected for cream background and centered text.
- MP4: exports/bluearc-pipeline-test.mp4, 132890 bytes, H.264, 1080x1920, 3.000 seconds, 30 fps, 90 frames, silent. Full FFmpeg decode passed.
- Rendering uses screenshot capture with software GPU; optimized headless-shell capture is optional.
- HyperFrames usage status is unknown (no subscription login); no hosted rendering account is required for this test.

The first setup exposed unwritable home-directory cache/state paths. tools/hyperframes.mjs uses writable project paths and the installed Chromium. Initial Studio/layout warnings were corrected before final validation.

Codespaces and GitHub Actions configurations are provided but have not been executed in those separate environments. Current-machine validation does not establish successful publication, a GitHub Actions run, or restoration into a new task. Existing computer files were not accessible or migrated.
