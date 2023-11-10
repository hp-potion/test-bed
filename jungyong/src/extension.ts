import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { getWebViewContent } from './tetris/view';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('JYExtension.tetris', () => {
    const panel = vscode.window.createWebviewPanel(
      'tetris',
      'Tetris Game',
      vscode.ViewColumn.One,
      {
        enableScripts: true,
      }
    );

    panel.webview.options
    panel.webview.html = getWebViewContent(panel.webview, context);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
