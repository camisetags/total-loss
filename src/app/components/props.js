// @flow
import type { Node } from 'react';

export type CardProps = {
  content: {
    name: string,
    description: string,
  },
  children: Node,
};

export type CardUserProps = {
  content: {
    name: string,
    score: number,
    description: string,
  },
};
