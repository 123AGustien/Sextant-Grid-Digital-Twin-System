import json
import os

from core_engine.telemetry import TelemetryGenerator
from core_engine.prediction import GridPredictor
from core_engine.stability import StabilityAnalyzer
from core_engine.simulation_engine import SimulationEngine


def main():
    engine = SimulationEngine()

    telemetry = TelemetryGenerator(seed=42)
    snapshot = telemetry.generate_snapshot()

    predictor = GridPredictor()
    prediction = predictor.analyze(snapshot)

    analyzer = StabilityAnalyzer()
    stability = analyzer.compute(prediction)

    output = {
        "telemetry": snapshot,
        "prediction": prediction,
        "stability": stability
    }

    os.makedirs("artifacts", exist_ok=True)

    with open("artifacts/output.json", "w") as f:
        json.dump(output, f, indent=2)

    print("✔ SUCCESS")
    print("✔ Output saved to artifacts/output.json")


if __name__ == "__main__":
    main()
