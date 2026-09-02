/* =========================================================
   SEXTANT GRID DIGITAL TWIN
   GRAM v1.0.0 — Research Cockpit
   Deterministic Client-Side Assessment Interface

   Research-only:
   - No live grid control
   - No operational commands
   - Deterministic calculations
   - Reproducible assessment records
   ========================================================= */


/* =========================================================
   DEFAULT STATE
   ========================================================= */

const DEFAULT_STATE = {
    scenario: "CASCADE_FAILURE",
    totalNodes: 20,
    failedNodes: 3,
    affectedNodes: 7,
    criticalNodesAffected: 1,
    propagationDepth: 2
};


/* =========================================================
   SCENARIO DEFINITIONS
   ========================================================= */

const SCENARIOS = {

    NORMAL_OPERATION: {
        description: "Normal grid operating condition.",
        scenarioPenalty: 0
    },

    NODE_FAILURE: {
        description: "Failure of one or more grid nodes.",
        scenarioPenalty: 5
    },

    DEPENDENCY_FAILURE: {
        description: "Failure affecting dependent grid nodes.",
        scenarioPenalty: 10
    },

    CASCADE_FAILURE: {
        description: "Failure propagating through multiple dependencies.",
        scenarioPenalty: 15
    },

    CRITICAL_INFRASTRUCTURE_FAILURE: {
        description: "Failure affecting designated critical infrastructure.",
        scenarioPenalty: 20
    }

};


/* =========================================================
   DOM REFERENCES
   ========================================================= */

const scenarioInput =
    document.getElementById("scenario");

const totalNodesInput =
    document.getElementById("totalNodes");

const failedNodesInput =
    document.getElementById("failedNodes);

const affectedNodesInput =
    document.getElementById("affectedNodes");

const criticalNodesInput =
    document.getElementById("criticalNodes");

const propagationDepthInput =
    document.getElementById("propagationDepth");


const displayTotalNodes =
    document.getElementById("displayTotalNodes");

const displayFailedNodes =
    document.getElementById("displayFailedNodes");

const displayAffectedNodes =
    document.getElementById("displayAffectedNodes");

const displayCriticalNodes =
    document.getElementById("displayCriticalNodes");

const displayPropagationDepth =
    document.getElementById("displayPropagationDepth");


const resilienceScore =
    document.getElementById("resilienceScore");

const riskLevel =
    document.getElementById("riskLevel");

const assessmentMessage =
    document.getElementById("assessmentMessage");

const assessmentRecord =
    document.getElementById("assessmentRecord");


const runButton =
    document.getElementById("runButton");

const resetButton =
    document.getElementById("resetButton");


/* =========================================================
   VALIDATION
   ========================================================= */

function validateInputs(
    totalNodes,
    failedNodes,
    affectedNodes,
    criticalNodesAffected,
    propagationDepth
) {

    if (!Number.isFinite(totalNodes) || totalNodes <= 0) {
        throw new Error(
            "Total nodes must be greater than zero."
        );
    }

    if (
        !Number.isFinite(failedNodes) ||
        !Number.isFinite(affectedNodes) ||
        !Number.isFinite(criticalNodesAffected) ||
        !Number.isFinite(propagationDepth)
    ) {
        throw new Error(
            "All assessment values must be valid numbers."
        );
    }

    if (
        failedNodes < 0 ||
        affectedNodes < 0 ||
        criticalNodesAffected < 0 ||
        propagationDepth < 0
    ) {
        throw new Error(
            "Assessment values cannot be negative."
        );
    }

    if (failedNodes > totalNodes) {
        throw new Error(
            "Failed nodes cannot exceed total nodes."
        );
    }

    if (affectedNodes > totalNodes) {
        throw new Error(
            "Affected nodes cannot exceed total nodes."
        );
    }

    if (criticalNodesAffected > totalNodes) {
        throw new Error(
            "Critical nodes cannot exceed total nodes."
        );
    }

    if (criticalNodesAffected > affectedNodes) {
        throw new Error(
            "Critical nodes affected cannot exceed affected nodes."
        );
    }
}


/* =========================================================
   GRAM RESILIENCE CALCULATION
   ========================================================= */

function calculateResilienceScore(
    scenario,
    totalNodes,
    failedNodes,
    affectedNodes,
    criticalNodesAffected,
    propagationDepth
) {

    const failureRatio =
        Math.min(failedNodes / totalNodes, 1);

    const affectedRatio =
        Math.min(affectedNodes / totalNodes, 1);

    const criticalRatio =
        Math.min(
            criticalNodesAffected / totalNodes,
            1
        );

    const propagationRatio =
        Math.min(
            propagationDepth / 10,
            1
        );


    const failurePenalty =
        failureRatio * 40;

    const affectedPenalty =
        affectedRatio * 30;

    const criticalPenalty =
        criticalRatio * 20;

    const propagationPenalty =
        propagationRatio * 10;


    const scenarioPenalty =
        SCENARIOS[scenario].scenarioPenalty;


    const totalPenalty =
        failurePenalty +
        affectedPenalty +
        criticalPenalty +
        propagationPenalty +
        scenarioPenalty;


    const score =
        100 - totalPenalty;


    return {
        score: Number(
            Math.max(0, Math.min(score, 100))
                .toFixed(3)
        ),

        penalty_breakdown: {
            failure_penalty: Number(
                failurePenalty.toFixed(3)
            ),

            affected_penalty: Number(
                affectedPenalty.toFixed(3)
            ),

            critical_penalty: Number(
                criticalPenalty.toFixed(3)
            ),

            propagation_penalty: Number(
                propagationPenalty.toFixed(3)
            ),

            scenario_penalty: Number(
                scenarioPenalty.toFixed(3)
            ),

            total_penalty: Number(
                Math.min(
                    totalPenalty,
                    100
                ).toFixed(3)
            )
        }
    };
}


/* =========================================================
   RISK CLASSIFICATION
   ========================================================= */

function classifyRisk(score) {

    if (score < 40) {
        return "HIGH";
    }

    if (score < 70) {
        return "MEDIUM";
    }

    return "LOW";
}


/* =========================================================
   RISK STYLE
   ========================================================= */

function updateRiskDisplay(risk) {

    riskLevel.textContent = risk;

    riskLevel.classList.remove(
        "low",
        "medium",
        "high"
    );

    riskLevel.classList.add(
        risk.toLowerCase()
    );
}


/* =========================================================
   UPDATE GRID STATE
   ========================================================= */

function updateGridDisplay(
    totalNodes,
    failedNodes,
    affectedNodes,
    criticalNodesAffected,
    propagationDepth
) {

    displayTotalNodes.textContent =
        totalNodes;

    displayFailedNodes.textContent =
        failedNodes;

    displayAffectedNodes.textContent =
        affectedNodes;

    displayCriticalNodes.textContent =
        criticalNodesAffected;

    displayPropagationDepth.textContent =
        propagationDepth;
}


/* =========================================================
   BUILD ASSESSMENT RECORD
   ========================================================= */

function buildAssessmentRecord(
    scenario,
    totalNodes,
    failedNodes,
    affectedNodes,
    criticalNodesAffected,
    propagationDepth,
    calculation,
    risk
) {

    return {

        module: "GRAM",

        module_version: "1.0.0",

        scenario: scenario,

        scenario_description:
            SCENARIOS[scenario].description,

        initial_nodes:
            totalNodes,

        failed_nodes:
            failedNodes,

        affected_nodes:
            affectedNodes,

        critical_nodes_affected:
            criticalNodesAffected,

        propagation_depth:
            propagationDepth,

        resilience_score:
            calculation.score,

        risk_level:
            risk,

        penalty_breakdown:
            calculation.penalty_breakdown,

        deterministic: true,

        simulation_control: false,

        research_boundary:
            "NO LIVE GRID CONTROL"

    };
}


/* =========================================================
   RUN ASSESSMENT
   ========================================================= */

function runAssessment() {

    try {

        const scenario =
            scenarioInput.value;


        if (!SCENARIOS[scenario]) {
            throw new Error(
                "Unknown assessment scenario."
            );
        }


        const totalNodes =
            Number(totalNodesInput.value);

        const failedNodes =
            Number(failedNodesInput.value);

        const affectedNodes =
            Number(affectedNodesInput.value);

        const criticalNodesAffected =
            Number(criticalNodesInput.value);

        const propagationDepth =
            Number(propagationDepthInput.value);


        validateInputs(
            totalNodes,
            failedNodes,
            affectedNodes,
            criticalNodesAffected,
            propagationDepth
        );


        const calculation =
            calculateResilienceScore(
                scenario,
                totalNodes,
                failedNodes,
                affectedNodes,
                criticalNodesAffected,
                propagationDepth
            );


        const risk =
            classifyRisk(
                calculation.score
            );


        updateGridDisplay(
            totalNodes,
            failedNodes,
            affectedNodes,
            criticalNodesAffected,
            propagationDepth
        );


        resilienceScore.textContent =
            calculation.score.toFixed(3);


        updateRiskDisplay(risk);


        const result =
            buildAssessmentRecord(
                scenario,
                totalNodes,
                failedNodes,
                affectedNodes,
                criticalNodesAffected,
                propagationDepth,
                calculation,
                risk
            );


        assessmentRecord.textContent =
            JSON.stringify(
                result,
                null,
                2
            );


        assessmentMessage.textContent =
            "Deterministic assessment complete. " +
            "Identical inputs and scenario produce the same result.";


        assessmentMessage.style.borderLeftColor =
            "";


    } catch (error) {

        assessmentMessage.textContent =
            "ASSESSMENT ERROR: " +
            error.message;

        assessmentMessage.style.borderLeftColor =
            "#ff5c70";
    }
}


/* =========================================================
   RESET
   ========================================================= */

function resetCockpit() {

    scenarioInput.value =
        DEFAULT_STATE.scenario;

    totalNodesInput.value =
        DEFAULT_STATE.totalNodes;

    failedNodesInput.value =
        DEFAULT_STATE.failedNodes;

    affectedNodesInput.value =
        DEFAULT_STATE.affectedNodes;

    criticalNodesInput.value =
        DEFAULT_STATE.criticalNodesAffected;

    propagationDepthInput.value =
        DEFAULT_STATE.propagationDepth;


    assessmentMessage.style.borderLeftColor =
        "";


    runAssessment();
}


/* =========================================================
   EVENT HANDLERS
   ========================================================= */

runButton.addEventListener(
    "click",
    runAssessment
);

resetButton.addEventListener(
    "click",
    resetCockpit
);


/* =========================================================
   INITIALISE COCKPIT
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        runAssessment();

    }
);
