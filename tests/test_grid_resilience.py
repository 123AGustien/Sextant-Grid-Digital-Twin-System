"""
GRAM v1.0 Verification Tests
"""

from modules.grid_resilience import (
    calculate_resilience_score,
    classify_risk,
    assess_grid_resilience,
)


def test_identical_inputs_produce_identical_results():
    result_1 = calculate_resilience_score(
        total_nodes=20,
        failed_nodes=3,
        affected_nodes=7,
        critical_nodes_affected=1,
        propagation_depth=2,
    )

    result_2 = calculate_resilience_score(
        total_nodes=20,
        failed_nodes=3,
        affected_nodes=7,
        critical_nodes_affected=1,
        propagation_depth=2,
    )

    assert result_1 == result_2


def test_normal_grid_has_full_resilience():
    score = calculate_resilience_score(
        total_nodes=20,
        failed_nodes=0,
        affected_nodes=0,
        critical_nodes_affected=0,
        propagation_depth=0,
    )

    assert score == 100.0
    assert classify_risk(score) == "LOW"


def test_high_failure_produces_high_risk():
    score = calculate_resilience_score(
        total_nodes=10,
        failed_nodes=10,
        affected_nodes=10,
        critical_nodes_affected=5,
        propagation_depth=10,
    )

    assert score == 0.0
    assert classify_risk(score) == "HIGH"


def test_complete_assessment():
    result = assess_grid_resilience(
        scenario_id="CASCADE_FAILURE",
        total_nodes=20,
        failed_nodes=3,
        affected_nodes=7,
        critical_nodes_affected=1,
        propagation_depth=2,
    )

    assert result["module"] == "GRAM"
    assert result["module_version"] == "1.0.0"
    assert result["scenario"] == "CASCADE_FAILURE"
    assert result["deterministic"] is True
    assert result["simulation_control"] is False
    assert 0 <= result["resilience_score"] <= 100
    assert result["risk_level"] in {
        "LOW",
        "MEDIUM",
        "HIGH",
    }