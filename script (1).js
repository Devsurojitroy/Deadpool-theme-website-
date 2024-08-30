function revealSurprise() {
    const surprise = document.getElementById('surprise');
    if (surprise.classList.contains('hidden')) {
        surprise.classList.remove('hidden');
        surprise.classList.add('show');
    } else {
        surprise.classList.add('hidden');
        surprise.classList.remove('show');
    }
}