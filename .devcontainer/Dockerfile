FROM node:24-bookworm
RUN apt-get update && apt-get install -y --no-install-recommends ffmpeg chromium fonts-dejavu-core git ca-certificates && rm -rf /var/lib/apt/lists/*
ENV HYPERFRAMES_BROWSER_PATH=/usr/bin/chromium
ENV HYPERFRAMES_NO_TELEMETRY=1
