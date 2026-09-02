/* =========================================================
   SEXTANT GRID DIGITAL TWIN
   GRAM v1.0.0 — Research Cockpit
   Deterministic Client-Side Assessment Interface
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       DEFAULT STATE
       ===================================================== */

    const DEFAULT_STATE = {
        scenario: "CASCADE_FAILURE",
        totalNodes: 20,
        failedNodes: 3,
        affectedNodes: 7,
        criticalNodesAffected: 1,
        propagationDepth: 2
    };


    /* =====================================================
       SCENARIO DEFINITIONS
       ===================================================== */

    const SCENARIOS = {

        NORMAL_OPERATION: {
            description: "Normal grid operating condition."
        },

        NODE_FAILURE: {
            description: "Failure of one or more grid nodes."
        },

        DEPENDENCY_FAILURE: {
            description: "Failure affecting dependent grid nodes."
        },

        CASCADE_FAILURE: {
            description:
                "Failure propagating through multiple dependencies."
        },

        CRITICAL_INFRASTRUCTURE_FAILURE: {
            description:
                "Failure affecting designated critical infrastructure."
        }

    };


    /* =====================================================
       ELEMENT HELPER
       ===================================================== */

    function getElement(id) {
        return document.getElementById(id);
    }


    /* =====================================================
       VALIDATION
       ===================================================== */

    function validateInputs(
        totalNodes,
        failedNodes,
        affectedNodes,
        criticalNodesAffected,
        propagationDepth
    ) {

        if (
            !Number.isFinite(totalNodes) ||
            totalNodes <= 0
        ) {
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


    /* =====================================================
       GRAM RESILIENCE CALCULATION
       ===================================================== */

    function calculateResilienceScore(
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
            Math.min(criticalNodesAffected / totalNodes, 1);

        const propagationRatio =
            Math.min(propagationDepth / 10, 1);

        const penalty =
            failureRatio * 40 +
            affectedRatio * 30 +
            criticalRatio * 20 +
            propagationRatio * 10;

        const score =
            100 - penalty;

        return Number(
            Math.max(
                0,
                Math.min(score, 100)
            ).toFixed(3)
        );
    }


    /* =====================================================
       RISK CLASSIFICATION
       ===================================================== */

    function classifyRisk(score) {

        if (score < 40) {
            return "HIGH";
        }

        if (score < 70) {
            return "MEDIUM";
        }

        return "LOW";
    }


    /* =====================================================
       INITIALIZE COCKPIT
       ===================================================== */

    function initializeCockpit() {

        const scenarioInput =
            getElement("scenario");

        const totalNodesInput =
            getElement("totalNodes");

        const failedNodesInput =
            getElement("failedNodes");

        const affectedNodesInput =
            getElement("affectedNodes");

        const criticalNodesInput =
            getElement("criticalNodes");

        const propagationDepthInput =
            getElement("propagationDepth");


        const displayTotalNodes =
            getElement("displayTotalNodes");

        const displayFailedNodes =
            getElement("displayFailedNodes");

        const displayAffectedNodes =
            getElement("displayAffectedNodes");

        const displayCriticalNodes =
            getElement("displayCriticalNodes");

        const displayPropagationDepth =
            getElement("displayPropagationDepth");


        const resilienceScore =
            getElement("resilienceScore");

        const riskLevel =
            getElement("riskLevel");

        const assessmentMessage =
            getElement("assessmentMessage");

        const assessmentRecord =
            getElement("assessmentRecord");


        const runButton =
            getElement("runButton");

        const resetButton =
            getElement("resetButton");


        /* =================================================
           ELEMENT SAFETY CHECK
           ================================================= */

        const requiredElements = [

            scenarioInput,
            totalNodesInput,
            failedNodesInput,
            affectedNodesInput,
            criticalNodesInput,
            propagationDepthInput,

            displayTotalNodes,
            displayFailedNodes,
            displayAffectedNodes,
            displayCriticalNodes,
            displayPropagationDepth,

            resilienceScore,
            riskLevel,
            assessmentMessage,
            assessmentRecord,

            runButton,
            resetButton

        ];


        if (
            requiredElements.some(
                function (element) {
                    return !element;
                }
            )
        ) {

            console.error(
                "GRAM initialization failed: required cockpit element missing."
            );

            if (assessmentMessage) {

                assessmentMessage.textContent =
                    "GRAM INITIALIZATION ERROR: Required cockpit element missing.";

            }

            return;
        }


        /* =================================================
           GRID DISPLAY
           ================================================= */

        function updateGridDisplay() {

            displayTotalNodes.textContent =
                totalNodesInput.value;

            displayFailedNodes.textContent =
                failedNodesInput.value;

            displayAffectedNodes.textContent =
                affectedNodesInput.value;

            displayCriticalNodes.textContent =
                criticalNodesInput.value;

            displayPropagationDepth.textContent =
                propagationDepthInput.value;
        }


        /* =================================================
           RISK DISPLAY
           ================================================= */

        function updateRiskDisplay(risk) {

            riskLevel.textContent =
                risk;

            riskLevel.classList.remove(
                "low",
                "medium",
                "high"
            );

            riskLevel.classList.add(
                risk.toLowerCase()
            );
        }


        /* =================================================
           ASSESSMENT RECORD
           ================================================= */

        function buildAssessmentRecord(
            scenario,
            totalNodes,
            failedNodes,
            affectedNodes,
            criticalNodesAffected,
            propagationDepth,
            score,
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
                    score,

                risk_level:
                    risk,

                deterministic: true,

                simulation_control: false,

                research_boundary:
                    "NO LIVE GRID CONTROL"
            };
        }


        /* =================================================
           RUN GRAM ASSESSMENT
           ================================================= */

        function runAssessment(event) {

            if (event) {
                event.preventDefault();
            }

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


                /* Update visible GRID STATE */
                updateGridDisplay();


                /* Calculate deterministic GRAM result */
                const score =
                    calculateResilienceScore(
                        totalNodes,
                        failedNodes,
                        affectedNodes,
                        criticalNodesAffected,
                        propagationDepth
                    );


                const risk =
                    classifyRisk(score);


                /* Update result */
                resilienceScore.textContent =
                    score.toFixed(3);


                updateRiskDisplay(
                    risk
                );


                /* Build structured record */
                const result =
                    buildAssessmentRecord(
                        scenario,
                        totalNodes,
                        failedNodes,
                        affectedNodes,
                        criticalNodesAffected,
                        propagationDepth,
                        score,
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
                    "Identical inputs produce the same result.";


                assessmentMessage.style.borderLeftColor =
                    "";


                console.log(
                    "GRAM assessment complete:",
                    result
                );

            }

            catch (error) {

                console.error(
                    "GRAM assessment error:",
                    error
                );


                assessmentMessage.textContent =
                    "ASSESSMENT ERROR: " +
                    error.message;


                assessmentMessage.style.borderLeftColor =
                    "#ff5c70";
            }
        }


        /* =================================================
           RESET COCKPIT
           ================================================= */

        function resetCockpit(event) {

            if (event) {
                event.preventDefault();
            }


            /* Restore actual INPUT controls */
            scenarioInput.value =
                DEFAULT_STATE.scenario;

            totalNodesInput.value =
                String(DEFAULT_STATE.totalNodes);

            failedNodesInput.value =
                String(DEFAULT_STATE.failedNodes);

            affectedNodesInput.value =
                String(DEFAULT_STATE.affectedNodes);

            criticalNodesInput.value =
                String(DEFAULT_STATE.criticalNodesAffected);

            propagationDepthInput.value =
                String(DEFAULT_STATE.propagationDepth);


            /* Immediately refresh visible GRID STATE */
            updateGridDisplay();


            /* Re-run deterministic assessment */
            runAssessment();


            console.log(
                "GRAM cockpit reset to default state."
            );
        }


        /* =================================================
           EXPLICIT BUTTON TYPES
           ================================================= */

        runButton.type =
            "button";

        resetButton.type =
            "button";


        /* =================================================
           EVENT HANDLERS
           ================================================= */

        runButton.addEventListener(
            "click",
            runAssessment
        );


        resetButton.addEventListener(
            "click",
            resetCockpit
        );


        /* =================================================
           LIVE INPUT DISPLAY
           ================================================= */

        totalNodesInput.addEventListener(
            "input",
            updateGridDisplay
        );

        failedNodesInput.addEventListener(
            "input",
            updateGridDisplay
        );

        affectedNodesInput.addEventListener(
            "input",
            updateGridDisplay
        );

        criticalNodesInput.addEventListener(
            "input",
            updateGridDisplay
        );

        propagationDepthInput.addEventListener(
            "input",
            updateGridDisplay
        );


        /* =================================================
           INITIAL STATE
           ================================================= */

        updateGridDisplay();

        runAssessment();


        console.log(
            "GRAM v1.0.0 initialized successfully."
        );

    }


    /* =====================================================
       DOM READY
       ===================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeCockpit,
            { once: true }
        );

    } else {

        initializeCockpit();

    }

})();