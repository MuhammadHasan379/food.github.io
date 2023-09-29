const getData = require('./Data'); // Replace 'yourFileName' with the actual file name

const fetchData = async () => {
  try {
    const data = await getData();
    // You can use the 'data' array here
    console.log(data);
    return data
  } catch (error) {
    console.error(error);
  }
}

module.exports = fetchData;

