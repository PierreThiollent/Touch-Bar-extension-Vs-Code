// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "touch-bar-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	// On définit une commande pour Beautify
	let beautify = vscode.commands.registerCommand('extension.Beautify', () => {
		vscode.commands.executeCommand('HookyQR.beautify');
	});

	// On définit une commande pour Php fmt
	// let phpfmt = vscode.commands.registerCommand('extension.phpfmt', () => {
	// 	vscode.commands.executeCommand('HookyQR.beautify');
	// });

	// Commande pour commenter une ligne
	let commentLine = vscode.commands.registerCommand('extension.commentLine', () => {
		vscode.commands.executeCommand('editor.action.addCommentLine');
	});

	// Commande pour decommenter une ligne
	let removeCommentLine = vscode.commands.registerCommand('extension.removeCommentLine', () => {
		vscode.commands.executeCommand('editor.action.removeCommentLine');
	});


	context.subscriptions.push(beautify, commentLine, removeCommentLine);
}

// this method is called when your extension is deactivated
export function deactivate() {}
