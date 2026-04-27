from grid_module.telemetry import TelemetryGenerator
from grid_module.prediction import GridPredictor
from grid_module.stability import StabilityAnalyzer


def run_pipeline():
    telemetry = TelemetryGenerator(seed=42)
    snapshot = telemetry.generate_snapshot()

    print("TELEMETRY SNAPSHOT:")
    print(snapshot)


if __name__ == "__main__":
    run_pipeline()
