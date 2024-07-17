export type NodeType = "ROOT" | "LEAF" | "INTERNAL"

export class TreeNode {
    name: string;
	degree: number;
	depth: number;
	edges: number;
	siblings?: number;
	children?: number;
	type: NodeType;
}
