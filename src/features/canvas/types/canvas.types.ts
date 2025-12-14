import type { Node, Edge } from "@xyflow/react";

export type PortType = "input" | "output";

export interface BlockPort {
    id: string;
    label: string;
    type: PortType;
}

export interface BlockDefinition {
    type: string;
    category: "math" | "source" | "sink" | "nonlinear";
    label: string;
    icon: string;
    description: string;
    formula?: string;
    ports: {
        inputs: BlockPort[];
        outputs: BlockPort[];
    };
    defaultParams: Record<string, number>;
}

export interface NodeData {
    label: string;
    formula?: string;
    params: Record<string, number>;
    graphData?: { t: number; y: number }[];
    blockType: string;
}

export type CanvasNode = Node<NodeData>;
export type CanvasEdge = Edge;

export interface PendingConnection {
    nodeId: string;
    portId: string;
    portType: PortType;
    position: { x: number; y: number };
}
