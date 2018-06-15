/**
 * HTMLDialogELement
 * Code copied from: https://gist.github.com/jbmoelker/226594f195b97bf61436
 *
 * This definition file is needed to address the following issue:
 * https://github.com/Microsoft/TypeScript/issues/16880
 *
 * This file can be safely removed once TypeScript adds a native definition.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement
 */

interface HTMLDialogElement extends HTMLElement {
  /**
   * Reflects the open HTML attribute,
   * indicating that the dialog is available for interaction.
   */
  open: boolean;
  /**
   * Gets/sets the return value for the dialog.
   */
  returnValue: string;
  /**
   * Closes the dialog. An optional DOMString may be passed as an argument,
   * updating the returnValue of the the dialog.
   */
  close(): void;
  /**
   * Displays the dialog modelessly, i.e. still allowing interaction with content outside of the dialog.
   * An optional Element or MouseEvent may be passed as an argument,
   * to specify an anchor point to which the dialog is fixed.
   */
  show(): void;
  /**
   * Displays the dialog for exclusive interaction, over the top of any other dialogs that might be present.
   * An optional Element or MouseEvent may be passed as an argument,
   * to specify an anchor point to which the dialog is fixed.
   */
  showModal(): void;
}
