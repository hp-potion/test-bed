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
          retainContextWhenHidden: true,
        }
      );
      const onDiskPathJS = vscode.Uri.file(
        path.join(context.extensionPath, "src/game", "index.js")
      );
      // And get the special URI to use with the webview
      const jsURI = panel.webview.asWebviewUri(onDiskPathJS);

      const onDiskPathAssets = vscode.Uri.file(
        path.join(context.extensionPath, "src", "asset")
      );
      const assetsURI = panel.webview.asWebviewUri(onDiskPathAssets);
      console.log(assetsURI);

      panel.webview.html = getWebviewContent(jsURI, assetsURI);
    }
  );

  context.subscriptions.push(openWebview);
}

export function deactivate() {}

function getWebviewContent(jsURI: vscode.Uri, assets: vscode.Uri) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./game/css/style.css" />
      <title>Document</title>
    </head>
    <body>
      <img id="player-img" src="${assets}/character/spaceship.png">
      <canvas id="game-canvas"> </canvas>
      <script type="module" src=${jsURI}></script>
    </body>
  </html>`;
}
