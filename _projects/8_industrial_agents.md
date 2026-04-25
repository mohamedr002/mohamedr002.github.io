---
layout: page
title: IndustrialAgent — Agentic AI for Autonomous Fault Diagnosis
description: Multi-agent systems that turn raw sensor signals into autonomous diagnosis and maintenance decisions.
img: assets/img/8.jpg
importance: 8
category: research
lab: true
published: true # Flip to true to publish under the Industrial Intelligence Lab.
---

## Overview

**IndustrialAgent** is a multi-agent architecture for autonomous industrial
operations. Edge sensors feed compact monitoring agents; reasoning LLMs
diagnose via retrieval over knowledge bases and digital twins; planning agents
generate work orders. The full loop: **sense → reason → act**.

## Key Research Thrusts

- **Edge monitoring agents** — Distilled small language models (1–3B
  parameters) running on industrial edge hardware for on-device anomaly
  detection and fault classification.
- **Reasoning over digital twins** — RAG and tool-use protocols that let
  diagnostic agents query simulation environments and historical maintenance
  records.
- **Planning and work-order generation** — Agents that translate diagnoses
  into actionable maintenance plans, with human-in-the-loop review.
- **Benchmarking** — Evaluation suite combining TII jet-engine data, C-MAPSS,
  and reference benchmarks (FailureSensorIQ, FieldWorkArena).

## Why It Matters

2026 has been called "the year agentic AI transforms industrial manufacturing."
Most current agent work targets digital tasks — IndustrialAgent extends agentic
AI to the physical world.

## Status

In design — initial prototypes targeting KDD / ACM CAIS 2027. Open-source
toolkit and benchmark dataset planned.
