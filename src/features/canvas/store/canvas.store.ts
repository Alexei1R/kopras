import { create } from "zustand";
import {
    applyNodeChanges,
    applyEdgeChanges,
    type NodeChange,
    type EdgeChange,
    type Connection,
} from "@xyflow/react";
import type { CanvasNode, CanvasEdge, PendingConnection } from "../types";
import { getBlockDefinition } from "../constants";
import { v4 as uuid } from "uuid";

interface CanvasState {
    nodes: CanvasNode[];
    edges: CanvasEdge[];
    pendingConnection: PendingConnection | null;
    selectedNodeId: string | null;

    onNodesChange: (changes: NodeChange<CanvasNode>[]) => void;
    onEdgesChange: (changes: EdgeChange<CanvasEdge>[]) => void;
    onConnect: (connection: Connection) => void;

    setPendingConnection: (pending: PendingConnection | null) => void;
    addNode: (type: string, position: { x: number; y: number }) => string;
    setSelectedNode: (nodeId: string | null) => void;
    updateNodeParams: (nodeId: string, params: Record<string, number>) => void;
    updateNodeGraphData: (nodeId: string, data: { t: number; y: number }[]) => void;
}

export const useCanvasStore = create<CanvasState>((set, get) => ({
    nodes: [],
    edges: [],
    pendingConnection: null,
    selectedNodeId: null,

    onNodesChange: (changes) => {
        set({ nodes: applyNodeChanges(changes, get().nodes) });
    },

    onEdgesChange: (changes) => {
        set({ edges: applyEdgeChanges(changes, get().edges) });
    },

    onConnect: (connection) => {
        const newEdge: CanvasEdge = {
            id: uuid(),
            source: connection.source!,
            target: connection.target!,
            sourceHandle: connection.sourceHandle,
            targetHandle: connection.targetHandle,
            type: "signal",
        };
        set({ edges: [...get().edges, newEdge] });
    },

    setPendingConnection: (pending) => {
        set({ pendingConnection: pending });
    },

    addNode: (type, position) => {
        const definition = getBlockDefinition(type);
        if (!definition) return "";

        const id = uuid();
        const newNode: CanvasNode = {
            id,
            type: definition.category === "sink" ? "graph" : "math",
            position,
            data: {
                label: definition.label,
                formula: definition.formula,
                params: { ...definition.defaultParams },
                blockType: type,
                graphData: [],
            },
        };

        set({ nodes: [...get().nodes, newNode] });
        return id;
    },

    setSelectedNode: (nodeId) => {
        set({ selectedNodeId: nodeId });
    },

    updateNodeParams: (nodeId, params) => {
        set({
            nodes: get().nodes.map((node) =>
                node.id === nodeId
                    ? { ...node, data: { ...node.data, params } }
                    : node
            ),
        });
    },

    updateNodeGraphData: (nodeId, data) => {
        set({
            nodes: get().nodes.map((node) =>
                node.id === nodeId
                    ? { ...node, data: { ...node.data, graphData: data } }
                    : node
            ),
        });
    },
}));
