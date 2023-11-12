import path from "path";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let openWebview = vscode.commands.registerCommand(
    "feature-webview.openWebview",
    () => {
      const panel = vscode.window.createWebviewPanel(
        "feature-webview",
        "MyGame",
        vscode.ViewColumn.Active,
        {
          enableScripts: true,
          localResourceRoots: [
            vscode.Uri.joinPath(context.extensionUri, "assets/character"),
            vscode.Uri.joinPath(context.extensionUri, "src/game"),
          ],
          retainContextWhenHidden: false,
        }
      );
      // And get the special URI to use with the webview
      const jsURI = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "src/game", "index.js")
      );

      const onDiskPathAssets = vscode.Uri.joinPath(
        context.extensionUri,
        "assets/character"
      );

      const assetsURI = panel.webview.asWebviewUri(onDiskPathAssets);
      console.log(assetsURI);

      panel.webview.html = getWebviewContent(jsURI, assetsURI);
    }
  );

  context.subscriptions.push(openWebview);
}

export function deactivate() {}

function getWebviewContent(jsURI: vscode.Uri, asset: vscode.Uri) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      </head>
      <body>
      <img id="player-img" src="${asset}/spaceship.png">
      <img id="invader-img" src="${asset}/invader.png">
      <canvas id="game-canvas"> </canvas>
      <script type="module" src=${jsURI}></script>
    </body>
  </html>`;
}
