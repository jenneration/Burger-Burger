//Ensure DOM loaded then attach handlers
document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  const devourBtns = document.querySelectorAll(".devour");

  //Update burger to "devoured = true"
  if (devourBtns) {
    devourBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");
        const newDevour = e.target.getAttribute("data-devoured");
        const newDevourState = {
          devoured: newDevour,
        };

        fetch(`/api/burgers/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newDevourState),
        }).then((response) => {
          if (response.ok) {
            location.reload("/");
          } else {
            alert("something went wrong!");
          }
          console.log(`changed devour to: ${newDevour}`);
          console.log(id);
        });
      });
    });

    //Create new burger
  }
});
