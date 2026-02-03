export const enforceSingleTab = () => {
  localStorage.setItem("openOnePage", Date.now().toString());

  window.addEventListener("storage", (e) => {
    if (e.key === "openOnePage") {
      localStorage.setItem("pageAlreadyOpen", Date.now().toString());
    }

    if (e.key === "pageAlreadyOpen") {
      alert("You already opened this page in another tab.");
      window.location.href = "/Portal_New_default.aspx";
    }
  });
};
