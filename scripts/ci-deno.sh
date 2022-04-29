#!/bin/bash

deno run --no-check \
  --allow-read\
  --allow-net=api.github.com \
  --allow-env \
  --allow-run \
  deno/env.ts
