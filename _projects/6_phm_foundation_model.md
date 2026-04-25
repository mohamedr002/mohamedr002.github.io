---
layout: page
title: PHM-FM — Foundation Model for Industrial Prognostics
description: Pretraining transformer foundation models on multi-source PHM datasets for few-shot transfer.
img: assets/img/6.jpg
importance: 6
category: research
lab: true
published: true # Flip to true to publish under the Industrial Intelligence Lab.
---

## Overview

**PHM-FM** is a foundation model for industrial prognostics and health
management. We pretrain transformer architectures on diverse multi-source
sensor data — vibration, thermal, pressure, acoustic — to enable **few-shot
transfer** across machines, conditions, and failure modes.

## Key Research Thrusts

- **Multi-source pretraining** — Curate and pretrain on a unified corpus of
  industrial datasets: C-MAPSS, NASA bearings, XJTU-SY, FEMTO, plus proprietary
  jet-engine data from TII.
- **Modality-agnostic tokenization** — Develop sensor tokenizers that handle
  heterogeneous channels (vibration, thermal, pressure, acoustic) under one
  representation.
- **Few-shot adaptation** — Demonstrate competitive transfer to unseen
  equipment and operating conditions with only a handful of labeled examples,
  benchmarking against TimesFM, Chronos, Time-MoE, and Moirai.

## Why It Matters

Today's time-series foundation models still need full fine-tuning for new
industrial assets. PHM-FM aims to close that gap — making industrial AI
deployable in days, not months, on new equipment.

## Status

In progress — targeting a top-tier venue (NeurIPS / ICML 2026 cycle). An
open-source release of the model and benchmark suite is planned.
