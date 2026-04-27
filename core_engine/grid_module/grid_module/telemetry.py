import random

class TelemetryGenerator:
    def __init__(self, seed=42):
        random.seed(seed)

    def generate_snapshot(self):
        return {
            "voltage": round(random.uniform(220, 240), 2),
            "frequency": round(random.uniform(49.8, 50.2), 3),
            "load": round(random.uniform(60, 95), 2),
            "solar": round(random.uniform(5, 30), 2),
            "import_power": round(random.uniform(10, 50), 2)
        }
