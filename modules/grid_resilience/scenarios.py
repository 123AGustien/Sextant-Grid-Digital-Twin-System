"""
GRAM Scenario Definitions

Standard deterministic scenarios used for resilience assessment.

These scenarios describe assessment conditions only.
They do not replace the frozen v1.0 simulation engine.
"""

SCENARIOS = {
    "NORMAL_OPERATION": {
        "description": "Normal grid operating condition.",
        "severity": 0,
    },

    "NODE_FAILURE": {
        "description": "Failure of one or more grid nodes.",
        "severity": 1,
    },

    "DEPENDENCY_FAILURE": {
        "description": "Failure affecting dependent grid nodes.",
        "severity": 2,
    },

    "CASCADE_FAILURE": {
        "description": "Failure propagating through multiple dependencies.",
        "severity": 3,
    },

    "CRITICAL_INFRASTRUCTURE_FAILURE": {
        "description": "Failure affecting designated critical infrastructure.",
        "severity": 4,
    },
}


def get_scenario(scenario_id):
    """
    Return a scenario definition.

    Raises:
        ValueError: if the scenario is not defined.
    """

    if scenario_id not in SCENARIOS:
        raise ValueError(
            f"Unknown GRAM scenario: {scenario_id}"
        )

    return SCENARIOS[scenario_id]