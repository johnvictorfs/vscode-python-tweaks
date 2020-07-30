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
      const pattern = /(f*)(["'])(\\?\3.*{+.+}+.*)(\2)/g

      if (word.search(pattern) === -1) {
        return vscode.window.showErrorMessage('No valid strings selected to convert')
      }

      editBuilder.replace(selection, word.replace(pattern, 'f$2$3$4'))
    })
  }
}
