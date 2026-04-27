class StabilityAnalyzer:
    def compute(self, prediction):
        score = prediction.get("risk_score", 0)

        if score < 0.3:
            status = "STABLE"
        elif score < 0.7:
            status = "WARNING"
        else:
            status = "CRITICAL"

        return {
            "status": status,
            "risk_score": score,
            "recommendation": "Monitor grid" if score < 0.7 else "Immediate action required"
        }
