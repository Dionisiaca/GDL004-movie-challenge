export default () => {
      const viewRandom = document.createElement("div");
      viewRandom.innerHTML = `
      <div class="row cards">
      <div class="col-12 col-lg-6">
          <div id='movieCard'></div>
          <button class="btn btn-danger btnWatchMovie" id='retry'> Try again</button>
        </div>
      </div>
      </div>
      `;
    
      //Retry function
      viewRandom.querySelector("#retry").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.reload();
      });
    
    
      return viewRandom;
    };
   
      