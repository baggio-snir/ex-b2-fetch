function init() {
    document.getElementById('form_solve').addEventListener('submit', goSolve);
}

function goSolve(e) {
    let va = document.getElementById('v_a').value;
    let vb = document.getElementById('v_b').value;
    let vc = document.getElementById('v_c').value;
    fetch(`resolve.php?a=${va}&b=${vb}&c=${vc}`)
        .then(r => r.json())
        .then(d => { displayResults(d); });
    e.preventDefault();
    return false;
}

function displayResults(res) {
    document.getElementById('res_area').innerText = '';
    if (res) {
        if (res.length > 1) {
            document.getElementById('res_area').innerText += 'Deux solutions : ';
        } else {
            document.getElementById('res_area').innerText += 'Une solution : ';
        }
        for (let s of res) {
            document.getElementById('res_area').innerText += `\n${s}`;
        }
    } else {
        document.getElementById('res_area').innerText += 'Aucune solution';
    }
}

window.addEventListener('load', () => {
    init();
});
