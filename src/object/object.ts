// export default function objectSample() {

// }

const objectSample = () => {
  // const a: object = {
  //   name: 'Kohei',
  //   age: 25,
  // };
  // a.name

  let country: {
    language: string;
    name: string;
  } = {
    language: "Japanese",
    name: "Japan",
  };
  console.log("Object sample", country);

  country = {
    language: "English",
    name: "USA",
  };
  console.log("Object sample", country);
};

export default objectSample;
