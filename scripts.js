function openModal(modalFile) {
    console.log('Opening modal with file:', modalFile);

    fetch(`airplane_spec_modals/${modalFile}.html`)
        .then(response => response.text())
        .then(data => {
            const modalContent = document.querySelector('.modal-content');
            modalContent.innerHTML = data + '<span class="close" onclick="closeModal()">&times;</span>';
            document.getElementById('modal').style.display = 'block';
        })
        .catch(error => console.error('Error fetching modal content:', error));
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close the modal when clicking outside the modal content
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}