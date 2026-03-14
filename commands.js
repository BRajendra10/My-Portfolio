/** These are my commands:
 * help: lists of command user can use
 * whois: who is Rajendra
 * projects: some of my good projects
 * skills: my tech stack / technologies I use
 * socials: my social links to connect with me
 * theme: change the portfolio theme
 * resume: download my resume
 * clear: clears the terminal
*/

const themes = ["dark", "light", "matrix"];

export function executeCommand(command, terminalOutput) {
    const [cmd, ...args] = command.trim().split(/\s+/);
    console.log(command.trim().split(/\s+/));

    if (cmd === "") {
        return; // Just create a new line for empty command
    }

    const output_container = document.createElement("div");
    output_container.classList.add("mt-2", "mb-2");
    output_container.style.marginLeft = "10px";

    switch (cmd.toLowerCase()) {
        case "help":
            help(output_container);
            break;
        case "whois":
            whois(output_container);
            break;
        case "projects":
            projects(output_container);
            break;
        case "skills":
            skills(output_container);
            break;
        case "socials":
            socials(output_container);
            break;
        case "theme":
            theme(args, output_container);
            break;
        case "resume":
            resume(output_container);
            break;
        default:
            invalidCommand(cmd, output_container);
            break;
    }
    terminalOutput.appendChild(output_container);
    output_container.scrollIntoView({ block: 'end' });
}

// help command function
function help(output_container) {
    const commandList = {
        'help': 'Shows this help message.',
        'whois': 'Displays my profile.',
        'skills': 'Lists my technical skills.',
        'projects': 'Shows my key projects.',
        'socials': 'Displays my social media links.',
        'resume': 'Downloads my resume.',
        'theme': 'Changes the terminal theme. Use `theme --guide` for options.',
        'clear': 'Clears the terminal screen.'
    };

    let content = `<p class="info">Here are the available commands:</p><ul class="mt-2" style="margin-left: 10px;">`;

    for (const [cmd, desc] of Object.entries(commandList)) {
        content += `<li><span class="text-cyan command-name">${cmd}</span> - ${desc}</li>`;
    }

    content += `</ul>`;
    output_container.innerHTML = content;
}

function whois(output_container) {
    output_container.innerHTML = `
        <p class="text-primary bold">Rajendra Behera</p>
        <p class="text-yellow">Full Stack Web Developer</p>
        <br>
        <p>Full Stack MERN Developer with hands-on experience building scalable web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in developing secure REST APIs, implementing authentication systems, and creating modern, responsive user interfaces with clean architecture. Passionate about writing maintainable code, solving real-world problems, and continuously improving through project-based learning.</p>
        <br>
        <p><span class="text-cyan">Email:</span> <a href="mailto:rajendrabehera8116@gmail.com" class="clickable text-blue">rajendrabehera8116@gmail.com</a></p>
        <p><span class="text-cyan">Phone:</span> +91 8735964564</p>
        <p><span class="text-cyan">Location:</span> Surat, Gujarat</p>
    `;
}

function projects(output_container) {
    output_container.innerHTML = `
        <p class="text-yellow bold">My Projects:</p>
        
        <div class="mt-3">
            <a href="https://github.com/BRajendra10/EdTech-backend" target="_blank" class="text-primary bold project project-lms">LMS Admin Dashboard (EdTech)</a>
            <p class="dim text-cyan">React.js, Redux, Node.js, Express.js, MongoDB, SSE, JWT, Tailwind CSS</p>
            <ul style="list-style-type: '- '; margin-left: 20px;" class="mt-1">
                <li>The LMS is a platform for admins to manage courses and for students to enroll and consume content.</li>
                <li>Implemented Role-Based Access Control (RBAC) using a two-layer middleware approach: one for JWT verification from cookies and another for role-based route authorization.</li>
                <li>Engineered real-time dashboard updates using Server-Sent Events (SSE), pushing live data to all connected clients when key events like new enrollments occur.</li>
                <li>This project deepened my understanding of real-time communication, middleware-based authorization, and event-driven backend architecture.</li>
            </ul>
        </div>

        <div class="mt-3">
            <a href="https://github.com/BRajendra10/tic-tac-toe-websocket" target="_blank" class="text-primary bold project project-socket">Real-Time Tic-Tac-Toe</a>
            <p class="dim text-cyan">React.js, Tailwind CSS, WebSockets</p>
            <ul style="list-style-type: '- '; margin-left: 20px;" class="mt-1">
                <li>Developed a real-time two-player Tic-Tac-Toe game using WebSockets for live move synchronization.</li>
                <li>Implemented game state management and win-condition logic.</li>
                <li>Built responsive UI with Tailwind CSS for smooth user experience.</li>
            </ul>
        </div>

        <div class="mt-3">
            <a href="https://github.com/BRajendra10/chat-application" target="_blank" class="text-primary bold project project-chat">Chat Application</a>
            <p class="dim text-cyan">React.js, Redux Toolkit, Firebase (Auth & Firestore), Tailwind CSS</p>
            <ul style="list-style-type: '- '; margin-left: 20px;" class="mt-1">
                <li>Built a real-time chat application with instant message synchronization using Firebase.</li>
                <li>Implemented global state management using Redux Toolkit for user and message handling.</li>
                <li>Developed secure authentication and user session management.</li>
            </ul>
        </div>
        <br>
        <p>For more projects, please visit my <a href="https://github.com/BRajendra10" target="_blank" class="clickable text-blue underline">GitHub profile</a>.</p>
    `;
}

function skills(output_container) {
    output_container.innerHTML = `
        <p class="text-yellow bold">My Technical Skills:</p>
        <div class="mt-2">
            <p class="text-green underline">Frontend:</p>
            <p class="mt-1" style="padding-left: 15px;">React.js, Redux Toolkit, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Shadcn/UI</p>
        </div>
        <div class="mt-2">
            <p class="text-green underline">Backend:</p>
            <p class="mt-1" style="padding-left: 15px;">Node.js, Express.js, REST API Development, Authentication (JWT), Role-Based Access Control, Real time communication</p>
        </div>
        <div class="mt-2">
            <p class="text-green underline">Database:</p>
            <p class="mt-1" style="padding-left: 15px;">MongoDB, Firebase(Auth & Firestore)</p>
        </div>
        <div class="mt-2">
            <p class="text-green underline">Tools & Workflow:</p>
            <p class="mt-1" style="padding-left: 15px;">Git, GitHub, Vite, Postman, JSON Server</p>
        </div>
    `;
}

function socials(output_container) {
    output_container.innerHTML = `
        <p>Here are my social links:</p>
        <ul>
            <li class="mt-1"><span class="text-green social-label">GitHub:</span> <a href="https://github.com/BRajendra10" target="_blank" class="clickable text-blue underline">github.com/BRajendra10</a></li>
            <li class="mt-1"><span class="text-green social-label">LinkedIn:</span> <a href="https://linkedin.com/in/behera-rajendra" target="_blank" class="clickable text-blue underline">linkedin.com/in/behera-rajendra</a></li>
        </ul>
    `;
}

function resume(output_container) {
    output_container.innerHTML = `
        <p>You can download my resume by clicking the link below:</p>
        <p class="mt-2"><a href="./public/Rajendra-Behera-Web-Developer-Resume.pdf" download="Rajendra-Behera-Web-Developer-Resume.pdf" class="text-blue underline clickable">Download Resume (PDF)</a></p>
    `;
}

function theme(args, output_container) {
    console.log(args);
    if (args.length === 0) {
        output_container.innerHTML = `Usage: theme [arg]. Try <span class="text-cyan">'theme --guide'</span> for more info.`;
    } else if (args[0] === "--guide") {
        output_container.innerHTML = `<p>You can change the theme by typing <span class="text-cyan">'theme [theme_name]'</span>.</p>
        <p>Available themes:</p>
        <ul style="margin-left: 20px;">
        ${themes.map(t => `<li><span class="text-yellow">'${t}'</span></li>`).join('')}
        </ul>`;
    } else if (themes.includes(args[0])) {
        if (args[0] === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.removeItem('terminal-theme');
        } else {
            document.documentElement.setAttribute('data-theme', args[0]);
            localStorage.setItem('terminal-theme', args[0]);
        }
        output_container.innerHTML = `Theme changed to <span class="text-green">${args[0]}</span>.`;
    } else {
        output_container.innerHTML = `Theme <span class="text-red">'${args[0]}'</span> not found. Try <span class="text-cyan">'theme --guide'</span>.`;
    }
}

// invalid command function
function invalidCommand(command, output_container) {
    output_container.innerHTML = `<span class="error">command not found: ${command}. Type <span class="text-cyan">'help'</span> for a list of commands.</span>`;
}