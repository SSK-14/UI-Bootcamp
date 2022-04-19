/**
 * On CLicking a button, show a dialog box with an input and 2 buttons for confirmButton & cancel.
 * On confirmButton, we pass the contents of the input to the then block.
 * On pressing cancel, we reach the catch block
 */

const openDialog = () => {
  document.getElementById("dialog").style.display = "block";
};

const hideDialog = () => {
  document.getElementById("dialog").style.display = "none";
};

let confirmButton = document.getElementById("confirmButton");
let cancel = document.getElementById("cancel");

const promiseCallback = () =>
  new Promise((resolve, reject) => {
    confirmButton.addEventListener("click", () => {
      resolve();
      hideDialog();
    });

    cancel.addEventListener("click", () => {
      reject();
      hideDialog();
    });
  });

promiseCallback()
  .then(() => {
    console.log("resolved");
  })
  .catch(() => {
    console.log("rejected");
  });
