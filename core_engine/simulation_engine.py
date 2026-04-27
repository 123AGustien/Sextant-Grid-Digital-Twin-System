import json
from datetime import datetime

# -------------------------
# Grid Node Model
# -------------------------
class Node:
    def __init__(self, name):
        self.name = name
        self.state = "OK"
        self.dependencies = []

    def add_dependency(self, node):
        self.dependencies.append(node)

# -------------------------
# Deterministic Engine
# -------------------------
class SimulationEngine:
    def __init__(self):
        self.nodes = {}
        self.events = []

    def add_node(self, name):
        node = Node(name)
        self.nodes[name] = node
        return node

    def fail_node(self, name):
        node = self.nodes.get(name)
        if node and node.state != "FAIL":
            node.state = "FAIL"
            self.events.append(f"{name} FAILED")

            # propagate failure deterministically
            for dep in node.dependencies:
                self.fail_node(dep.name)

    def run(self, initial_failures=None):
        if initial_failures is None:
            initial_failures = []

        for node_name in initial_failures:
            self.fail_node(node_name)

        return self.generate_output()

    def generate_output(self):
        return {
            "timestamp": datetime.utcnow().isoformat(),
            "nodes": {
                name: node.state for name, node in self.nodes.items()
            },
            "events": self.events,
            "deterministic": True
        }

# -------------------------
# Manual test run (for local debug)
# -------------------------
if __name__ == "__main__":
    engine = SimulationEngine()

    # sample grid
    a = engine.add_node("GENERATOR_A")
    b = engine.add_node("SUBSTATION_B")
    c = engine.add_node("LOAD_C")

    a.add_dependency(b)
    b.add_dependency(c)

    result = engine.run(initial_failures=["GENERATOR_A"])

    print(json.dumps(result, indent=2))
