import PropTypes from "prop-types";

//array list with the product info
export const productsList = [
    {
      id: 1,
      category: "Lorem Ipsum",
      title: "Title Lorem Ipsum",
      price: 12.99,
      rating: 4,
      image: "https://picsum.photos/275/275",
    },
    {
      id: 2,
      category: "Lorem Ipsum More Lorem",
      title: "Title Lorem Ipsum",
      price: 16.99,
      rating: 5,
      image: "https://picsum.photos/275/275",
    },
    {
      id: 3,
      category: "Lorem Ipsum Lorem Lorem",
      title: "Title Lorem Ipsum",
      price: 9.99,
      rating: 3,
      image: "https://picsum.photos/275/275",
    },
    {
      id: 4,
      category: "Lorem Ipsum Cheap",
      title: "",
      price: 0,
      rating: 1,
      image: "https://picsum.photos/275/275",
    },
  ];
  
  productsList.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
  };