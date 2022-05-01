#!/bin/bash

deno run --no-check --no-prompt \
  --allow-read\
  --allow-net=api.github.com \
  --allow-env \
  deno/env.ts
