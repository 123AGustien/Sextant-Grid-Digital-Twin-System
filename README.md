# Branch & Contribution Guidance

The `main` branch of this repository is maintained as a stable conceptual and reference baseline.

Contributors, evaluators, researchers, and developers are strongly encouraged to:
- create a separate branch for all exploratory or experimental work
- avoid direct modification of the `main` branch
- isolate prototype implementations, validation logic, and derivative concepts within independent branches

Suggested workflow:

1. Create a new branch from `main`
2. Perform development or experimentation within that branch
3. Open a Pull Request (PR) if review or merge consideration is required

This repository follows a baseline-preservation model intended to maintain:
- architectural traceability
- conceptual stability
- reproducibility of reference documentation
- separation between archival concepts and experimental development

The `main` branch should be treated as the canonical reference index unless otherwise stated.
## 🧊 System Freeze (v1.0)

This system is operating under a **frozen deterministic baseline (v1.0)**.

### Freeze Definition

The v1.0 state guarantees:

- Deterministic simulation behaviour is locked
- Cascade failure logic is stable and reproducible
- Core architecture is read-only and versioned
- All outputs remain consistent for identical inputs

### Freeze Boundary

The following components are considered frozen:

- Grid dependency model
- Failure propagation engine
- Scenario execution logic
- Simulation runtime behaviour

### Modification Rule

No structural changes are permitted within v1.0.

All enhancements must be introduced through:
- `develop` → experimental integration
- `v1.1+` → new frozen release versions

---

### 🧠 Interpretation

v1.0 represents a **reference simulation state**, not an evolving system.

It is the baseline against which all future system behaviour is measured.

# 🧠 Sextant-Grid-Digital-Twin-System

Deterministic grid simulation and digital twin framework for power system resilience, failure propagation modelling, and predictive grid analytics.

---

## 🏢 Overview

This system is a **deterministic simulation engine** designed to model electrical grid behaviour under controlled conditions.

It enables:

- Grid dependency modelling
- Cascading failure propagation analysis
- Stability and resilience evaluation
- Predictive simulation of system stress scenarios

This is a **research and simulation framework**, not a live production grid controller.

---

## ⚙️ Core Principles

- **Deterministic Execution** → same input = same output  
- **Reproducibility** → all runs can be replayed  
- **Modular Design** → each component operates independently  

---

## 🧩 Architecture

High-level system components:

- Core Engine (`core_engine/`)
- Simulation Runtime (`main.py`)
- Grid Model (`grid_nodes.py`)
- Failure Propagation Layer (`failure_propagation.py`)
- CI Simulation Workflows (`.github/workflows/`)

---

## 🔬 System Status

- Type: Deterministic simulation framework  
- Stage: Active research system  
- Mode: Fully sandboxed execution  

---

## 🎯 Objective

To model and analyse cascading failures in electrical grid systems using deterministic, reproducible simulation logic.
# 🧠 Sextant-Grid-Digital-Twin-System

Deterministic grid simulation and digital twin framework for power system resilience, failure propagation modelling, and predictive grid analytics.

---

# 🏢 Overview

This system is a **deterministic simulation engine** designed to model electrical grid behaviour under controlled conditions.

It enables:
- Grid dependency modelling
- Cascading failure propagation analysis
- Stability and resilience evaluation
- Predictive simulation of system stress scenarios

This is a **research and simulation framework**, not a live production grid controller.

---

# ⚙️ Core Principles

- **Deterministic Execution** → same input = same output  
- **Reproducibility** → all runs can be replayed  
- **Modular Design** → each component operates independently  

---

# 🧩 Architecture


🔄 2. Execution Flow
Explains how the system runs step-by-step
Example:
telemetry generation
prediction
stability analysis
output writing
🚀 3. How to Run
Exact commands:
Bash
python run.py
or
Bash
python main.py
📦 4. Output / Data Contract
Where results go + structure:
artifacts/output.json
schema explanation
🧠 5. Source of Truth
What actually defines the system:
code
runtime execution
not README
🔬 6. System Status
Mature / experimental / in development notes
🎯 7. Objective / Purpose
Why the system exists
🛣️ Standard Enterprise Order (clean version)

Overview
Core Principles
System Architecture
Execution Flow ← (this comes next)
How to Run
Output / Data Contract
Source of Truth
System Status
Objectives
