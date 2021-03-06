import { ThemeReactorStyleSheet } from '../common';
import * as React from 'react';
export const styleSheet: ThemeReactorStyleSheet;

export interface ListItemIconProps {
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `material-ui-icons` SVG icon component.
   */
  
  /**
   * Useful to extend the style applied to components.
   */
  classes?: any,
  /**
   * @ignore
   */
  className?: string,
}

export default function ListItemIcon(props: ListItemIconProps): JSX.Element;
