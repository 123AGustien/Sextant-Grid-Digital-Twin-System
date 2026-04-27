class TelemetryGenerator:
    def __init__(self, seed=42):
        self.seed = seed

    def generate_snapshot(self):
        return {
            "voltage": 230,
            "frequency": 50,
            "load": 0.72
        }
