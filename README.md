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
🔄 4. Execution Flow

The Sextant-Grid-Digital-Twin-System executes a deterministic simulation pipeline in which defined grid conditions are processed through the grid model and failure-propagation logic.

The execution sequence is designed to ensure that identical inputs produce identical simulation results.

4.1 Simulation Pipeline

INPUT CONDITIONS
       │
       ▼
GRID MODEL INITIALISATION
       │
       ▼
NODE / DEPENDENCY EVALUATION
       │
       ▼
SCENARIO INITIALISATION
       │
       ▼
FAILURE INJECTION / EVENT
       │
       ▼
FAILURE PROPAGATION
       │
       ▼
DEPENDENCY CASCADE ANALYSIS
       │
       ▼
GRID STATE EVALUATION
       │
       ▼
RESILIENCE / STABILITY ASSESSMENT
       │
       ▼
SIMULATION RESULT
       │
       ▼
REPRODUCIBLE OUTPUT

4.2 Execution Stages

Stage 1 — Input Conditions

The simulation receives a defined set of deterministic parameters representing the initial grid state and scenario conditions.

Inputs may include:

- Grid configuration
- Node states
- Dependency relationships
- Initial operating conditions
- Failure or disturbance conditions
- Scenario parameters

The input state establishes the starting condition for the simulation.

Stage 2 — Grid Model Initialisation

The system constructs the simulated electrical-grid environment from the defined model.

Grid nodes and their dependency relationships are established before scenario execution begins.

Stage 3 — Node and Dependency Evaluation

The simulation evaluates the relationships between grid nodes.

Dependencies determine how the loss or degradation of one component may affect connected components.

This layer provides the structural basis for cascade modelling.

Stage 4 — Scenario Initialisation

A defined scenario is applied to the initial grid state.

The scenario establishes the event or failure condition to be investigated.

Examples include:

- Node failure
- Component outage
- Dependency loss
- Localised system disruption
- Cascading failure initiation

Stage 5 — Failure Propagation

The failure-propagation layer evaluates how the initial event affects dependent nodes.

Propagation occurs according to the deterministic rules implemented by the system.

No probabilistic or uncontrolled behaviour is required for the reference simulation.

Stage 6 — Cascade Analysis

The system evaluates subsequent effects generated by the propagated failure.

The simulation continues through the dependency structure until the defined propagation conditions are satisfied.

This allows researchers to examine:

- Failure extent
- Affected nodes
- Dependency-chain effects
- Cascade progression
- Remaining system state

Stage 7 — Grid State Evaluation

Following propagation, the resulting grid state is evaluated against the initial state.

The system can therefore distinguish between:

INITIAL STATE
      ↓
DISTURBANCE
      ↓
PROPAGATION
      ↓
RESULTING STATE

This provides a reproducible basis for resilience and stability analysis.

Stage 8 — Resilience / Stability Assessment

The resulting system condition is analysed to determine the effect of the simulated event.

The assessment may consider:

- System stability
- Remaining operational nodes
- Failure concentration
- Dependency disruption
- Cascade severity
- Overall resilience characteristics

Stage 9 — Result Generation

The simulation produces a deterministic result representing the final state and the outcome of the executed scenario.

The result can subsequently be inspected, compared, replayed, or used as a reference for future development.

4.3 Deterministic Execution Principle

The fundamental execution rule is:

«Same model + same inputs + same scenario = same simulation result»

This principle is central to the v1.0 reference baseline.

It allows researchers and evaluators to:

- Reproduce previous simulations
- Compare system revisions
- Validate changes against the frozen baseline
- Investigate failure-propagation behaviour
- Maintain architectural traceability

4.4 Research Boundary

The execution environment is a simulation and research framework.

It does not directly control, operate, or issue commands to a live electrical grid.

The system should therefore be interpreted as a controlled digital-twin and resilience-analysis environment rather than an operational grid-control system.

Overview
Core Principles
System Architecture
Execution Flow ← (this comes next)
How to Run
Output / Data Contract
Source of Truth
System Status
Objectives
