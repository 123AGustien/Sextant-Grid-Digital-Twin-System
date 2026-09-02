🧠 Sextant-Grid-Digital-Twin-System

Deterministic grid simulation and digital twin framework for power system resilience, failure propagation modelling, and predictive grid analytics.

---

🏢 Overview

The Sextant-Grid-Digital-Twin-System is a deterministic simulation framework designed to model electrical-grid behaviour under controlled research conditions.

The system enables:

- Grid dependency modelling
- Cascading failure propagation analysis
- Stability and resilience evaluation
- Predictive simulation of system stress scenarios
- Reproducible engineering analysis

This is a research and simulation framework, not a live production grid controller.

---

⚙️ Core Principles

The system is based on three primary engineering principles:

- Deterministic Execution → same input produces the same output.
- Reproducibility → simulation scenarios can be replayed using the same conditions.
- Modular Design → analytical capabilities can be implemented as independent modules.

These principles provide the foundation for controlled, traceable, and repeatable grid-resilience research.

---

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

Additional analytical modules operate above the core simulation layer.

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

"main.py" provides the principal runtime entry point for the grid simulation.

The executable source code remains the authority for actual runtime behaviour.

Resilience Assessment Module

The "modules/grid_resilience/" directory contains the Grid Resilience Assessment Module (GRAM).

GRAM evaluates simulation results and produces deterministic resilience and risk assessments.

GRAM does not replace the core simulation engine.

Verification

The "tests/" directory contains deterministic verification tests used to confirm expected module behaviour.

---

🔄 Execution Flow

The Sextant-Grid-Digital-Twin-System executes a deterministic simulation and assessment pipeline.

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
SIMULATION / ASSESSMENT RESULT

1. Input Conditions

The simulation receives defined parameters representing the initial grid state and scenario conditions.

Inputs may include:

- Grid configuration
- Node states
- Dependency relationships
- Initial operating conditions
- Failure or disturbance conditions
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
- Localised system disruption
- Cascading failure initiation

5. Failure Propagation

The failure-propagation layer evaluates how the initial event affects dependent nodes.

Propagation follows the deterministic rules implemented by the system.

6. Cascade Analysis

The system evaluates subsequent effects generated by the propagated failure.

The simulation continues through the dependency structure according to the defined propagation conditions.

This allows researchers to examine:

- Failure extent
- Affected nodes
- Dependency-chain effects
- Cascade progression
- Remaining system state

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

8. Resilience / Stability Assessment

The resulting system condition can be assessed to determine the effect of the simulated event.

Assessment may consider:

- System stability
- Remaining operational nodes
- Failure concentration
- Dependency disruption
- Cascade severity
- Overall resilience characteristics

9. Result Generation

The system produces a structured result representing the simulated and assessed scenario.

The result can subsequently be inspected, compared, replayed, or used as a reference for future development.

---

⚙️ How to Run

The core simulation can be executed using Python.

Run the Main Simulation

python main.py

The exact runtime behaviour is defined by the executable source code in the repository.

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

The governing principle is:

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

The README documents the intended architecture, interfaces, boundaries, and usage.

The actual system behaviour is defined by:

SOURCE CODE
     │
     ▼
RUNTIME EXECUTION
     │
     ▼
OBSERVED RESULT

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

GRAM is an analytical extension designed to operate on simulation results.

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

🧊 System Freeze — v1.0

This system operates under a frozen deterministic baseline (v1.0).

Freeze Definition

The v1.0 state establishes the reference baseline for:

- Deterministic simulation behaviour
- Cascade failure logic
- Core architecture
- Scenario execution
- Simulation runtime behaviour
- Reproducible outputs

Freeze Boundary

The following components constitute the v1.0 reference baseline:

- Grid dependency model
- Failure propagation engine
- Scenario execution logic
- Simulation runtime behaviour

Modification Rule

The frozen v1.0 baseline must not be silently altered.

Enhancements should be introduced through separately versioned development work and subsequently incorporated into a new release when validated.

Future frozen releases may include:

v1.1
v1.2
v2.0

depending on the scope and impact of the changes.

Interpretation

v1.0 represents a reference simulation state, not an unrestricted evolving implementation.

It provides the baseline against which future system behaviour can be measured.

---

🧪 GRAM — Grid Resilience Assessment Module

Overview

The Grid Resilience Assessment Module (GRAM) is a deterministic analytical extension of the Sextant Grid Digital Twin System.

GRAM evaluates the resulting state of a simulated grid and produces a structured resilience assessment.

The module does not replace or modify the underlying simulation engine.

Assessment Model

GRAM evaluates deterministic impact components including:

FAILURE IMPACT
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

---

🌐 Research Architecture

The Sextant Grid Digital Twin is designed to support future domain-specific resilience modules while maintaining a common deterministic architectural philosophy.

                    SEXTANT RESILIENCE ARCHITECTURE
                              │
                              ▼
                    DETERMINISTIC CORE
                              │
              ┌───────────────┼───────────────┐
              │               │               │
              ▼               ▼               ▼
        GRID SIMULATION   DOMAIN MODULES   FUTURE MODULES
              │               │
              ▼               ▼
       FAILURE STATE      RESILIENCE
              │            ASSESSMENT
              └───────────────┘
                      │
                      ▼
              STRUCTURED RESULT
                      │
                      ▼
              VALIDATION / V&V

This modular structure is intended to support controlled research expansion without compromising the traceability of the reference baseline.

---

📚 Versioning and Traceability

All future development should maintain:

- Version identification
- Scenario identification
- Input traceability
- Deterministic reproducibility
- Test evidence
- Clear separation between baseline and experimental functionality

The v1.0 release remains the reference point for comparison.

---

📄 License

This project is released under the MIT License.

See ""LICENSE"" (LICENSE) for the full license text.