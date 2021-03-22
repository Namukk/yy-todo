const getGeo = () => {
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
};

function init() {
  console.log(getGeo());
}

init();
