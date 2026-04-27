class GridPredictor:
    def __init__(self):
        pass

    def analyze(self, telemetry_snapshot):
        """
        Simple deterministic risk analysis engine
        (simulation-based, no real-world control)
        """

        results = {
            "stability_score": 100,
            "risk_flags": [],
            "analysis": {}
        }

        nodes = telemetry_snapshot.get("nodes", {})

        for node_name, data in nodes.items():
            voltage = data.get("voltage", 0)
            load = data.get("load", 0)

            node_risk = 0

            # Rule 1: voltage instability
            if voltage < 210 or voltage > 240:
                node_risk += 30
                results["risk_flags"].append(f"{node_name}_VOLTAGE_ANOMALY")

            # Rule 2: high load stress
            if load > 85:
                node_risk += 40
                results["risk_flags"].append(f"{node_name}_HIGH_LOAD")

            # Store per-node analysis
            results["analysis"][node_name] = {
                "voltage": voltage,
                "load": load,
                "risk_score": node_risk
            }

            # reduce global stability
            results["stability_score"] -= node_risk

        # clamp stability
        results["stability_score"] = max(0, results["stability_score"])

        # system-level flag
        if results["stability_score"] < 50:
            results["risk_flags"].append("SYSTEM_UNSTABLE")

        return results


# -------------------------
# Local test
# -------------------------
if __name__ == "__main__":
    sample = {
        "nodes": {
            "GENERATOR_A": {"voltage": 235, "load": 70},
            "SUBSTATION_B": {"voltage": 250, "load": 90},
            "LOAD_C": {"voltage": 205, "load": 95}
        }
    }

    predictor = GridPredictor()
    print(predictor.analyze(sample))
