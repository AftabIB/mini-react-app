import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const firstBook = {
//     title: "Rich Dad Poor Dad",
//     author: "Robert T. Kiyosaki",
//     img: "https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL600_SR600,400_.jpg",
// };

// const secondBook = {
//     title: "Atomic Habits",
//     author: "James Clear",
//     img: "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg",
// };

// const thirdBook = {
//     title: "Dont Believe Everything You Think",
//     author: "Joseph Nguyen",
//     img: "https://images-eu.ssl-images-amazon.com/images/I/715qi-cIbML._AC_UL600_SR600,400_.jpg",
// };

//Array of item and ecah item has the objects
const book = [
    {
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        img: "https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL600_SR600,400_.jpg",
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        img: "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg",
    },
    {
        title: "Dont Believe Everything You Think",
        author: "Joseph Nguyen",
        img: "https://images-eu.ssl-images-amazon.com/images/I/715qi-cIbML._AC_UL600_SR600,400_.jpg",
    },
    {
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        img: "https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL600_SR600,400_.jpg",
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        img: "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg",
    },
    {
        title: "Dont Believe Everything You Think",
        author: "Joseph Nguyen",
        img: "https://images-eu.ssl-images-amazon.com/images/I/715qi-cIbML._AC_UL600_SR600,400_.jpg",
    }
];

const BookList = () => {
    //First Component
    // const names = ['Aftab', 'Durvesh', 'Manish'];
    return (
        <section className="booklist">

            {
                book.map((book) => {
                    const { img, author, title } = book;
                    return <Book img={img} title={title} author={author} />;
                })
            }
            {/* MAP : using map it creates a new array from calling a function for every array element */}

            { /*{book}  :  we cannot render objects directly in JSX*/}

            {/* <Book
                author={firstBook.author}
                title={firstBook.title}
                img={firstBook.img}
            >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatum
                    accusamus ad. Quia aliquid, fugit quas necessitatibus exercitationem
                    minima quae enim. Consectetur optio quam voluptates quis inventore
                    quae aliquid unde!
                </p>
                <button>Click me</button>
            </Book>

            <Book
                author={secondBook.author}
                title={secondBook.title}
                img={secondBook.img}
            >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatum
                    accusamus ad. Quia aliquid, fugit quas necessitatibus exercitationem
                    minima quae enim. Consectetur optio quam voluptates quis inventore
                    quae aliquid unde!
                </p>
                <button>Click me</button>
            </Book>

            <Book
                author={thirdBook.author}
                title={thirdBook.title}
                img={thirdBook.img}
            >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatum
                    accusamus ad. Quia aliquid, fugit quas necessitatibus exercitationem
                    minima quae enim. Consectetur optio quam voluptates quis inventore
                    quae aliquid unde!
                </p>
                <button>Click me</button>
            </Book>

            <Book
                author={firstBook.author}
                title={firstBook.title}
                img={firstBook.img}
            />
            <Book
                author={secondBook.author}
                title={secondBook.title}
                img={secondBook.img}
            />
            <Book
                author={thirdBook.author}
                title={thirdBook.title}
                img={thirdBook.img}
            />

            <Book
                author={firstBook.author}
                title={firstBook.title}
                img={firstBook.img}
            />
            <Book
                author={secondBook.author}
                title={secondBook.title}
                img={secondBook.img}
            />
            <Book
                author={thirdBook.author}
                title={thirdBook.title}
                img={thirdBook.img}
    /> */}
        </section>
    );
};

const Book = (props) => {                                       //Second Component

    const { title, author, img, children } = props;             //way 1

    //const Book = ({ title, author, img, children }) => {      //way 2

    //Special prop : children  = to render between the component tags

    console.log(props);
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2> {title} </h2>
            <h4> {author} </h4>
            {children}

            {/* <Image />
            <Title />
            <Author /> */}

            {/* 
            <p>{props.job}</p>
            <p>{props.title}</p>
            <p>{props.number}</p> */}
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

// component = function

// function Comp1() {
//     return (
//         <>
//             {/* <div>
//                 <h2>My First React Component</h2>
//                 <ul>
//                     <li>
//                         <a href="https://www.google.com/">Welcome to Google</a>
//                     </li>
//                 </ul>
//             </div>
//             <h2>
//                 This is React App
//             </h2> */}
//             <Person />
//             <Message />
//         </>
//     );
// }
// const Person = () => <h2>Aftab Bhadgaonkar</h2>;

// const Message = () => {
//     return <p>This i  Message </p>;
// }
// function Comp1() {
//     return React.createElement('h1', {}, 'Hello World');
// }

// const title = 'Rich Dad Poor Dad';
// const author = 'Robert T. Kiyosaki';
// const img = "https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL600_SR600,400_.jpg";

//inline CSS won't properly work for components there are some alternatives like :
// <h2 style={{ color: '#617d98', fontSize: '1.3rem', marginTop: '0.5rem' }}>Rich Dad Poor Dad</h2>;

// pass as object of outside and reference it : const InlineHeading = {
// color: '#617d98',
//     fontSize: '0.9rem'
//     }

// const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL600_SR600,400_.jpg" alt="No Image Found" />

// const Title = () => <h2>Rich Dad Poor Dad</h2>;

// const Author = () => {
//     const InlineHeading = {
//         color: '#617d98',
//         fontSize: '0.9rem'
//     }
//     return <h4 style={InlineHeading}>Robert T. Kiyosaki</h4>
// };
