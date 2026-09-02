# GRAM — Grid Resilience Assessment Module

## Version

**GRAM v1.0.0**

Grid Resilience Assessment Module for the
Sextant Grid Digital Twin System.

---

## Purpose

GRAM is a deterministic post-simulation assessment module.

It evaluates the resulting state of a simulated electrical grid
and produces a structured resilience assessment.

GRAM does not replace the core simulation engine.

---

## Architecture

```text
Frozen Grid Simulation
        |
        v
Simulation Result
        |
        v
GRAM Assessment
        |
        +--> Failure Impact
        |
        +--> Cascade Impact
        |
        +--> Critical Infrastructure Impact
        |
        +--> Resilience Score
        |
        +--> Risk Classification
        |
        v
Structured Assessment