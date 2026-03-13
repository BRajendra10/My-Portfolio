import { executeCommand } from "./commands.js";

let input_terminal;
let terminalOutput;

window.addEventListener("DOMContentLoaded", () => {
    terminalOutput = document.getElementById('terminal-output');
    const savedTheme = localStorage.getItem('terminal-theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    newTerminal();
});

document.addEventListener("click", (e) => {
    if (e.target.tagName !== 'A' && input_terminal) {
        input_terminal.focus();
    }
});

function newTerminal() {
    const terminalLine = document.createElement("div");
    terminalLine.classList.add("terminal", "mt-1");

    const flag = document.createElement("span");
    flag.classList.add("flag");
    flag.innerText = "rajendra@portfolio:~$ ";

    input_terminal = document.createElement("input");
    input_terminal.setAttribute("type", "text");
    input_terminal.setAttribute("id", "input_terminal");
    input_terminal.setAttribute("autocomplete", "off");
    input_terminal.setAttribute("spellcheck", "false");

    terminalLine.appendChild(flag);
    terminalLine.appendChild(input_terminal);

    terminalOutput.appendChild(terminalLine);

    input_terminal.focus();
    terminalLine.scrollIntoView({ block: 'end' });

    input_terminal.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const command = e.target.value.trim();

            const commandText = document.createElement("span");
            commandText.classList.add("text-cyan");
            commandText.innerText = command;
            
            terminalLine.removeChild(input_terminal);
            terminalLine.appendChild(commandText);
            input_terminal = null;

            if (command.toLowerCase() === 'clear') {
                terminalOutput.innerHTML = '';
            } else {
                executeCommand(command, terminalOutput);
            }

            newTerminal();
        }
    });
}