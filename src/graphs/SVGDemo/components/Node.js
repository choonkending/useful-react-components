import React, { Component } from 'react';
import interactive from '../../interactive';
import provideControls from '../../components/graph/provideControls';

const defaultAdapter = ({ x, y, ...props }) => ({ cx: x, cy: y, ...props });
// For the MoverNode we wish to trigger a global transform on drag, so we omit
// the transform passed from the interactive HOC
const moverNodeAdapter = ({ x, y, transform, ...props }) => ({ cx: x, cy: y, ...props });

const SwissArmyNode = (adapter = defaultAdapter ) => props => <circle {...adapter(props)} />;

const DumbNode = SwissArmyNode();

DumbNode.defaultProps = {
  x: 150,
  y: 50,
  r: 25,
  fill: "#fff",
  stroke: "#000",
  strokeWidth: "8"
};

const MoverNode = interactive(SwissArmyNode(moverNodeAdapter));

MoverNode.defaultProps = {
  x: 50,
  y: 50,
  r: 25,
  fill: "#1e90ff",
  stroke: "#000",
  strokeWidth: "8",
  style: {
    cursor: "move"
  }
};

const ControlNode = interactive(provideControls(DumbNode));

export { DumbNode as Node };
export { MoverNode }
export default ControlNode;

