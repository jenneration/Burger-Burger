//Ensure DOM loaded then attach handlers
document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  const devourBtns = document.querySelectorAll(".devour");

  //UPDATE burger to "devoured = true"
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
          // console.log(`changed devour to: ${newDevour}`);
          // console.log(id);
        });
      });
    });
  }

  //CREATE new burger
  const createBurgerBtn = document.getElementById("create-burger");

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener("submit", (e) => {
      const newBurger = {
        burger_name: document.getElementById("bg").value.trim(),
      };
      fetch("/api/burgers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBurger),
      }).then(() => {
        document.getElementById("bg").value = "";
        locationl.reload();
      });
      // console.log("New burger created");
    });
  }

  //DELETEBurgers/Make room for more
  const deleteBurgerBtns = document.querySelectorAll(".delete");

  deleteBurgerBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      console.log("Click");

      fetch(`/api/burgers/${id}`, {
        method: "DELETE",
      }).then((res) => {
        console.log("Hello");
        console.log(`Deleted burger: ${id}`);
        location.reload();
      });
    });
  });
});
