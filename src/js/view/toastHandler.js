/**
 * handle toast creation
 */

export function makeToast(message) {
    const body = document.querySelector("body");
    const toastDialog = document.createElement("dialog");
    toastDialog.classList.add("toast-dialog");

    toastDialog.innerHTML = `<div>${message}</div>`;

    body.append(toastDialog);
    toastDialog.showModal();
    toastDialog.classList.add("fade-in");

    setTimeout(() => {
        toastDialog.classList.remove("fade-in");
        toastDialog.style.animation = 'none';
        toastDialog.offsetHeight;
        toastDialog.classList.add("fade-out");

        setTimeout(() => {
            toastDialog.close();
            toastDialog.remove();
        }, 100);

    }, 600);
}