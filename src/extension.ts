'use strict'
import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.closeAll', () => {
    vscode.commands.executeCommand('workbench.action.files.saveAll')
  })

  context.subscriptions.push(disposable)
}
//  light:#424242
// dark :#c5c5c5
export function deactivate() {}
