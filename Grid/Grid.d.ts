import { ThemeReactorStyleSheet } from '../common';
import { HiddenProps } from '../hidden/types';
export const styleSheet: ThemeReactorStyleSheet;
type GridSizes = boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps {
  /**
   * The content of the component.
   */
  
  /**
   * Useful to extend the style applied to components.
   */
  classes?: any,
  /**
   * @ignore
   */
  className?: string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component?: string | Function,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container?: boolean,
  /**
   * It true, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item?: boolean,
  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch',
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  gutter?: 0 | 8 | 16 | 24 | 40,
  /**
   * If provided, will wrap with Hidden component and given properties.
   */
  hidden?: HiddenProps,
  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around',
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs?: GridSizes,
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm?: GridSizes,
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md?: GridSizes,
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg?: GridSizes,
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl?: GridSizes,
}

export default function Grid(props: GridProps): JSX.Element;
