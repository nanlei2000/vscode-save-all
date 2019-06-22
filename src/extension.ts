'use strict'
import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.saveAll', () => {
    vscode.commands.executeCommand('workbench.action.files.saveAll')
  })

  context.subscriptions.push(disposable)
}
export function deactivate() {}
