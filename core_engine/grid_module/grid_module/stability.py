class StabilityAnalyzer:
    def __init__(self):
        pass

    def compute(self, prediction_result):
        """
        Converts risk analysis into system stability index
        (decision-support only, no control functions)
        """

        stability = prediction_result.get("stability_score", 100)
        flags = prediction_result.get("risk_flags", [])

        # default classification
        status = "STABLE"

        # classification logic (deterministic)
        if stability < 70:
            status = "DEGRADED"

        if stability < 40:
            status = "CRITICAL"

        # extra interpretation layer
        severity = len(flags)

        interpretation = {
            "stability_index": stability,
            "system_status": status,
            "risk_event_count": severity,
            "flags": flags,
            "summary": self._generate_summary(status, severity)
        }

        return interpretation

    def _generate_summary(self, status, severity):
        """
        Simple deterministic explanation layer
        """

        if status == "STABLE":
            return "Grid conditions are within operational tolerance."

        elif status == "DEGRADED":
            return "Grid showing stress indicators; monitoring recommended."

        else:
            return "Grid instability detected; immediate attention required (simulation advisory only)."


# -------------------------
# Local test
# -------------------------
if __name__ == "__main__":
    sample_prediction = {
        "stability_score": 55,
        "risk_flags": ["SUBSTATION_B_HIGH_LOAD", "LOAD_C_VOLTAGE_ANOMALY"]
    }

    analyzer = StabilityAnalyzer()
    print(analyzer.compute(sample_prediction))
