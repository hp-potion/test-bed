import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('JYExtension.tetris', () => {
      const panel = vscode.window.createWebviewPanel(
        'JYExtension.tetris',
        'TETRIS',
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          localResourceRoots: [
            vscode.Uri.file(path.join(context.extensionPath, 'style')),
          ],
        }
      );

      const tetrisHtmlPath = vscode.Uri.file(
        path.join(context.extensionPath, 'src', 'tetris', 'index.html')
      );

      fs.readFile(tetrisHtmlPath.fsPath, 'utf8', (err, htmlContent) => {
        if (err) {
          vscode.window.showErrorMessage('Error loading Tetris HTML');
          return;
        }

        panel.webview.html = htmlContent.replace(
          /src\s*=\s*"(.+?)"/g,
          (match, src) => {
            const filePath = vscode.Uri.file(
              path.join(tetrisHtmlPath.fsPath, '..', '..', src)
            );
            const webviewUri = panel.webview.asWebviewUri(filePath);
            return `src=${webviewUri}`;
          }
        );
      });
    })
  );
}

export function deactivate() {}
