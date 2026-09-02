"""
GRAM Resilience Engine

Provides deterministic resilience calculations.

The calculation is intentionally transparent and reproducible.
It is an assessment model, not a physical power-grid controller.
"""


def _validate_non_negative(value, name):
    """Validate that a metric is non-negative."""

    if value < 0:
        raise ValueError(f"{name} must be non-negative.")


def calculate_resilience_score(
    total_nodes,
    failed_nodes,
    affected_nodes,
    critical_nodes_affected=0,
    propagation_depth=0,
):
    """
    Calculate a deterministic grid resilience score.

    Score range:
        0.0 = maximum assessed impact
        100.0 = minimum assessed impact

    The calculation uses transparent penalty components:

        failure_ratio       -> 40% maximum penalty
        affected_ratio      -> 30% maximum penalty
        critical_impact     -> 20% maximum penalty
        propagation_depth   -> 10% maximum penalty

    Args:
        total_nodes: Total number of grid nodes.
        failed_nodes: Number of directly failed nodes.
        affected_nodes: Number of nodes affected by the event.
        critical_nodes_affected: Number of affected critical nodes.
        propagation_depth: Depth of the failure cascade.

    Returns:
        float: Resilience score between 0 and 100.
    """

    if total_nodes <= 0:
        raise ValueError("total_nodes must be greater than zero.")

    _validate_non_negative(failed_nodes, "failed_nodes")
    _validate_non_negative(affected_nodes, "affected_nodes")
    _validate_non_negative(
        critical_nodes_affected,
        "critical_nodes_affected",
    )
    _validate_non_negative(propagation_depth, "propagation_depth")

    failure_ratio = min(failed_nodes / total_nodes, 1.0)
    affected_ratio = min(affected_nodes / total_nodes, 1.0)

    critical_ratio = min(
        critical_nodes_affected / total_nodes,
        1.0,
    )

    propagation_ratio = min(
        propagation_depth / 10.0,
        1.0,
    )

    penalty = (
        failure_ratio * 40.0
        + affected_ratio * 30.0
        + critical_ratio * 20.0
        + propagation_ratio * 10.0
    )

    score = 100.0 - penalty

    return round(max(0.0, min(score, 100.0)), 3)


def classify_risk(resilience_score):
    """
    Convert a resilience score into a deterministic risk level.

    Risk classification:

        HIGH   : score < 40
        MEDIUM : score < 70
        LOW    : score >= 70
    """

    if not 0 <= resilience_score <= 100:
        raise ValueError(
            "resilience_score must be between 0 and 100."
        )

    if resilience_score < 40:
        return "HIGH"

    if resilience_score < 70:
        return "MEDIUM"

    return "LOW"