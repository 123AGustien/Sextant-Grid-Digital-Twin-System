from grid_module.telemetry import TelemetryGenerator
from grid_module.prediction import GridPredictor
from grid_module.stability import StabilityAnalyzer


def run_pipeline():
    # 1. TELEMETRY
    telemetry = TelemetryGenerator(seed=42)
    snapshot = telemetry.generate_snapshot()

    print("TELEMETRY SNAPSHOT:")
    print(snapshot)

    # 2. PREDICTION
    predictor = GridPredictor()
    prediction = predictor.analyze(snapshot)

    print("\nPREDICTION RESULT:")
    print(prediction)

    # 3. STABILITY (FINAL DECISION LAYER)
    analyzer = StabilityAnalyzer()
    stability = analyzer.compute(prediction)

    print("\nSTABILITY RESULT:")
    print(stability)


if __name__ == "__main__":
    run_pipeline()
