 let app = Vue.createApp({
   template: `
 <nav class="navbar navbar-dark bg-dark">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        Add
      </button>
      <li class="nav-item">
        <a class="btn btn-primary active position-relative" href=".//cart.html"
          >Cart
          <span
            id="badge"
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          ></span
        ></a>
      </li>
        <li class="nav-item">
          <a
            class="btn btn-primary me-3"
            aria-current="page"
            href=".//index.html"
          >
            Home
          </a>
        </li>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Title <input type="text" id="update-title" /><br />
              Price
              <input
                type="number"
                placeholder="enter price in Rands"
                id="update-price"
              /><br />
              Category
              <select name="category" id="update-category">
                <br />
                <option value="Select-One">-Select-One</option>
                <option value="All">All</option>
                <option value="Hair Dryer">Hair Dryer</option>
                <option value="Microwave">Microwave</option>
                <option value="Blender">Blender</option>
                <option value="Steamer">Steamer</option>
              </select>
              Image
              <input
                type="url"
                placeholder="enter image-link"
                id="update-img"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onclick="createProduct()"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
`,
 });
    app.mount("#nav");