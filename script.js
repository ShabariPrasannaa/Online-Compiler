// script.js
let htmlContent , cssContent , jsContent
let isLive = false;
// Function to switch between tabs
function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    const activeTab = document.getElementById(tabName);
    activeTab.style.display = 'block';

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    document.querySelector(`[onclick="openTab('${tabName}')"]`).classList.add('active');
}

// Compile and display code
function compileCode() {
    const htmlContent = document.getElementById('html-input').value;
    const cssContent = `<style>${document.getElementById('css-input').value}</style>`;
    const jsContent = `<script>${document.getElementById('js-input').value}<\/script>`;

    const outputFrame = document.getElementById('output-frame');
    outputFrame.contentDocument.open();
    outputFrame.contentDocument.write(htmlContent + cssContent + jsContent);
    outputFrame.contentDocument.close();
}

// Automatically compile code if live mode is active
function autoCompile() {
    if (isLive) {
        compileCode();
    }
}

// Start live preview
function startLive() {
    isLive = true;
    document.getElementById('go-live').style.display = 'none';
    document.getElementById('run-code').style.display = 'none';
    document.getElementById('stop-live').style.display = 'inline';
    compileCode(); // Compile immediately on live start
}

// Stop live preview
function stopLive() {
    isLive = false;
    document.getElementById('go-live').style.display = 'inline';
    document.getElementById('run-code').style.display = 'inline';
    document.getElementById('stop-live').style.display = 'none';
}

// Maximize output
function maximizeOutput() {
    const outputContainer = document.getElementById('output-container');
    outputContainer.classList.add('maximized');
}

// Minimize output
function minimizeOutput() {
    const outputContainer = document.getElementById('output-container');
    outputContainer.classList.remove('maximized');
}

// Toggle theme
function toggleTheme() {
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle');
    
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggleButton.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
        themeToggleButton.style.backgroundColor="#333"
       

    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggleButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        themeToggleButton.style.backgroundColor="#007bff"
       
    }
}

function toggleOutputSize() {
    const outputContainer = document.getElementById('output-container');
    const OutputText = document.getElementById('output-text')
    const editorContainer = document.getElementById("editor-container");

        outputContainer.style.width="100%";
        editorContainer.style.width="0%"
        OutputText.style.display="block"

}
function tablet() {
    const OutputText = document.getElementById('output-text')
    const outputContainer = document.getElementById('output-container');
    const editorContainer = document.getElementById("editor-container");

    
        outputContainer.style.width="60%";
        editorContainer.style.width="40%"
        OutputText.style.display="block"
}
function mobile() {
    const OutputText = document.getElementById('output-text')
    const TitleText = document.getElementById('title-text')
    const outputContainer = document.getElementById('output-container');
    const editorContainer = document.getElementById("editor-container");

        outputContainer.style.width="25%";
        editorContainer.style.width="75%"
        OutputText.style.display="none"
        TitleText.style.width="20%"
}

function reload(){
   const msg = confirm("It may erase all the code contain in the textarea\nDo You Want To Clear?")
    if(msg == true){
        window.location.reload();
    }
}

// Save HTML, CSS, and JS files
function saveFiles() {
    const htmlContent = document.getElementById('html-input').value;
    const cssContent = document.getElementById('css-input').value;
    const jsContent = document.getElementById('js-input').value;

    const htmlStructure = `<!--Downloaded From Online-Compiler-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        ${cssContent}
    </style>
</head>
<body>
    ${htmlContent}
</body>
<script>
    ${jsContent}
</script>
</html>
`;

    // Create blobs for each file
    const blobHtml = new Blob([htmlStructure], { type: 'text/html' });
    // const blobCss = new Blob([cssContent], { type: 'text/css' });
    // const blobJs = new Blob([jsContent], { type: 'text/javascript' });

    // Use FileSaver.js to save the files
    saveAs(blobHtml, 'index.html');
    // saveAs(blobCss, 'styles.css');
    // saveAs(blobJs, 'script.js');
}


// Initialize default tab
openTab('html');
