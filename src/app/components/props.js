// @flow
import type { Node } from 'react';

export type CardProps = {
  content: {
    name: string,
    description: string,
  },
  children: Node,
};
