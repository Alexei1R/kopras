import type { BlockDefinition } from "../types";

export const BLOCK_DEFINITIONS: BlockDefinition[] = [
    {
        type: "constant",
        category: "source",
        label: "Constant",
        icon: "1",
        description: "Outputs a constant value",
        formula: "y = k",
        ports: {
            inputs: [],
            outputs: [{ id: "out", label: "out", type: "output" }],
        },
        defaultParams: { k: 1 },
    },
    {
        type: "step",
        category: "source",
        label: "Step",
        icon: "⎍",
        description: "Step input signal",
        formula: "y = A \\cdot u(t - t_0)",
        ports: {
            inputs: [],
            outputs: [{ id: "out", label: "out", type: "output" }],
        },
        defaultParams: { amplitude: 1, delay: 0 },
    },
    {
        type: "sine",
        category: "source",
        label: "Sine",
        icon: "∿",
        description: "Sinusoidal signal",
        formula: "y = A \\sin(\\omega t + \\phi)",
        ports: {
            inputs: [],
            outputs: [{ id: "out", label: "out", type: "output" }],
        },
        defaultParams: { amplitude: 1, frequency: 1, phase: 0 },
    },
    {
        type: "gain",
        category: "math",
        label: "Gain",
        icon: "×",
        description: "Multiplies input by constant",
        formula: "y = k \\cdot u",
        ports: {
            inputs: [{ id: "in", label: "in", type: "input" }],
            outputs: [{ id: "out", label: "out", type: "output" }],
        },
        defaultParams: { k: 1 },
    },
    {
        type: "sum",
        category: "math",
        label: "Sum",
        icon: "Σ",
        description: "Adds inputs together",
        formula: "y = \\sum_{i} u_i",
        ports: {
            inputs: [
                { id: "in1", label: "+", type: "input" },
                { id: "in2", label: "-", type: "input" },
            ],
            outputs: [{ id: "out", label: "out", type: "output" }],
        },
        defaultParams: {},
    },
    {
        type: "integrator",
        category: "math",
        label: "Integrator",
        icon: "∫",
        description: "Integrates input over time",
        formula: "y = \\int u \\, dt",
        ports: {
            inputs: [{ id: "in", label: "in", type: "input" }],
            outputs: [{ id: "out", label: "out", type: "output" }],
        },
        defaultParams: { initialValue: 0 },
    },
    {
        type: "saturation",
        category: "nonlinear",
        label: "Saturation",
        icon: "▬",
        description: "Limits output to range",
        formula: "y = \\text{clamp}(u, -a, a)",
        ports: {
            inputs: [{ id: "in", label: "in", type: "input" }],
            outputs: [{ id: "out", label: "out", type: "output" }],
        },
        defaultParams: { limit: 1 },
    },
    {
        type: "scope",
        category: "sink",
        label: "Scope",
        icon: "📊",
        description: "Displays signal graph",
        ports: {
            inputs: [{ id: "in", label: "in", type: "input" }],
            outputs: [],
        },
        defaultParams: {},
    },
];

export const BLOCK_CATEGORIES = [
    { id: "source", label: "Sources", icon: "📥" },
    { id: "math", label: "Math", icon: "🔢" },
    { id: "nonlinear", label: "Nonlinear", icon: "📈" },
    { id: "sink", label: "Sinks", icon: "📊" },
] as const;

export const getBlockDefinition = (type: string): BlockDefinition | undefined =>
    BLOCK_DEFINITIONS.find((b) => b.type === type);
