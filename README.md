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

🧭 Design Principle

The Sextant-Grid-Digital-Twin-System is designed around a simple engineering principle:

«Same model + same inputs + same scenario = same simulation result»

This principle establishes deterministic and reproducible system behaviour.

The system separates the simulation baseline from subsequent analytical modules. The core simulation engine remains the reference source for grid behaviour, while additional modules may evaluate, analyse, or interpret simulation results without modifying the underlying baseline.

Core Design Rules

- Deterministic Execution — identical inputs produce identical outputs.
- Reproducibility — simulation scenarios can be replayed using the same conditions.
- Modularity — analytical capabilities are implemented as independent modules.
- Traceability — simulation results can be associated with defined scenarios and inputs.
- Baseline Preservation — the frozen v1.0 core remains the reference against which future development is evaluated.
- Separation of Concerns — simulation, assessment, reporting, and future analytical functions remain logically separated.

Module Boundary

Additional modules operate above the core simulation layer.

CORE SIMULATION
       │
       ▼
SIMULATION RESULT
       │
       ▼
ANALYSIS MODULE
       │
       ▼
ASSESSMENT / REPORT

A module must not silently alter the deterministic behaviour of the frozen core engine.

This architecture allows new research capabilities to be developed while preserving the reproducibility and traceability of the v1.0 reference system.

---

🧩 System Architecture

The system is organised as a modular deterministic simulation framework.

Sextant-Grid-Digital-Twin-System
│
├── core_engine/
│   ├── grid_nodes.py
│   └── failure_propagation.py
│
├── modules/
│   └── grid_resilience/
│       ├── __init__.py
│       ├── scenarios.py
│       ├── resilience_engine.py
│       ├── assessment.py
│       └── README.md
│
├── tests/
│   └── test_grid_resilience.py
│
├── main.py
├── __init__.py
├── README.md
└── LICENSE

Core Engine

The "core_engine/" directory contains the reference simulation components responsible for the underlying grid model and failure-propagation behaviour.

The v1.0 core engine is treated as the frozen reference baseline.

Simulation Runtime

"main.py" provides the principal runtime entry point for executing the grid simulation.

Resilience Assessment Module

The "modules/grid_resilience/" directory contains the Grid Resilience Assessment Module (GRAM).

GRAM evaluates simulation results and produces deterministic resilience and risk assessments.

GRAM does not replace the core simulation engine.

Verification

The "tests/" directory contains deterministic verification tests used to confirm expected module behaviour.

---

🔄 Execution Flow

The system executes a deterministic simulation and assessment pipeline.

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
RESILIENCE ASSESSMENT
       │
       ▼
SIMULATION / ASSESSMENT RESULT

Execution Stages

1. Input Conditions

The simulation receives a defined set of parameters representing the initial grid state and scenario conditions.

Inputs may include:

- Grid configuration
- Node states
- Dependency relationships
- Initial operating conditions
- Failure conditions
- Scenario parameters

2. Grid Model Initialisation

The simulated grid environment is constructed from the defined grid model.

Grid nodes and dependency relationships are established before scenario execution.

3. Node and Dependency Evaluation

The system evaluates relationships between grid nodes.

These dependencies provide the structural basis for modelling possible failure propagation.

4. Scenario Initialisation

A defined scenario is applied to the initial grid state.

Examples include:

- Node failure
- Component outage
- Dependency failure
- Localised disruption
- Cascading failure initiation

5. Failure Propagation

The failure-propagation layer evaluates how the initial event affects dependent nodes.

Propagation follows the deterministic rules implemented by the system.

6. Cascade Analysis

The system evaluates subsequent effects generated by the propagated failure.

The simulation continues until the defined propagation conditions are satisfied.

7. Grid State Evaluation

The resulting grid state is evaluated against the initial state.

INITIAL STATE
      │
      ▼
DISTURBANCE
      │
      ▼
PROPAGATION
      │
      ▼
RESULTING STATE

8. Resilience Assessment

GRAM can evaluate the resulting state using deterministic assessment metrics.

The assessment may consider:

- Failure extent
- Affected nodes
- Critical infrastructure impact
- Dependency disruption
- Propagation depth
- Resilience score
- Risk classification

9. Result Generation

The system produces a structured result representing the simulated and assessed scenario.

---

⚙️ How to Run

The core simulation can be executed using Python.

Run the Main Simulation

python main.py

The exact runtime behaviour is defined by the source code in the repository.

Run GRAM Verification Tests

If "pytest" is installed:

python -m pytest tests/test_grid_resilience.py

The verification suite checks deterministic behaviour and resilience assessment logic.

Reproducibility

To reproduce a simulation or assessment:

1. Use the same system version.
2. Use the same input conditions.
3. Use the same scenario.
4. Execute the same runtime or assessment function.
5. Compare the resulting output.

The expected principle is:

Same Version
+
Same Inputs
+
Same Scenario
=
Same Result

---

📦 Output / Data Contract

The simulation and assessment layers should produce structured and inspectable results.

A GRAM assessment follows a defined data structure.

Example

{
  "module": "GRAM",
  "module_version": "1.0.0",
  "scenario": "CASCADE_FAILURE",
  "scenario_description": "Failure propagating through multiple dependencies.",
  "initial_nodes": 20,
  "failed_nodes": 3,
  "affected_nodes": 7,
  "critical_nodes_affected": 1,
  "propagation_depth": 2,
  "resilience_score": 77.0,
  "risk_level": "LOW",
  "deterministic": true,
  "simulation_control": false
}

Data Principles

The output should be:

- Deterministic
- Structured
- Reproducible
- Human-readable
- Suitable for engineering analysis
- Suitable for subsequent validation

The output represents a simulation and assessment result.

It is not an operational command to a live electrical grid.

---

🧠 Source of Truth

The source of truth is the executable source code and runtime behaviour, not the README alone.

The README documents the intended architecture and usage.

The actual system behaviour is defined by:

Source Code
     │
     ▼
Runtime Execution
     │
     ▼
Observed Result

Where documentation and implementation differ, the executable implementation must be reviewed and the documentation corrected accordingly.

Reference Baseline

The v1.0 release provides the frozen reference state of the system.

Future development should preserve the ability to compare new implementations against this baseline.

---

🔬 System Status

System: Sextant-Grid-Digital-Twin-System

Core Version: v1.0

GRAM Version: v1.0.0

Type: Deterministic grid simulation and resilience assessment framework

Primary Mode: Research / Simulation

Execution: Sandboxed

Deterministic: Yes

Reproducible: Yes

Live Grid Control: No

Production Grid Controller: No

Certification Status: Research framework; not a certified grid-control system

Development Status

The v1.0 core represents the reference simulation baseline.

GRAM is an analytical extension operating on simulation results.

Future enhancements should be versioned and verified independently so that the v1.0 reference behaviour remains traceable.

---

🎯 Objective / Purpose

The objective of the Sextant-Grid-Digital-Twin-System is to provide a deterministic environment for modelling and analysing electrical-grid resilience and failure propagation.

The framework is intended to support:

- Grid dependency analysis
- Failure propagation research
- Cascading failure modelling
- Resilience assessment
- Scenario comparison
- Deterministic simulation
- Reproducible engineering analysis
- Digital-twin research
- Validation and verification activities

The system provides a controlled research environment in which grid scenarios can be executed, analysed, and reproduced.

Research Boundary

The system is intended for simulation and research purposes.

It does not directly control electrical-grid infrastructure and should not be interpreted as a replacement for certified protection, supervisory control, operational decision-making, or grid-management systems.

---

🧊 GRAM — Grid Resilience Assessment Module

Overview

The Grid Resilience Assessment Module (GRAM) is a deterministic analytical extension of the Sextant Grid Digital Twin System.

GRAM evaluates the resulting state of a simulated grid and produces a structured resilience assessment.

The module does not replace or modify the underlying simulation engine.

Assessment Model

GRAM evaluates several deterministic impact components:

Failure Impact
      │
      ├── Failed Nodes
      │
      ├── Affected Nodes
      │
      ├── Critical Infrastructure Impact
      │
      └── Propagation Depth
               │
               ▼
        RESILIENCE SCORE
               │
               ▼
        RISK CLASSIFICATION

Risk Classification

Resilience Score| Risk Level
70–100| LOW
40–69.999| MEDIUM
0–39.999| HIGH

GRAM Design Rule

GRAM follows the principle:

«Simulation determines the resulting grid state; GRAM assesses the resilience implications of that state.»

This separation maintains a clear boundary between simulation execution and analytical assessment.

Operational Boundary

GRAM is not a live grid-control system.

It does not:

- Issue control commands
- Operate electrical equipment
- Modify protection settings
- Connect directly to grid control infrastructure
- Replace certified grid-management systems

It is intended for:

- Research
- Simulation
- Engineering analysis
- Scenario assessment
- Validation and verification

Version

GRAM v1.0.0

Status: Research / Simulation

Deterministic: Yes

Operational Control: None

Core Engine Modification: None
