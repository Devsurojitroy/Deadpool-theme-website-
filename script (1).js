function revealSurprise() {
    const surprise = document.getElementById('surprise');
    if (surprise.style.display === 'none' || surprise.style.display === '') {
        surprise.style.display = 'block';
        surprise.classList.remove('hidden');
    } else {
        surprise.style.display = 'none';
        surprise.classList.add('hidden');
    }
}