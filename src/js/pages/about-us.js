const AboutUs = {
  async init() {
    this._initialListener();
  },

  _initialListener() {
    const main = document.querySelector('main');
    return (main.innerHTML = `
      <div class="row bg-dark h-100 gx-0 bg-opacity-75 text-light text-center flex-grow-1 p-5">
        <div class="col bg-light bg-opacity-25 border rounded p-3">
          <h1>About Us</h1>
          <div class="container mt-3">
            <div class="row">
              <div class="col">
                <p>
                  Story App adalah sebuah website yang dimana anda dapat mendapatkan dan membagikan
                  apapun cerita anda yang dapat menginspirasi banyak orang, kami mendirikan Story
                  App karena kami berharap dapat menginspirasi dan memotivasi orang-orang agar terus
                  semangat dalam menjalani hidup.
                </p>
              </div>
            </div>

            <div class="row d-flex justify-content-between mt-3">
              <div class="col-lg-4 col-md-12">
                <h4>Tulis Cerita</h4>
                <p>
                  Di website Story App anda dapat membagikan cerita anda dengan mudah, anda dapat
                  membagikan cerita apapun yang menurut anda bisa menginspirasi orang lain
                </p>
              </div>
              <div class="col-lg-4 col-md-12">
                <h4>Baca Cerita</h4>
                <p>Kami memiliki banyak cerita yang menarik untuk anda baca.</p>
              </div>
              <div class="col-lg-4 col-md-12">
                <h4>Komunitas</h4>
                <p>
                  Kami juga memiliki sebuah komunitas dimana anda dapat berbagi mengenai pengalaman
                  anda satu sama lain
                </p>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col">
                <p>Jadi tunggu apalagi! mari bagikan cerita anda dengan klik tombol Add Story!</p>
                <a href="/add.html" class="btn btn-light">Add Story</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  },
};

export default AboutUs;
