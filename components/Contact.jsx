export const Contact = () => {
  return (
    <div id="contact">
      <div
        className="flex items-center place-content-center	relative object-cover bg-center bg-repeat bg-no-repeat	 w-full h-52"
        style={{
          backgroundImage: 'url("/images/backgrounds/contactpage.jpg")',
        }}
      >
        <h1 className="AgrandirHeavy z-10 text-white-700 text-center">
          I can do all things through him who strengthens me
          <hr />
          <span>Philippians 4:13</span>
        </h1>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-20">
        <div className="p-8 sm:p-16">
          <h2 className="mb-20 text-center font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none AgrandirHeavy">
            Contact
          </h2>
          <div className="grid gap-4 items-center row-gap-5 sm:grid-cols-3 lg:grid-cols-3">
            <div className="flex flex-col p-5">
              <div className="flex content-center mb-5">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </span>

                <h1 className="AgrandirHeavy">
                  <span>Address</span>
                </h1>
              </div>

              <p className="AgrandirRegular">Prk 3 Adella Bermudez Village Apokon, Tagum City</p>
            </div>
            <div className="flex flex-col p-5">
              <div className="flex content-center mb-5">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h1 className="AgrandirHeavy">
                  <span>Email</span>
                </h1>
              </div>
              <p className="AgrandirRegular">eiroljan19@gmail.com</p>
            </div>
            <div className="flex flex-col p-5">
              <div className="flex content-center mb-5">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </span>

                <h1 className="AgrandirHeavy">
                  <span>Phone Number</span>
                </h1>
              </div>
              <p className="AgrandirRegular">+63 905 556 6815</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
