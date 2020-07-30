import * as vscode from 'vscode'

import { isString, isFString } from './helpers'

export function convertToFString() {
  /**
   * Converts current Text selection into a Python F-String if applicable (only valid strings that are not already f-strings)
   */
  const editor = vscode.window.activeTextEditor

  if (editor) {
    const document = editor.document
    const selection = editor.selection

    // Get the word within the selection
    const word = document.getText(selection)

    if (isString(word)) {
      editor.edit(editBuilder => {
        editBuilder.replace(selection, `f${word}`)
      })
    } else if (isFString(word)) {
      vscode.window.showErrorMessage('Selection is already a f-string')
    } else {
      vscode.window.showErrorMessage('Selection is not a string')
    }
  }
}
