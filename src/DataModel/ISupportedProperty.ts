import { IHydraResource } from "./IHydraResource";
import { IProperty } from "./IProperty";

/**
 * Describes an abstract Hydra property.
 * @interface
 */
export interface ISupportedProperty extends IHydraResource {
  /**
   * Gets the actual property.
   * @readonly
   * @returns {IProperty}
   */
  readonly property: IProperty;

  /**
   * Gets the value indicating whether this property is required.
   * @readonly
   * @returns {boolean}
   */
  readonly required: boolean;

  /**
   * Gets the value indicating whether this property is readable.
   * @readonly
   * @returns {boolean}
   */
  readonly readable: boolean;

  /**
   * Gets the value indicating whether this property is writable.
   * @readonly
   * @returns {boolean}
   */
  readonly writable: boolean;
}
