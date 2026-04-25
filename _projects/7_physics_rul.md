---
layout: page
title: PhysRUL — Physics-Constrained Transformers for RUL Prediction
description: Injecting thermodynamic and degradation priors into transformer architectures for trustworthy remaining-useful-life estimation.
img: assets/img/7.jpg
importance: 7
category: research
lab: true
published: true # Flip to true to publish under the Industrial Intelligence Lab.
---

## Overview

**PhysRUL** integrates physical laws — monotonic degradation, thermodynamic
consistency, material fatigue priors — directly into transformer architectures
for **remaining useful life (RUL) prediction**. The result: more accurate,
physically consistent, and out-of-distribution-robust prognostics.

## Key Research Thrusts

- **Physics-informed architectures** — Embed conservation laws and degradation
  monotonicity as architectural inductive biases, not just soft loss penalties.
- **Neural operators for degradation dynamics** — Use neural operator backbones
  (e.g., PhysicsNeMo) to learn degradation evolution in continuous time.
- **OOD generalization** — Improve long-horizon RUL accuracy on unseen
  operating conditions where pure data-driven models fail.

## Why It Matters

Industrial deployments demand predictions that not only fit data but also
respect engineering reality. Physics-constrained models earn engineer trust
and unlock safety-critical applications (aerospace, energy, defense).

## Status

In progress — building on prior work (SLARDA, ADATIME, EverAdapt) and
collaboration with TII's Propulsion & Space Research Center.
