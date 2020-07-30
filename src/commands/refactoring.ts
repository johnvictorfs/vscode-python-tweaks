import * as vscode from 'vscode'

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

    editor.edit(editBuilder => {
      // Replace all valid strings into f-strings while keeping already valid f-strings the same
      // Don't change strings without curly braces inside or only empty curly braces
      const pattern = /(f*)(["'])(\\?\3.*{+.+}+.*)(\2)/g

      const replaced = word.replace(pattern, 'f$2$3$4')

      if (word === replaced) {
        // Nothing was changed
        vscode.window.showErrorMessage('No valid strings selected to convert')

        return
      }

      editBuilder.replace(selection, word.replace(pattern, 'f$2$3$4'))
    })
  }
}
