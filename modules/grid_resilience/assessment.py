"""
GRAM Grid Resilience Assessment

High-level interface for producing a complete deterministic
resilience assessment from simulation results.
"""

from .resilience_engine import (
    calculate_resilience_score,
    classify_risk,
)

from .scenarios import get_scenario


def assess_grid_resilience(
    scenario_id,
    total_nodes,
    failed_nodes,
    affected_nodes,
    critical_nodes_affected=0,
    propagation_depth=0,
):
    """
    Produce a complete GRAM resilience assessment.

    This function does not execute the grid simulation.
    It evaluates the supplied simulation result.
    """

    scenario = get_scenario(scenario_id)

    resilience_score = calculate_resilience_score(
        total_nodes=total_nodes,
        failed_nodes=failed_nodes,
        affected_nodes=affected_nodes,
        critical_nodes_affected=critical_nodes_affected,
        propagation_depth=propagation_depth,
    )

    risk_level = classify_risk(resilience_score)

    return {
        "module": "GRAM",
        "module_version": "1.0.0",
        "scenario": scenario_id,
        "scenario_description": scenario["description"],
        "initial_nodes": total_nodes,
        "failed_nodes": failed_nodes,
        "affected_nodes": affected_nodes,
        "critical_nodes_affected": critical_nodes_affected,
        "propagation_depth": propagation_depth,
        "resilience_score": resilience_score,
        "risk_level": risk_level,
        "deterministic": True,
        "simulation_control": False,
    }