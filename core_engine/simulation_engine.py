
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

        if not node or node.state == "FAIL":
            return

        node.state = "FAIL"
        self.events.append(f"{name} FAILED")

        for dep in node.dependencies:
            self.fail_node(dep.name)

    def run(self, initial_failures=None):
        initial_failures = initial_failures or []

        for node_name in initial_failures:
            self.fail_node(node_name)

        return self.generate_output()

    def generate_output(self):
        return {
            "timestamp": datetime.utcnow().isoformat(),
            "nodes": {name: node.state for name, node in self.nodes.items()},
            "events": self.events,
            "deterministic": True
        }
