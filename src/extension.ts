import * as vscode from 'vscode'

import { convertToFString } from './commands/refactoring'

export function activate(context: vscode.ExtensionContext) {
  console.log('Extension "python-tweaks" (Python Tweaks) is now active.')

  context.subscriptions.push(vscode.commands.registerTextEditorCommand('python-tweaks.convert-to-fstring', convertToFString))
}

export function deactivate() {}
