import * as vscode from "vscode";

export function getWebViewContent(
  webview: vscode.Webview,
  context: vscode.ExtensionContext
): string {
  let html: string = ``;

  const tetrisStyle = webview.asWebviewUri(
    vscode.Uri.joinPath(context.extensionUri, "src", "tetris", "tetris.css")
  );

  const main = webview.asWebviewUri(
    // tetris 까지만 넘기고, 밑에 <script>에서 src="main/main.js" 같이
    vscode.Uri.joinPath(context.extensionUri, "out", "tetris", "main.js")
  );

  html += `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Web Tetris</title>
      <link href="${tetrisStyle}" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css?family=Press+Start+2P"
        rel="stylesheet"
      />
    </head>
    <body>
      <div class="grid">
        <canvas id="board" class="game-board"></canvas>
        <div class="right-column">
          <div>
            <h1>TETRIS</h1>
            <p>Score: <span id="score">0</span></p>
            <p>Lines: <span id="lines">0</span></p>
            <p>Level: <span id="level">0</span></p>
            <canvas id="next" class="next"></canvas>
          </div>
          <button id="play-btn" onclick="play()" class="play-button">Play</button>
          <button id="pause-btn" onclick="pause()" class="play-button">
            Pause
          </button>
        </div>
      </div>
  
      <script src="${main}"></script>
    </body>
  </html>
  `;

  return html;
}
