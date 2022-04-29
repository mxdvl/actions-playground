#!/bin/bash

deno run --no-check \
  --allow-read\
  --allow-net=api.github.com \
  --allow-env \
  deno/env.ts