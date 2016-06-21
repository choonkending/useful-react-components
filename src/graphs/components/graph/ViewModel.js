const defaultRootNode = { id: 0 };

class ViewModel {
  constructor({ id = -1, nodes = [defaultRootNode], edges = [], position = {} }) {
    this.id = id;
    this.nodes = nodes;
    this.edges = edges;
    this.position = position;
  }

  addNode(node) {
    this.nodes = [
      ...this.nodes,
      node
    ];
  }

  addEdge(edge) {
    this.edges = [
      ...this.edges,
      edge
    ];
  }

  getGraph() {
    return {
      id: this.id,
      nodes: this.nodes,
      edges: this.edges,
      position: this.position
    };
  }
}

export default ViewModel;

