interface BaseVertex {
    [key: string]: Array<string | number>;
}
/**
 * Graph class implementation
 */
export declare class Graph {
    adjacencyList: BaseVertex;
    constructor();
    /**
     * @description Adds a vertex to the graph.
     * @param {*} vertex
     */
    addVertex(vertex: string | number): void;
    /**
     * @description Adds an edge between two vertices in the graph.
     * @param {*} vertex1
     * @param {*} vertex2
     */
    addEdge(vertex1: string | number, vertex2: string | number): void;
    /**
     * @description Removes an edge between two vertices in the graph.
     * @param {*} vertex1
     * @param {*} vertex2
     */
    removeEdge(vertex1: string | number, vertex2: string | number): void;
    /**
     * @description Removes a vertex and all edges connected to it.
     * @param {*} vertex
     */
    removeVertex(vertex: string | number): void;
    /**
     * @description Grahp has vertex.
     * @param {*} vertex
     * @returns {boolean} True if the vertex exists, false otherwise.
     */
    hasVertex(vertex: string | number): boolean;
    /**
     * @description Checks if two vertices are connected.
     * @param {*} vertex1
     * @param {*} vertex2
     * @returns {boolean} True if the vertices are connected, false otherwise.
     */
    isConnected(vertex1: string | number, vertex2: string | number): boolean;
    /**
     * @description Gets all edges in the graph.
     * @returns {Array} An array of edges.
     */
    getEdges(): string[];
    /**
     * @description bfs Gets all vertices in the graph.
     * @param {*} startVertex
     * @param {*} callback
     */
    bfs(startVertex: string | number, callback: (vertex: string | number) => void): void;
    /**
     * @description dfs Gets all vertices in the graph.
     * @param {*} startVertex
     * @param {*} callback
     */
    dfs(startVertex: string | number, callback: (vertex: string | number) => void): void;
    /**
     * @description Gets all vertices in the graph.
     * @returns {Array} An array of vertices.
     */
    clear(): void;
}
export {};
//# sourceMappingURL=Graph.d.ts.map