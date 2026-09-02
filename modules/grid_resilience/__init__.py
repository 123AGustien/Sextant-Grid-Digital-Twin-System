"""
GRAM — Grid Resilience Assessment Module

Deterministic post-simulation assessment layer for the
Sextant Grid Digital Twin System.

GRAM does not control or modify the grid simulation engine.
It evaluates simulation results and produces a reproducible
resilience assessment.
"""

from .resilience_engine import (
    calculate_resilience_score,
    classify_risk,
)

from .assessment import (
    assess_grid_resilience,
)

__version__ = "1.0.0"

__all__ = [
    "calculate_resilience_score",
    "classify_risk",
    "assess_grid_resilience",
]